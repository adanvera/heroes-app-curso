import React, { useEffect } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

  const [formState, setFormState] = React.useState({
    username: 'adan',
    email: 'adan@gmail.com'
  })

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        value={formState.username}
        onChange={onChange}
        className="form-control"
        placeholder="username"
        name='username'
      />

      <input
        type="text"
        value={formState.email}
        onChange={onChange}
        className="form-control mt-3"
        placeholder="email"
        name='email'
      />

      <button className="btn btn-primary mt-3">Guardar</button>
      <hr />

      

      {
        formState.username === 'adan' && <Message />
      }


    </>
  )
}