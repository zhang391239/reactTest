declare namespace AMap {
    class Autocomplete {
        constructor(opts: AutocompleteOptions)
        search(keyword: String, callback: (status: String, result: any | AutocompleteResult) => void): void
        setType(type: String): void
        setCity(city: String): void
        setCityLimit(value: Boolean): void

    }
    interface AutocompleteEvent extends MapEvent {
        poi: Poi;
    }
    class PlaceSearch {
        constructor(opt: PlaceSearchOptions)
        search(keyword: String, callback?: (status: String, result: string | SearchResult) => void): void
        searchNearBy(keyword: String, center: LngLat, radius: Number, callback: (status: String, result: string | SearchResult) => void): void
        searchInBounds(keyword: String, bounds: Bounds | Polygon, callback: (status: String, result: string | SearchResult) => void): void
        getDetails(POIID: String, callback: (status: String, result: string | SearchResult) => void): void
        setType(type: String): void
        setCity(city: String): void
        setCityLimit(value: Boolean): void
        setPageIndex(pageIndex: Number): void
        setPageSize(setPageSize: Number): void
        setLang(lang: String): string
        getLang(): string
        clear(): void
        poiOnAMAP(obj: Object): void
        detailOnAMAP(obj: Object): void
    }

    class PlaceSearchLayer {

    }

    class DistrictSearch {

    }

    class LineSearch {

    }

    class StationSearch {

    }


    interface AutocompleteOptions {
        type?: String // 输入提示时限定POI类型，多个类型用“|”分隔，POI相关类型请在网站“相关下载”处下载 目前只支持Poi类型编码如“050000” 默认值：所有类别

        city?: String // 输入提示时限定城市。可选值：城市名（中文或中文全拼）、citycode、adcode；默认值：“全国”

        datatype?: String // 返回的数据类型 可选值：all-返回所有数据类型、poi-返回POI数据类型、bus-返回公交站点数据类型、busline-返回公交线路数据类型 目前暂时不支持多种类型

        citylimit?: Boolean // 是否强制限制在设置的城市内搜索,默认值为：false true：强制限制设定城市，false：不强制限制设定城市

        input?: String | HTMLInputElement // 可选参数，用来指定一个input输入框，设定之后，在input输入文字将自动生成下拉选择列表。支持传入输入框DOM对象的id值，或直接传入输入框的DOM对象。

        output?: String | HTMLDivElement //可选参数，指定一个现有的div的id或者元素，作为展示提示结果的容器，当指定了input的时候有效，缺省的时候将自动创建一个显示结果面板

        outPutDirAuto?: Boolean // 默认为true，表示是否在input位于页面较下方的时候自动将输入面板显示在input上方以避免被遮挡
    }

    interface AutocompleteResult {
        info: String // 查询状态说明

        count: Number // 输入提示条数

        tips: Array<Tip> // 输入提示列表
    }

    interface Tip {
        name: String // 名称

        district: String // 所属区域

        adcode: String //区域编码

    }


    interface PlaceSearchOptions {
        city?: String // 兴趣点城市 可选值：城市名（中文或中文全拼）、citycode、adcode 默认值：“全国”

        citylimit?: Boolean // 是否强制限制在设置的城市内搜索，默认值为：false true：强制限制设定城市，false：不强制限制设定城市

        children?: Number // 是否按照层级展示子POI数据, 默认0 children = 1，展示子节点POI数据，children = 0，不展示子节点数据

        type?: String /** 兴趣点类别，多个类别用“|”分割，如“餐饮 | 酒店 | 电影院” POI搜索类型共分为以下20种：

                        汽车服务 | 汽车销售 | 汽车维修 | 摩托车服务 | 餐饮服务 | 购物服务 | 生活服务 | 体育休闲服务 |

                        医疗保健服务 | 住宿服务 | 风景名胜 | 商务住宅 | 政府机构及社会团体 | 科教文化服务 |

                        交通设施服务 | 金融保险服务 | 公司企业 | 道路附属设施 | 地名地址信息 | 公共设施

                        默认值：餐饮服务、商务住宅、生活服务*/

        lang?: String // 检索语言类型 可选值：zh_cn：中文简体，en：英文 默认为: zh_cn：中文简体

        pageSize?: Number // 单页显示结果条数 默认值：10 取值范围：1 - 50，超出取值范围按最大值返回

        pageIndex?: Number //页码。（如pageIndex为2，pageSize为10，那么显示的应是第11 - 20条返回结果） 默认值：1 取值范围：1 - 100，超过实际页数不返回poi

        extensions?: String //此项默认值：base，返回基本地址信息 取值：all，返回基本 + 详细信息

        map?: Map //AMap.Map对象, 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上。可选值

        panel?: String | HTMLElement //结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。可选值

        showCover?: Boolean // 在使用map属性时，是否在地图上显示周边搜索的圆或者范围搜索的多边形，默认为true

        renderStyle?: String //如使用了map或panel属性，renderStyle可以用来设定绘制的UI风格，缺省为'newpc' 可选值: 'newpc'或'default'，'newpc'为带图片展示的新样式，'default'为原有简单样式。

        autoFitView?: Boolean //用于控制在搜索结束后，是否自动调整地图视野使绘制的Marker点都处于视口的可见范围
    }

    interface SelectChangeEvent {

    }

    interface SearchResult {

    }
    interface PoiList {

    }

    interface CityInfo {

    }
    interface Poi {
        id: String // 全局唯一ID

        name: String // 名称

        type: String // 兴趣点类型

        location: LngLat //兴趣点经纬度

        address: String //地址

        distance: Number //离中心点距离，仅周边查询返回

        tel: String // 电话

        website: String // 网址

        pcode: String // poi所在省份编码

        citycode: String // poi所在城市编码

        adcode: String //poi所在区域编码

        postcode: String // 邮编

        pname: String // poi所在省份

        cityname: String // poi所在城市名称

        adname: String // poi所在行政区名称

        email: String // 电子邮箱

        entr_location: LngLat //入口经纬度，POI点有出入口信息时返回，否则返回空字符串

        exit_location: LngLat //出口经纬度，POI点有出入口信息时返回，否则返回空字符串

        groupbuy: Boolean // poi是否有团购信息，true为存在团购信息

        discount: Boolean // poi是否有优惠信息，true为存在优惠信息
    }
    interface Discount {

    }
    interface Groupbuy {

    }
    interface Dining {

    }
    interface Hotel {

    }
    interface Cinema {

    }

    interface Scenic {

    }

    interface Photo {

    }

    interface Content {

    }



}