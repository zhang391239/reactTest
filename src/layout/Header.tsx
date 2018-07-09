import * as React from 'react';
import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom'
const MenuItem = Menu.Item
class TopHeader extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props)
    }

    menuClick(e:any){
        switch(e.key){
            case "":
            break;
        }
    }
    public render() {
        return (
            <Layout.Header>
                <Menu mode="horizontal" onClick={this.menuClick.bind(this)}>
                    <MenuItem key="Main"><Link to="/" /> 首页</MenuItem>
                    <MenuItem key="Map"><Link to="/map" />地图</MenuItem>
                    <MenuItem key="Stat"><Link to="/stat" />测试</MenuItem>
                </Menu>
            </Layout.Header>)
    }
}

export default TopHeader;