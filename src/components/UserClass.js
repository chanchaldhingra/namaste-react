import React from "react";
import Shimmer from "./Shimmer";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: '',
                location: '',
                avatar_url: ''
            }
        };
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/chanchaldhingra');
        const json = await data.json();
        this.setState({
            userInfo: json
        });
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: chanchaldhingra.17@gmail.com</h4>
                <img src={avatar_url} />
            </div>
        );
    }
}

export default UserClass;