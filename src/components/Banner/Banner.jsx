import { Button, Input, Typography } from "@material-tailwind/react";
import React from 'react';

const Banner = () => {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
   

  return (
    <div className="h-[450px] relative border flex flex-col justify-center items-center border-y-amber-400">
        <dir className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat opacity-10">

        </dir>
      <Typography className="mb-4" variant="h2">I Grow By Helping People In Need</Typography>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="text"
          label="Search"
          value={email}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color="red"
          
          className="!absolute right-1 top-1 rounded"
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
};

export default Banner;