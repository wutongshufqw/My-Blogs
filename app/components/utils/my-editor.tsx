import { Editor } from '@tinymce/tinymce-react'
import React from 'react'

interface MyEditorProps {
  initValue?: string,
  onChange?: (...args: any) => any,
  readonly?: boolean
}

export function MyEditor({
                           initValue = '',
                           onChange = () => {
                           },
                           readonly = false
                         }: MyEditorProps) {
  return (
    <Editor
      id='content'
      inline={false}
      value={initValue}
      init={{
        height: 500,
        plugins: [
          'anchor autolink charmap codesample emoticons image link lists media searchreplace table',
          'visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker',
          'a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments',
          'tableofcontents footnotes mergetags autocorrect typography inlinecss'
        ],
        toolbar:
          'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | \
           link image media table mergetags | addcomment showcomments | \
           pellcheckdialog a11ycheck typography | align lineheight | \
           checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        language: 'zh_CN',
        fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px 96px 120px 144px 288px',
        font_formats: '宋体=宋体;黑体=黑体;仿宋=仿宋;楷体=楷体;微软雅黑=微软雅黑;Arial=Arial;Courier New=Courier New;Tahoma=Tahoma;Times New Roman=Times New Roman;Verdana=Verdana;',
        readonly: readonly
      }}
      onEditorChange={onChange}
      apiKey='2rx58t0nbsohskk1jlyxyvd37y64vqf989hyyqxtxj7q1h7b'
    />
  )
}
