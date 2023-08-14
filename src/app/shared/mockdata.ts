import { Character } from "../character-list/character.model"
import { Episode } from "../episode-list/character.model"
import { LocationList, Location } from "../location-list/location.model"

export class MockData{
    constructor(){}
    getMockCharacters(){

        let mockCharactersResponse = {
            "info":{
               "count":4,
               "pages":1,
               "next":null,
               "prev":null
            },
            "results":[
               {
                  "id":2,
                  "name":"Morty Smith",
                  "status":"Alive",
                  "species":"Human",
                  "type":"",
                  "gender":"Male",
                  "origin":{
                     "name":"unknown",
                     "url":""
                  },
                  "location":{
                     "name":"Citadel of Ricks",
                     "url":"https://rickandmortyapi.com/api/location/3"
                  },
                  "image":"https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                  "episode":[],
                  "url":"https://rickandmortyapi.com/api/character/2",
                  "created":"2017-11-04T18:50:21.651Z"
               },
               {
                  "id":232,
                  "name":"Morty Smith",
                  "status":"Alive",
                  "species":"Human",
                  "type":"",
                  "gender":"Male",
                  "origin":{
                     "name":"Earth (Evil Rick's Target Dimension)",
                     "url":"https://rickandmortyapi.com/api/location/34"
                  },
                  "location":{
                     "name":"Earth (Evil Rick's Target Dimension)",
                     "url":"https://rickandmortyapi.com/api/location/34"
                  },
                  "image":"https://rickandmortyapi.com/api/character/avatar/232.jpeg",
                  "episode":[
                     "https://rickandmortyapi.com/api/episode/10"
                  ],
                  "url":"https://rickandmortyapi.com/api/character/232",
                  "created":"2017-12-30T16:29:27.863Z"
               },
               {
                  "id":234,
                  "name":"Morty Smith",
                  "status":"Dead",
                  "species":"Human",
                  "type":"",
                  "gender":"Male",
                  "origin":{
                     "name":"Earth (Replacement Dimension)",
                     "url":"https://rickandmortyapi.com/api/location/20"
                  },
                  "location":{
                     "name":"Earth (Replacement Dimension)",
                     "url":"https://rickandmortyapi.com/api/location/20"
                  },
                  "image":"https://rickandmortyapi.com/api/character/avatar/234.jpeg",
                  "episode":[
                     "https://rickandmortyapi.com/api/episode/6"
                  ],
                  "url":"https://rickandmortyapi.com/api/character/234",
                  "created":"2017-12-30T16:35:01.223Z"
               },
               {
                  "id":630,
                  "name":"Morty Smith",
                  "status":"Alive",
                  "species":"Human",
                  "type":"Soulless Puppet",
                  "gender":"Male",
                  "origin":{
                     "name":"Story Train",
                     "url":"https://rickandmortyapi.com/api/location/96"
                  },
                  "location":{
                     "name":"Story Train",
                     "url":"https://rickandmortyapi.com/api/location/96"
                  },
                  "image":"https://rickandmortyapi.com/api/character/avatar/630.jpeg",
                  "episode":[
                     "https://rickandmortyapi.com/api/episode/37"
                  ],
                  "url":"https://rickandmortyapi.com/api/character/630",
                  "created":"2020-08-06T16:38:30.136Z"
               }
            ]
         }
         return mockCharactersResponse
    }
    getMockCharacter(num){
        const earth = new Location(num,"Earth", "Planet", "idk", [], "URL", 'IDK')
        const mockCharacterResponse = new Character(
            1,
            "Rick Sanchez",
            "Alive",
            "Human",
            "",
            "Male",
            earth,
            earth,
            'idk',
            [],
            'IDK',
            'IDK'
          )
          return mockCharacterResponse
    }
    getMockLocations(){
        let mockResponse = {
            "info": {
            "count": 1,
            "pages": 1,
            "next": null,
            "prev": null
            },
            "results": [
            {
            "id": 2,
            "name": "Abadango",
            "type": "Cluster",
            "dimension": "unknown",
            "residents": [
            "https://rickandmortyapi.com/api/character/6"
            ],
            "url": "https://rickandmortyapi.com/api/location/2",
            "created": "2017-11-10T13:06:38.182Z"
            }
            ]
            }
        return mockResponse
    }
    getMockLocation(num){
        let location = new Location(num,"Earth", "Planet", "idk", [], "URL", 'IDK')
        return location
    }
    getEpisodes(){
        let mockresponse = {
            "info": {
            "count": 11,
            "pages": 1,
            "next": null,
            "prev": null
            },
            "results": [
            {
            "id": 1,
            "name": "Pilot",
            "air_date": "December 2, 2013",
            "episode": "S01E01",
            "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/35",
            "https://rickandmortyapi.com/api/character/38",
            "https://rickandmortyapi.com/api/character/62",
            "https://rickandmortyapi.com/api/character/92",
            "https://rickandmortyapi.com/api/character/127",
            "https://rickandmortyapi.com/api/character/144",
            "https://rickandmortyapi.com/api/character/158",
            "https://rickandmortyapi.com/api/character/175",
            "https://rickandmortyapi.com/api/character/179",
            "https://rickandmortyapi.com/api/character/181",
            "https://rickandmortyapi.com/api/character/239",
            "https://rickandmortyapi.com/api/character/249",
            "https://rickandmortyapi.com/api/character/271",
            "https://rickandmortyapi.com/api/character/338",
            "https://rickandmortyapi.com/api/character/394",
            "https://rickandmortyapi.com/api/character/395",
            "https://rickandmortyapi.com/api/character/435"
            ],
            "url": "https://rickandmortyapi.com/api/episode/1",
            "created": "2017-11-10T12:56:33.798Z"
            },
            {
            "id": 2,
            "name": "Lawnmower Dog",
            "air_date": "December 9, 2013",
            "episode": "S01E02",
            "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/38",
            "https://rickandmortyapi.com/api/character/46",
            "https://rickandmortyapi.com/api/character/63",
            "https://rickandmortyapi.com/api/character/80",
            "https://rickandmortyapi.com/api/character/175",
            "https://rickandmortyapi.com/api/character/221",
            "https://rickandmortyapi.com/api/character/239",
            "https://rickandmortyapi.com/api/character/246",
            "https://rickandmortyapi.com/api/character/304",
            "https://rickandmortyapi.com/api/character/305",
            "https://rickandmortyapi.com/api/character/306",
            "https://rickandmortyapi.com/api/character/329",
            "https://rickandmortyapi.com/api/character/338",
            "https://rickandmortyapi.com/api/character/396",
            "https://rickandmortyapi.com/api/character/397",
            "https://rickandmortyapi.com/api/character/398",
            "https://rickandmortyapi.com/api/character/405"
            ],
            "url": "https://rickandmortyapi.com/api/episode/2",
            "created": "2017-11-10T12:56:33.916Z"
            },
            {
            "id": 3,
            "name": "Anatomy Park",
            "air_date": "December 16, 2013",
            "episode": "S01E03",
            "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/12",
            "https://rickandmortyapi.com/api/character/17",
            "https://rickandmortyapi.com/api/character/38",
            "https://rickandmortyapi.com/api/character/45",
            "https://rickandmortyapi.com/api/character/96",
            "https://rickandmortyapi.com/api/character/97",
            "https://rickandmortyapi.com/api/character/98",
            "https://rickandmortyapi.com/api/character/99",
            "https://rickandmortyapi.com/api/character/100",
            "https://rickandmortyapi.com/api/character/101",
            "https://rickandmortyapi.com/api/character/108",
            "https://rickandmortyapi.com/api/character/112",
            "https://rickandmortyapi.com/api/character/114",
            "https://rickandmortyapi.com/api/character/169",
            "https://rickandmortyapi.com/api/character/175",
            "https://rickandmortyapi.com/api/character/186",
            "https://rickandmortyapi.com/api/character/201",
            "https://rickandmortyapi.com/api/character/268",
            "https://rickandmortyapi.com/api/character/300",
            "https://rickandmortyapi.com/api/character/302",
            "https://rickandmortyapi.com/api/character/338",
            "https://rickandmortyapi.com/api/character/356"
            ],
            "url": "https://rickandmortyapi.com/api/episode/3",
            "created": "2017-11-10T12:56:34.022Z"
            },
            {
            "id": 4,
            "name": "M. Night Shaym-Aliens!",
            "air_date": "January 13, 2014",
            "episode": "S01E04",
            "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/38",
            "https://rickandmortyapi.com/api/character/87",
            "https://rickandmortyapi.com/api/character/175",
            "https://rickandmortyapi.com/api/character/179",
            "https://rickandmortyapi.com/api/character/181",
            "https://rickandmortyapi.com/api/character/191",
            "https://rickandmortyapi.com/api/character/239",
            "https://rickandmortyapi.com/api/character/241",
            "https://rickandmortyapi.com/api/character/270",
            "https://rickandmortyapi.com/api/character/337",
            "https://rickandmortyapi.com/api/character/338"
            ],
            "url": "https://rickandmortyapi.com/api/episode/4",
            "created": "2017-11-10T12:56:34.129Z"
            },
            {
            "id": 5,
            "name": "Meeseeks and Destroy",
            "air_date": "January 20, 2014",
            "episode": "S01E05",
            "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/38",
            "https://rickandmortyapi.com/api/character/41",
            "https://rickandmortyapi.com/api/character/89",
            "https://rickandmortyapi.com/api/character/116",
            "https://rickandmortyapi.com/api/character/117",
            "https://rickandmortyapi.com/api/character/120",
            "https://rickandmortyapi.com/api/character/175",
            "https://rickandmortyapi.com/api/character/193",
            "https://rickandmortyapi.com/api/character/238",
            "https://rickandmortyapi.com/api/character/242",
            "https://rickandmortyapi.com/api/character/271",
            "https://rickandmortyapi.com/api/character/303",
            "https://rickandmortyapi.com/api/character/326",
            "https://rickandmortyapi.com/api/character/333",
            "https://rickandmortyapi.com/api/character/338",
            "https://rickandmortyapi.com/api/character/343",
            "https://rickandmortyapi.com/api/character/399",
            "https://rickandmortyapi.com/api/character/400"
            ],
            "url": "https://rickandmortyapi.com/api/episode/5",
            "created": "2017-11-10T12:56:34.236Z"
            },
            {
            "id": 6,
            "name": "Rick Potion #9",
            "air_date": "January 27, 2014",
            "episode": "S01E06",
            "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            ],
            "url": "https://rickandmortyapi.com/api/episode/6",
            "created": "2017-11-10T12:56:34.339Z"
            },
            {
            "id": 7,
            "name": "Raising Gazorpazorp",
            "air_date": "March 10, 2014",
            "episode": "S01E07",
            "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/3",
            "https://rickandmortyapi.com/api/character/4",
            "https://rickandmortyapi.com/api/character/376",
            "https://rickandmortyapi.com/api/character/401"
            ],
            "url": "https://rickandmortyapi.com/api/episode/7",
            "created": "2017-11-10T12:56:34.441Z"
            },
            {
            "id": 8,
            "name": "Rixty Minutes",
            "air_date": "March 17, 2014",
            "episode": "S01E08",
            "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/3",
            "https://rickandmortyapi.com/api/character/4",
            "https://rickandmortyapi.com/api/character/5",
            "https://rickandmortyapi.com/api/character/416",
            "https://rickandmortyapi.com/api/character/417",
            "https://rickandmortyapi.com/api/character/418"
            ],
            "url": "https://rickandmortyapi.com/api/episode/8",
            "created": "2017-11-10T12:56:34.543Z"
            },
            {
            "id": 9,
            "name": "Something Ricked This Way Comes",
            "air_date": "March 24, 2014",
            "episode": "S01E09",
            "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/3",
            "https://rickandmortyapi.com/api/character/4",
            "https://rickandmortyapi.com/api/character/422",
            "https://rickandmortyapi.com/api/character/826"
            ],
            "url": "https://rickandmortyapi.com/api/episode/9",
            "created": "2017-11-10T12:56:34.645Z"
            },
            {
            "id": 10,
            "name": "Close Rick-counters of the Rick Kind",
            "air_date": "April 7, 2014",
            "episode": "S01E10",
            "characters": [
            "https://rickandmortyapi.com/api/character/1",
            ],
            "url": "https://rickandmortyapi.com/api/episode/10",
            "created": "2017-11-10T12:56:34.747Z"
            },
            {
            "id": 11,
            "name": "Ricksy Business",
            "air_date": "April 14, 2014",
            "episode": "S01E11",
            "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/3",
            "https://rickandmortyapi.com/api/character/4",
            "https://rickandmortyapi.com/api/character/5",
            "https://rickandmortyapi.com/api/character/7",
            "https://rickandmortyapi.com/api/character/35",
            ],
            "url": "https://rickandmortyapi.com/api/episode/11",
            "created": "2017-11-10T12:56:34.850Z"
            }
            ]
            }
            return mockresponse
    }
    getEpisode(num){
        let episode = new Episode(num,'asd','asd','asd',[],'','')
        return episode
    }
}
