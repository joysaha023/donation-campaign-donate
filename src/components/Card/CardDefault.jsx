import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CardDefault = ({item}) => {
    const {id, title, image, description, category} = item || {};


    return (
       <Link to={`/donation-details/${id}`}>
        <Card className="mt-6 h-full w-full overflow-hidden cursor-pointer">
        <CardHeader color="blue-gray" className="rounded-none m-0">
          <img
            src={image}
            alt={title}
          />
        </CardHeader>
        <CardBody>
        <Button size="sm" className="mb-3">{category}</Button>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
         
        </CardBody>
       
      </Card>
       </Link>
    );
};

export default CardDefault;