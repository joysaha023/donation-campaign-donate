import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

const DonationCard = ({data}) => {
    const {title, category, image, } = data || {};

    return (
        <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
      <Button size="sm" className="mb-3">{category}</Button>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
       
        <a href="#" className="inline-block">
        <Button size="md" className="mb-3 bg-red-500">View Details</Button>
        </a>
      </CardBody>
    </Card>
    );
};

export default DonationCard;