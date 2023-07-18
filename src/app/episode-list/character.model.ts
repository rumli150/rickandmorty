import { Info } from "../shared/info.model";

export class Episode{
    constructor(
        public id : number,
        public name : string,
        public air_date : string,
        public episode : string,
        public characters : string[],
        public url : string,
        public created : string
    ){}
}
export class EpisodeList{
    constructor(
        public info : Info,
        public results : Episode[]
    ){}
}