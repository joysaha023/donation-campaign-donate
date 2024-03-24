import React from 'react';
import useDonationData from '../../Hooks/useDonationData';

const CategoryList = () => {
    const {data, loading} = useDonationData();
    console.log(data)
    return (
        <div>
            <h2>Category......</h2>
        </div>
    );
};

export default CategoryList;