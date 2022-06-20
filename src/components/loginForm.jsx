import React, { Component } from "react";
import Input from "../common/input";
import Form from "../common/form";
import Joi from "joi-browser";
import { getEmployees } from "../services/fakeEmployeesData";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
    employees: getEmployees(),
  };

  //define joi validation schema
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  handleLogin = () => {
    const employee = this.state.employees;
    const { data } = this.state;
     
    const res = employee.find( user => user.username === data.username)
    if(res){
      if(res.password !== data.password){
        console.log("Invalid");
      } else {
        this.props.history.push("/employees");
        console.log("logged In");
      }
    } else {
      console.log("invalid username");
    }
  };

  doSubmit = () => {
    // call from server
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username","Username")}
          {this.renderInput("password","Password", "password")}
          {this.renderButton("Login")}         
        </form>
      </div>
    );
  }
}

export default LoginForm;
