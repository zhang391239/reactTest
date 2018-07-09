import * as React from 'react';
import '../../lib/amap'
const APP_KEY = "50640c625af95e09b33aa09d67c9855b";
class MapContent extends React.Component {
    constructor(props:Readonly<{}>) {
        super(props);
        this.state = {
            markerPoses: [],
        }
        
        // this.amapEvents = {
        //     created: (mapInstance) => {
        //         console.log('高德地图 Map 实例创建成功；如果你要亲自对实例进行操作，可以从这里开始。比如：');
        //         console.log(mapInstance.getZoom());
        //     },
        //     click:(position)=>{
        //         console.log(position.lnglat);
        //     }
        // }
        // this.markerEvents = {
        //     created: (markerInstance) => {
        //         //console.log(markerInstance.getPosition());
        //     }
        // }
        //this.markerPoses = [{ longitude: 120, latitude: 30 }, { longitude: 121, latitude: 30 }, { longitude: 120, latitude: 29 }];

    }

    componentDidMount() {
        var self = this;
        fetch("http://139.129.201.13:8081/qinqinbaby/admin/getAllCoordinates").then(
            function (response: Response) {
                response.json().then(
                    function (data) {
                        var coordinates = data.coordinates;
                        var positions = coordinates.map((msg:{coordinate:string}) => {
                            var cood = msg.coordinate.toString().split(',');
                            return { latitude: Number.parseFloat(cood[0]), longitude: Number.parseFloat(cood[1]) };
                        })
                        console.log(positions[0]);
                        self.setState({ markerPoses: positions });

                    }
                )
            }
        ).catch(function (error) { console.log(error) })
    }
    render() {
        return (
            <div id="map" style={{ left: "24px",right: "24px",top: "24px",bottom: "24px",position: "absolute" }}>
                
            </div>
        )
    }
}

export default MapContent;