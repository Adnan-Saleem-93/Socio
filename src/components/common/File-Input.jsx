import FileBase from 'react-file-base64'

const FileInput = ({...field}) => {
  return (
    <FileBase
      type="file"
      multiple={false}
      onDone={(file) => {
        field.setValue('selectedFile', file.base64)
      }}
    />
  )
}

export default FileInput
