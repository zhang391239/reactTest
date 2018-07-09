// TypeScript file

declare namespace AMap {

    class Marker {
        constructor(opts: MarkerOptions);
        markOnAMAP(obj: { name: string, postion: LngLat }): void
        getOffset(): Pixel;
        setOffset(offset: Pixel): void;
        setAnimation(animate: string): void;
        getAnimation(): string;
        setClickable(clickable: boolean): void;
        getClickable(): boolean;
        getPosition(): LngLat;
        setPosition(lnglat: LngLat | number[]): void;
        setAngle(angle: number): void;
        setLabel(label: any): void;
        getLabel(): any;
        getAngle(): number;
        setzIndex(index: number): void;
        getzIndex(): number;
        setIcon(content: string | Icon): void;
        getIcon(): string | Icon;
        setDraggable(draggable: boolean): void;
        getDraggable(): boolean;
        hide(): void;
        show(): void;
        setCursor(cursor: string): void;
        setContent(html: string | HTMLElement): void;
        getContent(): string;
        moveAlong(path: number[][] | LngLat[], speed: number, f?: (k: any) => any, circlable?: boolean): void;
        moveTo(lnglat: LngLat | number[], speed: number, f?: (k: any) => any): void;
        stopMove(): void;
        pauseMove(): void;
        resumeMove(): void;
        setMap(map: Map): void;
        getMap(): Map;
        setTitle(title: string): void;
        getTitle(): string;
        setTop(isTop: boolean): void;
        getTop(): boolean;
        setShadow(icon: Icon): void;
        getShadow(): Icon;
        setShape(shape: MarkShape): void;
        getShape(): MarkShape;
        setExtData(ext: any): void;
        getExtData(): any;
    }

    interface MarkerOptions {
        map?: Map;
        position?: LngLat;
        offset?: Pixel;
        icon?: string | Icon;
        content?: any;
        topWhenClick?: boolean;
        bubble?: boolean;
        draggable?: boolean;
        raiseOnDrag?: boolean;
        cursor?: string;
        visible?: boolean;
        zIndex?: number;
        angle?: number;
        autoRotation?: boolean;
        shadow?: Icon;
        title?: string;
        clickable?: boolean;
        shape?: any;
        extData?: any;
        label?: { content: any, offset: Pixel };
    }

    class Icon {
        constructor(opt: IconOptions);
        getImageSize(): Size;
        setImageSize(size: Size): void;
    }
    interface IconOptions {
        size: Size;
        imageOffset: Pixel;
        image: string;
        imageSize: Size;
    }
    class MarkShape {
        constructor(opt: MarkerShapeOptions);
    }
    interface MarkerShapeOptions {
        coords: Array<Number> /* 可点击区域组成元素数组，存放图形的像素坐标等信息，该数组元素由type决定：
        - circle:coords格式为 [x1, y1, r]，x1，y1为圆心像素坐标，r为圆半径
        - poly: coords格式为 [x1, y1, x2, y2 … xn, yn]，各x，y表示多边形边界像素坐标
        - rect: coords格式为 [x1, y1, x2, y2]，x1，y1为矩形左上角像素坐标，x2，y2为矩形右下角像素坐标
        Markshape的像素坐标是指相对于marker的左上角的像素坐标偏移量 */

        type: String	/* 可点击区域类型，可选值：- circle: 圆形
                                              - poly: 多边形
                                              - rect: 矩形 */
    }

    class ElasticMarker {

    }
    interface ElasticMarkerOptions {

    }

    class Text {

    }

    interface TextOptions {

    }

    class Polyline {

    }

    interface PolylineOptions {

    }

    class Polygon {

    }

    interface PolygonOptions {

    }

    class BezierCurve {

    }

    interface BezierCurveOptions {

    }

    class Circle {

    }

    interface CircleOptions {

    }

    class CircleMarker {

    }

    interface CircleMarkerOptions {

    }

