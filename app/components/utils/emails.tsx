import React, { useState } from 'react'
import { FormField } from '~/components/form/form-field'
import { FormButtonField } from '~/components/form/from-button-field'
import { Alert } from '~/components/alert'

interface EmailsProps {
  htmlFor: string; //下拉选择框的id
  label: string; //下拉选择框的标签
  onChange?: (...args: any) => any; //下拉选择框的值改变时的回调函数
  hasError?: boolean; //下拉选择框是否显示错误信息
  error?: string[]; //下拉选择框的错误信息
  emails: EmailProps[];
  children?: React.ReactNode;
  success?: boolean | undefined;
  err?: string | undefined;
}

interface EmailProps {
  id: number | undefined;
  email: string;
  isMain: boolean;
}

export function Emails({
                         htmlFor,
                         label,
                         onChange = () => {
                         },
                         hasError = true,
                         error = [],
                         emails,
                         success = undefined,
                         err = undefined,
                         children
                       }: EmailsProps) {
  const [errors, setErrors] = useState(error)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(event.target.id.split('-')[1])
    emails[index].email = event.target.value
    onChange(emails)
    error[index] = ''
    setErrors(error)
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const index = parseInt(event.currentTarget.id.split('-')[1])
    emails.splice(index, 1)
    onChange(emails)
    error[index] = ''
    setErrors(error)
  }

  const email_list = emails.map((email, index) => {
    if (email.isMain) {
      return (
        <FormField
          htmlFor={htmlFor + '-' + index}
          label={label}
          value={email.email}
          onChange={handleInputChange}
          error={errors[index]}
          hasError={hasError}
          key={index}
        />
      )
    } else {
      return (
        <FormButtonField
          htmlFor={htmlFor + '-' + index}
          label={label}
          value={email.email}
          onChange={handleInputChange}
          onClick={handleButtonClick}
          buttonLabel='删除'
          error={errors[index]}
          hasError={hasError}
          key={index}
        />
      )
    }
  })
  return (
    <form method='POST' className='card-body'>
      {err && <Alert message={err} type='error' timeout={2000} />}
      {success && <Alert message='保存成功' type='success' timeout={2000} />}
      {email_list}
      {children}
    </form>
  )
}
