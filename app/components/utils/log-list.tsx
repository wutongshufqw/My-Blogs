import React from 'react'
import { format } from 'date-fns'
import { Link } from '@remix-run/react'

interface LogListProps {
  logs: any[],
  readonly?: boolean
  share?: boolean
}

export default function LogList({ logs, readonly = true, share = true }: LogListProps) {
  const logList = logs.map((log, index) => {
    return (
      <Log key={index} log={log} readonly={readonly} share={share && log.share}/>
    )
  })
  return (
    <>
      {logList}
    </>
  )
}

interface LogProps {
  log: any,
  readonly: boolean,
  view?: boolean,
  share: boolean
}

export function Log({ log, readonly, view = false, share }: LogProps) {
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
      ${log.content}
    </body>
    </html>
  `
  return (
    <div className='flex flex-col w-full divide-y-2 divide-gray-200'>
      <div className='flex'>
        <div className='avatar justify-center'>
          <div
            className='m-4 w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center'>
            <img src='https://www.dmoe.cc/random.php' alt='avatar' />
          </div>
        </div>
        <div>
          <p className='text-2xl font-bold m-2 text-blue-600'>{log.user.name}</p>
          <p className='m-2 text-slate-400'>
            {'发表于' + format(new Date(log.updateTime.substring(0, log.updateTime.length - 2)), 'yyyy-MM-dd HH:mm:ss')}
          </p>
        </div>
        <div className='flex-auto' />
        {!view && (
          <div className='self-center px-2'>
            <Link className='btn btn-info w-24' to={`/logs/view/${log.id}`}>详情</Link>
          </div>
        )}
        {share && (
          <div className='self-center px-2'>
            <Link className='btn btn-accent w-24' to={`/share/new/${log.id}`}>分享</Link>
          </div>
        )}
        {!readonly && (
          <>
            <div className='self-center px-2'>
              <Link className='btn btn-success w-24' to={`/logs/edit/${log.id}`}>修改</Link>
            </div>
            <form method='POST' className='self-center px-2'>
              <input type='hidden' name='_action' value='delete' />
              <input type='hidden' name='id' value={log.id} />
              <button className='btn btn-error w-24'>删除</button>
            </form>
          </>
        )}
      </div>
      <div className='p-4'>
        <iframe src={'data:text/html;charset=utf-8,' + encodeURI(template)} className='h-96 w-full'>
        </iframe>
      </div>
    </div>
  )
}
