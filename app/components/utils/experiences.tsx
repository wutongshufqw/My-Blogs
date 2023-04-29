import React, { useRef } from 'react'
import { FormField } from '~/components/form/form-field'
import { format } from 'date-fns'

interface ExperiencesProps {
  experiences: {
    study: any[],
    work: any[]
  },
  onChange: (...args: any) => any;
  check: (...args: any) => any;
}

export default function Experiences({
                                      experiences, onChange = () => {
  }, check = () => {
  }
                                    }: ExperiencesProps) {

  const check_study = useRef(experiences.study.map(value => !!value.id))
  const check_work = useRef(experiences.work.map(value => !!value.id))

  const handleStudyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(event.target.id.split('-')[1])
    const name = event.target.id.split('-')[0].split('_')[1]
    experiences.study[index] = { ...experiences.study[index], [name]: event.target.value }
    onChange(experiences)
    check('study', checkStudy(index, Object.keys(experiences.study[index]).every(key => {
      if (key === 'id') return true
      else return experiences.study[index][key] !== ''
    })))
  }
  const handleWorkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(event.target.id.split('-')[1])
    const name = event.target.id.split('-')[0].split('_')[1]
    experiences.work[index] = { ...experiences.work[index], [name]: event.target.value }
    onChange(experiences)
    check('work', checkWork(index, Object.keys(experiences.work[index]).every(key => {
      console.log(experiences.work[index])
      console.log(key, experiences.work[index][key])
      if (key === 'id') return true
      else return experiences.work[index][key] !== ''
    })))
  }

  const checkStudy = (index: number, value: boolean) => {
    check_study.current[index] = value
    return !check_study.current.every(value => value)
  }
  const checkWork = (index: number, value: boolean) => {
    check_work.current[index] = value
    return !check_work.current.every(value => value)
  }

  const deleteStudy = (index: number) => {
    experiences.study.splice(index, 1)
    check_study.current.splice(index, 1)
    onChange(experiences)
    check('study', !check_study.current.every(value => value))
  }

  const deleteWork = (index: number) => {
    experiences.work.splice(index, 1)
    check_work.current.splice(index, 1)
    onChange(experiences)
    check('work', !check_work.current.every(value => value))
  }

  const study = experiences.study.map((experience, index) => {
    return (
      <div className='collapse collapse-plus border border-base-300 bg-base-100 rounded-box' key={index}>
        <input type='checkbox' />
        <div className='collapse-title text-xl font-medium'>
          {experience.address}
        </div>
        <div className='collapse-content'>
          <FormField
            htmlFor={'study_rank-' + index}
            label='教育级别'
            value={experience.rank}
            onChange={handleStudyChange}
            hasError={false}
          />
          <FormField
            htmlFor={'study_address-' + index}
            label='学校'
            value={experience.address}
            onChange={handleStudyChange}
            hasError={false}
          />
          <FormField
            htmlFor={'study_position-' + index}
            label='学位'
            value={experience.position}
            onChange={handleStudyChange}
            hasError={false}
          />
          <FormField
            htmlFor={'study_startTime-' + index}
            label='开始时间'
            type='date'
            value={experience.startTime === '' ? '' : format(new Date(experience.startTime), 'yyyy-MM-dd')}
            onChange={handleStudyChange}
            hasError={false}
          />
          <FormField
            htmlFor={'study_endTime-' + index}
            label='结束时间'
            type='date'
            value={experience.endTime === '' ? '' : format(new Date(experience.endTime), 'yyyy-MM-dd')}
            onChange={handleStudyChange}
            hasError={false}
          />
          <div className='my-2 w-full'>
            <button className='btn btn-error w-full' type='button' onClick={_ => deleteStudy(index)}>删除</button>
          </div>
        </div>
      </div>
    )
  })
  const work = experiences.work.map((experience, index) => {
    return (
      <div className='collapse collapse-plus border border-base-300 bg-base-100 rounded-box' key={index}>
        <input type='checkbox' />
        <div className='collapse-title text-xl font-medium'>
          {experience.address}
        </div>
        <div className='collapse-content'>
          <FormField
            htmlFor={'work_address-' + index}
            label='单位'
            value={experience.address}
            onChange={handleWorkChange}
            hasError={false}
          />
          <FormField
            htmlFor={'work_position-' + index}
            label='职位'
            value={experience.position}
            onChange={handleWorkChange}
            hasError={false}
          />
          <FormField
            htmlFor={'work_startTime-' + index}
            label='开始时间'
            type='date'
            value={experience.startTime === '' ? '' : format(new Date(experience.startTime), 'yyyy-MM-dd')}
            onChange={handleWorkChange}
            hasError={false}
          />
          <FormField
            htmlFor={'work_endTime-' + index}
            label='结束时间'
            type='date'
            value={experience.endTime === '' ? '' : format(new Date(experience.endTime), 'yyyy-MM-dd')}
            onChange={handleWorkChange}
            hasError={false}
          />
          <div className='my-2 w-full'>
            <button className='btn btn-error w-full' type='button' onClick={_ => deleteWork(index)}>删除</button>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='flex-col w-full'>
        <div className='flex justify-end'>
          <div className='card shrink max-w-sm shadow-2xl bg-base-100 my-2 w-96'>
            <div className='card-body'>
              <div
                className='text-center text-2xl text-lime-600 underline decoration-indigo-500 font-semibold'>教育经历
              </div>
              {study}
            </div>
          </div>
        </div>
      </div>
      <div className='flex-col w-full justify-start'>
        <div className='card shrink max-w-sm shadow-2xl bg-base-100 my-2 w-96'>
          <div className='card-body'>
            <div className='text-center text-2xl text-lime-600 underline decoration-indigo-500 font-semibold'>工作经历
            </div>
            {work}
          </div>
        </div>
      </div>
    </div>
  )
}
