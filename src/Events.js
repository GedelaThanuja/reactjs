import React from 'react'
class Events extends React.Component{
	state={
		username:""
	}
	handleClick=()=>{
		console.log(this.state.username)
		this.setState({
			username:""
		})
	}
	handleUser=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	render(){
		return(
			<div>
				<input value={this.state.username} name="username" type="text" placeholder="user" onChange={this.handleUser}/>
					<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
}
export default Events
