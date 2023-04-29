import React from 'react'
import { useLoaderData } from '@remix-run/react'
import LogList from '~/components/utils/log-list'
import { json, LoaderFunction } from '@remix-run/node'
import { LogServer } from '~/utils/log.server'
import { getUserId } from '~/utils/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request) as number
  const res = await LogServer.getLogs(userId)
  return json({ logs: res }, { status: 200 })
}

export default function Index() {
  const loaderData = useLoaderData()
  return (
    <div className='flex h-full'>
      <div className='min-h-full overflow-y-auto grow'>
        <div className='fixed top-16 bottom-0 left-52 right-0 overflow-y-auto px-12 bg-amber-100'>
          <div className='bg-base-100 divide-y-2 divide-black'>
            <LogList logs={loaderData.logs} />
          </div>
        </div>
      </div>
    </div>
  )
}
