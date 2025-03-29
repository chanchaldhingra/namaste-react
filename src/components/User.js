import { useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Location: Dehradun</h3>
            <h4>Contact: chanchaldhingra.17@gmail.com</h4>
            <h5>Count: {count}</h5>
        </div>
    );
};

export default User;