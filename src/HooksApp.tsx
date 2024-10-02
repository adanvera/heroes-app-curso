import { TodoList } from './todolist/TodoList'
import { TodoAdd } from './todolist/TodoAdd'
import { useTodo } from './hooks'

export const HooksApp = () => {

  const {
    todos,
    handleDelete,
    handleToggle,
    handleNewTodo,
    amount,
    pending
  } = useTodo();

  return (
    <>
      <h1>TodoApp ({amount}) -  <span>pendientes: ({pending})</span></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-md-5">
          <h4>TodoApp</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}
