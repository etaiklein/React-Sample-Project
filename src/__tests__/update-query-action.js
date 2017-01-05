import * as ActionCreators from '../redux/artists/action-creators'
import * as ActionTypes from '../redux/artists/action-types'

describe('ActionCreators', () => {
  it('should update the query', () => {
    const text = 'Beach Boys'
    const expectedAction = {
      type: ActionTypes.UPDATE_QUERY,
      query: text
    }
    expect(ActionCreators.updateQuery(text)).toEqual(expectedAction)
  })
})