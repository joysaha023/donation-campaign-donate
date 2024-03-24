import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryList from '../../components/CategoryList/CategoryList';
import useDonationData from '../../Hooks/useDonationData';

const Home = () => {
    const [value, setValue] = useState("");
    const {data, loading} = useDonationData();
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        setFilterData(data);
    }, [data])


    const handleSearch = () => {
        if(value.trim() != ""){
            const filteredData = data.filter((item) => item.category.toLowerCase().includes(value.toLowerCase()))
            setFilterData(filteredData)
        }else{
            setFilterData(data)
        }
    }
    return (
        <div>
            <Banner setValue={setValue} handleSearch={handleSearch}></Banner>
            <CategoryList filterData={filterData}></CategoryList>
        </div>
    );
};

export default Home;