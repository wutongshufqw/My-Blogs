import { useRef } from 'react'

// 此处封装了一个上传文件的组件，用于上传文件
interface UploadFieldProps { // 上传文件的属性
  htmlFor: string; // 上传文件的id
  label: string; // 上传文件的标签
  value?: any; // 上传文件的值
  className?: string; // 上传文件的样式
  onChange?: (...args: any) => any; // 上传文件的回调事件
}

export function UploadField({
                              htmlFor,
                              label,
                              value,
                              className,
                              onChange = () => {
                              }
                            }: UploadFieldProps) {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <>
      <div className='from-control'>
        <label htmlFor={htmlFor} className='label'>
          <span className='label-text'>{label}</span>
        </label>
        <input
          type='file'
          id={htmlFor}
          name={htmlFor}
          value={value}
          ref={ref}
          onChange={onChange}
          className={className}
        />
      </div>
    </>
  )
}
