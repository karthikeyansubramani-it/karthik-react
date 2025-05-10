import { useEffect, useState } from "react";

const User = (props) => {

    // const {name, location, contact} = props;
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    const [userInfo, setUserInfo] = useState({});
    const {name, location, email, avatar_url} = userInfo;

    useEffect(() =>{


        console.log("Calling fetchUserData");

        fetchUserData();

        const timer = setInterval(() => {  console.log("timer from user function component");}, 1000);  

        return (() =>{
            clearInterval(timer);
            console.log("User function component will un mount");
        })
      
    

    },[]);

    useEffect(() => {

        console.log("count has increased to " + count);

    }, [count]);

    useEffect(() => {

        console.log("count2 has increased to " + count2);

    }, [count2]);

    const fetchUserData = async () => {

        const data = await fetch("https://api.github.com/users/karthikeyansubramani-it");
        const json = await data.json();
        console.log(json)
        setUserInfo(json);
    }

    return (
        <div className ="user-card">
            <img className = "avatar-img" src={avatar_url} />
            <button onClick = {() => {
                setCount(count+1);
            }}>Count Increment</button>
            <h2>Name : {name}</h2>
            <h2>Count : {count}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {email}</h4>
        </div>
    )
}

export default User;