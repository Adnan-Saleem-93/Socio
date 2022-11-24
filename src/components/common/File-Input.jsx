const FileInput = ({...field}) => {
  const setSelectedFile = (e) => {
    if (e.target.files[0]) {
      field.setValue('selectedFile', e.target.files[0])
    }
  }
  return <input type="file" onChange={setSelectedFile} />
}

export default FileInput
