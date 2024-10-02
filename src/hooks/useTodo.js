import { useEffect, useReducer } from "react"
import { todoReducer } from '../../src/reducersss/TodoReducers'

const initialState = []
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    const handleNewTodo = (newTodo) => {
        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action)
    }

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId
        }
        dispatch(action)
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const amount = todos && todos.length ? todos.length : 0
    const pending = todos && todos.filter(todo => !todo.done).length

    return {
        todos,
        handleNewTodo,
        handleDelete,
        handleToggle,
        amount,
        pending
    }
}
