import './TodoEditor.css'
import { useState } from 'react'
function TodoEdit() {
    const [content, setContent] = useState('')
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    return (
        <div className='TodoEditor'>
            <h3>새로운 todo 작성</h3>
            <div>
                <input type="text"
                    placeholder="새로운 todo"
                    value={content}
                    onChange={onChangeContent}
                ></input>
            </div>
            <button>추가</button>
        </div>
    )
}
export default TodoEdit