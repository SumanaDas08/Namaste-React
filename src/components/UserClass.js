import React from "react";

class UserCLass extends React.Component {
constructor(props){
    super(props);
    this.state = {
        count: 0,
        count2: 2,
        userInfo: {
            name: "Dummy",
            location: "Default",
        },
    };
    console.log("Child constructor");
}
     componentDidMount(){
        this.timer = setInterval(() => {
            console.log("Namaste React OP")
        }, 1000);
     
        

        console.log("child - componentDidMount" + this.props.name);
    } 
    
    
    componentDidUpdate(){
        console.log("component did update");
    }
    
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("component will unmount");
    }
    

    render() {
        const { name, location } = this.state.userInfo;
        const {count, count2} = this.state;

        
        
        return (
        <div className="user-card">
            <h2>Count: {count}</h2>
            <button
            
                onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}
            >
                Count
            </button>
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @abc</h4>
      </div>
    
    );
    }
}

export default UserCLass;