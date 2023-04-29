import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react'
import type { LinksFunction, LoaderFunction } from '@remix-run/node'
import { ActionFunction, json } from '@remix-run/node'

import styles from './styles/app.css'
import { Layout } from '~/components/layout'
import { logout, requireUserId } from '~/utils/auth.server'
import { AsideMenuBar } from '~/components/aside-menu-bar'

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request)
  return json({ login: !!userId }, { status: 200 })
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const action = form.get('_action')
  switch (action) {
    case 'logout':
      return logout(request)
    default:
      return null
  }
}

export default function App() {
  const loaderData = useLoaderData()
  return (
    <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <Meta />
      <Links />
      <title>
        Blog System
      </title>
    </head>
    <body className='overflow-hidden'>
    <Layout login={loaderData.login}>
      {loaderData.login &&
        <div className='w-full h-full flex mt-16'>
          <aside className='w-52 h-full bg-base-200 fixed'>
            <AsideMenuBar
              menus={[
                { to: '', name: '首页' },
                { to: 'friends', name: '好友' },
                { to: 'logs', name: '日志' },
                { to: 'share', name: '分享' },
                { to: `share/self`, name: '我的分享' }
              ]}
            />
          </aside>
          <main className='w-full ml-52'>
            <Outlet />
          </main>
        </div>
      }
      {!loaderData.login && <Outlet />}
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </Layout>
    </body>
    </html>
  )
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles }
  ]
}
