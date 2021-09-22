import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxMusicCard from './CheckboxMusicCard';

class MusicCard extends Component {
  render() {
    // const { bookmarkedOnly } = this.state;
    const { musica, onBookmarkedChange, Favoritas } = this.props;
    const { trackName, previewUrl, trackId } = musica;

    const Favoritada = Favoritas.find(
      (MusicFavori) => MusicFavori.trackId === trackId,
    );

    if (!previewUrl) return null;

    return (
      <div key={ trackId }>
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
        </audio>
        <CheckboxMusicCard
          trackId={ trackId }
          onBookmarkedChange={ onBookmarkedChange }
          bookmarkedOnly={ !!Favoritada }
        />
      </div>
    );
  }
}

MusicCard.propTypes = {
  Favoritas: PropTypes.arrayOf(PropTypes.object).isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  musica: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
  }).isRequired,
};
export default MusicCard;
