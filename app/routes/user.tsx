import { json, LoaderFunction } from '@remix-run/node'
import { getUser } from '~/utils/auth.server'
import { Outlet, useLoaderData } from '@remix-run/react'
import React from 'react'

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)
  const path = new URL(request.url).pathname
  return json({ user, path }, { status: 200 })
}

export default function User() {
  const loaderData = useLoaderData()
  const user = loaderData.user
  return (
    <div className='fixed top-16 bottom-0 left-52 right-0 overflow-y-auto'>
      <div className='min-h-full'>
        <div className='flex h-32 m-0'>
          <div className='avatar w-32 h-32 justify-center'>
            <div
              className='w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center'>
              <img src='https://www.dmoe.cc/random.php' alt='avatar' />
            </div>
          </div>
          <div className='self-end flex'>
            <div className='text-3xl font-bold m-2 text-blue-600'>{user.name}</div>
            <div className='badge badge-secondary self-center'>LV6</div>
          </div>
          <div className='flex-auto'></div>
        </div>
        <div className=''>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
