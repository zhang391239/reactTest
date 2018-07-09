
import * as React from 'react';
import { Form, Input, Button, Icon, Select } from 'antd';
import { InputProps } from 'antd/lib/input'

interface IntergerInputProps extends InputProps {
    onnumchange?: any
}
export default class IntegerInput extends React.Component<IntergerInputProps, any>{
    constructor(props: IntergerInputProps) {
        super(props)
        const value = props.value;
        this.state = {
            number: value,
        };
    }

    // componentWillReceiveProps(nextProps: IntergerInputProps) {
    //     if ('value' in nextProps) {
    //         const value = nextProps.value;
    //         this.setState({ value });
    //     }
    // }

    handleNumerChange(e: any) {
        var a = parseInt(e.target.value || 0, 10);
        if (isNaN(a)) {
            return;
        }
        this.setState({ number: a });
        this.triggerChange({ number: a });
    }

    triggerChange(value: { number?: number }) {
        const onChange = this.props.onnumchange;
        if (onChange) {
            onChange(Object.assign({}, this.state, value));
        }
    }

    render() {
        return (
            <Input
                type="number"
                size={this.props.size}
                value={this.state.number}
                onChange={this.handleNumerChange.bind(this)}
                // style={{ width: '65%', marginRight: '3%' }}
            />
        )
    }
}