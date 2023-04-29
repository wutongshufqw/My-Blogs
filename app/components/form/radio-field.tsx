// 此处封装了一个下拉选择框组件，用于表单中的下拉选择框
import { useEffect, useState } from 'react'

interface RadioFieldProps { //下拉选择框组件的属性
  htmlFor: string; //下拉选择框的id
  label: string; //下拉选择框的标签
  value: any; //下拉选择框的值
  onChange?: (...args: any) => any; //下拉选择框的值改变时的回调函数
  hasError?: boolean; //下拉选择框是否显示错误信息
  error?: string; //下拉选择框的错误信息
  args: OptionFieldProps[]; //下拉选择框的选项
}

interface OptionFieldProps { //下拉选择框选项的属性
  value: any; //下拉选择框选项的值
  label: string; //下拉选择框选项的标签
}

export function RadioField({
                             htmlFor,
                             label,
                             value = '',
                             onChange = () => {
                             },
                             hasError = true,
                             error = '',
                             args
                           }: RadioFieldProps) {
  const [errorText, setErrorText] = useState(error)
  useEffect(() => {
    setErrorText(error)
  }, [error])

  const options = args.map((item: OptionFieldProps, index) => {
    return (
      <label className='label cursor-pointer' key={index}>
        <span className='label-text'>{item.label}</span>
        <input
          type='radio'
          name={htmlFor}
          className='radio radio-primary'
          value={item.value}
          onChange={onChange}
          checked={item.value === value} />
      </label>
    )
  })

  return (
    <div className='form-control'>
      <label htmlFor={htmlFor} className='label'>
        <strong className='underline decoration-sky-500'>{label}</strong>
      </label>
      <div className={'grid grid-cols-' + args.length}>
        {options}
      </div>
      {hasError && (
        <div className='text-xs font-semibold text-center tracking-wide text-red-500 w-full'>
          {errorText || ''}
        </div>
      )}
    </div>
  )
}
