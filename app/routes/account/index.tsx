import { Link, useLoaderData } from '@remix-run/react'
import { json, LoaderFunction } from '@remix-run/node'

export const loader: LoaderFunction = async ({ request }) => {
  const redirectTo = new URL(request.url).searchParams.get('redirectTo') || '/'
  return json({ redirectTo })
}

export default function Index() {
  const redirectTo = useLoaderData().redirectTo
  return (
    <>
      <img src='https://www.fengqiwu.xyz/wp-content/uploads/2023/03/%E6%98%9F%E6%9E%81.jpg' alt='account' />
      <div className='grid grid-cols-2 gap-4'>
        <Link to={'login?redirectTo=' + redirectTo} className='btn btn-primary'>登录</Link>
        <Link to={'register?redirectTo=' + redirectTo} className='btn btn-secondary'>注册</Link>
      </div>
    </>
  )
}
