import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class About extends React.Component{

    constructor(){

        super();

        console.log("Parent Constructor");

    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }

    render(){
        console.log("Parent Render");
        return (
    
            <div>
                <h1>About US</h1>
                <User name = {"Karthik function"} location={"Chennai"} contact ={"karthik@gmail.com"}/>
                <UserClass name = {"Karthik class"} location={"Chennai "} contact ={"karthik@gmail.com"}/>
                <UserClass name = {"Karthik class 2 "} location={"Chennai "} contact ={"karthik@gmail.com"}/>
            </div>
        )
    }

}

// const About = () => {

//     return (
    
//         <div>
//             <h1>About US</h1>
//             <User name = {"Karthik function"} location={"Chennai"} contact ={"karthik@gmail.com"}/>
//             <UserClass name = {"Karthik class"} location={"Chennai "} contact ={"karthik@gmail.com"}/>
//         </div>
//     )
// }

export default About