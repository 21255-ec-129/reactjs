import { useState } from "react";
function Hook(){
    let cnt=0
    //let cnt = useState(0)
    //const [cnt,setCnt]=useState(0)//const cnt=0 clickfun setcnt(0)
    //const [cnt,setCnt]=useState(0)//const cnt=10 clickfun setcnt(10)
    const getcount=(count)=>{
        cnt=++count
        console.log(cnt)
    }
    return(
        <div>
            <h3>hooks in react</h3>
            <p>count is {cnt}</p>
            <button onClick={()=>getcount(cnt)}>count</button>
        </div>
    )
}
export default Hook;
//2nd way
// function Hook(){
//     const [cnt,setCnt]=useState(0)
//     const [name,setName]=useState('')
//     return(
//         <div>
//             <h3>hooks in react</h3>
//             <p>count is {cnt}</p>
//             <button onClick={()=>setCnt(cnt+1)}>count</button>
//             <br/>
//             <input type="text" onChange={(e)=>setName(e.target.value)}/>
//             <p>name is {name}</p>
//         </div>
//     )
// }
// export default Hook;