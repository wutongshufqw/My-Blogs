import { ActionFunction, json, LoaderFunction } from '@remix-run/node'
import { getUserId } from '~/utils/auth.server'
import { Link, useActionData, useLoaderData } from '@remix-run/react'
import React, { useRef, useState } from 'react'
import { UserServer } from '~/utils/user.server'
import Experiences from '~/components/utils/experiences'
import { Alert } from '~/components/alert'

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request)
  const experience = await UserServer.getExperiences(userId!)
  return json({ experience }, { status: 200 })
}

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request)
  const form = await request.formData()
  const data = form.get('experience')
  if (typeof data !== 'string') {
    return json({ error: '不正确的数据格式' }, { status: 400 })
  }
  const experience = JSON.parse(data)
  Object.keys(experience).forEach((key) => {
    experience[key].forEach((item: any) => {
      item.startTime = new Date(item.startTime)
      item.endTime = new Date(item.endTime)
    })
  })
  const res = await UserServer.updateExperiences(userId!, experience['study'], experience['work'])
  if (!res) {
    return json({ error: '更新失败' }, { status: 400 })
  }
  return json({ experience: res, save: true }, { status: 200 })
}

export default function Experience() {
  const loaderData = useLoaderData()
  const actionData = useActionData()
  const check = useRef({ study: false, work: false })
  const [formData, setFormData] = useState(() => {
      const data = actionData?.experience || loaderData?.experience || { study: [], work: [] }
      return {
        experiences: JSON.parse(JSON.stringify(data))
      }
    }
  )
  const HandleChange = (experiences: any) => {
    setFormData({ experiences })
  }

  const handleCheck = (target: string, checked: boolean) => {
    if (target === 'study') {
      check.current.study = checked
    } else if (target === 'work') {
      check.current.work = checked
    }
  }

  const addStudy = () => {
    const experiences = formData.experiences
    experiences.study.push({ rank: '', address: '', position: '', startTime: '', endTime: '' })
    setFormData({ experiences })
    handleCheck('study', true)
  }
  const addWork = () => {
    const experiences = formData.experiences
    experiences.work.push({ address: '', position: '', startTime: '', endTime: '' })
    setFormData({ experiences })
    handleCheck('work', true)
  }

  const reset = () => {
    const data = actionData?.experience || loaderData?.experience || { study: [], work: [] }
    setFormData({ experiences: JSON.parse(JSON.stringify(data)) })
    handleCheck('study', false)
    handleCheck('work', false)
  }

  return (
    <div className='w-full'>
      <div className='tabs justify-center'>
        <Link className='tab tab-bordered' to='../info'>个人信息</Link>
        <Link className='tab tab-bordered tab-active' to='../experience'>个人经历</Link>
        <Link className='tab tab-bordered' to='../password'>修改密码</Link>
      </div>
      <div className='w-full justify-center mb-16'>
        <form method='POST' className='form-horizontal'>
          <div className='justify-center flex'>
            {actionData?.error &&
              <Alert className='w-96 my-2' message={actionData.error} type='error' timeout={2000} />}
            {actionData?.save && <Alert className='w-96 my-2' message='保存成功' type='success' timeout={2000} />}
          </div>
          <div className='justify-center flex gap-4 my-2'>
            <button className='btn btn-info' type='button' onClick={addStudy}
                    disabled={check.current.study}>新增教育经历
            </button>
            <button className='btn btn-accent' type='button' onClick={addWork}
                    disabled={check.current.work}>新增工作经历
            </button>
            <button className='btn btn-primary' disabled={check.current.study || check.current.work}>保存</button>
            <button className='btn btn-primary' type='button' onClick={reset}>还原</button>
            <input type='hidden' name='experience' value={JSON.stringify(formData.experiences)} />
          </div>
          <Experiences experiences={formData.experiences} onChange={HandleChange} check={handleCheck} />
        </form>
      </div>
    </div>
  )
}
