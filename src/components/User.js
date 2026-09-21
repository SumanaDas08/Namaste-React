import React, { useEffect, useState } from "react";

const User = ({name}) => {
    
    const [count] = useState(0);
    
    const [count2] = useState(1);
    useEffect(() => {
      setInterval(() => {
        console.log("Namaste React OP");
      }, 1000)
        
    },[])

    

    
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location:Hyderabad</h3>
        <h4>Contact: @abc</h4>
      </div>
    );
  }


export default User;