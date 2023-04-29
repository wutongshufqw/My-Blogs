import { useEffect, useRef, useState } from 'react'

interface AlertProps {
  className?: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  timeout?: number;
}

export function Alert({ className = '', message, type, timeout = 3000 }: AlertProps) {
  const [time, setTime] = useState(timeout)
  const timeSet = useRef<NodeJS.Timeout>()
  useEffect(() => {
    if (time > 0) {
      clearTimeout(timeSet.current)
      timeSet.current = setTimeout(() => {
        setTime(time - 100)
      }, 100)
    } else {
      clearTimeout(timeSet.current)
    }
  }, [time, setTime])

  // 顶部提示信息组件抽取与封装
  return (
    <div className={`alert alert-${type} shadow-lg ${className}`}
         style={time === 0 ? { display: 'none' } : { opacity: time * 1.0 / timeout }}>
      <div className='flex-1'>
        <label className='cursor-pointer select-none'>{message}</label>
      </div>
      <div className='flex-none'>
        <button
          className='btn btn-ghost btn-sm'
          type='button'
          onClick={() => {
            setTime(0)
          }}
        >
          <span className='w-5 h-5 flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-x'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#ffffff'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </span>
        </button>
      </div>
      <div className='alert alert-success alert-info alert-error alert-warning opea' style={{ display: 'none' }}></div>
    </div>
  )
}
