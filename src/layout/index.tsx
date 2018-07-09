import * as React from 'react';
import { Layout } from 'antd';
import BottomFoot from './Bottom'
import Contents from './Content'
import TopHeader from './Header'

import './index.css'
import MapConfig from '../pages/map';

class AllContainers extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props)
    }


    public render(): React.ReactNode {
        return (
            <Layout className="container">
                    <Layout.Sider>

                    </Layout.Sider>
                    <Layout>
                        <TopHeader></TopHeader>
                        {/* <MapConfig></MapConfig> */}
                        <Contents></Contents>
                        <BottomFoot></BottomFoot>
                    </Layout>
                </Layout>

        )
    }
}

export default AllContainers;