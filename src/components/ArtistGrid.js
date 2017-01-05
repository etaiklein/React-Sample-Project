import React, { PropTypes } from 'react'
import Artist from './Artist'
var MediaQuery = require('react-responsive');

const styles = {

  grid: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'left',
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
  console.log(artists);

  for (let artist of artists){
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
  return row;
}

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