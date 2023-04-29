import { useEffect, useState } from 'react'

// 此处封装了一个表单字段组件，用于简化表单的编写
interface FormFieldProps { // 表单字段
  className?: string; // 表单字段的样式
  htmlFor: string; // 表单字段的id
  label: string; // 表单字段的标签
  type?: string; // 表单字段的类型
  value: any; // 表单字段的值
  onChange?: (...args: any) => any; // 表单字段的值改变时的回调
  onBlur?: (...args: any) => any; // 表单字段失去焦点时的回调
  error?: string; // 表单字段的错误信息
  selfControl?: boolean; // 表单字段是否自己控制错误信息
  hasError?: boolean; // 表单字段是否显示错误信息
}

export function FormField({
                            className = 'input input-bordered w-full max-w-xs',
                            htmlFor,
                            label,
                            type = 'text',
                            value = '',
                            onChange = () => {
                            },
                            onBlur = () => {
                            },
                            error = '',
                            selfControl = false,
                            hasError = true
                          }: FormFieldProps) {
  const [errorText, setErrorText] = useState(error)
  const textarea = type === 'textarea'
  useEffect(() => {
    setErrorText(error)
  }, [error])
  return (
    <>
      <div className='form-control'>
        <label htmlFor={htmlFor} className='label'>
          <strong className='underline decoration-sky-500'>{label}</strong>
        </label>
        {textarea ? (
          <textarea onChange={e => {
            onChange(e)
            if (!selfControl) {
              setErrorText('')
            }
          }}
                    onBlur={e => onBlur(e)}
                    id={htmlFor}
                    name={htmlFor}
                    value={value}
                    className='textarea textarea-bordered'
          />
        ) : (
          <input onChange={e => {
            onChange(e)
            if (!selfControl) {
              setErrorText('')
            }
          }}
                 onBlur={e => onBlur(e)}
                 type={type}
                 id={htmlFor}
                 name={htmlFor}
                 className={className}
                 value={value} />
        )}
      </div>
      {hasError && (
        <div className='text-xs font-semibold text-center tracking-wide text-red-500 w-full'>
          {errorText || ''}
        </div>
      )}
    </>
  )
}
