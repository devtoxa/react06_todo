import { useState } from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'
function TodoList({ todos }) {
  const [searchText, setSearchText] = useState('')
  const searchChange = (e) => {
    setSearchText(e.target.value)
  }
  return (
    <div className='TodoList'>
      <h4> Todo List </h4>
      <input className='searchbar'
        placeholder='검색어 입력'
        value={1}
        onChange={searchChange}
      />
      <div className='list_wrapper'>
        <div>todolist</div>
        {
          todos.map((todo) => {
            return (
              <TodoItem key={todo.id} {...todo} />
            )
          })

        }
      </div>

    </div>
  )

}

export default TodoList