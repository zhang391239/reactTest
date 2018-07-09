// TypeScript file

declare namespace AMap {
    class Map {
        constructor(container: string | HTMLElement, opts?: MapOptions);

        getZoom(): number;
        getLayers(): Array<any>;
        getCenter(): LngLat;
        getContainer(): HTMLDivElement;
        getCity(callback: (result: any) => void): void;
        getBounds(): Bounds;
        getlabelzIndex(): number;
        getLimitBounds(): Bounds;
        getLang(): string;
        getSize(): Size;
        getRotation(): number;
        getStatus(): any;
        getDefaultCursor(): string;
        getResolution(point?: LngLat | number[]): number;
        getScale(dpi: number): number;
        setZoom(level: number): void;
        setlabelzIndex(index: number): void;
        setLayers(layers: Array<any>): void;
        add(overlayers: Array<any>): void;
        remove(overlayers: Array<any>): void;
        getAllOverlays(type?: string): any;
        setCenter(position: LngLat | number[]): void;
        setZoomAndCenter(zoomLevel: number, center: LngLat | number[]): void;
        setCity(city: string, callback?: (result: any) => void): void;
        setBounds(bound: Bounds): void;
        setLimitBounds(bound: Bounds): void;
        clearLimitBounds(): void;
        setLang(lang: string): string;
        setRotation(rotation: number): number;
        setStatus(status: any): void;
        setDefaultCursor(cursor: string): void;
        zoomIn(): void;
        zoomOut(): void;
        panTo(position: LngLat | number[]): void;
        panBy(x: number, y: number): void;
        setFitView(overlayList?: Array<any>): void;
        clearMap(): void;
        destroy(): void;
        plugin(name: string | Array<string>, callback?: (result: any) => void): void;
        addControl(obj: any): void;
        removeControl(obj: any): void;
        clearInfoWindow(): void;
        pixelToLngLat(pixel: Pixel, level: number): LngLat;
        lnglatToPixel(lngLat: LngLat | number[], level: number): Pixel;
        containerToLngLat(pixel: Pixel): LngLat;
        lngLatToContainer(lnglat: LngLat | number[]): Pixel;
        setMapStyle(style: string): void;
        getMapStyle(): string;
        setFeatures(feature: Array<string>): void;
        getFeatures(): Array<string>;
    }
    interface MapOptions {
        view?: any;
        layers?: any[];
        zoom?: number;
        center?: LngLat;
        labelzIndex?: number;
        zooms?: number[];
        lang?: string;
        cursor?: string;
        crs?: string;
        animateEnable?: boolean;
        isHotspot?: boolean;
        defaultLayer?: any;
        rotateEnable?: boolean;
        resizeEnable?: boolean;
        showIndoorMap?: boolean;
        indoorMap?: any;
        expandZoomRange?: boolean;
        dragEnable?: boolean;
        zoomEnable?: boolean;
        doubleClickZoom?: boolean;
        keyboardEnable?: boolean;
        jogEnable?: boolean;
        scrollWheel?: boolean;
        touchZoom?: boolean;
        mapStyle?: string;
        features?: string[];
        showBuildingBlock?: boolean;
        viewMode?: string;
        pitch?: number;
        pitchEnable?: boolean;
        buildingAnimation?: boolean;
        skyColor?: string;
        gridMapForeign?: boolean;
    }
}
