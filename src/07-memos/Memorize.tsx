import React from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small';

export const Memorize = () => {

    const { counter, onClickPlus } = useCounter(10);

    return (
        <>
            <h1>Counter: <Small value={counter} /> </h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => onClickPlus(1)}
            >
                +1
            </button>

        </>
    )
}
