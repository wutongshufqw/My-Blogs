import { Link, useActionData, useLoaderData } from '@remix-run/react'
import React, { useState } from 'react'
import { MyEditor } from '~/components/utils/my-editor'
import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import { getUserId } from '~/utils/auth.server'
import { LogServer } from '~/utils/log.server'
import { Alert } from '~/components/alert'
import { Log } from '~/components/utils/log-list'
import { ShareServer } from '~/utils/share.server'

export const loader: LoaderFunction = async ({ request, params }) => {
  const { id } = params
  const userId = await getUserId(request) as number
  let reply = await LogServer.verifyShare(parseInt(id!), userId) as boolean
  if (!reply)
    return redirect('/logs/view/' + id)
  const log = await LogServer.getLogById(parseInt(id!), false, userId)
  return json({log}, { status: 200 })
}

export const action: ActionFunction = async ({ request, params }) => {
  const { id } = params
  const form = await request.formData()
  const userId = await getUserId(request) as number
  const content = form.get('content')

  if (typeof content !== 'string')
    return new Response('bad request', { status: 400 })

  const log = parseInt(id!)
  const contentStr = content as string
  const res = await ShareServer.createShare({ userId, logId: log, content: contentStr })
  if (res) {
    // return redirect('/share/view/' + id)
    return redirect('/share')
  }
  else
    return json({ error: '分享失败' }, { status: 500 })
}


export default function New() {
  const loaderData = useLoaderData()
  const actionData = useActionData()
  const [formData, setFormData] = useState({
    content: ''
  })
  const handleContentChange = (content: string) => {
    setFormData({ ...formData, content: content })
  }
  return (
    <div className='flex h-full'>
      <div className='min-h-full overflow-y-auto grow bg-amber-100'>
        <form method='POST'>
          <div className='justify-center flex'>
            {actionData?.error &&
              <Alert className='w-96 my-2' message={actionData.error} type='error' timeout={2000} />}
          </div>
          <div className='flex px-4 py-4 w-full'>
            <Link className='btn btn-accent w-32' to='../'>返回</Link>
            <div className='flex-grow' />
            <input type='hidden' name='content' value={formData.content} />
            <button className='btn btn-secondary w-32' disabled={formData.content.length === 0}>提交</button>
          </div>
        </form>
        <div className='fixed top-36 bottom-0 left-52 right-0 overflow-y-auto px-12'>
          <div className='bg-base-100 divide-y-2 divide-black mb-14'>
            <Log log={loaderData.log} readonly={true} view={true} share={false}/>
            <div className='w-full divide-y-2 divide-gray-200'>
              <div className='h-16 flex'>
                <div className='self-center'>
                  <p className='mx-4 text-2xl font-bold m-2 text-blue-600'>评论</p>
                </div>
                <div className='flex-auto' />
              </div>
              <MyEditor initValue={formData.content} onChange={handleContentChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
