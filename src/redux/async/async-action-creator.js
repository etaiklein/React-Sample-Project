//async action factory based off of my earlier work: https://gist.github.com/etaiklein/0e5dc0141cf85598ff18c86b09e20c27
//the action creator specifies the url to hit, the [try, success, fail] actions, and how to process the data
//the resulting action takes in a query which is appended to url and path to make a querystring for fetch

export const createAsyncAction = function(options) {
  const {
    url,
    path,
    action_types,
    mapResponse,
    onError,
  } = options;

  //the user's search terms are passed into the resulting function
  const fetcher = function(query = '') {
    return (dispatch) => {
      dispatch({
        type: action_types[0],
        query
      });

      //construct the query string
      fetch(url + query + path)
        .then(response => {
          if (!response.ok) {
            throw onError(response);
          } else {
            return response;
          }
        })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: action_types[1], data: mapResponse(data) });
        })
        .catch(error => {
          dispatch({ type: action_types[2], error: error });
        });
    }
  };

  return fetcher;

}

export default createAsyncAction;