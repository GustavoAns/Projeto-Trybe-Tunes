import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxMusicCard extends Component {
  render() {
    const { onBookmarkedChange, bookmarkedOnly, trackId } = this.props;
    return (
      <label htmlFor={ trackId } data-testid={ `checkbox-music-${trackId}` }>
        Favorita
        <input
          checked={ bookmarkedOnly }
          type="checkbox"
          name={ trackId }
          id={ trackId }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

CheckboxMusicCard.propTypes = {
  trackId: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default CheckboxMusicCard;
