import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count : 0,
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
        console.log(json);

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
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1,
                    });
                }}>Like {count}</button>

                <h2>Name : {name} </h2>
                <h3>Location : {location}</h3>
                <h3>Contact : {html_url}</h3>
            </div>
        ) 
    }    
}

export default UserClass;