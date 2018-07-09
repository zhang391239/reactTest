import * as React from 'react';

const Component = React.Component;

interface StatProps{

}

export default class StatTest extends Component<StatProps>{
    constructor(props:StatProps){
        super(props);
    }

    render():JSX.Element{
        return(
            <p>测试界面</p>
        )
    }
}
