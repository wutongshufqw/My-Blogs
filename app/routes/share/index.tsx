import React from 'react'
import { Log } from '~/components/utils/log-list'
import { json, LoaderFunction } from '@remix-run/node'
import { getUserId } from '~/utils/auth.server'
import { ShareServer } from '~/utils/share.server'
import { Link, useLoaderData } from '@remix-run/react'
import { format } from 'date-fns'

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request) as number
  const share = await ShareServer.getShares(userId)
  return json({share}, {status: 200})
}

export default function Index() {
  const loaderData = useLoaderData()
  return (
    <div className='flex h-full'>
      <div className='min-h-full overflow-y-auto grow bg-amber-100'>
        <div className='fixed top-16 bottom-0 left-52 right-0 overflow-y-auto px-12'>
          <div className='bg-base-100 divide-y-2 divide-black'>
            <ShareList share={loaderData.share} />
          </div>
        </div>
      </div>
    </div>
  )
}

interface ShareListProps {
  share: any[]
}

function ShareList({share}: ShareListProps) {
  const list = share.map((item, index) => {
    return (
      <Share share={item} key={index} />
    )
  })
  return (
    <>
      {list}
    </>
  )
}

interface ShareProps {
  share: any
}

function Share({share}: ShareProps) {
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
      ${share.content}
    </body>
    </html>
  `
  return (
    <div className='bg-base-100 divide-y-2 divide-black'>
      <Log log={share.log} readonly={true} view={true} share={false}/>
      <div className='w-full divide-y-2 divide-gray-200'>
        <div className='h-16 flex'>
          <div className='self-center'>
            <p className='mx-4 text-2xl font-bold m-2 text-blue-600'>评论</p>
          </div>
          <div className='flex-auto' />
        </div>
        <div className='flex flex-col w-full divide-y-2 divide-gray-200'>
          <div className='flex'>
            <div className='avatar justify-center'>
              <div
                className='m-4 w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center'>
                <img src='https://www.dmoe.cc/random.php' alt='avatar' />
              </div>
            </div>
            <div>
              <div className='text-2xl font-bold m-2 text-blue-600'>{share.user.name}</div>
              <div className='m-2 text-slate-400'>
                {'分享于' + format(new Date(share.createTime.substring(0, share.createTime.length - 2)), 'yyyy-MM-dd HH:mm:ss')}
                <br/>
                {'最后评论于' + format(new Date(share.updateTime.substring(0, share.updateTime.length - 2)), 'yyyy-MM-dd HH:mm:ss')}
              </div>
            </div>
            <div className='flex-auto' />
            {share.self && (
              <>
                <div className='self-center px-2'>
                  <Link className='btn btn-success w-24' to={`/share/edit/${share.id}`}>修改</Link>
                </div>
                <form method='POST' className='self-center px-2'>
                  <input type='hidden' name='id' value={share.id} />
                  <button className='btn btn-error w-24'>删除</button>
                </form>
              </>
            )}
          </div>
          <div className='p-4'>
            <iframe src={'data:text/html;charset=utf-8,' + encodeURI(template)} className='h-48 w-full'>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
