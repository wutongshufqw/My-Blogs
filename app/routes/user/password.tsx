import { Link, useActionData } from '@remix-run/react'
import React, { useRef, useState } from 'react'
import { FormField } from '~/components/form/form-field'
import { ActionFunction, json } from '@remix-run/node'
import { requireUserId } from '~/utils/auth.server'
import { UserValidator } from '~/utils/validators.server'
import { UserServer } from '~/utils/user.server'
import { Alert } from '~/components/alert'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const id = await requireUserId(request)
  const password = form.get('password')
  const new_password = form.get('new_password1')

  if (typeof id !== 'number' || typeof password !== 'string' || typeof new_password !== 'string') {
    return json({ error: '不正确的数据格式', fields: { password, new_password } }, { status: 400 })
  }

  let errors = {
    password: await UserValidator.validatePassword(password, true, id!)
  }

  if (Object.values(errors).some(Boolean)) {
    return json({ errors, fields: { password, new_password } }, { status: 400 })
  }

  const res = await UserServer.updatePassword(id, new_password)
  if (!res) {
    return json({ error: '更新失败' }, { status: 400 })
  }
  return json({ save: true }, { status: 200 })
}

export default function Password() {
  const actionData = useActionData()
  const submit = useRef(false)
  const [errors, setErrors] = useState({
    password: actionData?.errors?.password || '',
    new_password1: '',
    new_password2: ''
  })
  const [formData, setFormData] = useState(() => {
    return {
      password: actionData?.fields?.password || '',
      new_password1: actionData?.fields?.new_password || '',
      new_password2: actionData?.fields?.new_password || ''
    }
  })
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(form => ({ ...form, [event.target.name]: event.target.value }))
  }
  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'password':
        if (formData.password.length == 0) {
          setErrors(errors => ({ ...errors, password: '请输入原密码' }))
        } else {
          setErrors(errors => ({ ...errors, password: '' }))
        }
        break
      case 'new_password1':
        if (formData.new_password1.length < 8) {
          setErrors(errors => ({ ...errors, new_password1: '密码长度不能小于8位' }))
        } else if (formData.new_password1.length >= 8 && formData.new_password1.length < 16 && !formData.new_password1.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/)) {
          setErrors(errors => ({ ...errors, new_password1: '密码必须包含大小写字母和数字' }))
        } else if (formData.new_password1.length >= 16) {
          setErrors(errors => ({ ...errors, new_password1: '密码长度不能超过16位' }))
        } else if (formData.new_password2.length > 0 && formData.new_password1 !== formData.new_password2) {
          setErrors(errors => ({ ...errors, new_password1: '', new_password2: '两次输入的密码不一致' }))
        } else {
          setErrors(errors => ({ ...errors, new_password1: '' }))
        }
        break
      case 'new_password2':
        if (formData.new_password1.length == 0) {
          setErrors(errors => ({ ...errors, new_password2: '请再次输入密码' }))
        } else if (formData.new_password1 !== formData.new_password2) {
          setErrors(errors => ({ ...errors, new_password2: '两次输入的密码不一致' }))
        } else {
          setErrors(errors => ({ ...errors, new_password2: '' }))
        }
        break
      default:
        break
    }
    submit.current = Object.values(errors).every(error => error == '') && Object.values(formData).every(value => value != '')
  }
  return (
    <div className='w-full'>
      <div className='tabs justify-center'>
        <Link className='tab tab-bordered' to='../info'>个人信息</Link>
        <Link className='tab tab-bordered' to='../experience'>个人经历</Link>
        <Link className='tab tab-bordered tab-active' to='../password'>修改密码</Link>
      </div>
      <div className='w-full flex justify-center'>
        <div className='card shrink max-w-sm shadow-2xl bg-base-100 mt-2 mb-14 w-96'>
          <form method='POST' className='card-body'>
            {actionData?.error && <Alert message={actionData.error} type='error' timeout={2000} />}
            {actionData?.save && <Alert message='修改成功' type='success' timeout={2000} />}
            <FormField
              htmlFor='password'
              label='旧密码'
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              type='password'
              error={errors.password}
            />
            <FormField
              htmlFor='new_password1'
              label='新密码'
              value={formData.new_password1}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              type='password'
              error={errors.new_password1}
              selfControl={true}
            />
            <FormField
              htmlFor='new_password2'
              label='再次输入新密码'
              value={formData.new_password2}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              type='password'
              error={errors.new_password2}
              selfControl={true}
            />
            <button className='btn btn-accent' disabled={!submit.current}>保存</button>
          </form>
        </div>
      </div>
    </div>
  )
}
