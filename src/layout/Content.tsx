import * as React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'
import { MapConfigPage, StatPage } from '../pages'
import './Content.css'

class Contents extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props)
    }


    public render() {
        return (
            <Layout.Content className="content">
                <Switch>
                    <Route exact={true} path="/" render={() => <p>首页</p>}></Route>
                    <Route path="/stat" component={StatPage}></Route>
                    <Route path="/map" component={MapConfigPage}></Route>
                </Switch>

            </Layout.Content>
        )
    }
}

export default Contents;