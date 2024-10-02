import React from 'react'
import { useForm } from './../hooks'

interface TodoAddProps {
    onNewTodo: (todo: { id: number; desc: string; done: boolean }) => void;
}

export const TodoAdd: React.FC<TodoAddProps> = ({ onNewTodo }) => {

    const {
        desc,
        onChange,
        onResetForm
    } = useForm({ desc: '' })


    const handleSubmit = (e) => {
        e.preventDefault()
        if (desc.trim().length <= 1) {
            return
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: desc,
            done: false
        }
        onNewTodo(newTodo)
        onResetForm()
    }


    return (
        <form
            onSubmit={handleSubmit}
            className='form-group'
        >
            <input
                type='text'
                placeholder='Que hay que hacer?'
                className='form-control'
                name='desc'
                value={desc}
                onChange={onChange}
            />
            <button
                type='submit'
                className='btn btn-primary btn-outline-primary mt-1 white'
            >
                Agregar
            </button>
        </form>
    )
}
