import React, { useState } from 'react'

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState({
            ...initialForm
        });
    }

    return {
        ...formState,
        onChange,
        onResetForm
    }


}
