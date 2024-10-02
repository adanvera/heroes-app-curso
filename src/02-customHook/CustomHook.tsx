import React from 'react'
import { useCounter } from '../hooks/useCounter'

const CustomHook = () => {

    const {
        counter,
        onClickMinus,
        onClickReset,
        onClickPlus
    } = useCounter()

    return (
        <>
            <h1>Custom hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => onClickMinus()}>-1</button>
            <button className="btn btn-primary" onClick={() => onClickReset()} >Reset</button>
            <button className="btn btn-primary" onClick={() => onClickPlus()}>+1</button>
        </>
    )
}

export default CustomHook