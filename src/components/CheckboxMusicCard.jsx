import React, { Component } from 'react';

export class CheckboxMusicCard extends Component {
  render() {
    const { onBookmarkedChange, bookmarkedOnly, trackId, musica } = this.props;
    return (
      <label data-testid={ `checkbox-music-${trackId}` }>
        Favorita
        <input
          checked={ bookmarkedOnly }
          type="checkbox"
          name={ trackId }
          id="bookmarkedOnly"
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

export default CheckboxMusicCard;
