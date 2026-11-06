import { useState } from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'
function TodoList({ todos, onDelete, onCheck }) {
  const [searchText, setSearchText] = useState('')
  const searchChange = (e) => {
    setSearchText(e.target.value)
  }
  return (
    <div className='TodoList'>
      <h4> Todo List </h4>
      <input className='searchbar'
        placeholder='검색어 입력'
        value={searchText}
        onChange={searchChange}
      />
      <div className='list_wrapper'>
        <div>todolist</div>
        {
          todos.map((todo) => {
            return (
              <TodoItem key={todo.id} {...todo} onDelete={onDelete} onCheck={onCheck} />
            )
          })

        }
      </div>

    </div>
  )

}

export default TodoList