import React, { Component } from 'react'
import { CloseOutlined } from "@ant-design/icons";
import CommonHeader from "../../components/CommonHeader/index.jsx"
import LoginForm from "./components/LoginForm.jsx"
import logo from "../../assets/icon/logo1.svg"
import "./login.less"

export default class Login extends Component {
  register() {
    this.props.history.push("/register");
  }
  render() {
    return (
      <div className="login-container">
        <CommonHeader left={<CloseOutlined style={{ color: "black" }} />} title="登录"></CommonHeader>
        <div className="logo">
          <img width="70" src={logo}></img>
        </div>
        <LoginForm ></LoginForm>
        <div className="register" onClick={this.register.bind(this)}>
          没有账号？立即注册
        </div>
      </div>
    )
  }
}
