import * as React from 'react'
import { Button, Form } from 'antd';
import './index.css';

const SiteID = '1274049924';
const user = { 'user': '15691837355' }
const items = [
    { event: 'user_use_item', params: ["_trackEvent","道具", "用户购买道具", "棒棒糖", 0], title: '用户使用棒棒糖' },
    { event: 'user_use_item', params: ["_trackEvent","道具", "用户购买道具", "蛋糕", 0], title: '用户使用蛋糕' },
    { event: 'user_use_item', params: ["_trackEvent","道具", "用户购买道具", "手套", 0], title: '用户使用手套' },
    { event: 'user_use_item', params: ["_trackEvent","道具", "用户购买道具", "主题", 0], title: '用户使用主题' },
    { event: 'user_buy_item', params: ["_trackEvent","道具", "用户使用道具", "棒棒糖", 0], title: '用户购买主题' },
    { event: 'user_buy_item', params: ["_trackEvent","道具", "用户使用道具", "蛋糕", 0], title: '用户购买手套' },
    { event: 'user_buy_item', params: ["_trackEvent","道具", "用户使用道具", "手套", 0], title: '用户购买蛋糕' },
    { event: 'user_buy_item', params: ["_trackEvent","道具", "用户使用道具", "主题", 0], title: '用户购买棒棒糖' },
    { event: 'user_login', params: ["_setCustomVar","用户最后一次登录",user,1], title: '用户最后一次登录' },
    { event: 'user_login', params: ["_trackEvent","登录","用户登录",user,1], title: '用户登录' },


]
class StatPage extends React.Component {

    private CZC = {push:([])=>{}};
    constructor(props:Readonly<{}>) {
        super(props)
        var script = document.createElement("script");
        script.async = true;
        const self = this;
        window["_czc"] = this.CZC;
        script.src = "https://s22.cnzz.com/z_stat.php?id=1274049924&web_id=1274049924";
        var t = document.getElementById("czc");
        t!.appendChild(script);
        script.onload = script["onreadystatechange"] = function () {
            if (!this["readyState"] || this["readyState"] == 'loaded' || this["readyState"] == 'complete') {
                self.CZC = window["_czc"];
                self.CZC.push(["_setAccount", "1274049924"])
            }
        }
    }
    componentDidMount() {
        //this.MtaH5.pgv();
    }

    render() {
        return (
            <fieldset>
                <Form layout='vertical' className='form-content'>
                    {items.map((value, index) => {
                        return (<Form.Item key={index} className='form_item'>
                            <Button id='btn' onClick={this.onBtnClick.bind(this, value)}>
                                {value.title}
                            </Button>
                        </Form.Item>)
                    })}
                </Form>
            </fieldset>


        )
    }

    onBtnClick(value:{params:Array<string>}) {
        this.CZC.push(value.params);
    }
}


export default StatPage;