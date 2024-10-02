import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

//local cache object
const localCache = {};

export const useFetch = (url = '') => {

    // initial state
    const [state, setState] = useState(
        {
            data: null,
            loading: true,
            hasError: false,
            errorMessage: null
        }

    )

    // loading state
    const setLoadingState = () => {
        setState({
            data: null,
            loading: true,
            hasError: false,
            errorMessage: null
        });
    }

    // useEffect to fetch data
    useEffect(() => {
        getFetch();
    }, [url]);

    // fetch data function
    const getFetch = async () => {
        try {

            // check if data is in local cache
            if (localCache[url]) {
                setState({
                    data: localCache[url],
                    loading: false,
                    hasError: false,
                    errorMessage: null
                });
                return;
            }

            setLoadingState();

            const response = await axios.get(url);

            // simulate loading
            await new Promise(resolve => setTimeout(resolve, 1000));

            if (response.status !== 200) {
                setState({
                    data: null,
                    loading: false,
                    hasError: true,
                    errorMessage: response.statusText
                });
                return;
            }

            const data = await response.data;

            //local cache
            localCache[url] = data;

            setState({
                data: data,
                loading: false,
                hasError: false,
                errorMessage: null
            });

        } catch (error) {
            setState({
                data: null,
                loading: false,
                hasError: true,
                errorMessage: error.message
            });
            return;
        }
    };

    // return data response
    return {
        data: state.data,
        loading: state.loading,
        hasError: state.hasError,
        errorMessage: state.errorMessage
    }
}
