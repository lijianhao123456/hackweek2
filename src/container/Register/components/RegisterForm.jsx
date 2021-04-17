import { Form, Input, Button,Modal,message } from 'antd';
import React, { Component } from 'react'
import request from '../../../utils/request';

export default class LoginForm extends Component {
  useremail = React.createRef()
  onFinish = (values) => {
    request(
      "/api1/v1/api/registry",
      { ...values },
      "POST"
    ).then((res) => {
      message.success(res.data.msg.detail)
      this.props.history.push("/home");
    });
    console.log('Received values of form: ', values);
  };
  success = (pin) => {
    Modal.success({
      content: `别去邮箱看啦，验证码是${pin}`,
    });
  }
  sendPIN() {
    console.log(this.useremail.current.state.value);
    request(
      "/api1/v1/api/verify",
      { "email": this.useremail.current.state.value },
      "POST"
    ).then((res) => {
      this.success(res.data.msg.email_code)
    })
  }
  render() {
    return (
      <Form
        className="register-form"
        layout="vertical"
        onFinish={this.onFinish}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item name="email" rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}>
          <Input placeholder="请输入邮箱" ref={this.useremail} className="login-input" />
        </Form.Item>
        <Form.Item name="password" rules={[
          {
            required: true,
            message: '请输入邮箱!',
          },
        ]}>
          <Input.Password placeholder="请输入密码" className="login-input" />
        </Form.Item>
        <Form.Item name="code" rules={[
          {
            required: true,
            message: '请输入邮箱!',
          },
        ]}>
          <Input placeholder="请输入验证码" className="login-input" suffix={
            <span style={{ color: "#707070" }} onClick={this.sendPIN.bind(this)}>
              获取验证码
            </span>
          } />
        </Form.Item>
        <Form.Item className="submit">
          <Button className="submit-button" htmlType="submit">GO</Button>
          <div>
            开启我的专属空间
          </div>
        </Form.Item>
      </Form>
    )
  }
}
