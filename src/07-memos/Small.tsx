import React, { memo } from 'react';

export const Small = memo(({ value }: { value: number }) => {
    console.log('Me volví a llamar :(');
    return <small>{value}</small>;
    }
);