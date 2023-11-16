import React ,{useState}from "react";
function Form(){
    const [rollno,setRollno]=useState('')
    const [name,setName]=useState('')
    function handleSubmit(event){
        event.preventDefault();
        alert("my roll no is"+rollno);
        alert("name is"+name)
    }

    //console.log(rollno)
    return(
        <div>
            <h3>form page</h3>
            <form onSubmit={handleSubmit}>
                <label>roll.no</label>
                <input type="text" name="rollno" onChange={(e)=>setRollno(e.target.value)}/>
                <br/>
                <label>name</label>
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
                <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default Form;