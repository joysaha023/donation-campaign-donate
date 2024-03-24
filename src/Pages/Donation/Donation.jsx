import React, { useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import DonationCard from "../../components/DonationCard/DonationCard";
import { Button } from "@material-tailwind/react";

const Donation = () => {
  const { localData } = useLocalStorage();
  const [seeAll, setSeeAll] = useState(false);

  const handleSeeAll = () => {
    setSeeAll(!seeAll);
  };

  if(localData.length === 0){
    return<p className="text-6xl text-center py-20 text-red-500">No data found..</p>
  }

  return (
    <>
      <div className="grid mt-12 grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 gap-8">
        {localData.slice(0, seeAll ? localData.length : 4).map((data) => (
          <DonationCard key={data.id} data={data}></DonationCard>
        ))}
      </div>
      {localData.length > 4 ? (
        <div className="text-center my-4">
          <Button onClick={handleSeeAll} color="green">
            {!seeAll ? "See All" : "See Less"}
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default Donation;
