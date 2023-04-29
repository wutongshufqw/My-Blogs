import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import { getUserId } from '~/utils/auth.server'
import { LogServer } from '~/utils/log.server'
import { Link, useActionData, useLoaderData } from '@remix-run/react'
import React, { useState } from 'react'
import { Alert } from '~/components/alert'
import { MyEditor } from '~/components/utils/my-editor'

export const loader: LoaderFunction = async ({ request, params }) => {
  const { id } = params
  if (!id) return redirect('/logs')
  const logId = parseInt(id)
  const userId = await getUserId(request) as number
  const log = await LogServer.getLogById(logId, true, userId)
  if (!log) return redirect('/logs')
  return json({ log }, { status: 200 })
}

export const action: ActionFunction = async ({ request, params }) => {
  const { id } = params
  const logId = parseInt(id!)
  const userId = await getUserId(request) as number
  const form = await request.formData()
  const reply = form.get('reply')
  const share = form.get('share')
  const content = form.get('content')

  if (typeof reply !== 'string' || typeof share !== 'string' || typeof content !== 'string' || !logId)
    return json({ error: '错误的请求' }, { status: 400 })

  const replyBool = reply === '1'
  const shareBool = share === '1'
  const contentStr = content as string
  const res = await LogServer.updateLog(logId, { userId, reply: replyBool, share: shareBool, content: contentStr })
  if (res)
    return redirect('/logs')
  else
    return json({
      error: '修改失败',
      log: { reply: replyBool, share: shareBool, content: contentStr }
    }, { status: 500 })
}

export default function Edit() {
  const loaderData = useLoaderData()
  const actionData = useActionData()
  const [formData, setFormData] = useState({
    reply: actionData ? actionData.log.reply : loaderData.log.canReply,
    share: actionData ? actionData.log.share : loaderData.log.canShare,
    content: actionData ? actionData.log.content : loaderData.log.content
  })
  const handleContentChange = (content: string) => {
    setFormData({ ...formData, content: content })
  }
  const handleClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.checked })
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
            <input type='hidden' name='reply' value={formData.reply ? 1 : 0} />
            <input type='hidden' name='share' value={formData.share ? 1 : 0} />
            <input type='hidden' name='content' value={formData.content} />
            <button className='btn btn-secondary w-32' disabled={formData.content.length === 0}>修改</button>
          </div>
          <div className='flex px-4 py-4 gap-10 justify-center'>
            <div className='form-control'>
              <label className='ursor-pointer label'>
                <span className='font-bold underline decoration-sky-500 text-lg decoration-4'>
                  是否可以回复
                </span>
                <div className='w-10' />
                <input
                  type='checkbox'
                  name='reply'
                  className='toggle toggle-primary'
                  checked={formData.reply}
                  onClick={handleClick}
                  onChange={_ => _}
                />
              </label>
            </div>
            <div className='form-control'>
              <label className='ursor-pointer label'>
                <span className='font-bold underline decoration-pink-500 text-lg decoration-4'>
                  是否可以分享
                </span>
                <div className='w-10' />
                <input
                  type='checkbox'
                  name='share'
                  className='toggle toggle-primary'
                  checked={formData.share}
                  onClick={handleClick}
                  onChange={_ => _}
                />
              </label>
            </div>
          </div>
        </form>
        <MyEditor initValue={formData.content} onChange={handleContentChange} />
      </div>
    </div>
  )
}
