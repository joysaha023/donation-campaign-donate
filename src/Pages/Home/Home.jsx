import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryList from '../../components/CategoryList/CategoryList';
import useDonationData from '../../Hooks/useDonationData';

const Home = () => {
    const [value, setValue] = useState("");
    const {data, loading} = useDonationData();
    const [filterData, setFilterData] = useState([]);

    const handleSearch = () => {
        if(value.trim() != ""){
            const filterData = data.filter((item) => item.category.toLowecase().includes(value.toLowerCase()))
            setFilterData(filterData)
        }else{
            setFilterData(data)
        }
    }
    return (
        <div>
            <Banner setValue={setValue} handleSearch={handleSearch}></Banner>
            <CategoryList></CategoryList>
        </div>
    );
};

export default Home;