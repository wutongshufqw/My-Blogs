import { Outlet } from '@remix-run/react'
import { ActionFunction, json } from '@remix-run/node'
import { getUserId } from '~/utils/auth.server'
import { LogServer } from '~/utils/log.server'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const action = form.get('_action')
  const userId = await getUserId(request)
  switch (action) {
    case 'delete':
      const logId = form.get('id') as string
      const res = await LogServer.deleteLogById(parseInt(logId), userId!)
      if (res)
        return json({ logs: await LogServer.getLogsByUserId(userId!) }, { status: 200 })
      else
        return json({ message: '删除失败' }, { status: 400 })
    default:
      return json({ message: '未知操作' }, { status: 400 })
  }
}

export default function Logs() {
  return (
    <Outlet />
  )
}
