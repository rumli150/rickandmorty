import { TestBed, async, fakeAsync, inject, tick, waitForAsync } from "@angular/core/testing"
import { DataStorageService } from "./data-storage.service"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { CharacterFilter, EpisodeFilter, LocationFilter } from "./filter.model"
import { CharLocation, Character, CharacterList } from "../character-list/character.model"
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { Observable, of } from "rxjs"
import { EpisodeList, Episode } from "../episode-list/character.model"
import { LocationList, Location } from "../location-list/location.model"
import { MockData } from "./mockdata"
const mockdata = new MockData()
const mockCharactersResponse = mockdata.getMockCharacters()
const mockCharacterResponse = mockdata.getMockCharacter(1)
const mockLocationsResponse = mockdata.getMockLocations()
const mockLocationResponse = mockdata.getMockLocation(1)
const mockEpisodesRes = mockdata.getEpisodes()
const mockEpisodeRes = mockdata.getEpisode(1)
 

describe('DataService', () => {
    let service : DataStorageService
    let testController : HttpTestingController
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                DataStorageService
            ]
        })
        service = TestBed.inject(DataStorageService)
        testController = TestBed.inject(HttpTestingController)
        httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    })

    it('should be created' , () => {
        expect(service).toBeTruthy()
    })
    it('getCharactersFromDB shoud work as intended and also the filterer', () => {
        let page = 1
        let filter = new CharacterFilter('Morty Smith','','','','');
        service.getCharactersFromDB(page,filter).subscribe((response) => {
            expect(response).toEqual(mockCharactersResponse);
            expect(response.results[0].name).toContain('Morty');
          });
        const req = testController.expectOne(`https://rickandmortyapi.com/api/character?page=1&name=${encodeURI('Morty Smith')}`);
        // expect(req.request.method).toEqual('GET');
        req.flush(mockCharactersResponse);
    })
    it('getCharacter shoud work', () => {
       service.getCharacter(1).subscribe((res) => {
          expect(res).toEqual(mockCharacterResponse)
         })
         const req = testController.expectOne(`https://rickandmortyapi.com/api/character/1`)
         req.flush(mockCharacterResponse);
      })
      it('getLocationsFromDB shoud work as intended and also the filterer', () => {
         let page = 1
         let filter = new LocationFilter('','Cluster','');
         service.getLocationsFromDB(page,filter).subscribe((response) => {
            expect(response).toEqual(mockLocationsResponse);
         });
         const req = testController.expectOne(`https://rickandmortyapi.com/api/location?page=1&type=${encodeURI('Cluster')}`);
         // expect(req.request.method).toEqual('GET');
         req.flush(mockLocationsResponse);
      })
      it('getLocation shoud work', () => {
         service.getLocation(1).subscribe((res) => {
            expect(res).toEqual(mockLocationResponse)
           })
           const req = testController.expectOne(`https://rickandmortyapi.com/api/location/1`)
           req.flush(mockLocationResponse);
        })

      it('getEpisodesFromDB shoud work as intended and also the filterer', () => {
         let page = 1
         let filter = new EpisodeFilter('','s01');
         service.getEpisodesFromDB(page,filter).subscribe((response) => {
            expect(response).toEqual(mockEpisodesRes);
         });
         const req = testController.expectOne(`https://rickandmortyapi.com/api/episode?page=1&episode=s01`);
         // expect(req.request.method).toEqual('GET');
         req.flush(mockEpisodesRes);
      })
      it('getEpisode shoud work', () => {
         service.getEpisode(1).subscribe((res) => {
            expect(res).toEqual(mockEpisodeRes)
           })
           const req = testController.expectOne(`https://rickandmortyapi.com/api/episode/1`)
           req.flush(mockEpisodeRes);
        })
})