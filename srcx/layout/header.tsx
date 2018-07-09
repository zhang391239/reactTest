import * as React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import './header.css'
import MenuItem from 'antd/lib/menu/MenuItem';

const { Header } = Layout;
export default class Top extends React.Component {
    constructor(props:Readonly<{}>) {
        super(props)
    }

    render() {
        return (
            <Header color="#505050">
                <Menu mode='horizontal'>
                    <MenuItem><Link to="/mapconfig">地图</Link></MenuItem>
                    <MenuItem><Link to="/stat">统计</Link></MenuItem>
                </Menu>
            </Header>
        )
    }
}

