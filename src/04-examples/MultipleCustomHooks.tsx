
import React, { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { LoagingMEssage } from './LoagingMEssage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {


    const {
        counter,
        onClickMinus,
        onClickPlus
    } = useCounter(1);


    const url = 'https://pokeapi.co/api/v2/pokemon/' + counter;

    const {
        data,
        loading,
        hasError,
        errorMessage
    } = useFetch(url);


    return (
        <>
            <h1>Informacion de pokemon</h1>
            <hr />
            {loading ? <LoagingMEssage /> :
                <PokemonCard
                    name={data?.name}
                    id={data?.id}
                    sprites={[
                        data?.sprites?.front_default,
                        data?.sprites?.back_default,
                        data?.sprites?.back_shiny,
                        data?.sprites?.front_shiny,
                    ]}
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
