import { useLayoutEffect, useRef, useState } from "react";

interface QuotesProps {
    quote: string;
    author: string;
}

export const Quotes = ({ quote, author }: QuotesProps) => {

    const quoteRef = useRef<HTMLParagraphElement>(null)
    const [boxsize, setBoxsize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        // obtiene todos los detalles, tamaños. etc del elemento
        const { width, height } = quoteRef.current?.getBoundingClientRect() || { width: 0, height: 0 }
        setBoxsize({ width, height })
    }, [quote]);

    return (
        <>
            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={quoteRef} className='mb-1'>{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote >
            <code>{JSON.stringify(boxsize)}</code>
        </>
    )
}
