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
            <div className="ring-metal ring-2 w-72  ml-96 mt-8">
                <p className="text-center text-wrap text-4xl bg-metal text-white">About</p>
                <div>
                    <b>Log In: </b>
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
