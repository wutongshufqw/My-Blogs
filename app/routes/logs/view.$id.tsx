import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { LogServer } from '~/utils/log.server'
import { Log } from '~/components/utils/log-list'
import React from 'react'
import { ReplyServer } from '~/utils/reply.server'
import { format } from 'date-fns'
import { getUserId } from '~/utils/auth.server'

export const loader: LoaderFunction = async ({ request, params }) => {
  const { id } = params
  const logId = parseInt(id!)
  const userId = await getUserId(request) as number
  const log = await LogServer.getLogById(logId, false, userId)
  if (!log)
    return redirect('/')
  const reply = await ReplyServer.getReplyByLogId(logId, userId)
  return json({ log, reply }, { status: 200 })
}

export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData()
  const id = form.get('id') as string
  const userId = await getUserId(request) as number

  const res = await ReplyServer.deleteReply(parseInt(id!), userId)
  if (res) {
    const { id } = params
    const logId = parseInt(id!)
    const log = await LogServer.getLogById(logId, false, userId)
    if (!log)
      return redirect('/')
    const reply = await ReplyServer.getReplyByLogId(logId, userId)
    return json({ log, reply }, { status: 200 })
  }
  return json({ message: '删除失败' }, { status: 400 })
}

export default function View() {
  const loaderData = useLoaderData()
  return (
    <div className='flex h-full'>
      <div className='min-h-full overflow-y-auto grow bg-amber-100'>
        <div className='flex px-12 py-4 w-full'>
          <Link className='btn btn-accent w-32' to='/'>返回</Link>
          <div className='flex-grow' />
        </div>
        <div className='fixed top-36 bottom-0 left-52 right-0 overflow-y-auto px-12'>
          <div className='bg-base-100 divide-y-2 divide-black'>
            <Log log={loaderData.log} readonly={true} view={true} share={loaderData.log.share}/>
            <LogReply reply={loaderData.reply} canReply={loaderData.log.reply} id={loaderData.log.id} />
          </div>
        </div>
      </div>
    </div>
  )
}

interface LogReplyProps {
  reply: any[],
  canReply: boolean,
  id: number
}

function LogReply({ reply, canReply, id }: LogReplyProps) {
  const replyList = reply.map((item, index) => {
    return <Reply reply={item} id={id} key={item.id} />
  })
  return (
    <div className='w-full divide-y-2 divide-gray-200'>
      <div className='h-16 flex'>
        <div className='self-center'>
          <p className='mx-4 text-2xl font-bold m-2 text-blue-600'>回复</p>
        </div>
        <div className='flex-auto' />
        {canReply &&
          <div className='self-center'>
            <Link className='mx-4 btn btn-warning w-24' to={`/logs/reply/${id}?type=log`}>回复</Link>
          </div>
        }
      </div>
      {replyList}
    </div>
  )
}

interface ReplyProps {
  reply: any,
  id: number
}

