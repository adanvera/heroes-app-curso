import { Message } from './Message'
import { useForm } from '../hooks/useForm'

export const FormCustom = () => {

    const { username, email, password, onChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })


    return (
        <>
            <h1>Formulario FormCustom</h1>
            <hr />

            <input
                type="text"
                value={username}
                onChange={onChange}
                className="form-control"
                placeholder="username"
                name='username'
            />

            <input
                type="text"
                value={email}
                onChange={onChange}
                className="form-control mt-3"
                placeholder="email"
                name='email'
            />

            <input
                type="password"
                value={password}
                onChange={onChange}
                className="form-control mt-3"
                placeholder="password"
                name='password'
            />

            <button className="btn btn-primary mt-3">Guardar</button>
            <hr />

            <button
                onClick={onResetForm}
                className="btn btn-primary mt-3">Reset</button>
            <hr />

            {
                username === 'adan' && <Message />
            }


        </>
    )
}