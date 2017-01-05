//A search bar 'connect'ed component
//  that fires off the fetch artists action

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {fetchArtists, updateQuery} from '../../redux/artists/action-creators'

const styles = {
  searchContainer: {
    margin: 20,
  },
  search: {
    marginRight: 5
  }
}

class Search extends Component {

  handleChange(event) {
    this.props.updateQuery(event.target.value);
  }

  //TODO: error handling and form guarding
  handleSubmit(event) {
    event.preventDefault();

    let {fetchArtists, query, loading} = this.props;
    
    if (!query) {
      console.log("please type in a query");
      return;
    }

    if (loading) {
      console.log("please wait for previous query to finish loading first");
      return;
    }

    fetchArtists(query);      
  }

  render() {
    let {query} = this.props;
    return (
      <form style={styles.searchContainer} onSubmit={(e) => this.handleSubmit(e)}>
        <input style={styles.search} value={query} type="text" onChange={(e) => this.handleChange(e)}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  query: state.artists.query,
  loading: state.artists.loading,
  loaded: state.artists.loaded,
  error: state.artists.error,
})

const mapDispatchToProps = dispatch => ({
  updateQuery: (query) => {
    dispatch(updateQuery(query))
  },
  fetchArtists: (query) => {
    dispatch(fetchArtists(query))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
