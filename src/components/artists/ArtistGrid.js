//A container for the Artist Component 
//  that uses flexbox and media queries 
//  for frontend responsiveness

import React, { PropTypes } from 'react'
import Artist from './Artist'
var MediaQuery = require('react-responsive');

const styles = {
  grid: {
    alignItems: 'left',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
  },
  threeInARow: {
    flexBasis: '33%'
  },
  twoInARow: {
    flexBasis: '50%'
  },
}

const renderArtists = (artists, size) => {
  let row = [];

  for (let i = 0; i < artists.length; i++){
    let artist = artists[i];
    row.push(
      <Artist
        style={size === 3 ? styles.threeInARow : styles.twoInARow}
        key={artist.name}
        name={artist.name}
        url={artist.url}
        description={artist.description}
      />
    );
  }

  if (row.length === 0){
    row.push(
      <div>No results found. Please try another query.</div>
    )
  }

  return row;
}

//if the window's width is greater than 769px, 
//  then render 3 artists per row
//Else, render 2 artists per row
const ArtistGrid = ({ artists }) => (
  <MediaQuery minWidth={769}>
    {(matches) => {
      if (matches) {
        return <div style={styles.grid}>
            {renderArtists(artists, 3)}
          </div>;
      } else {
        return <div style={styles.grid}>
            {renderArtists(artists, 2)}
          </div>;
      }
    }}
  </MediaQuery>
);

ArtistGrid.propTypes = {
  artists: React.PropTypes.arrayOf(
     React.PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
     }).isRequired
  ).isRequired
};

export default ArtistGrid
