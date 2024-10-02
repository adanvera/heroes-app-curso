interface Todo {
    id: number;
    desc: string;
}

export const TodoItem = ({ todo, i, handleDelete, handleToggle }: { todo: Todo, i: number }) => {
    return (
        <li
            key={todo.id}
            className='list-group-item d-flex justify-content-between'
            onClick={() => handleToggle(todo.id)}
        >
            <span
                className={todo.done ? 'align-self-center text-decoration-line-through' : 'align-self-center'}
            >{i + 1}. {todo.desc}</span>
            <button
                className='btn btn-danger'
                onClick={() => handleDelete(todo.id)}
            >Borrar</button>
        </li>
    )
}
