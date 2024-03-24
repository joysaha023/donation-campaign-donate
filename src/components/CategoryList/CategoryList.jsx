import React from 'react';
import useDonationData from '../../Hooks/useDonationData';
import CardDefault from '../Card/CardDefault';
import CustomSpinner from '../CustomSpinner/CustomSpinner';

const CategoryList = ({filterData, loading}) => {
    if(loading){
        return <CustomSpinner></CustomSpinner>
    }
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl py-3 mx-auto my-12'>
            {
                filterData.map((item) => <CardDefault key={item.id} item={item}></CardDefault>)
            }
        </div>
    );
};

export default CategoryList;