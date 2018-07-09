import * as React from 'react';
import { Form, Input, Button, Icon } from 'antd';
import './index.css'
import { FormComponentProps } from 'antd/lib/form';

const FormItem = Form.Item;

class Login extends React.Component<FormComponentProps>{
    constructor(props: Readonly<FormComponentProps>) {
        super(props)
    }
    public onFormSubmit(e: React.FormEvent) {
        e.preventDefault()
        alert(e)
        console.log(e);
    }
    componentDidMount() {
        console.log(this.props);
    }
    public render(): React.ReactNode {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="loginpage-content">
                <div className="box">
                    <p>欢迎</p>
                    <div className="login-content">
                        <Form onSubmit={this.onFormSubmit.bind(this)} >
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="username:test" />)}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: 'Please input your username!' }],
                                })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="passwd:123456" />)
                            }</FormItem>
                            <Button type="primary" htmlType="submit" className="login-btn">登录</Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form.create<FormComponentProps>()(Login)