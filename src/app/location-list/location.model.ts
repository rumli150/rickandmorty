import { Info } from "../shared/info.model";

export class Location{
    constructor(
        public id : number,
        public name : string,
        public type : string,
        public dimension : string,
        public residents : string[],
        public url : string,
        public created : string
    ){}
}
export class LocationList{
    constructor(
        public info : Info,
        public results : Location[]
    ){}
}