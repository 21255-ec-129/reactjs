import React,{useState,useEffect} from 'react'
function Testeffect(){
useEffect(()=>{
    console.log("testing");
} ,[]);

    return(
        <div>
            <h1>use effect</h1>
        </div>
    )

    }export default Testeffect;