    class Ellipse {

    }

    interface EllipseOptions {

    }

    class Rectangle {
        constructor(opts: RectangleOptions)
        getBounds(): Bounds //	获取矩形范围:
        setBoudns(bounds: Bounds): void //		设置矩形的范围
        setOptions(rectangleopt: RectangleOptions): void //		修改矩形属性（样式风格，包括组成矩形轮廓线的节点、轮廓线样式等。属性详情参看RectangleOptions列表）
        getOptions(): Object //	获取矩形的属性
        hide(): void //		地图上隐藏矩形
        show(): void	//	地图上显示矩形
        setMap(map: Map): void	//	在指定地图上添加该矩形覆盖物。参数取值为null时，在地图上移除当前矩形
        setExtData(ext: any): void	//	设置用户自定义属性，支持JavaScript API任意数据类型，如Rectangle的id等
        getExtData(): any	//获取用户自定义属性
        contains(point: LngLat): Boolean //	判断指定点坐标是否在矩形内
    }

    interface RectangleOptions {
        map: Map	 // 要显示该rectangle的地图对象
        zIndex: Number //	层叠顺序 默认zIndex: 10
        bounds: Bounds //	矩形的范围
        bubble: Boolean //	是否将覆盖物的鼠标或touch等事件冒泡到地图上 默认值：false
        cursor: String //	指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur / ani / ico格式，Opera不支持自定义cursor
        strokeColor: String //	线条颜色，使用16进制颜色代码赋值。默认值为#006600
        strokeOpacity: Number //	轮廓线透明度，取值范围[0, 1]，0表示完全透明，1表示不透明。默认为0.9
        strokeWeight: Number //	轮廓线宽度
        fillColor: String	// 矩形填充颜色, 使用16进制颜色代码赋值。默认值为#006600
        fillOpacity: number //	矩形填充透明度，取值范围[0, 1]，0表示完全透明，1表示不透明。默认为0.9
        strokeStyle: number //	轮廓线样式，实线: solid，虚线: dashed
        extData: any //	用户自定义属性，支持JavaScript API任意数据类型，如Rectangle的id等
        strokeDasharray: Array<Number> /*	勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效， 此属性在ie9 + 浏览器有效 取值：
    实线：[0, 0, 0]
    虚线：[10, 10] ，[10, 10] 表示10 个像素的实线和10 个像素的空白（如此反复）组成的虚线
    点画线：[10, 2, 10]，[10, 2, 10] 表示10 个像素的实线和2 个像素的空白 + 10 个像素的实线和10 个像素的空白 （如此反复）组成的虚线*/
    }

    class OverlayGroup {
        constructor(overlays: Array<Overlay>)
        addOverlay(overlay: Overlay): void //		添加单个覆盖物到集合中，不支持添加重复的覆盖物
        addOverlays(overlays: Array<Overlay>): void //		添加覆盖物数组到集合中，不支持添加重复的覆盖物
        getOverlays(): Array<Overlay> //	返回当前集合中所有的覆盖物
        hasOverlay(overlay: Overlay): Boolean //	判断传入的覆盖物实例是否在集合中
        removeOverlay(overlay: Overlay): void //		从集合中删除传入的覆盖物实例
        removeOverlays(overlays: Array<Overlay>): void //		从集合中删除传入的覆盖物实例数组
        clearOverlays(): void //		清空集合
        eachOverlay(iterator: Function): void /* 对集合中的覆盖物做迭代操作，其中iterator的函数定义是： function(overlay, index, collections)，相关含义如下： 
                                        overlay: 当前迭代到的覆盖物 index: 该覆盖物在集合中的序列号(从0开始) collections: 所有覆盖物实例*/
        setMap(map: Map): Boolean //	指定集合中里覆盖物的显示地图
        setOptions(opt: OverlayOptions): void //	修改覆盖物属性(包括线样式、样色等等)
        show(): void //	在地图上显示集合中覆盖物
        hide(): void //	在地图上隐藏集合中覆盖物
    }
    class Overlay{
        constructor(opt: OverlayOptions)
    }
    interface OverlayOptions{
        
    }
    interface GeoJSONObject{

    }
    class GeoJSON {
        importData(obj:GeoJSONObject): void // 加载新的GeoJSON对象，转化为覆盖物，旧的覆盖物将移除

