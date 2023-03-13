import React from 'react'
import { Button, Form, Input } from 'antd'
import ajax from './utils/request'
function Login({ history, location }) {
    const finish = (val) => {
        ajax({
            method: "post",
            url: "http://vueshop.glbuys.com/api/home/user/pwdlogin?token=1ec949a15fb709370f",
            data: { ...val }
        }).then(res => {
            history.push(location.state.search)
            localStorage.token = res.data.auth_token
        })
    }
    return (
        <div className='login'>
            <div className="title">登录</div>
            <Form onFinish={finish}>
                <Form.Item name='cellphone'>
                    <Input />
                </Form.Item>
                <Form.Item name='password'>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button block htmlType="submit" type="primary">登录</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login
