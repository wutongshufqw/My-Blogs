import React, { useRef, useState } from 'react'
import FriendList from '~/components/utils/friend-list'
import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import { getUserId } from '~/utils/auth.server'
import { FriendServer } from '~/utils/friend.server'
import { Outlet, useLoaderData } from '@remix-run/react'
import { FormField } from '~/components/form/form-field'

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request)
  const friendList = await FriendServer.getFriendsList(userId!)
  const listInitialId = friendList.find(friend => !friend.isGroup)!.id
  const paths = new URL(request.url).pathname.split('/')
  if (paths.length === 2)
    return redirect(`/friends/${listInitialId}`)
  return json({ friendList }, { status: 200 })
}

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request)
  const form = await request.formData()
  const name = form.get('name') as string
  const res = await FriendServer.addFriendGroup(userId!, name)
  if (res) {
    const friendList = await FriendServer.getFriendsList(userId!)
    return json({ friendList }, { status: 200 })
  }
  return json({ error: '添加失败' }, { status: 500 })
}

export default function Friends() {
  const loaderData = useLoaderData()
  const [formData, setFormData] = useState({
    name: ''
  })
  const add = useRef(true)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    add.current = formData.name !== ''
  }
  return (
    <div className='fixed top-16 bottom-0 left-52 right-0 flex'>
      <aside className='h-full overflow-y-auto w-52 bg-gradient-to-br from-violet-300 to-sky-300'>
        <FriendList friendList={loaderData.friendList} />
        <form method='post' action='/friends'>
          <div className='collapse collapse-plus bg-base-100 rounded-box bg-transparent'>
            <input type='checkbox' onClick={_ => {
              setFormData({ name: '' })
              add.current = true
            }} />
            <div className='collapse-title text-xl font-medium'>
              添加分组
            </div>
            <div className='collapse-content'>
              <FormField
                htmlFor='name'
                label='名称'
                value={formData.name}
                onChange={handleInputChange}
                hasError={false}
              />
              <div className='my-2 w-full'>
                <button className='btn btn-error w-full' disabled={add.current}>添加</button>
              </div>
            </div>
          </div>
        </form>
      </aside>
      <main className='h-full overflow-hidden flex grow'>
        <Outlet />
      </main>
    </div>
  )
}
