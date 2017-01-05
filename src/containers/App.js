import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArtistGrid from '../components/ArtistGrid'
import Search from '../components/Search'

class App extends Component {

  render() {
    return (
      <div>
        <Search/>
        <ArtistGrid
          artists={this.props.artists}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {artists: state.artists.data}
}

export default connect(mapStateToProps)(App)
