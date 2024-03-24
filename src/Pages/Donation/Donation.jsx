import React from 'react';
import useLocalStorage from '../../Hooks/useLocalStorage';
import DonationCard from '../../components/DonationCard/DonationCard';

const Donation = () => {
    const { localData } = useLocalStorage();
    console.log(localData)
    return (
       <>
            <div className='grid mt-12 grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 gap-8'>
                {
                    localData.map((data) => <DonationCard key={data.id} data={data}></DonationCard> )
                }
            </div>
       </>
    );
};

export default Donation;