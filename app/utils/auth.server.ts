import { LoginForm, RegisterForm } from '~/utils/type.server'
import { UserServer } from '~/utils/user.server'
import { createCookieSessionStorage, json, redirect } from '@remix-run/node'
import { prisma } from '~/utils/prisma.erver'

export async function register(user: RegisterForm, redirectTo: string = '/') {
  const newUser = await UserServer.createUser(user)
  if (!newUser) {
    return json({
        error: '注册失败',
        fields: {
          email: user.email,
          name: user.name,
          gender: user.gender,
          birthday: user.birthday,
          password: user.password
        },
        form: 'register'
      },
      { status: 400 }
    )
  }
  return createUserSession(newUser.id, redirectTo)
}

export async function login({ email, password }: LoginForm, redirectTo: string = '/') {
  const user = await UserServer.validateUser(email, password)
  if (!user) {
    return json({
      error: '用户名或密码错误',
      fields: { email: email, password: password }
    }, { status: 400 })
  }
  return createUserSession(user.id, redirectTo)
}

export async function logout(request: Request) {
  const session = await getUserSession(request)
  return redirect('/account', {
    headers: {
      'Set-Cookie': await storage.destroySession(session)
    }
  })
}

const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
  throw new Error('Missing SESSION_SECRET env variable')
}

const storage = createCookieSessionStorage({
  cookie: {
    name: 'time-manager-session',
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
})

export async function createUserSession(userId: number, redirectTo: string) {
  const session = await storage.getSession()
  session.set('userId', userId)
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session)
    }
  })
}

export async function requireUserId(request: Request, redirectTo: string = new URL(request.url).searchParams.get('redirectTo') || '/') {
  const session = await getUserSession(request)
  const userId = session.get('userId')
  if (!userId || typeof userId !== 'number' || !await prisma.user.findFirst({ where: { id: userId } })) {
    const path = new URL(request.url).pathname
    if (path.startsWith('/account')) {
      return null
    }
    throw redirect(`/account?redirectTo=${redirectTo}`)
  }
  return userId
}

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get('Cookie'))
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request)
  const userId = session.get('userId')
  if (!userId || typeof userId !== 'number') return null
  return userId
}

export async function getUser(request: Request) {
  const userId = await getUserId(request)
  if (!userId) {
    throw await requireUserId(request)
  }
  const user = await UserServer.getUserById(userId)
  if (!user) {
    throw await requireUserId(request)
  }
  return user
}
