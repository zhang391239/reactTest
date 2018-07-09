import * as React from 'react';
import { Form, Input, Button, notification, Icon } from 'antd';
import {withRouter} from 'react-router-dom';
import './index.css'


const FormItem = Form.Item;
class LoginPage extends React.Component {
    constructor(props) {
        super(props)
    }
    onFormSubmit(e:Event){
        e.preventDefault();
        this.props.history.push('/')
    }
    render() {
        //const { getFieldDecorator } = this.props.form;
        return (
            <div className='loginpage-content'>
                <div className='box'>
                    <p>欢迎</p>
                    <div className="login-content">
                        <Form onSubmit={this.onFormSubmit.bind(this)}>
                            <FormItem>
                                <Input placeholder="username:test"/>
                            </FormItem>
                            <FormItem>
                                <Input type='password' placeholder="passwd:123456"/>
                            </FormItem>
                            <Button type='primary' htmlType='submit' className='login-btn'>登录</Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;