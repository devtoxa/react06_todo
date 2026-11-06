

import './App.css'

import Header from './component/Header'

import { useState } from 'react'
import TodoEdit from './component/TodoEditor'
import TodoList from './component/TodoList'
import { useRef } from 'react'
const mockTodo = [
 {
    id : 0,
    idDone : false,
    content: "React 공부하기",
    createdDate : new Date().getTime()
 },
 {
    id : 1,
    idDone : false,
    content: "운동하기",
    createdDate : new Date().getTime()
 },
 {
    id : 2,
    idDone : false,
    content: "아침식사하기",
    createdDate : new Date().getTime()
 }
]

function App() {
  const [todos, setTodos] = useState(mockTodo)
  const idRef = useRef(3)
  //추가
  const onCreate = (content)=>{
    //기존 데이터(todos) + 새데이터(content)
    const newItem = {
      id : idRef.current,
      isDone : false,
      content: content,
      createdDate :  new Date().getTime()
    }
    setTodos([newItem, ...todos])
    console.log(`newItem : ${newItem.content}`)
    idRef.current +=1

  }


  return (
    <div className='App'>
       <Header  />
       <TodoEdit onCreate={onCreate} />
       <TodoList  todos ={todos}/>
    </div>
  )
}

export default App
