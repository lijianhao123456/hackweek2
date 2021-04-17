import React, { Component } from 'react'
import { Menu } from 'antd';
import { LeftOutlined } from "@ant-design/icons";
import CommonHeader from "../../components/CommonHeader/index.jsx"
import userIcon from "../../assets/icon/userIcon.svg"

export default class Login extends Component {
  register() {
    console.log(this.props);
  }
  back() {
    this.props.history.push("/login")
  }
  state = {
    current: 'mail',
  };
  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
    console.log(this.props);
    this.props.history.push(`/home/${e.key}`)
  };
  render() {
    const { current } = this.state;
    return (
      <div className="login-container">
        <CommonHeader left={<LeftOutlined style={{ color: "black" }} onClick={this.back.bind(this)} />} right={<img src={userIcon}></img>} title="D°C"></CommonHeader>
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="mail">
            Navigation One
          </Menu.Item>
          <Menu.Item key="app">
            Navigation Two
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
