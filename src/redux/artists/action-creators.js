import {createAsyncAction} from '../async/async-action-creator';
import * as ActionTypes from './action-types';

export const updateQuery = data => ({
  type: ActionTypes.UPDATE_QUERY,
  query: data
})

export const fetchArtists = createAsyncAction({
  url: 'http://api-3283.iheart.com/api/v1/catalog/searchAll?keywords=',
  path: '&queryTrack=false&queryBundle=false&queryArtist=true&queryStation=false&queryFeaturedStation=false&queryTalkShow=false&queryTalkTheme=false&queryKeyword=false&countryCode=US',
  action_types: [ActionTypes.FETCH_ARTISTS, ActionTypes.FETCH_ARTISTS_SUCCESS, ActionTypes.FETCH_ARTISTS_FAIL],
  mapResponse: (response) => response.artists,
  onError: (response) => response,
})