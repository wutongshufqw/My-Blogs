import { Outlet } from '@remix-run/react'
import { LoaderFunction, redirect } from '@remix-run/node'
import { requireUserId } from '~/utils/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request)
  if (userId) return redirect('/')
  return {}
}

export default function Account() {
  return (
    <div className='fixed top-16 bottom-0 hero bg-base-200 overflow-auto'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Welcome To Blog System !</h1>
          <p className='py-6'>Login in and have fun!</p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <main className='card-body'>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
