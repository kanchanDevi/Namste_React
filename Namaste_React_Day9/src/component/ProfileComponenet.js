import React, {Component} from 'react';

class ProfileComponenet extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            userInfo:{
                name:"kanchan",
                health:"so good"
            }
        }
    }
   
    componentDidMount=()=>{
       console.log("componentdidmount")//after render our componentDidMount will call
    }

    incre=()=>{
        this.setState(previousValue => ({
            count: previousValue.count + 1,
          }));
        }
  
        decre=()=>{
            this.setState((prevState)=>({
                count:prevState.count-1
            }))
        }
componentDidUpdate=()=>{
    console.log("componentDidUpdate") //it will call when code will update 
}
componentWillUnmount=()=>{
    console.log("componentWill Unmount") // cancel all the subscriptions that were previously created in the componentwillUnmount
}
    render(){
        const {count}=this.state
        return(
<>
<button type="button" className='increament' onClick={this.incre}>+</button>
<p className='count'>{this.state.count}</p>
<button type="button" className='decreament' onClick={this.decre}>-</button>
<h1>my {this.state.userInfo.name}</h1>
</>
        )
        }
}

// child constructor
//  child render
//  child componentDidMount
//  API call
//  Set State
//  <UPDATE CYCLES>
//  render
export default ProfileComponenet