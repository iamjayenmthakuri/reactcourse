import React from 'react';
import Axios from "axios";
import useQuery from "@tankStack/react-query"; 

export const Catfact =()=>{
    const {data:catFct} =
    useQuery(["cat"]),async ()=>
    return Axios.get("https://")
}