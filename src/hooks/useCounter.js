import { useState } from "react"


export const useCounter = (initialValue = 1) => {
    const [counter, setcounter] = useState(initialValue)

    const onClickMinus = (value = 1) => {
        if (counter === 0) { eturn }
        setcounter(counter - value)
    }

    const onClickReset = (value = 1) => {
        setcounter(1)
    }

    const onClickPlus = (value = 1) => {
        setcounter(counter + value)
    }

    return {
        counter,
        onClickMinus,
        onClickReset,
        onClickPlus
    }
}