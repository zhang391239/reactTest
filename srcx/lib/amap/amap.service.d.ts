// TypeScript file

declare namespace AMap {

    class Geolocation {
        constructor(opts: GeolocationOptions);
        isSupported(): boolean;
        getCurrentPosition(callback?: (status, result) => void);
        watchPosition(): number;
        clearWatch(watchId: number);
        getCityInfo(callback: (status, result) => void);
    }

    interface GeolocationOptions {
        /**
         * 是否使用高精度默认值：true
         */
        enableHighAccuracy?: boolean;
        /**
         * 超时毫秒数，若在指定时间内未定位成功，返回超时错误信息“TIMEOUT”
         * 默认值：无穷大
         */
        timeout?: number;
        /**
         * 是否禁止使用IP定位，默认值为0，可选值0-3
         * 0: 可以使用IP定位
         * 1: 手机设备禁止使用IP定位
         * 2: PC上禁止使用IP定位
         * 3: 所有终端禁止使用IP定位
         */
        noIpLocate?: number;
        /**
         * 是否禁止使用浏览器Geolocation定位，默认值为0，可选值0-3
         * 0: 可以使用浏览器定位
         * 1: 手机设备禁止使用浏览器定位
         * 2: PC上禁止使用浏览器定位
         * 3: 所有终端禁止使用浏览器定位
         */
        noGeoLocation?: number;
        /**
         * 默认为false，设置为true的时候可以调整PC端为优先使用浏览器定位，失败后使用IP定位
         */
        GeoLocationFirst?: boolean;
        /**
         * 	缓存毫秒数。定位成功后，定位结果的保留时间
         *  默认值：0
         */
        maximumAge?: number;
        /**
         * 是否使用坐标偏移，取值true:为高德地图坐标，取值false:为浏览器定位坐标
         * 默认值：true
         */
        convert?: boolean;
        /**
         * 是否显示定位按钮
         * 默认值：true
         */
        showButton?: boolean;
        /**
         * 自定义定位按钮的内容。可支持HTML代码或Dom元素对象，不设置该属性则使用默认按钮样式
         */
        buttonDom?: string | HTMLElement;
        /**
         *  定位按钮可停靠的位置
         * “LT”：左上角“LB”：左下角 “RT”：右上角 “RB”：右下角 默认值：“LB”
         */
        buttonPosition?: string;
        /**
         * 按钮距离停靠位置的偏移量
         * 默认值：Pixel(10,20)
         */
        buttonOffset?: Pixel;
        /**
         * 	定位成功时是否在定位位置显示一个Marker
         * 默认值：true
         */
        showMarker?: boolean;
        /**
         * 定位点Marker的配置，不设置该属性则使用默认Marker样式
         * 默认值：true
         */
        markerOptions?: MarkerOptions;
        /**
         * 定位成功并且有精度信息时，是否用一个圆圈circle表示精度范围
         * 默认值：true
         */
        showCircle?: boolean;
        /**
         * 定位点Circle的配置，不设置该属性则使用默认Circle样式
         * 默认值：true
         */
        circleOptions?: CircleOptions;
        /**
         * 定位成功后，是否把定位得到的坐标设置为地图中心点坐标
         * 默认值：true
         */
        panToLocation?: boolean;
        /**
         * 定位成功且显示精度范围时，是否把地图视野调整到正好显示精度范围
         * 默认值：true
         */
        zoomToAccuracy?: boolean;
        /**
         * 是否使用安卓定位sdk用来进行定位，默认：false
         */
        useNative?: boolean;
        /**
         * JSAPI在定位成功的时候会将得到的经纬度进行逆地理编码后获取地址信息，以方便开发者的进一步使用;
         * extensions用来设定是否需要周边POI、道路交叉口等信息，可选值'base'、'all'。
         * 默认为'base',只返回地址信息；
         * 设定为'all'的时候将返回周边POI、道路交叉口等信息。
         */
        extensions?: string;
    }

    interface CircleOptions {

    }

    interface GeolocationResult {
        position: LngLat;
        accuraty: number;
        location_type: string;
        message: string;
        isConverted: boolean;
        info: string;
        addressComponent: AddressComponent;
        formattedAddress: string;
        pois: Array<any>;
        roads: Array<any>;
        crosses: Array<any>;
    }
    interface GeolocationError {
        info: string;
        message: string;
    }

    class CitySearch {
        constructor();
        getLocalCity(cbk: (status: String, result: CitySearchResult) => void): void;
        getCityByIp(ip: String, callback: (status: String, result: CitySearchResult) => void);
    }

    interface CitySearchResult {
        city: string;
        bounds: Bounds;
    }
}