        toGeoJSON(): GeoJSONObject //将当前对象包含的覆盖物转换为GeoJSON对象

        addOverlay(overlay:Overlay): void // 添加一个覆盖物，如需要在转成GeoJSON的时候将某些信息带给对应GeoJSON对象的properties属性中，可以将信息添加到覆盖物的extData的_geoJsonProperties字段中，如:  



        addOverlays(overlays: Array<Overlay>): void // 添加多个覆盖物，说明同addOverlay

        getOverlays(): void //获取所有覆盖物

        hasOverlay(overlay: Overlay): boolean // 是否包含某个覆盖物

        removeOverlay(overlay: Overlay): void //移除一个覆盖物

        removeOverlays(overlays: Array<Overlay>): void // 移除多个覆盖物

        clearOverlays(): void //清空覆盖物

        eachOverlay(iterator: Function): void //遍历覆盖物

        setMap(map: Map): void // 设置地图

        show(): void // 显示所有覆盖物

        hide(): void // 隐藏所有覆盖物
    }

    interface GeoJSONOptions {
        geoJSON: Object // 要加载的标准GeoJSON对象

        getMarker: (geojson: GeoJSON, lnglat: LngLat) => void //指定点要素的绘制方式，缺省时为Marker的默认样式。 geojson为当前要素对应的GeoJSON对象，lnglat为对应的点的位置

        getPolyline: (geojson: GeoJSON, lnglat: Array<LngLat>) => void //指定线要素的绘制方式，缺省时为Polyline的默认样式。 geojson为当前要素对应的GeoJSON对象，lnglats为对应的线的路径

        getPolygon: (geojson: GeoJSON, lnglat: Array<LngLat>) => void //指定面要素的绘制方式，缺省时为Polygon的默认样式。geojson为当前要素对应的GeoJSON对象，lnglats为对应的面的路径
    }

    class GroundImage {
        constructor(Url: String, bounds: Bounds, opts: GroundImageOptions)
        getMap(): Map // 获取GroundImage的Map对象
        setMap(map: Map): void // 设置显示GroundImage的Map对象
        getOpacity(): Number // 获取图片透明度值
        setOpacity(opacity: Number): void // 设置图片透明度
        getBounds(): Bounds // 获取GroundImage的覆盖地理范围
        getImageUrl(): String	// 获取图片url
    }

    interface GroundImageOptions {
        map: Map // 要显示该groundimage的地图对象
        clickable: Boolean // 图层是否可点击，若为可点击则GroundImage支持鼠标点击事件 默认值：false
        opacity: Number // 图片透明度，取值范围[0,1]，0表示完全透明，1表示不透明 默认值：1
    }

    class ContextMenu {
        constructor(opts: ContextMenuOptions)
        addItem(text: String, fn: Function, num: Number): void // 右键菜单中添加菜单项。参数text:菜单显示内容；fn：该菜单下需进行的操作；num：当前菜单项在右键菜单中的排序位置，以0开始
        removeItem(text: String, fn: Function): void //	删除一个菜单项
        open(map: Map, position: LngLat): void // 在地图的指定位置打开右键菜单。
        close(): void // 关闭右键菜单
    }

    interface ContextMenuOptions {
        position: LngLat // 右键菜单显示的位置 （自v1.2 废弃）
        content: String | HTMLElement //	右键菜单内容（针对自定义菜单时，添加菜单内容及功能。可以是HTML要素字符串或者HTML DOM对象。）
        width: Number // 右键菜单宽度
    }
}
