import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import { useActionData, useLoaderData } from '@remix-run/react'
import { FriendServer } from '~/utils/friend.server'
import { getUserId } from '~/utils/auth.server'
import React from 'react'

export const loader: LoaderFunction = async ({ request, params }) => {
  const { listId } = params
  const userId = await getUserId(request) as number
  const list = await FriendServer.getFriendsByListId(parseInt(listId!), userId)
  if (!list)
    return redirect('/friends')
  const user = await FriendServer.getUserList(userId)
  return json({ listId, list, user }, { status: 200 })
}

export const action: ActionFunction = async ({ request, params }) => {
  const { listId } = params
  const form = await request.formData()
  const id = form.get('id')
  const action = form.get('_action')
  const userId = await getUserId(request) as number
  switch (action) {
    case 'deleteGroup':
      const res = await FriendServer.deleteFriendGroup(parseInt(listId!))
      if (res) {
        return redirect('/friends')
      }
      return json({ error: '删除失败' }, { status: 500 })
    case 'delete':
      const res_d = await FriendServer.deleteFriend(parseInt(listId!), parseInt(id as string))
      if (res_d) {
        const list = await FriendServer.getFriendsByListId(parseInt(listId!), userId)
        const user = await FriendServer.getUserList(userId!)
        return json({ listId, list, user }, { status: 200 })
      }
      return json({ error: '删除失败' }, { status: 500 })
    case 'add':
      const res_a = await FriendServer.addFriend(parseInt(listId!), parseInt(id as string))
      if (res_a) {
        const list = await FriendServer.getFriendsByListId(parseInt(listId!), userId)
        const user = await FriendServer.getUserList(userId!)
        return json({ listId, list, user }, { status: 200 })
      }
      return json({ error: '添加失败' }, { status: 500 })
    default:
      return json({ error: '未知错误' }, { status: 500 })
  }
}

export default function ListId() {
  const loaderData = useLoaderData()
  const actionData = useActionData()
  const user = actionData?.user || loaderData.user
  const list = actionData?.list.friendGroup || loaderData.list.friendGroup
  return (
    <div className='flex grow'>
      <div className='h-full overflow-y-auto grow'>
        {loaderData.list.isGroup &&
          <div className='justify-center flex my-4'>
            <form method='post'>
              <input type='hidden' name='_action' value='deleteGroup' />
              <button className='btn btn-error'>删除分组</button>
            </form>
          </div>
        }
        <Friend friend={list} />
      </div>
      <div className='w-60 h-full overflow-y-auto'>
        <div className='text-center text-2xl text-lime-600 underline decoration-indigo-500 font-semibold'>用户列表</div>
        <User user={user} />
      </div>
    </div>
  )
}

interface FriendProps {
  friend: any[]
}

function Friend({ friend }: FriendProps) {
  const list = friend.map((item) => {
    return (
      <li key={item.friend.id} className='mx-4 my-2 shadow-2xl rounded-lg'>
        <div className='flex justify-around h-16 m-0'>
          <div className='avatar ml-2'>
            <div
              className='w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center'>
              <img src='https://www.dmoe.cc/random.php' alt='avatar' />
            </div>
          </div>
          <div className='self-end flex'>
            <div className='font-bold m-2 text-blue-600'>{item.friend.name}</div>
          </div>
          <div className='flex-auto'>
          </div>
        </div>
        <div className='flex justify-around'>
          <form method='post'>
            <input type='hidden' name='id' value={item.friend.id} />
            <input type='hidden' name='_action' value='delete' />
            <button className='btn btn-primary btn-sm mb-4'>删除好友</button>
          </form>
        </div>
      </li>
    )
  })
  return (
    <ul>
      {list}
    </ul>
  )
}

interface UserProps {
  user: any[]
}

function User({ user }: UserProps) {
  const list = user.map((item) => {
    return (
      <li key={item.id} className='mx-4 my-2'>
        <div className='flex justify-around h-16'>
          <div className='avatar ml-2'>
            <div
              className='w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center self-center'>
              <img src='https://www.dmoe.cc/random.php' alt='avatar' />
            </div>
          </div>
          <div className='self-end flex'>
            <div className='font-bold m-2 text-blue-600'>{item.name}</div>
          </div>
          <div className='flex-auto'>
          </div>
        </div>
        <div className='flex justify-around shadow-2xl rounded-lg bg-orange-100 ml-6 -mt-9'>
          <form method='post'>
            <input type='hidden' name='id' value={item.id} />
            <input type='hidden' name='_action' value='add' />
            <button className='btn btn-primary btn-sm mt-8 mb-4'>加为好友</button>
          </form>
        </div>
      </li>
    )
  })
  return (
    <ul>
      {list}
    </ul>
  )
}
