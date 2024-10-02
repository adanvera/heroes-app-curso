import React, { useState } from 'react'

export const CounterApp = () => {

    const initialState = {
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    }

    const [state, setState] = useState(initialState)

    const onClick = () => {
        setState({
            ...state,
            counter1: state.counter1 + 10,
            counter2: state.counter2 + 20,
            counter3: state.counter3 + 30,
            counter4: state.counter4 + 40
        })
    }

    return (
        <>
            <h1>Counter1: {state.counter1} </h1>
            <h1>Counter2: {state.counter2} </h1>
            <h1>Counter3: {state.counter3} </h1>
            <h1>Counter4: {state.counter4} </h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() =>
                    onClick()
                }
            >+1</button>

        </>
    )
}

