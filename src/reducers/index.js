import { combineReducers } from 'redux'
import {
  REQUEST_ARTISTS, RECEIVE_ARTISTS
} from '../actions'

const initState = {
  loaded: false,
  loading: false,
  error: "",
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

const artists = (state = initState, action) => {
  switch (action.type) {
    case REQUEST_ARTISTS:
      return state
    case RECEIVE_ARTISTS:
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  artists,
})

export default rootReducer
