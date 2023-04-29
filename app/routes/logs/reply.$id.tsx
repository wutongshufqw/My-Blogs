import { Link, useActionData } from '@remix-run/react'
import React, { useState } from 'react'
import { MyEditor } from '~/components/utils/my-editor'
import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import { getUserId } from '~/utils/auth.server'
import { LogServer } from '~/utils/log.server'
import { Alert } from '~/components/alert'
import { ReplyServer } from '~/utils/reply.server'

export const loader: LoaderFunction = async ({ request, params }) => {
  const { id } = params
  const type = new URL(request.url).searchParams.get('type')
  const userId = await getUserId(request) as number
  let reply = false
  if (type === 'log')
    reply = await LogServer.verifyReply(parseInt(id!), userId) as boolean
  else if (type === 'reply')
    reply = await ReplyServer.verifyReply(parseInt(id!), userId) as boolean
  if (!reply)
    return redirect('/logs/view/' + id)
  return json({}, { status: 200 })
}

export const action: ActionFunction = async ({ request, params }) => {
  const { id } = params
  const type = new URL(request.url).searchParams.get('type') as string
  const form = await request.formData()
  const userId = await getUserId(request) as number
  const reply = form.get('reply')
  const content = form.get('content')

  if (typeof reply !== 'string' || typeof content !== 'string')
    return new Response('bad request', { status: 400 })

  const target = parseInt(id!)
  const replyBool = reply === '1'
  const contentStr = content as string
  const res = await ReplyServer.createReply(userId, type, target, replyBool, contentStr)
  if (res) {
    if (type === 'log')
      return redirect('/logs/view/' + id)
    else if (type === 'reply'){
      const logId = new URL(request.url).searchParams.get('log') as string
      return redirect('/logs/view/' + logId)
    }
    else
      return new Response('bad request', { status: 400 })
  }
  else
    return json({ error: '回复失败' }, { status: 500 })
}


export default function Reply() {
  const actionData = useActionData()
  const [formData, setFormData] = useState({
    reply: false,
    content: ''
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
            <input type='hidden' name='content' value={formData.content} />
            <button className='btn btn-secondary w-32' disabled={formData.content.length === 0}>提交</button>
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
                  onClick={handleClick}
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
