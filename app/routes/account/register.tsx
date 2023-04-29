// noinspection JSUnusedGlobalSymbols
import { Link, useActionData, useLoaderData, useTransition } from '@remix-run/react'
import { FormField } from '~/components/form/form-field'
import React, { useState } from 'react'
import { RadioField } from '~/components/form/radio-field'
import { ActionFunction, json, LoaderFunction } from '@remix-run/node'
import { UserValidator } from '~/utils/validators.server'
import { register } from '~/utils/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  return json({ redirectTo: new URL(request.url).searchParams.get('redirectTo') }) || '/'
}

export const action: ActionFunction = async ({ request }) => {
  const redirectTo = new URL(request.url).searchParams.get('redirectTo') || '/'
  const form = await request.formData()
  let email = form.get('email')
  let name = form.get('name')
  let gender = form.get('gender')
  const birthday_f = form.get('birthday')
  let password = form.get('password')

  if (typeof email !== 'string' || typeof name !== 'string' || typeof gender !== 'string' ||
    typeof password !== 'string' || typeof birthday_f !== 'string') {
    return json({ error: '不正确的数据格式', fields: { email, name, gender, birthday_f, password } }, { status: 400 })
  }

  let errors = {
    email: await UserValidator.validateEmail(email, true),
    name: UserValidator.validateName(name),
    gender: UserValidator.validateGender(gender),
    birthday: UserValidator.validateBirthday(birthday_f),
    password: await UserValidator.validatePassword(password)
  }

  if (Object.values(errors).some(Boolean)) {
    return json({ errors, fields: { email, name, gender, birthday_f, password } }, { status: 400 })
  }

  email = email as string
  name = name as string
  gender = gender as string
  password = password as string
  const birthday = new Date(birthday_f)
  return await register({ email, name, gender, birthday, password }, redirectTo)
}

export default function Register() {
  const redirectTo = useLoaderData().redirectTo
  const onLoad = Boolean(useTransition().submission)
  const actionData = useActionData()
  const [errors, setErrors] = useState(actionData?.errors || {})
  const [formData, setFormData] = useState({
    email: actionData?.fields?.email || '',
    name: actionData?.fields?.name || '',
    gender: actionData?.fields?.gender || '',
    birthday: actionData?.fields?.birthday_f || '',
    password: actionData?.fields?.password || ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(form => ({ ...form, [event.target.name]: event.target.value }))
    setErrors((errors: any) => ({ ...errors, [event.target.name]: '' }))
  }
  return (
    <div>
      <div className='tabs justify-center'>
        <Link className='tab tab-bordered' to={'../login?redirectTo=' + redirectTo}>登录</Link>
        <Link className='tab tab-bordered tab-active' to={'../register?redirectTo=' + redirectTo}>注册</Link>
      </div>
      <form method='post'>
        <FormField
          htmlFor='email'
          label='邮箱'
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
        />
        <FormField
          htmlFor='password'
          type='password'
          label='密码'
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
        />
        <FormField
          htmlFor='name'
          label='姓名'
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
        />
        <RadioField
          htmlFor='gender'
          label='性别'
          value={formData.gender}
          onChange={handleInputChange}
          args={[
            { label: '男', value: '男' },
            { label: '女', value: '女' }
          ]}
          error={errors.gender}
        />
        <FormField
          type='date'
          htmlFor='birthday'
          label='出生日期'
          value={formData.birthday}
          onChange={handleInputChange}
          error={errors.birthday}
        />
        <div className='form-control mt-6'>
          <button type='submit' className='btn btn-primary'
                  disabled={onLoad}>
            {onLoad ? '注册中...' : '注册'}
          </button>
        </div>
      </form>
    </div>
  )
}
