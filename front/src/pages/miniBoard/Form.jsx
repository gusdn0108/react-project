
import  React ,{useState} from "react"
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';


const MiniForm = () =>{
    const [text, setText] = useState('')
    const header = (
        <span className="ql-formats">
            <button className="ql-bold" aria-label="Bold"></button>
            <button className="ql-italic" aria-label="Italic"></button>
            <button className="ql-underline" aria-label="Underline"></button>
        </span>
    );
    
    return (
        
        <div><Button label="저장" /><Editor style={{height:'320px'}} value={text} onTextChange={(e) => setText(e.htmlValue)} headerTemplate={header} /></div>
       

    )
}

export default MiniForm


