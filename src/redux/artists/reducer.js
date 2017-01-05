import * as ActionTypes from './action-types'

const initState = {
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

let formatData = (data) => {
  let artists = []
  for (let i = 0; i < Math.min(data.length, 6) ; i++){
    let artist = data[i];
    artists.push({
      name: artist.artistName,
      description: '',
      url: 'http://iscale.iheart.com/catalog/artist/' + artist.artistId + '?ops=fit(250,0)',
    })
  }
  return artists;
}

const reducer = (state = initState, action) => {
  switch (action.type) {

    case ActionTypes.UPDATE_QUERY: 
      return {
        ...state,
        query: action.query
      };

    case ActionTypes.FETCH_ARTISTS:
      return {
        ...state,
        loaded: false,
        loading: true,
      };

    case ActionTypes.FETCH_ARTISTS_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        error: null,
        data: formatData(action.data),
      };

    case ActionTypes.FETCH_ARTISTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state
  }
}

export default reducer;