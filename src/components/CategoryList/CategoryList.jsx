import React from 'react';
import useDonationData from '../../Hooks/useDonationData';
import CardDefault from '../Card/CardDefault';

const CategoryList = () => {
    
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl py-3 mx-auto my-12'>
            {
                data.map((item) => <CardDefault key={item.id} item={item}></CardDefault>)
            }
        </div>
    );
};

export default CategoryList;