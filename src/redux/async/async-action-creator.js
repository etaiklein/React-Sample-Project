export const createAsyncAction = function(options) {
  const {
    url,
    path,
    action_types,
    mapResponse,
    onError,
  } = options;

  const fetcher = function(query = '') {
    return (dispatch) => {
      dispatch({
        type: action_types[0],
        query
      });

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