import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import { MAIN_API } from '../../lib/axios';
import { Button } from 'primereact/button';
import { BOARD_WRITE } from '../../common/path';


const BoardWrite = () => {
    const navigate = useNavigate()
    const { category } = useParams()
    const { isLoading, setIsLoading } = useState(false)
    const [writeState, setWriteState] = useState({
        subject: '',
        contentHtml: '',
        category: category,
    })
    const saveHandler = (e) => {
        if (writeState.subject.length < 3) return
        if (writeState.content.length < 3) return

        MAIN_API(setIsLoading, BOARD_WRITE, (res) => {
            console.log(res)
        }, writeState)
    }
    return (
        <div>
            {isLoading ? 'Loading...' : ''}
            <InputText className='w-full py-2' placeholder='제목을 입력하세요.' />
            <SunEditor
                onChange={(html) => {
                    console.log(html)
                    setWriteState((prev) => {
                        return {
                            ...prev,
                            content: html
                        }
                    })
                }}
                setOptions={{
                    height: "600",
                    buttonList: [
                        ['undo', 'redo'],
                        ['font', 'fontSize', 'formatBlock'],
                        ['paragraphStyle', 'blockquote'],
                        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                        ['fontColor', 'hiliteColor', 'textStyle'],
                        ['removeFormat'],
                        '/', // Line break
                        ['outdent', 'indent'],
                        ['align', 'horizontalRule', 'list', 'lineHeight'],
                        ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                        /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                        ['fullScreen', 'showBlocks', 'codeView'],
                        ['preview', 'print'],
                        ['save', 'template'],
                        /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
                    ]
                }}
            />
            <div className='flex justify-content-end'>
                <Button label="저장" icon="pi pi-plus" onClick={saveHandler} />
            </div>
        </div>
    )
}

export default BoardWrite