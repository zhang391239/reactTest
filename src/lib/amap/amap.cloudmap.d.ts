// TypeScript file

declare namespace AMap {
    class CloudDataLayer {

        constructor(tableId: string, opts: CloudDataLayerOptions);
        setMap(map:Map):void;
        getMap():Map;
        setOptions(opts:CloudDataLayerOptions):void;
    }
    interface CloudDataLayerOptions {
        map?: Map;
        query?: CloudDataQuery;
        clickable?: boolean;
    }
    interface CloudDataQuery {
        keywords?: string;
        filter?: string;
    }
    interface Content {
        _id:string;
        _name:string;
        _location:LngLat;
    }
    interface CloudData {
        _id:string;
        _name:string;
        _location:LngLat;
        _adrdess:string;
        _image:Array<Image>;
        _updatetime:string;
        _distance:number;
    }
    interface Image {
        _id:string;
        _preurl:string;
        _url:string;
    }

    class CloudDataSearch {

        constructor(tableId:string,Opts:CloudDataSearchOptions);
        searchNearBy(center: LngLat, radius: number, callback?: (status: string, result: CloudDataSearchResult) => void): void;
        searchInPolygon(path: Array<LngLat>, callback: (status: string, result: CloudDataSearchResult) => void): void;
        searchByDistrict(district: String, callback: (status: string, result: CloudDataSearchResult) => void): void;
        SearchById(id: string, callback: (status: String, result: CloudDataSearchResult) => void): void;
        setOptions(options: CloudDataSearchOptions): void;
        clear(): void;

    }
    interface CloudDataSearchOptions {
        keywords?: string;
        filter?: string;
        orderBy?: string;
        pageSize?: number;
        pageIndex?: number;
        map?: Map;
        panel?: string | HTMLElement;
        autoFitView?: boolean;
    }
    interface CloudDataSearchError{
        info?:string;
    }
    interface CloudDataSearchResult{
        info?:string;
        count?:number;
        datas?:Array<CloudData>;
    }
    
}
