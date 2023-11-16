import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
function Productinfo(){
    const { id } = useParams();
    const [data,setData] = useState([])

    console.log(id)
    const api =`https://fakestoreapi.com/products/${id}`;
    
    useEffect(()=>{
        singleproduct()
    },[id])
    const singleproduct = ()=>{
        axios.get(api).then((response)=>{
            setData(response.data)
        })
    }
    return(
        <div>
            <h1>single product</h1>
            <div className="card">
            <img src={data.image} alt=" "/>
                <p>{data.tittle}</p>
                <p>{data.price}</p>
                <p>{data.categorie}</p>

            </div>
            
        </div>
    )
}export default Productinfo;