import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as ActionCreators from '../redux/artists/action-creators'
import * as ActionTypes from '../redux/artists/action-types'
import nock from 'nock'
import expect from 'expect' // You can use any testing library
import 'whatwg-fetch'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
fetch = jest.fn(() => new Promise(resolve => resolve()));

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_ARTISTS_SUCCESS when fetching artists has been done', () => {
    let url = "http://api-3283.iheart.com/";
    let path1 = "api/v1/catalog/searchAll?keywords=";
    let query = "Beach Boys";
    let path2 = "&queryTrack=false&queryBundle=false&queryArtist=true&queryStation=false&queryFeaturedStation=false&queryTalkShow=false&queryTalkTheme=false&queryKeyword=false&countryCode=US";
    let response = {"errors":null,"duration":87,"bestMatch":{"objType":"ARTIST","id":3455,"confidenceVal":1.0},"bestMatches":null,"totalTracks":null,"totalBundles":null,"totalArtists":4,"totalStations":null,"totalFeaturedStations":null,"totalTalkShows":null,"totalTalkThemes":null,"totalPrnEpisodes":null,"totalKeywords":null,"trackBundles":null,"artists":[{"artistName":"The Beach Boys","artistId":3455,"info":null,"link":null,"artistBio":null,"variety":null,"score":1.9980997,"rank":1715385,"trackBundles":null,"tracks":null,"roviImages":null,"totalTracks":null,"totalBundles":null,"formats":null,"format":"OTHER"},{"artistName":"Lorrie Morgan with SPECIAL GUESTS \"The Beach Boys\"","artistId":121032,"info":null,"link":null,"artistBio":null,"variety":null,"score":0.054731,"rank":1675518,"trackBundles":null,"tracks":null,"roviImages":null,"totalTracks":null,"totalBundles":null,"formats":null,"format":"OTHER"},{"artistName":"Waikiki Beach Boys","artistId":30050015,"info":null,"link":null,"artistBio":null,"variety":null,"score":0.047436737,"rank":1706477,"trackBundles":null,"tracks":null,"roviImages":null,"totalTracks":null,"totalBundles":null,"formats":null,"format":"OTHER"},{"artistName":"Annette Funicello & The Beach Boys","artistId":31425520,"info":null,"link":null,"artistBio":null,"variety":null,"score":0.028288767,"rank":1484155,"trackBundles":null,"tracks":null,"roviImages":null,"totalTracks":null,"totalBundles":null,"formats":null,"format":"OTHER"}],"tracks":null,"spellingSuggestions":null,"stations":null,"featuredStations":[],"talkShows":null,"talkThemes":null,"prnEpisodes":null,"keywords":null,"firstError":null};

    nock(url)
      .get(path1 + query + path2)
      .reply(200, { body: response})

    const expectedActions = [
      { type: ActionTypes.FETCH_ARTISTS, query: query },
      //TODO: manually mock fetch to include success action
    ]
    const store = mockStore({ artists: [] })

    //TODO: manually mock fetch to include success action
    return Promise.resolve(store.dispatch(ActionCreators.fetchArtists(query)))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})