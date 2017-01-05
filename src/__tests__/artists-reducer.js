import reducer from '../redux/artists/reducer'
import * as ActionTypes from '../redux/artists/action-types'

let initState = {
  loaded: false,
  loading: false,
  error: "",
  query: '',
  data: [
    {
      name: 'The Weeknd',
      description: 'Feat. August Alsina, Jeremih and more',
      url: 'http://iscale.iheart.com/catalog/artist/744880?ops=fit(250,0)',
    },
    {
      name: 'Selena Gomez',
      description: 'Feat. Ariana Grande, Demi Lovato and more',
      url: 'http://iscale.iheart.com/catalog/artist/57706?ops=fit(250,0)',
    },
    {
      name: 'R. City',
      description: 'Feat. Nelly, Iyaz, Wix Khalifa and more',
      url: 'http://iscale.iheart.com/catalog/artist/30005067?ops=fit(250,0)',
    },
    {
      name: 'Justin Bieber',
      description: 'Feat. Shawn Mendes, One Direction and more',
      url: 'http://iscale.iheart.com/catalog/artist/44368?ops=fit(250,0)',
    },    
    {
      name: 'Major Lazer',
      description: 'Feat. Iyaz, Dillon Francis & DJ Snake and more',
      url: 'http://iscale.iheart.com/catalog/artist/43557?ops=fit(250,0)',
    },
    {
      name: 'Taylor Swift',
      description: 'Feat. Meghan Trainor, Katy Perry and more',
      url: 'http://iscale.iheart.com/catalog/artist/33221?ops=fit(250,0)',
    },
  ],
};

describe('artists reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initState)
  })

  it('should handle UPDATE_QUERY', () => {
    expect(
      reducer([], {
        type: ActionTypes.UPDATE_QUERY,
        query: 'test'
      })
    ).toEqual(
      {
        query: 'test'
      }
    )
  })

  it('should handle FETCH_ARTISTS_SUCCESS', () => {

    let artistData = [
      {artistName: 'Justin Bieber',
      artistId: 44368},
      {artistName: 'Major Lazer',
      artistId: 43557},
      {artistName: 'Taylor Swift',
      artistId: 33221},
    ]

    let artistDataResponse =  [{
        name: 'Justin Bieber',
        description: '',
        url: 'http://iscale.iheart.com/catalog/artist/44368?ops=fit(250,0)',
      },    
      {
        name: 'Major Lazer',
        description: '',
        url: 'http://iscale.iheart.com/catalog/artist/43557?ops=fit(250,0)',
      },
      {
        name: 'Taylor Swift',
        description: '',
        url: 'http://iscale.iheart.com/catalog/artist/33221?ops=fit(250,0)',
      }]
      expect(
        reducer([], {
            type: ActionTypes.FETCH_ARTISTS_SUCCESS,
            data: artistData,
          })
        ).toEqual({
          loaded: true,
          loading: false,
          error: null,
          data: artistDataResponse,
          }
        )
    }
  )


  it('should handle FETCH_ARTISTS', () => {
    expect(
      reducer([], {
        type: ActionTypes.FETCH_ARTISTS,
      })
    ).toEqual(
      {
        loaded: false,
        loading: true,
      }
    )
  })

  it('should handle FETCH_ARTISTS_FAIL', () => {
    expect(
      reducer([], {
        type: ActionTypes.FETCH_ARTISTS_FAIL,
        error: "test"
      })
    ).toEqual(
      {
        loading: false,
        error: "test",
      }
    )
  })

})