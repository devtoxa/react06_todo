
import Header from './component/Header'
import TodoEdit from './component/TodoEdit'
import TodoList from './component/TodoList'
import './App.css'
const mockTodo = [
  {
    id: 0,
    idDOne: false,
    content: "React 공부하기",
    createdDate: new Date().getTime()
  },
  {
    id: 1,
    idDOne: false,
    content: "운동하기",
    createdDate: new Date().getTime()
  },
  {
    id: 2,
    idDOne: false,
    content: "아침 식사하기",
    createdDate: new Date().getTime()
  }
]
function App() {
  return (
    <div>
      <Header className='App' />
      <TodoEdit />
      <TodoList></TodoList>
    </div>
  )
}

export default App
