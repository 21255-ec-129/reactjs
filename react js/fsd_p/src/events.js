function Eve(){
    // function getdata(name){
    //     alert('Name is:'+name);
    // }
    //let arr=[1,2,3,4];
    // function getdata(res){
    //     console.log(res);
    //     document.write(res);
    // }
    let trainee=[
              {name:'gayathri',
              rollno:234},
              {
                name:'gaya',
                rollno:456
              }]
    function getdata(res){
        res.map((ele,i)=>{
      document.write(i+1 +"."+ele.name+" "+ele.rollno+"<br/>");
        }); 
    }
    return(
        <div>
            <h3>events</h3>
            {/* <button onClick={getdata(this,jdp)}>click hear</button> */}//wrong
            {/* <button onClick={()=>getdata("gayathri")}>click hear</button> */}
            <button onClick={()=>getdata(trainee)}>click hear</button>

        </div>
    )
}
export default Eve;