function Reply({ reply, id }: ReplyProps) {
  let childReplyList: any[] = []
  const getChildReply = (reply: any) => {
    if (reply.other_reply?.length > 0) {
      reply.other_reply.forEach((item: any) => {
        childReplyList.push(<ReplyChild reply={item} parent={reply.id} id={id} key={item.id} />)
        getChildReply(item)
      })
    }
  }
  getChildReply(reply)
  const template = `
    <html lang='ch'>
    <head>
      <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
      <link rel='stylesheet' type='text/css' id='mce-u0' crossorigin='anonymous' referrerpolicy='origin' href='https://cdn.tiny.cloud/1/2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b/tinymce/6.4.1-16/skins/ui/oxide/content.min.css'>
      <link rel='stylesheet' type='text/css' id='mce-u1' crossorigin='anonymous' referrerpolicy='origin' href='https://cdn.tiny.cloud/1/2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b/tinymce/6.4.1-16/skins/content/default/content.min.css'>
      <style type='text/css'>
        body { 
          font-family:Helvetica,Arial,sans-serif; 
          font-size:14px 
        }
      </style>
      <title></title>
    </head>
    <body id='tinymce' class='mce-content-body' data-id='content' aria-label='富文本区域。 按ALT-0寻求帮助。' contenteditable='true' spellcheck='false'>
      ${reply.content}
    </body>
    </html>
  `
  return (
    <>
      <div className='flex'>
        <div className='avatar justify-center'>
          <div
            className='m-4 w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center'>
            <img src='https://www.dmoe.cc/random.php' alt='avatar' />
          </div>
        </div>
        <div>
          <div className='text-2xl font-bold m-2 text-blue-600'>{reply.user.name}</div>
          <div className='m-2 text-slate-400'>
            发表于{format(new Date(reply.updateTime.substring(0, reply.updateTime.length - 2)), 'yyyy-MM-dd HH:mm:ss')}
            &nbsp;&nbsp;&nbsp;&nbsp;rid:&nbsp;{reply.id}
          </div>
        </div>
        <div className='flex-auto' />
        {reply.reply &&
          <div className='self-center'>
            <Link className='mx-4 btn btn-warning w-24' to={`/logs/reply/${reply.id}?type=reply&log=${id}`}>回复</Link>
          </div>
        }
        {reply.self &&
          <>
            <div className='self-center'>
              <Link className='mx-4 btn btn-success w-24' to={`/logs/edit-reply/${reply.id}?log=${id}`}>修改</Link>
            </div>
            <form method='POST' className='self-center'>
              <input type='hidden' name='id' value={reply.id} />
              <button className='mx-4 btn btn-error w-24'>删除</button>
            </form>
          </>
        }
      </div>
      <div className='p-4'>
        <iframe src={'data:text/html;charset=utf-8,' + encodeURI(template)} className='h-48 w-full'>
        </iframe>
      </div>
      {reply.other_reply.length > 0 && (
        <div className='w-full pl-8 divide-y-2 divide-gray-200'>
          {childReplyList}
        </div>
      )}
    </>
  )
}

interface ReplyChildProps {
  reply: any
  parent: number,
  id: number
}

function ReplyChild({ reply, parent, id }: ReplyChildProps) {
  const template = `
    <html lang='ch'>
    <head>
      <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
      <link rel='stylesheet' type='text/css' id='mce-u0' crossorigin='anonymous' referrerpolicy='origin' href='https://cdn.tiny.cloud/1/2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b/tinymce/6.4.1-16/skins/ui/oxide/content.min.css'>
      <link rel='stylesheet' type='text/css' id='mce-u1' crossorigin='anonymous' referrerpolicy='origin' href='https://cdn.tiny.cloud/1/2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b/tinymce/6.4.1-16/skins/content/default/content.min.css'>
      <style type='text/css'>
        body {
          font-family:Helvetica,Arial,sans-serif;
          font-size:14px
        }
      </style>
      <title></title>
    </head>
    <body id='tinymce' class='mce-content-body' data-id='content' aria-label='富文本区域。 按ALT-0寻求帮助。' contenteditable='true' spellcheck='false'>
      ${reply.content}
    </body>
    </html>
  `

  return (
    <div className='w-full border-l-2 border-l-gray-200 divide-y-2 divide-gray-200'>
      <div className='flex'>
        <div className='avatar justify-center'>
          <div
            className='m-4 w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center'>
            <img src='https://www.dmoe.cc/random.php' alt='avatar' />
          </div>
        </div>
        <div>
          <div className='text-2xl font-bold m-2 text-blue-600'>{reply.user.name}</div>
          <div className='m-2 text-slate-400'>
            发表于{format(new Date(reply.updateTime.substring(0, reply.updateTime.length - 2)), 'yyyy-MM-dd HH:mm:ss')}
            &nbsp;&nbsp;&nbsp;&nbsp;rid:&nbsp;{reply.id}&nbsp;-&gt;&nbsp;rid:&nbsp;{parent}
          </div>
        </div>
        <div className='flex-auto' />
        {reply.reply &&
          <div className='self-center'>
            <Link className='mx-4 btn btn-warning w-24' to={`/logs/reply/${reply.id}?type=reply&log=${id}`}>回复</Link>
          </div>
        }
        {reply.self &&
          <>
            <div className='self-center'>
              <Link className='mx-4 btn btn-success w-24' to={`/logs/edit-reply/${reply.id}?log=${id}`}>修改</Link>
            </div>
            <form method='POST' className='self-center'>
              <input type='hidden' name='id' value={reply.id} />
              <button className='mx-4 btn btn-error w-24'>删除</button>
            </form>
          </>
        }
      </div>
      <div className='p-4'>
        <iframe src={'data:text/html;charset=utf-8,' + encodeURI(template)} className='h-48 w-full'>
        </iframe>
      </div>
    </div>
  )
}
