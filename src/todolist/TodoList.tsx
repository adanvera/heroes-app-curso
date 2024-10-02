import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <>
            <ul className='list-group'>
                {
                    todos?.map((todo, i) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            i={i}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />
                    ))
                }
            </ul>
        </>
    )
}
