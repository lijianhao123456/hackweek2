import { Form, Input, Button, Checkbox } from 'antd';

import React, { Component } from 'react'
import request from '../../../utils/request';

export default class LoginForm extends Component {
  onFinish = (values) => {
    request(
      "http://localhost:8080/api1/v1/api/login",
      { ...values },
      "POST"
    ).then((res) => {
      localStorage.setItem("token", res.data.token);
      this.props.login(res.data.token);
      this.props.history.push("/community/index");
    });
    console.log('Received values of form: ', values);
  };
  render() {
    return (
      <Form
        className="login-form"
        layout="vertical"
        onFinish={this.onFinish}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item name="email" label="账号" rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}>
          <Input placeholder="邮箱" className="login-input" />
        </Form.Item>
        <Form.Item name="password" label="密码" rules={[
          {
            required: true,
            message: '请输入邮箱!',
          },
        ]}>
          <Input.Password placeholder="请输入密码" className="login-input" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox style={{ color: "#4673CE" }}>7日内自动登入</Checkbox>
          </Form.Item>
          <div className="login-form-forgot">
            忘记密码
          </div>
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
