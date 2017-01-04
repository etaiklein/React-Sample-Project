export const REQUEST_ARTISTS = 'REQUEST_ARTISTS'
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS'

export const requestArtists = query => ({
  type: REQUEST_ARTISTS,
})

export const receiveArtists = data => ({
  type: RECEIVE_ARTISTS,
})