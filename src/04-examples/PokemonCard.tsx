import React from 'react'

interface PokemonCardProps {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, sprites = [] }) => {
    return (
        <section
            style={{ height: 200 }}
        >
            <h2 className='text-capitalize'>#{id} - {name}</h2>
            {
                sprites.map((sprite, index) => (
                    <img
                        key={index}
                        src={sprite}
                        alt={name}
                        style={{ width: 100 }}
                    />
                ))
            }
        </section>
    )
}
