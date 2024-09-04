import React,{ Component,useContext } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
                <div>
                    <b>Log-User:</b>
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <i>{loggedInUser}</i>
                        )}
                    </UserContext.Consumer>
                </div>
                <UserClass name={"RS"} location={"India"} contact={""}/>
            </div>
        )
    }
}

export default About;
