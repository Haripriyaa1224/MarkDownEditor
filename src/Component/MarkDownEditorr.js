import MDEditor from '@uiw/react-md-editor'
import React, {useState} from 'react'
import './MarkDownEditorr.css'

function MarkDownEditorr() {

    const [content, setContent] = useState('Hello world');
  return (
   <>
   <div className="container">
   <MDEditor value={content} onChange={(value)=>{setContent(value)}} style={{
    width:"100vw",
    height:"100vh",
   
    // backgroundColor:"yellow"
   }}/>
   {/* <MDEditor.Markdown source={content} /> */}
   </div>
   </>
  )
}

export default MarkDownEditorr