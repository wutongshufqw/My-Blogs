import { Link } from '@remix-run/react'
import React from 'react'

interface FriendListProps {
  friendList: any[];
}

export default function FriendList({ friendList }: FriendListProps) {
  const list = friendList.map((item: any, index: number) => {
    return (
      <li className='w-full' key={index}>
        <Link to={'' + item.id}
              className='btn-ghost grid'>
          <span className='text-center'>{item.name}</span>
        </Link>
      </li>
    )
  })

  return (
    <ul className='menu p-4 overflow-y-auto w-52 text-base-content items-center'>
      {list}
    </ul>
  )
}
