import * as React from 'react'
import {Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import Contents from './content'
import Top from './header'
import Bottom from './bottom'
import './index.css'
export default class Container extends React.Component {
    constructor(props:Readonly<{}>) {
        super(props)
        this.state = { login: true }
    }

    render() {
        return (
            !true ? <Redirect to='/login' /> :
                <Layout className='containAll' color="#505050">
                    <Layout.Sider collapsible={true} defaultCollapsed={false}>

                    </Layout.Sider>
                    <Layout>
                        <Top></Top>
                        <Contents></Contents>
                        <Bottom></Bottom>
                    </Layout>

                </Layout >

        )
    }
}