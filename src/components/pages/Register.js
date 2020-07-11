import React, { Component } from 'react';
import Dialogue from "./Dialogue";
class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            isOpen: false,
            dailogdata: '',
        }
    }


    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        fetch('http://127.0.0.1:5000/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        }).then(response =>response.json())
        .then(data => this.setState({ dailogdata: data}))
        .then(this.setState({ isOpen: true }))
    
      };
    render() {
        const { name, email, password } = this.state
        return (
            <div className="container col-xs-offset-3 col-xs-6 col-md-offset-4 col-md-4" >
                <div className='py-4'></div>
                <h1>Register Page</h1>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label for="exampleInputName">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.changeHandler}
                            className="form-control" id="exampleInputName" placeholder="Enter Your Name" required></input>
                    </div>
                    <div className="form-group"  >
                        <label for="exampleInputEmail1">Email address</label>
                        <input

                            type="email"
                            name="email"
                            value={email}
                            onChange={this.changeHandler}
                            
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your email" required></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.changeHandler}

                            className="form-control" id="exampleInputPassword1" placeholder="Password" required></input>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <Dialogue isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
             {this.state.dailogdata}
            </Dialogue>
            </div>
  
        );
    }
}

export default Register;