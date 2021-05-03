import React, { useEffect, useState } from 'react';

export const useFetch = (url, method = 'get') =>{
    const [response, setResponse] = useState({
        data:null,
        loading: false
    });

    useEffect(()=>{
        fetch(url, {method})
        .then(resp => resp.json())
        .then(json => setResponse({
            data:json,
            loading:true
        }));
    },[url,method]);

    return response;
}