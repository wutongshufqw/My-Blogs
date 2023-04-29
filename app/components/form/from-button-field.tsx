import { useEffect, useState } from 'react'

// 此处封装了一个表单字段组件，用于简化表单的编写
interface FormButtonFieldProps { // 表单字段
  className?: string; // 表单字段的样式
  htmlFor: string; // 表单字段的id
  label: string; // 表单字段的标签
  type?: string; // 表单字段的类型
  value: any; // 表单字段的值
  onChange?: (...args: any) => any; // 表单字段的值改变时的回调
  buttonLabel?: string; // 按钮的标签
  onClick?: (...args: any) => any; // 按钮点击时的回调
  error?: string; // 表单字段的错误信息
  hasError?: boolean; // 表单字段是否显示错误信息
}

export function FormButtonField({
                                  className = 'input input-bordered w-full max-w-xs',
                                  htmlFor,
                                  label,
                                  type = 'text',
                                  value = '',
                                  onChange = () => {
                                  },
                                  onClick = () => {
                                  },
                                  buttonLabel = '',
                                  error = '',
                                  hasError = true
                                }: FormButtonFieldProps) {
  const [errorText, setErrorText] = useState(error)
  useEffect(() => {
    setErrorText(error)
  }, [error])
  return (
    <>
      <div className='form-control'>
        <label htmlFor={htmlFor} className='label'>
          <strong className='underline decoration-sky-500'>{label}</strong>
        </label>
        <div className='input-group'>
          <input onChange={e => {
            onChange(e)
            setErrorText('')
          }}
                 type={type}
                 id={htmlFor}
                 name={htmlFor}
                 className={className}
                 value={value}
          />
          <button id={htmlFor} type='button' className='btn btn-primary' onClick={onClick}>{buttonLabel}</button>
        </div>
      </div>
      {hasError && (
        <div className='text-xs font-semibold text-center tracking-wide text-red-500 w-full'>
          {errorText || ''}
        </div>
      )}
    </>
  )
}
