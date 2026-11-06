import { useState } from 'react'
import './TodoEditor.css'
import { useRef } from 'react'
function TodoEdit({ onCreate }) {
  const [content, setContent] = useState('')
  const inputRef = useRef()

  //1. input 에 values 값 변화
  const onChangeContent = (e) => {
    setContent(e.target.value)
  }
  //2. 추가버튼 클릭
  const onSubmit = () => {
    if (!content) { //내용이 없다면 
      inputRef.current.focus()
      return
    }
    onCreate(content) //App.jsx에 있는 함수
    setContent('')
  }
  const onKeyDown = (e) => {
    if (e.keyCode == 13) {
      onSubmit()
    }
  }
  return (
    <div className='TodoEditor'>
      <h4>새로운 Todo 작성하기</h4>
      <div className='editor_wrapper'>
        <input type='text'
          placeholder='새로운 Todo...'
          ref={inputRef}
          value={content}
          onChange={onChangeContent} onKeyDown={onKeyDown} />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )

}

export default TodoEdit