import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement | null>(null)

    const onclikEvent = () => {
        inputRef.current?.select()
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type='text'
                className='form-control'
                placeholder='Su nombre'
            />
            <hr />

            <button
                className='btn btn-outline-primary mt-5'
                onClick={onclikEvent}
            >
                Focus
            </button>
        </>
    )
}
