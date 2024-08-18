import React,{ Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{

    constructor(props){
        super(props);

        // console.log('parent costructor');
    }

    // componentDidMount() {
    //     // console.log('parent component did mount');
    // }

    render() { 

        // console.log('parent render');

        return (
            <div className="about-header">
                <h1>About</h1>
                <h4>This is About Page for Information</h4>
                <UserClass name={"Rohan Sable (Developer)"} location={"Kalyan, Maharashtra"} contact={"sablerohan61@gmail.com"}/>
            </div>
        )
    }
}

export default About;