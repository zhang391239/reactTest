// TypeScript file

declare namespace AMap {
    module event {
        export function addDomListener(instance: any, eventName: string, handler: (event?: MapEvent) => void, context?: any): EventListener;
        export function addListener(instance: any, eventName: string, handler: (event?: MapEvent) => void, context?: any): EventListener;
        export function addListenerOnce(instance: any, eventName: string, handler: (event?: MapEvent) => void, context?: any): EventListener;
        export function removeListener(listener: EventListener): void;
        export function trigger(instance: any, eventName: string, extArgs: any): void;
    }

    interface MapEvent{
        type:string
    }
}
