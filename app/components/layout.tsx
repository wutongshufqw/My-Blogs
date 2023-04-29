import { Link } from '@remix-run/react'
import React from 'react'

interface LayoutProps {
  children?: React.ReactNode
  login?: boolean
}

export function Layout({ children, login = false }: LayoutProps) {
  // 顶部栏layout组件抽取与封装
  return (
    <div className='flex flex-col h-screen'>
      <div className='h-16 gap-2 px-4 py-2 z-50 fixed w-full flex bg-base-100'>
        <Link className='flex-0 btn btn-ghost px-2 text-3xl' to='/'>
          <span className='lowercase text-primary'>Blog</span>
          <span className='lowercase'>System</span>
        </Link>
        {login &&
          <div className='dropdown dropdown-end fixed top-2 right-4'>
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <img src='https://www.dmoe.cc/random.php' alt='头像' />
              </div>
            </label>
            <form action='/' method='POST'>
              <ul tabIndex={0}
                  className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                <li key={0}>
                  <Link to='user/info' className='justify-between'>我的</Link>
                </li>
                <li key={1}>
                  <Link to='#'>设置</Link>
                </li>
                <li key={2}>
                  <button type='submit' name='_action' value='logout'>退出</button>
                </li>
              </ul>
            </form>
          </div>
        }
      </div>
      <div className='flex flex-grow z-40'>
        {children}
      </div>
    </div>
  )

}
