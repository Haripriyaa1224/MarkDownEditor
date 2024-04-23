import React, { useState } from 'react';
import MarkDownEditorr from '../Component/MarkDownEditorr';
import './Notes.css';
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function Notes() {
  const [editors, setEditors] = useState([{ id: 1, content: '' }]);
  const [newEditorText, setNewEditorText] = useState(['Enter Title Here']);

  const newEditor = () => {
    const newId = editors.length + 1;
    setEditors([...editors, { id: newId, content: '' }]);
    setNewEditorText([...newEditorText, `Enter Title Here`]);
  };

  const deleteEditor = (id) => {
    const updatedEditors = editors.filter(editor => editor.id !== id);
    const updatedEditorText = newEditorText.filter((_, index) => index !== id - 1);
    setEditors(updatedEditors);
    setNewEditorText(updatedEditorText);
  };

  return (
    <div className='container'>
      <div className='aside'>
        <div className='head'>
          <h1>Notes</h1>
          <h1 onClick={newEditor}><IoIosAddCircleOutline /></h1>
        </div>
        <div className='text'>
         {newEditorText.map((text, index) => (
              <h1 key={index}>
                {text}
                <MdDelete onClick={() => deleteEditor(index + 1)} style={{marginLeft:"10px"}}/>
                
              </h1>
            ))}
         
        </div>
      </div>
      <div className='mark-down'>
        {editors.map(editor => (
          <MarkDownEditorr key={editor.id} id={editor.id} content={editor.content} />
        ))}
      </div>
    </div>
  );
}

export default Notes;
