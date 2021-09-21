import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

export class Album extends Component {
  constructor() {
    super();
    this.state = {
      retorno: [],
      isLoading: false,
    };

    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    this.setState({ isLoading: true }, () => {
      getMusics(id).then((result) => {
        this.setState({
          retorno: result,
        });
      });
      getFavoriteSongs().then((retorno) => {
        this.setState({ Favoritas: retorno, isLoading: false });
      });
    });
  }

  onBookmarkedChange = ({ target: { checked, name } }) => {
    const { retorno } = this.state;
    this.setState({ isLoading: true });
    const trackSelected = retorno.find(({ trackId }) => trackId === Number(name));
    if (checked) {
      addSong(trackSelected).then(() => {
        this.setState({ isLoading: false });
      });
    } else {
      removeSong(trackSelected).then(() => {
        this.setState({ isLoading: false });
      });
    }
    getFavoriteSongs().then((retorno) => {
      this.setState({ Favoritas: retorno });
    });
  };

  Page() {
    const { retorno, Favoritas } = this.state;
    return (
      <div>
        {retorno[0] === undefined ? <Loading /> : <h1 data-testid="artist-name">{retorno[0].artistName}</h1> }
        {retorno[0] === undefined ? <Loading /> : <h1 data-testid="album-name">{retorno[0].collectionName}</h1> }
        {retorno.map((musica) => (<MusicCard
          Favoritas={ Favoritas }
          key={ musica.trackId }
          musica={ musica }
          onBookmarkedChange={ this.onBookmarkedChange }
        />)) }
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            { this.Page() }
            {/* {this.albumPage()} */}
          </div>
        )}
      </div>
    );
  }
}

export default Album;
