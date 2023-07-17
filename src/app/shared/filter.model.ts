export class CharacterFilter{
    constructor(
        public name?: string,
        public status?: string,
        public species?: string,
        public type?: string,
        public gender?: string,
    ){}
}
export class LocationFilter{
    constructor(
        public name?: string,
        public type?: string,
        public dimension?: string,
    ){}
}