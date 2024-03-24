import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDonationData from '../../Hooks/useDonationData';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Button,
  } from "@material-tailwind/react";

const DonationDetails = () => {
    const [singleData, setSingleData] = useState({});
    const { id } = useParams();
    const { data, loading} = useDonationData();
    
    useEffect(() => {
        if(data) {
            const cardData = data.find((item) => item.id == id);
           setSingleData(cardData)
        }
    }, [data, id]);
    const {image, title, description, price} = singleData || {};

    return (
        <Card className="mt-12 w-full rounded-md shadow-none lg:px-20 overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-md relative"
        >
          <img className='w-full rounded-md lg:h-[550px]'
            src={image}
            alt={title}
          />
          <div className='absolute bottom-0 bg-opacity-40 bg-black w-full h-28 pl-8'>
            <Button className='mt-8 rounded-lg capitalize text-xl bg-red-500' size='md'>Donate ${price}</Button>
          </div>
        </CardHeader>
        <CardBody>
          <Typography variant="h2" color="blue-gray">
            {title}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            {description}
          </Typography>
        </CardBody>
        
      </Card>
    );
};

export default DonationDetails;