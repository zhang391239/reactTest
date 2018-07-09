import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Layout, Input, Form, InputNumber, Button, Icon, Radio } from 'antd'
import IntegerInput from '../../compoents/integerInput'
import './index.css'
import { FormComponentProps } from 'antd/lib/form';

const Component = React.Component;
const FormItem = Form.Item
interface MapProps extends FormComponentProps {
}
const APP_KEY = "50640c625af95e09b33aa09d67c9855b";
const formItemLayout = {
    labelCol: {
        span: 6,
        offset: 1
    },
    wrapperCol: {
        span: 15,
        offset: 1
    },
};
class MapConfig extends Component<MapProps>{
    map: AMap.Map;
    value: string;
    placeSearch: AMap.PlaceSearch;
    mapLocation:AMap.Geolocation;
    constructor(props: MapProps) {
        super(props);
        var script = document.createElement("script")
        script.src = "https://webapi.amap.com/maps?v=1.4.8&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geolocation&key=50640c625af95e09b33aa09d67c9855b&callback=mapInit"
        script.async = true;
        window["mapInit"] = this.mapInit.bind(this);
        document.body.appendChild(script);

    }

    mapInit() {
        var root = document.getElementById("map_root") // ReactDOM.findDOMNode(this.refs.map_root) as HTMLElement;
        // root.setAttribute("style","width:100%;height:100%");
        this.map = new AMap.Map(root!, {});
        var auto = new AMap.Autocomplete({ input: "tipInput",city:"西安市" });
        this.mapLocation = new AMap.Geolocation({
            enableHighAccuracy: false,// 是否使用高精度定位，默认:true
            timeout: 10000,          // 超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),// 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition:'RB',
            noIpLocate:0,
            noGeoLocation:0
        });
        this.placeSearch = new AMap.PlaceSearch({ map: this.map,city:"西安市"});
        AMap.event.addListener(auto, "select", this.onItemSelect.bind(this))

    }

    onItemSelect(e: AMap.AutocompleteEvent) {
        this.placeSearch.setCity(e.poi.adcode);
        this.placeSearch.search(e.poi.name);  // 关键字查询查询
    }
    onLocationClick(){
        this.mapLocation.getCurrentPosition((status:any,result:any)=>{
            console.log(status);
            console.log(result);
        })
    }
    inputSubmit(e: React.FormEvent) {
        console.log(e.target["value"])
    }
    componentDidMount() {
        console.log("");
    }
    render(): JSX.Element {
        const self = this;
        const getFieldDecorator = this.props.form.getFieldDecorator
        return (
            // <Layout className="map_config">
            <div id="map_root" ref="map_root">
                <div className="search_input">
                    <Form>
                        <FormItem className="form_item" label="搜索" {...formItemLayout}>
                            <Input
                                prefix={<Icon type="search"></Icon>}
                                id="tipInput" placeholder="请输入关键字"
                                onPressEnter={this.inputSubmit}
                            />
                        </FormItem>
                        <FormItem className="form_item" label="经纬度" wrapperCol={{span:15,offset:0}} labelCol={{span: 6,offset: 1}} >
                            <Input placeholder="经度" style={{ width: "35%", left: 0}} />
                            <Input placeholder="纬度" style={{ width: "35%", left: "6%" }} />
                            <Button type="primary" style={{ left:"12%" }} onClick={this.onLocationClick.bind(this)}>
                                <Icon type="environment-o" />
                            </Button>
                        </FormItem>
                        <FormItem className="form_item" label="宝箱分布半径" {...formItemLayout}>
                            <Input placeholder="请输入半径" min={0.5} type="number" /></FormItem>
                        <FormItem className="form_item" label="宝箱份数" {...formItemLayout}>
                            <IntegerInput placeholder="请输入数字" value={5} type="number" />
                        </FormItem>
                        <FormItem className="form_item" label="每份数量" {...formItemLayout}>
                            <IntegerInput placeholder="请输入数字" value={5} type="number" />
                        </FormItem>
                        <FormItem className="form_item" label="宝箱内容" style={{ border: "5px solid", borderColor: "#ff00ff", borderRadius: "5px", width: "80%", left: "10%" }}>
                            <Radio.Group>
                                <Radio value={1}>手套</Radio>
                                <Radio value={2}>蛋糕</Radio>
                                <Radio value={3}>棒棒糖</Radio>
                            </Radio.Group>
                        </FormItem>
                        <FormItem >
                            <Button type='primary' style={{ width: '100%' }} htmlType="submit">提交</Button>

                            <Button type='danger' style={{ width: '100%' }}>删除所有</Button>
                        </FormItem>
                    </Form>
                </div>

            </div>
            // </Layout>
        )
    }
}

export default Form.create<FormComponentProps>()(MapConfig);