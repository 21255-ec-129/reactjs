// function Ser(){
// return(
//     <div className="a">
//         <p>this isservices page</p>
//     </div>
// )
// }
// export default Ser;

import React,{Component} from "react";
class Services extends Component{
    render(){
        return(
            <div className="a">
                <p>this is services page with class {this.props.name.id}</p>
            </div>
        )

    }
}
export default Services;