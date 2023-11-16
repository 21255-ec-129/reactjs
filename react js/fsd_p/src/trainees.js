 import St from "./student";
 function Trainee(){
    let student=[{
        name:'gayathri',
        rollno:'268'
    },
    {
        name:'gaya',
        rollno:'238'
    }]
    return(
        <div> 
            <h1>trainee list</h1>
            {/* <student name='raju' rollno='234'/>
            <student name='rani' rollno='224'/> */}

            <table border={1} cellspacing={0} align='center'width={'500px'} >
                <tr><th>s.no</th><th>name</th><th>rollno</th></tr>
          {   
      student.map((ele,i,arr)=>{
       return (<St  index={i} name={ele.name} rollno={ele.rollno}/>)
          })
          }
          </table> 
        </div>
    )
}
export default Trainee;