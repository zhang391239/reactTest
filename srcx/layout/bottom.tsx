import * as React from 'react';
import {Layout } from 'antd';
import './bottom.css'

export default class Bottom extends React.Component{
    constructor(props:Readonly<{}>){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <Layout.Footer className='footer' color="#505050">
                
            </Layout.Footer>
        )
    }
}