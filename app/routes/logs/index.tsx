import React from 'react'
import { Link, useLoaderData } from '@remix-run/react'
import LogList from '~/components/utils/log-list'
import { json, LoaderFunction } from '@remix-run/node'
import { getUserId } from '~/utils/auth.server'
import { LogServer } from '~/utils/log.server'

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request)
  const res = await LogServer.getLogsByUserId(userId!)
  return json({ logs: res }, { status: 200 })
}

export default function Index() {
  const loaderData = useLoaderData()
  return (
    <div className='flex h-full'>
      <div className='min-h-full overflow-y-auto grow bg-amber-100'>
        <div className='fixed left-52 right-0 py-4 z-40 px-12 flex justify-center'>
          <Link className='btn btn-primary w-32' to='new'>发表日志</Link>
        </div>
        <div className='fixed top-36 bottom-0 left-52 right-0 overflow-y-auto px-12'>
          <div className='bg-base-100 divide-y-2 divide-black'>
            <LogList logs={loaderData.logs} readonly={false} share={false}/>
          </div>
        </div>
      </div>
    </div>
  )
}
