import { useState } from "react"
function Array(){
    const [arr,setArr]=useState(['apple','banana','papaya','kiwi','mango'])
    const [frname,setFruname]=useState('')
    const [msg,setMsg]=useState('')

    const filtFru=()=>{
        console.log(frname)
        console.log(arr)
        let output=arr.filter((ele,i)=>{
            return (ele===frname)
        })
        if(output.length==0){
            setMsg('not found')
            setArr(['apple','banana','papaya','kivi','mango'])
        }
        else{
            setMsg('')
            setArr(output);
        }

    }
    return(
        <div>
            <input type="text" onChange={(e)=>setFruname(e.target.value)}/>
            <button onClick={filtFru}>find</button>
            <br/>
            <ul style={{'display':'inline-block'}}>
                {
                    arr.map((ele)=>{
                        return(<li>{ele}</li>)
                    })
                }
            </ul>
            <p>{msg}</p>
        </div>
    )
}
export default Array;