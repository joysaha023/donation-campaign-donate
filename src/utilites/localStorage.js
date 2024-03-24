import { json } from "react-router-dom";

export const saveToLocalStorage = (data) => {
    const saveData = JSON.parse(localStorage.getItem("donate")) || [];
    const existedData = saveData.find((item) => item.id == data.id);
    if (!existedData){
        saveData.push(data);
        localStorage.setItem("donate", JSON.stringify(saveData));
        alert("Added successfully data");
    }else{
        alert("Already existed....");
    }
};

export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("donate")) || [];
    return data;
};