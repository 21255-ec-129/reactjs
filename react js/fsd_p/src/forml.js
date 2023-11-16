// import React ,{useState}from "react";
// function Form1(){
//     const [data,setData]=useState({
//         email:"",
//         password:""
//     })
//     function handleInputChange(event){
//         const {name,value}=event.target;
//         setData((previousprops)=>({
//             ...previousprops,
//             [name]:value
//         }))
//     }
//     function handleSubmit(event){
//         event.prevenDefault();
//         console.log(data);
//     }
//     return(
//         <div>
//             <h3>form page</h3>
//             <form onSubmit={handleSubmit}>
//                 <label>roll.no</label>
//                 <input type="text" name="rollno"  value={data.email} onChange={handleInputChange}/>
//                 <br/>
//                 <label>name</label>
//                 <input type="password" name="password"  value={data.password} onChange={handleInputChange}/>
//                 <br/>
//                 <input type="submit" value="submit"/>
//             </form>
//         </div>
//     )
// }
// export default Form1;
import React, { useState } from "react";
function Form1(){
    const [data,setData] = useState({
        email : "",
        password : "",
        rollno : ""
    })
    function handleInputChange(event){
        const {name,value} = event.target;
        setData((previousProps) => ({
            ...previousProps,
            [name]:value
        }))
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(data);
    }
    

    return(
        <>
        <h1>this is form page</h1>
        <form onSubmit = {handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" value={data.email} onChange={handleInputChange}  />
            <br />
            <label>password</label>
            <input type="password" name="password" value={data.password} onChange={handleInputChange} />
            <br />
            <label>rollno</label>
            <input type="text" name="rollno" value={data.rollno} onChange={handleInputChange} />
            <br />
            <input type="submit" value="submit" />
        </form>
        </>

    )
}
export default Form1;