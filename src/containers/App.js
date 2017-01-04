import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { requestArtists, receiveArtists } from '../actions'
import Artist from '../components/Artist'

class App extends Component {

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div>
        <Artist/>
      </div>
    )
  }
}

const mapStateToProps = state => {
}

export default connect(mapStateToProps)(App)
