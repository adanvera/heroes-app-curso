
import React, { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { PokemonCard } from './PokemonCard';
import { Quotes } from '../03-useEffect/Quotes';
import { LoadingQuote } from './LoadingQuote';

export const LayoutEffect = () => {


    const {
        counter,
        onClickMinus,
        onClickPlus
    } = useCounter(1);


    const url = 'https://api.breakingbadquotes.xyz/v1/quotes/' + counter;

    const {
        data,
        loading,
        hasError,
        errorMessage
    } = useFetch(url);

    const { quote, author } = !!data && data[0];

    return (
        <>
            <h1>Breaking Quotes</h1>
            <hr />
            {loading ? <LoadingQuote /> :
                <Quotes
                    author={author}
                    quote={quote}
                />}
            <hr />

            <button className='btn btn-primary' onClick={() => onClickMinus(1)}
                disabled={loading || counter <= 1}
            >prev</button>
            <button className='btn btn-primary' onClick={() => onClickPlus(1)}
                disabled={loading}
            >next</button>
        </>
    )
}
