import { ActionFunction, json, LoaderFunction } from '@remix-run/node'
import { getUser } from '~/utils/auth.server'
import { Link, useActionData, useLoaderData } from '@remix-run/react'
import React, { useRef, useState } from 'react'
import { FormField } from '~/components/form/form-field'
import { RadioField } from '~/components/form/radio-field'
import { format } from 'date-fns'
import { UserValidator } from '~/utils/validators.server'
import { UserServer } from '~/utils/user.server'
import { Alert } from '~/components/alert'
import { Emails } from '~/components/utils/emails'

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)
  return json({ user }, { status: 200 })
}

export const action: ActionFunction = async ({ request }) => {
  let user = await getUser(request)
  const form = await request.formData()
  const action = form.get('_action')
  switch (action) {
    case 'edit_info':
      return EditInfo(user, form)
    case 'edit_email':
      return EditEmail(user, form)
    default:
      return json({ error: '不支持的操作' }, { status: 400 })
  }
}

async function EditInfo(user: any, form: FormData) {
  const name = form.get('name')
  const gender = form.get('gender')
  const birthday_f = form.get('birthday')
  const address = form.get('address')

  if (typeof name !== 'string' || typeof gender !== 'string' || typeof birthday_f !== 'string' ||
    typeof address !== 'string') {
    return json({ error: '不正确的数据格式', fields: { name, gender, birthday_f }, user }, { status: 400 })
  }

  let errors = {
    name: UserValidator.validateName(name),
    gender: UserValidator.validateGender(gender),
    birthday: UserValidator.validateBirthday(birthday_f)
  }

  if (Object.values(errors).some(Boolean)) {
    return json({ errors, fields: { name, gender, birthday_f }, user }, { status: 400 })
  }

  const birthday = new Date(birthday_f)
  const res = await UserServer.updateUser(user!.id, name, gender, birthday, address)
  if (!res) {
    return json({ error: '更新失败', user }, { status: 400 })
  }
  return json({ user: res, save: true }, { status: 200 })
}

async function EditEmail(user: any, form: FormData) {
  const temp = form.get('emails')
  const emails = JSON.parse(temp as string)
  if (typeof emails !== 'object' || !Array.isArray(emails)) {
    return json({ error: '不正确的数据格式', fields: { emails }, user }, { status: 400 })
  }

  const email_err = []
  let has_err = false
  for (let i = 0; i < emails.length; i++) {
    const email = emails[i]
    let err: string | undefined
    if (email.id) {
      err = await UserValidator.validateEmail(email.email, false, true, user.id)
    } else {
      err = await UserValidator.validateEmail(email.email, true)
    }
    if (err) {
      email_err.push(err)
      has_err = true
    } else {
      email_err.push('')
    }
  }
  if (has_err) {
    return json({ errors: { emails: email_err }, fields: { email: emails }, user }, { status: 400 })
  }
  const res = await UserServer.updateEmails(user!.id, emails)
  if (!res) {
    return json({ error_e: '更新失败', user }, { status: 400 })
  }
  return json({ user: res, save_e: true }, { status: 200 })
}

