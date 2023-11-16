function Events1(){
    function getdata(e,arg2){
        console.log(e.target.name + "value is:"  + e.target.value+" "+arg2);
    }
    return(
        <div>
            <h3>input events</h3>
            <input type ="text" name="firstname" onChange={(e)=>getdata(e,"kishor")}/>

        </div>
    )
}
export default Events1;