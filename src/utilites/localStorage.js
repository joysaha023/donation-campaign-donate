import { json } from "react-router-dom";
import { toast } from "react-toastify";

export const saveToLocalStorage = (data) => {
    const saveData = JSON.parse(localStorage.getItem("donate")) || [];
    const existedData = saveData.find((item) => item.id == data.id);
    if (!existedData){
        saveData.push(data);
        localStorage.setItem("donate", JSON.stringify(saveData));
        toast.success("Added successfully");
    }else{
        toast.warning("Already exist");
    }
};

export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("donate")) || [];
    return data;
};