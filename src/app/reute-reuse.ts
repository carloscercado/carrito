import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

interface RouteStorageObject {
    snapshot: ActivatedRouteSnapshot;
    handle: DetachedRouteHandle;
}

export class CustomReuseStrategy implements RouteReuseStrategy{
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return false;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        // sin implementar
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return false;
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        // sin implementar
        return null;
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return false;
    }
}

// No se esta usando su implementacion
export class CustomReuseStrategy2 implements RouteReuseStrategy {
	storedRoutes: { [key: string]: RouteStorageObject } = {};
    acceptedRoutes: string[] = ["search/:search", 
                                "search/:search/category/:category", 
                                "linea-producto/:line"
                                ];

	shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return (this.acceptedRoutes.indexOf(route.routeConfig.path) > -1);
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        if(handle != null){
            let storedRoute: RouteStorageObject = {
                snapshot: route,
                handle: handle
            };
            this.storedRoutes[this.calcKey(route)] = storedRoute;
            /*if(Object.keys(this.storedRoutes).length > 1){
                delete this.storedRoutes[Object.keys(this.storedRoutes)[0]];
            }*/
        }
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        let canAttach: boolean = !!route.routeConfig && !!this.storedRoutes[this.calcKey(route)];
        if (canAttach) {
            let paramsMatch: boolean = this.compareObjects(route.params, this.storedRoutes[this.calcKey(route)].snapshot.params);
            let queryParamsMatch: boolean = this.compareObjects(route.queryParams, this.storedRoutes[this.calcKey(route)].snapshot.queryParams);
            if (!!paramsMatch && !!queryParamsMatch){
                return true;
            }
            return false;
        } 
        return false;
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig || !this.storedRoutes[this.calcKey(route)]){
            return null;
        } 
        let obj = this.storedRoutes[this.calcKey(route)].handle;
        if(Object.keys(this.storedRoutes).length > 1 && (this.acceptedRoutes.indexOf(route.routeConfig.path) > -1)){
            delete this.storedRoutes[Object.keys(this.storedRoutes)[0]];
        }
        return obj;
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        //return (this.calcKey(future) === this.calcKey(curr));
        return false;
    }

    private compareObjects(base: any, compare: any): boolean {
        for (let baseProperty in base) {
            if (compare.hasOwnProperty(baseProperty)) {
                switch(typeof base[baseProperty]) {
                    case 'object':
                        if ( typeof compare[baseProperty] !== 'object' || !this.compareObjects(base[baseProperty], compare[baseProperty]) ) { return false; } break;
                    case 'function':
                        if ( typeof compare[baseProperty] !== 'function' || base[baseProperty].toString() !== compare[baseProperty].toString() ) { return false; } break;
                    default:
                        if ( base[baseProperty] != compare[baseProperty] ) { return false; }
                }
            } else {
                return false;
            }
        }
        return true;
    }

    calcKey(route: ActivatedRouteSnapshot) {
        let next = route;
        let url = "";
        while(next) {
            if (next.url) {
                url = next.url.join('/');
            }
            next = next.firstChild;
        }
        return url;
    }
}