import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count : 157,
            userInfo : {
                name : "",
                location : "",
                html_url : ""
            }
        };

        // console.log(this.props.name+ ' child costructor');
    }

    async componentDidMount() {
        // console.log(this.props.name+' child component did mount');
        const data = await fetch("https://api.github.com/users/dadiRohan");
        const json = await data.json();
        // console.log(json);

        this.setState({
            userInfo : json
        })
    }

    render () {
        const {count} = this.state;
        const {name,location,html_url} = this.state.userInfo;

        // console.log(this.props.name+' child render');

        return (
            <div className="user-card">
                <h2 className="text-justify"> <span className=" font-semibold">User Name :</span>  {name} </h2>
                <h3 className="text-justify"> <span className=" font-semibold">Location :</span> {location} </h3>
                <h3 className="text-justify"> <span className=" font-semibold">Contact :</span> {html_url} </h3>

                <div className="text-center">
                <button className="m-1 p-1 text-white bg-purple text-center"
                onClick={()=>{
                    this.setState({
                        count : this.state.count + 1,
                    });
                }}>Like {count}</button>
                </div>

            </div>
        ) 
    }    
}

export default UserClass;