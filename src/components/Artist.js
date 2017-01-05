import React, { PropTypes } from 'react'

const styles = {
  container: {
    marginLeft: 20,
    marginRight: 20,
    maxWidth: 250,
    minWidth: 100,
  },
  image: {
    width: '100%',
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
  },
  description: {
    color: 'black',
  },
};

const Artist = ({ url, name, description, style = {} }) => (
  <div style={style}>
    <div style={styles.container}>
      <img alt='artist' style={styles.image} src={url}/>
      <div style={styles.name}> {name} </div>
      <div style={styles.description}> {description} </div>
    </div>
  </div>
);

Artist.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Artist
