import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate , useParams } from 'react-router-dom';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'
import { BOARD_WRITE } from '../../common/path';
import { MAIN_API } from '../../lib/axios';
import './write.css'

const BoardWrite = () => {
  const [isLoading , setIsLoading] = useState(false)
  const navigate = useNavigate()
  const {category} = useParams()
  const [writeState, setwriteState] = useState({
    subject:'',
    content:'',
    category:category
  })


  

  const saveHandler = (e) => {
    // if(writeState.subject.length > 0 ) return
    // if(writeState.content.length > 0) return

    MAIN_API(setIsLoading,BOARD_WRITE,(res)=>{
        
    },
    writeState)
   }
  return (
    <div>

      <InputText className='w-full' placeholder='제목을 입력해주세요' onChange={(e)=>{
       
         setwriteState({
          ...writeState,
          subject:e.target.value
        })
      }}/> 


    <SunEditor
    
    onChange={(html)=>{
      console.log(html)
      setwriteState((prev)=>{
        return{
          ...prev,
          content:html
        }
      })
    }}
  
    setOptions={{
      height:"600",
      buttonList: [
        ['undo', 'redo'],
        ['font', 'fontSize', 'formatBlock'],
        ['paragraphStyle', 'blockquote'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['fontColor', 'hiliteColor', 'textStyle'],
        ['removeFormat'],
        '/', 
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'lineHeight'],
        ['table', 'link', 'image', 'video', 'audio' ], 
        ['fullScreen', 'showBlocks', 'codeView'],
        ['preview', 'print'],
        ['save', 'template'],
  
    ]
    }}
    />

    <div className='flex justify-content-end'>

    <Link to="/view/:id"><Button label="저장"  icon="pi pi-plus" onClick={saveHandler}/></Link>

    </div>


    </div>
    



  )
}

export default BoardWrite