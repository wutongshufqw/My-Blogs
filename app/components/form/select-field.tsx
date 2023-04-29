// 此处封装了一个下拉选择框组件，用于表单中的下拉选择框

interface SelectFieldProps { //下拉选择框组件的属性
  htmlFor: string; //下拉选择框的id
  label: string; //下拉选择框的标签
  tips: string; //下拉选择框的提示
  value: any; //下拉选择框的值
  onChange?: (...args: any) => any; //下拉选择框的值改变时的回调函数
  args: OptionFieldProps[]; //下拉选择框的选项
}

interface OptionFieldProps { //下拉选择框选项的属性
  value: any; //下拉选择框选项的值
  label: string; //下拉选择框选项的标签
}

export function SelectField({
                              htmlFor,
                              label,
                              tips,
                              value,
                              onChange = () => {
                              },
                              args
                            }: SelectFieldProps) {
  let i = 1
  const options = args.map((item: OptionFieldProps) => {
    return <option value={item.value} key={i++}>{item.label}</option>
  })

  return (
    <>
      <div className='form-control'>
        <label htmlFor={htmlFor} className='label'>
          <strong className='underline decoration-sky-500'>{label}</strong>
        </label>
        <select className='select select-bordered w-96' id={htmlFor} name={htmlFor} value={value}
                onChange={onChange}>
          <option value='placeholder'>{tips}</option>
          {options}
        </select>
      </div>
    </>
  )
}
