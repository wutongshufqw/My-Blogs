import { Link, useActionData, useLoaderData, useTransition } from '@remix-run/react'
import React, { useState } from 'react'
import { FormField } from '~/components/form/form-field'
import { ActionFunction, json, LoaderFunction } from '@remix-run/node'
import { login } from '~/utils/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  return json({ redirectTo: new URL(request.url).searchParams.get('redirectTo') }) || '/'
}

export const action: ActionFunction = async ({ request }) => {
  const redirectTo = new URL(request.url).searchParams.get('redirectTo') || '/'
  const form = await request.formData()
  let email = form.get('email')
  let password = form.get('password')

  if (typeof email !== 'string' || typeof password !== 'string') {
    return json({ error: '不正确的数据格式', fields: { email, password } }, { status: 400 })
  }

  email = email as string
  password = password as string
  return await login({ email, password }, redirectTo)
}

export default function Login() {
  const redirectTo = useLoaderData().redirectTo
  const onLoad = Boolean(useTransition().submission)
  const actionData = useActionData()
  const [formError, setFormError] = useState(actionData?.error || '')
  const [formData, setFormData] = useState({
    email: actionData?.fields?.email || '',
    password: actionData?.fields?.password || ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(form => ({ ...form, [event.target.name]: event.target.value }))
    setFormError('')
  }
  return (
    <div>
      <div className='tabs justify-center'>
        <Link className='tab tab-bordered tab-active' to={'../login?redirectTo=' + redirectTo}>登录</Link>
        <Link className='tab tab-bordered' to={'../register?redirectTo=' + redirectTo}>注册</Link>
      </div>
      <form method='post'>
        <FormField
          htmlFor='email'
          label='账号'
          value={formData.email}
          onChange={handleInputChange}
          hasError={false}
        />
        <FormField
          htmlFor='password'
          label='密码'
          type='password'
          value={formData.password}
          onChange={handleInputChange}
          hasError={false}
        />
        <div className='text-xs font-semibold text-center tracking-wide text-red-500 w-full'>
          {formError}
        </div>
        <div className='form-control mt-6'>
          <button type='submit' className='btn btn-primary'
                  disabled={onLoad}>
            {onLoad ? '登录中...' : '登录'}
          </button>
        </div>
      </form>
    </div>
  )
}
