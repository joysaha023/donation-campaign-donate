import { Spinner } from '@material-tailwind/react';
import React from 'react';

const CustomSpinner = () => {
    return (
        <div className='flex justify-center items-center mt-3'>
            <Spinner color='green' className="h-16 w-16 text-gray-900/50" />
        </div>
    );
};

export default CustomSpinner;