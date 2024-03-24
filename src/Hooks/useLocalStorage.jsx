import React, { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../utilites/localStorage';

const useLocalStorage = () => {
    const [localData, setLocalData] = useState([]);

    useEffect(() => {
        setLocalData(getFromLocalStorage());
    }, []);


    return { localData };
};

export default useLocalStorage;