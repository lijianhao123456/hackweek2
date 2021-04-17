import React, { Component } from 'react'
import { LeftOutlined } from "@ant-design/icons";
import CommonHeader from "../../components/CommonHeader/index.jsx"
import RegisterForm from "./components/RegisterForm.jsx"
import logo from "../../assets/icon/logo1.svg"
import "./Register.less"

export default class Login extends Component {
  register() {
    console.log(this.props);
  }
  back() {
    this.props.history.push("/login")
  }
  render() {
    return (
      <div className="login-container">
        <CommonHeader left={<LeftOutlined style={{ color: "black" }} onClick={this.back.bind(this)} />} title="注册"></CommonHeader>
        <div className="logo">
          <img width="70" src={logo}></img>
        </div>
        <RegisterForm></RegisterForm>
      </div>
    )
  }
}
