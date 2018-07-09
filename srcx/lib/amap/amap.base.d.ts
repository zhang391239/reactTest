
declare namespace AMap {

    class Pixel {

        constructor(x: number, y: number);
        getX(): number;
        getY(): number;
        equals(point: Pixel): boolean;
        toString(): string;
    }

    class Size {
        constructor(width: number, height: number);
        getWidth(): number;
        getHeight(): number;
        toString(): string;
    }

    class LngLat {
        constructor(lng: number, lat: number);
        offset(w: Number, s: Number): LngLat;
        distance(lnglat: LngLat | Array<LngLat>): number;
        getLng(): number;
        getLat(): number;
        equals(lnglat: LngLat): boolean;
        toString(): string;
    }

    class Bounds {
        constructor(southWest: LngLat, northEast: LngLat);
        contains(point: LngLat): boolean;
        getCenter(): LngLat;
        getSouthWest(): LngLat;
        getNorthEast(): LngLat;
        toString(): string;
    }
    
}