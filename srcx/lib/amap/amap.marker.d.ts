// TypeScript file

declare namespace AMap {
    
    class Marker {
        constructor(opts:MarkerOptions);
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
        setShape(shape: any): any;
        getShape(): any;
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
        label?: {content,offset:Pixel};
    }

    class Icon {
        constructor(opt: IconOptions);
        getImageSize(): Size;
        setImageSize(size: Size);
    }

    interface IconOptions {
        size: Size;
        imageOffset: Pixel;
        image: string;
        imageSize: Size;
    }
}