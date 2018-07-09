import * as React from 'react';
import { Route } from 'react-router-dom';
import {Layout } from 'antd';
import MapContent from '../pages/map/index';
import StatPage from '../pages/stat/index';
import './content.css'

export default class Contents extends React.Component {
    constructor(props:Readonly<{}>){
        super(props);
        console.log(this.props);

        this.state = {}
    }
    render() {
        return (
            <Layout.Content className='content' color="#808080">
                <Route path="/mapconfig" component={MapContent}></Route>
                <Route path="/stat" component={StatPage}></Route>
            </Layout.Content>
        )
    }
}