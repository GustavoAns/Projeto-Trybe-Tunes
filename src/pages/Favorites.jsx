import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      Favoritas: [],
    };
    this.favoriteePage = this.favoritePage.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  componentDidMount() {
    this.state = {
      isLoading: true,
    };
    getFavoriteSongs().then((retorno) => {
      this.setState({ Favoritas: retorno, isLoading: false });
    });
  }

  onBookmarkedChange = ({ target: { checked, name } }) => {
    const { Favoritas } = this.state;
    this.setState({ isLoading: true });
    const trackSelected = Favoritas.find(({ trackId }) => trackId === Number(name));
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

  favoritePage() {
    const { Favoritas } = this.state;

    return (
      Favoritas.map((musica) => (<MusicCard
        Favoritas={ Favoritas }
        key={ musica.trackId }
        musica={ musica }
        onBookmarkedChange={ this.onBookmarkedChange }
      />))
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        {isLoading ? <Loading /> : this.favoritePage()}
      </div>
    );
  }
}

export default Favorites;
