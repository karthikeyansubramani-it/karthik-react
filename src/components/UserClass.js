import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count:0,
            count2:1,
            userInfo:{}
        }

        console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/karthikeyansubramani-it");
        const json = await data.json();


        this.setState({userInfo:json})
        console.log(json);

        console.log(this.props.name + "Child Component Did Mount");
    }

    componentDidUpdate(prevProps, prevState){

        if(prevState.count !== this.state.count){
            console.log(this.props.name + "Child Component Did Update - count updated " + this.state.count)
        }
        if(prevState.count2 !== this.state.count2){
            console.log(this.props.name + "Child Component Did Update - count2 updated " + this.state.count2)
        }
        console.log(this.props.name + "Child Component Did Update")

        this.timer = setInterval(() => {
            console.log("timer from user class component");
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log(this.props.name + "Child Component will un mount")
    }

    render() {

        console.log(this.props.name + "Child Render");

        // const {name, location, contact} = this.props;
        const {count, count2} = this.state;
        const {name, location, email, avatar_url} = this.state.userInfo;

        return(
                <div className ="user-card">
                    <img className = "avatar-img" src={avatar_url} />
                    <button onClick ={() => {
                        
                        this.setState(
                            { 
                                count : count+1
                            }
                        );
                            
                    }}>Count Increment</button>
                    <h2>Name : {name}</h2>
                    <h2>Count : {count}</h2>
                    <h3>Location: {location} </h3>
                    <h4>Contact: {email}</h4>
                </div>
        );
    }

}

export default UserClass;