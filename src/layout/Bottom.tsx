import * as React from 'react';
import {Layout} from 'antd';

class BottomFoot extends React.Component{
    constructor(props:Readonly<{}>){
        super(props)
    }


    public render(){
        return(
            <Layout.Footer/>
        )
    }
}

export default BottomFoot;