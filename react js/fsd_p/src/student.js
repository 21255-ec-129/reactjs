function St(p){
    // let name='gayathri'
    return(
        // <div>student name is {name}</div>
        <>
           {/* <h3> student name is {p.name} {p.rollno}</h3> */}
            <tr>
                <td>{p.index+1}</td>
                <td>{p.name}</td>
                <td>{p.rollno}</td>
            </tr>
        </>
    )
}
export default St;