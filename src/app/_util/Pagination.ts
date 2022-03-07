export interface PageQuery {
    pageNumber: number,
    pageSize: number
}

export interface QueryBuilder {
    pageQuery: PageQuery;
    aditionalQuery: Map<string, string>;
    buildQueryMap(): Map<string, string>;
    buildQueryString():  string;
    buildPageQueryMap(): Map<string, string>;
}

export class PageRequest implements QueryBuilder{

    constructor(public pageQuery: PageQuery, public aditionalQuery: Map<string, string>){}
    buildQueryMap(): Map<string, string> {

        let buildQueryMap = new Map<string, string>([...this.buildPageQueryMap()]);

        if(this.aditionalQuery){
            buildQueryMap = new Map<string, string>([...buildQueryMap, ...this.aditionalQuery])
        }

        return buildQueryMap;
    }
    buildQueryString(): string {
        throw new Error("Method not implemented.");
    }
    buildPageQueryMap(): Map<string, string> {
        throw new Error("Method not implemented.");
    }

}