import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'

const heavProcess = (iterations = 100) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Ahí vamos...');
    }
    return `${iterations} iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, onClickPlus } = useCounter(400);
    const [shpow, setShow] = useState(true);

    // memoria el valor y solo se vuelve a ejecutar cuando se actualiza el counter.
    const memorizedValue = useMemo(() => heavProcess(counter), [counter]);

    return (
        <>
            <h1>Counter:{counter} </h1>

            <hr />

            <h4>{memorizedValue}</h4>

            <button
                className="btn btn-primary"
                onClick={() => onClickPlus(1)}
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => setShow(!shpow)}
            >
                Show/Hide {JSON.stringify(shpow)}
            </button>

        </>
    )

}