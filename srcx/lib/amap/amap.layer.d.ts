// TypeScript file

declare namespace AMap {

    class Layer {

    }
    interface LayerOptions{

    }
    class TileLayer extends Layer {
        constructor(tileOpt: TileLayerOptions);
        setOpacity(alpha: number): void;
        show(): void;
        hide(): void;
        getTiles(): Array<any>;
        reload(): void;
        setTileUrl(): void;
        getZooms(): Array<number>;
        setxIndex(index: number): void;
        setMap(map: Map): void;

    }
    module TileLayer {
        class Satellite {
            constructor(sateOpt: SatelliteOptions);
            setOpacity(alpha: number): void;
            show(): void;
            hide(): void;
            getTiles(): Array<any>;
            reload(): void;
            setTileUrl(): void;
            getZooms(): Array<number>;
            setxIndex(index: number): void;
            setMap(map: Map): void;
        }
        interface SatelliteOptions extends LayerOptions {
            map: Map;
            zIndex: number;
            opacity: number;
            zooms: Array<any>;
            detectRetina: boolean;
        }

        class RoadNet {
            constructor(roadnetOpt: RoadNetOptions);
            setOpacity(alpha: number): void;
            show(): void;
            hide(): void;
            getTiles(): Array<any>;
            reload(): void;
            setTileUrl(): void;
            getZooms(): Array<number>;
            setxIndex(index: number): void;
            setMap(map: Map): void;
        }

        interface RoadNetOptions {
            map: Map;
            zIndex: number;
            opacity: number;
            zooms: Array<any>;
            detectRetina: boolean;
        }

        class Traffic {
            constructor(trafficOpt: TrafficOptions);
            setOpacity(alpha: number): void;
            show(): void;
            hide(): void;
            getTiles(): Array<any>;
            reload(): void;
            setTileUrl(): void;
            getZooms(): Array<number>;
            setxIndex(index: number): void;
            setMap(map: Map): void;
        }

        interface TrafficOptions {
            map: Map;
            zIndex: number;
            opacity: number;
            zooms: Array<any>;
            detectRetina: boolean;
            autoRefresh: boolean;
            interval: number;
        }


    }
    interface TileLayerOptions {
        map: Map;
        tileSize: number;
        tileUrl: string;
        errorUrl: string;
        getTileUrl: string | ((x, y, z) => void);
        zIndex: number;
        opacity: number;
        zooms: Array<number>;
        detectRetina: boolean;
    }

    class MassMarks {
        constructor(data: Array<any>, opts: MassMarksOptions);
        setMap(map: Map): void;
        getMap(): Map;
        setStyle(style: StyleObjectOptions | Array<StyleObjectOptions>): void;
        getStyle(): any;
        setData(data: any);
        getData(): any;
        show(): void;
        hide(): void;
        clear(): void;
    }

    interface MassMarksOptions {
        zIndex: number;
        opacity: number;
        zooms: Array<any>;
        cursor: string;
        alwaysRender: boolean;
        style: StyleObjectOptions | Array<StyleObjectOptions>;
    }

    interface StyleObjectOptions {
        anchor: Pixel;
        url: string;
        size: Size;
        rotation: number;
    }

    interface Heatmap {
        setMap(map: Map): any;
        setOptions(opt: HeatmapOptions): any;
        addDataPoint(lng: number, lat: number, count?: number): any;
        setDataSet(dataset: HeatmapDataSet | HeatmapDataUrl): any;
        hide(): void;
        show(): void;
        getMap(): Map;
        getOptions(): HeatmapOptions;
        getDataSet(): any;
    }

    interface HeatmapLngLatData {
        lng: number;
        lat: number;
        count?: number;
    }
    interface HeatmapDataSet {
        max?: number;
        data: HeatmapLngLatData[];
    }
    interface HeatmapDataUrl {
        data: string;
        dataParser: (data: any) => HeatmapLngLatData[];
    }

    interface HeatmapOptions {
        radius: number;
        gradient: any;
        opacity: Array<any>;
        zooms: Array<any>;
    }


    class Buildings {
        constructor(opts: BuildingsOptions);
        setMap(map: Map): void;
        show(): void;
        hide(): void;
        setStyle(): void;
    }

    interface BuildingsOptions {
        zooms: [number, number];
        opacity: number;
        heightFactor: number;
        visible: boolean;
        map: Map;
        zIndex: number;
    }

    class LayerGroup {
        constructor(layers: Array<any>);
        addLayer(layer: Layer);
        addLayers(layer: Array<any>);
        getLayers():Array<any>;
        hasLayer(layer:Layer):boolean;
        removeLayer(layer:Layer);
        removeLayers(layers:Array<any>);
        clearLayers():void;
        eachLayer(iterator:Function);
        setMap(map:Map):boolean;
        setOptions(opt:LayerOptions):void;
        show();
        hide();
    }
}