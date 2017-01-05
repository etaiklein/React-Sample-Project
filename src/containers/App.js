import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { requestArtists, receiveArtists } from '../actions'
import ArtistGrid from '../components/ArtistGrid'

class App extends Component {

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div>
        <ArtistGrid
          artists={this.props.artists.data}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {artists: state.artists}
}

export default connect(mapStateToProps)(App)