export default function Info() {
  const loaderData = useLoaderData()
  const actionData = useActionData()
  const edit = useRef(
    !!actionData?.errors?.name || !!actionData?.errors?.gender || !!actionData?.errors?.birthday ||
    !!actionData?.errors?.email || !!actionData?.error
  )
  const edit1 = useRef(!!actionData?.errors?.emails || !!actionData?.error_e)
  const add = useRef(true)
  const [formData, setFormData] = useState(() => {
    const user = actionData ? actionData.user : loaderData.user
    const fields = actionData?.fields
    const new_email = JSON.parse(JSON.stringify(fields?.email || user.email))
    return {
      name: fields?.name || user.name,
      gender: fields?.gender || user.gender,
      birthday: format(new Date(fields?.birthday || user.birthday), 'yyyy-MM-dd'),
      address: fields?.address || user.address,
      email: new_email
    }
  })
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(form => ({ ...form, [event.target.name]: event.target.value }))
    edit.current = true
  }
  const handleEmailChange = (value: any) => {
    setFormData(form => ({ ...form, email: value }))
    edit1.current = true
    if (formData.email.at(-1).email !== '')
      add.current = true
  }
  const resetForm = () => {
    let user = actionData ? actionData.user : loaderData.user
    setFormData({
      name: user.name,
      gender: user.gender,
      birthday: format(new Date(user.birthday), 'yyyy-MM-dd'),
      address: user.address,
      email: user.email
    })
    edit.current = false
  }
  const addEmail = () => {
    formData.email.push({ id: undefined, email: '', isMain: false })
    setFormData(form => ({ ...form }))
    add.current = false
  }
  const resetEmails = () => {
    const user = actionData ? actionData.user : loaderData.user
    const new_email = JSON.parse(JSON.stringify(user.email))
    setFormData(form => ({ ...form, email: new_email }))
    edit1.current = false
  }
  return (
    <div className='w-full'>
      <div className='tabs justify-center'>
        <Link className='tab tab-bordered tab-active' to='../info'>个人信息</Link>
        <Link className='tab tab-bordered' to='../experience'>个人经历</Link>
        <Link className='tab tab-bordered' to='../password'>修改密码</Link>
      </div>
      <div className='w-full'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex-col w-full'>
            <div className='flex justify-end'>
              <div className='card shrink max-w-sm shadow-2xl bg-base-100 mt-2 mb-16 w-96'>
                <form method='POST' className='card-body'>
                  {actionData?.error && <Alert message={actionData.error} type='error' timeout={2000} />}
                  {actionData?.save && <Alert message='保存成功' type='success' timeout={2000} />}
                  <FormField
                    htmlFor='name'
                    label='姓名'
                    value={formData.name}
                    onChange={handleInputChange}
                    error={actionData?.errors?.email}
                  />
                  <RadioField
                    htmlFor='gender'
                    label='性别'
                    value={formData.gender}
                    args={[
                      { label: '男', value: '男' },
                      { label: '女', value: '女' }
                    ]}
                    onChange={handleInputChange}
                    error={actionData?.errors?.gender}
                  />
                  <FormField
                    htmlFor='birthday'
                    label='生日'
                    type='date'
                    value={formData.birthday}
                    onChange={handleInputChange}
                    error={actionData?.errors?.birthday}
                  />
                  <FormField
                    htmlFor='address'
                    label='地址'
                    type='textarea'
                    value={formData.address}
                    onChange={handleInputChange}
                    error={actionData?.errors?.address}
                  />
                  {edit.current &&
                    <div className='grid grid-cols-2 gap-4'>
                      <button className='btn btn-primary' name='_action' value='edit_info'>保存</button>
                      <button className='btn btn-secondary' type='reset' onClick={resetForm}>撤消</button>
                    </div>
                  }
                </form>
              </div>
            </div>
          </div>
          <div className='flex-col w-full justify-start'>
            <div className='card shrink max-w-sm shadow-2xl bg-base-100 my-2 w-96'>
              <Emails
                emails={formData.email}
                htmlFor='email'
                label='邮箱'
                onChange={handleEmailChange}
                error={actionData?.errors?.emails}
                success={actionData?.save_e}
                err={actionData?.error_e}
              >
                <input type='hidden' name='emails' value={JSON.stringify(formData.email)} />
                <button className='btn btn-accent' type='button' onClick={addEmail} disabled={!add.current}>新增
                </button>
                {edit1.current &&
                  <div className='grid grid-cols-2 gap-4'>
                    <button className='btn btn-primary' name='_action' value='edit_email'>保存</button>
                    <button className='btn btn-secondary' type='reset' onClick={resetEmails}>撤消</button>
                  </div>
                }
              </Emails>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
