const FileInput = ({...field}) => {
  const setSelectedFile = (e) => {
    console.log(e.target.files[0])
  }
  return <input {...field} type="file" onChange={setSelectedFile} />
}

export default FileInput
