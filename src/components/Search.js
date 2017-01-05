import React, { Component } from 'react'
import { connect } from 'react-redux'

import {fetchArtists, updateQuery} from '../redux/artists/action-creators'

class Search extends Component {

  handleChange(event) {
    this.props.updateQuery(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();

    let {fetchArtists, query} = this.props;
    
    if (query) {
      fetchArtists(query);
    } else {
      //TODO: error handling and form guarding
    }
  }

  render() {
    let {query} = this.props;
    return (
      <form style={{margin: 20}} onSubmit={(e) => this.handleSubmit(e)}>
        <input value={query} type="text" onChange={(e) => this.handleChange(e)}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  query: state.artists.query,
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
