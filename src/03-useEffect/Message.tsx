import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {

        const onMouseMove = (e: MouseEvent) => {
            const coords = { x: e.x, y: e.y }
        }

        window.addEventListener('mousemove', (onMouseMove))

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }

    }, [])


    return (
        <>
            <h3>User already exist</h3>
        </>
    )
}
