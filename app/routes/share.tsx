import { Outlet } from '@remix-run/react'
import { ActionFunction, json } from '@remix-run/node'
import { ShareServer } from '~/utils/share.server'
import { getUserId } from '~/utils/auth.server'

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const id = form.get('id') as string
  const userId = await getUserId(request) as number
  await ShareServer.deleteShare(parseInt(id), userId)
  const share = await ShareServer.getShares(userId)
  return json({share}, {status: 200})
}

export default function Share() {
  return (
    <Outlet />
  )
}
