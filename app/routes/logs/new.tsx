import { Link, useActionData } from '@remix-run/react'
import React, { useState } from 'react'
import { MyEditor } from '~/components/utils/my-editor'
import { ActionFunction, json, redirect } from '@remix-run/node'
import { getUserId } from '~/utils/auth.server'
import { LogServer } from '~/utils/log.server'
import { Alert } from '~/components/alert'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const userId = await getUserId(request) as number
  const reply = form.get('reply')
  const share = form.get('share')
  const content = form.get('content')

  if (typeof reply !== 'string' || typeof share !== 'string' || typeof content !== 'string')
    return new Response('bad request', { status: 400 })

  const replyBool = reply === '1'
  const shareBool = share === '1'
  const contentStr = content as string
  const res = await LogServer.createLog({ userId, reply: replyBool, share: shareBool, content: contentStr })
  if (res)
    return redirect('/logs')
  else
    return json({ error: '添加失败' }, { status: 500 })
}


export default function New() {
  const actionData = useActionData()
  const [formData, setFormData] = useState({
    reply: false,
    share: false,
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
            <input type='hidden' name='share' value={formData.share ? 1 : 0} />
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
