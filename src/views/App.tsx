// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addTodo, deleteTodo, MyTodo, Todo } from '../application/actions/todos'
// import { pageLoaded } from '../application/actions/ui.action'
// import { getmyTodos, getTodos } from '../application/selectors/todos'
// import { getLoading } from '../application/selectors/ui'
import Router from './route/Router'
import './styles/main.css'
const App = () => {
  return <Router />
  // const dispatch = useDispatch()
  // const todos = useSelector(getTodos)
  // const myTodos = useSelector(getmyTodos)
  // const loading = useSelector(getLoading)

  // useEffect(() => {
  //   dispatch(pageLoaded)
  // }, [dispatch])

  // return (
  //   <div>
  //     <h1>My Todos {myTodos.length}</h1>
  //     <ul>
  //       {myTodos.map((todo: MyTodo) => (
  //         <li key={todo.id} onClick={() => dispatch(deleteTodo(todo))}>
  //           {todo.id}
  //           {todo.title}
  //           ==== {todo.count}
  //         </li>
  //       ))}
  //     </ul>
  //     <h1>Essential Todos</h1>
  //     {loading ? (
  //       'Loading todos...'
  //     ) : (
  //       <>
  //         <ul>
  //           {todos.map((todo: Todo) => (
  //             <li key={todo.id} onClick={() => dispatch(addTodo(todo))}>
  //               {todo.id} {todo.title}
  //             </li>
  //           ))}
  //         </ul>
  //       </>
  //     )}
  //   </div>
  // )
}

export default App
