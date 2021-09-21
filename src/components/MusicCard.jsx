import React, { Component } from 'react';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import CheckboxMusicCard from './CheckboxMusicCard';

export class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
    // this.checkFavoritas = this.checkFavoritas.bind(this);
    // this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  componentDidMount() {
    const { musica } = this.props;
    this.setState({
      musica,
      // bookmarkedOnly: false,
    });
    // this.checkFavoritas()
  }

  // onBookmarkedChange = ({ target: { checked, name } }) => {
  //   const { allMusica } = this.props
  //   this.setState({ isLoading: true });
  //   const selecionada = allMusica.find(({ trackId }) => trackId === Number(name));
  //   if (checked) {
  //     addSong(selecionada).then(() => {
  //       this.setState({ isLoading: false, bookmarkedOnly: true });
  //     });
  //   } else {
  //     removeSong(selecionada).then(() => {
  //       this.setState({ isLoading: false, bookmarkedOnly: false });
  //     });
  //   }
  //   getFavoriteSongs().then((retorno) => {
  //     this.setState({ Favoritas: retorno });
  //   });

  //   this.checkFavoritas

  // };

  // checkFavoritas() {
  //   const { Favoritas } = this.state;
  //   const { musica } = this.props;
  //   const { trackId } = musica;
  //   if(Favoritas !== undefined){
  //     const acumulador = Favoritas.map((MF) => (MF.trackId === trackId))
  //     for(let valor of acumulador ) {
  //       if (valor) {
  //         this.setState({
  //           bookmarkedOnly: true,
  //         })
  //       }
  //     }
  //   }
  // }

  render() {
    // const { bookmarkedOnly } = this.state;
    const { musica, onBookmarkedChange, Favoritas } = this.props;
    const { trackName, previewUrl, trackId } = musica;

    const Favoritada = Favoritas.find(
      (MusicFavori) => MusicFavori.trackId === trackId,
    );

    if (!previewUrl) {
      return <></>;
    }

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

export default MusicCard;
