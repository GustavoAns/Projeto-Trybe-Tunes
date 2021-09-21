import React, { Component } from 'react';
import CardCreator from '../components/CardCreator';
import CardsList from '../components/CardsList';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      valorPesquisado: '',
      isLoading: false,
      retorno: [
        {
          artistId: 12,
          artistName: 'Artist Name',
          collectionId: 123,
          collectionName: 'Collection Name',
          collectionPrice: 12.25,
          artworkUrl100: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a5/4f/0d/a54f0dba-18f4-f96b-4438-742977b295fc/source/100x100bb.jpg',
          releaseDate: '2012-03-02T08:00:00Z',
          trackCount: 8,
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.trigerButton = this.trigerButton.bind(this);
    this.formSearch = this.formSearch.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  trigerButton(event) {
    event.preventDefault();
    const { valorPesquisado } = this.state;
    this.setState({ valorPesq: valorPesquisado });
    this.setState({ isLoading: true }, () => {
      searchAlbumsAPI(valorPesquisado).then((result) => this.setState({
        valorPesquisado: '',
        isLoading: false,
        retorno: result,
      }));
    });
  }

  formSearch() {
    const { valorPesquisado } = this.state;
    return (
      <form>
        <input
          type="text"
          value={ valorPesquisado }
          name="valorPesquisado"
          onChange={ this.handleChange }
          data-testid="search-artist-input"
        />
        <button
          disabled={ valorPesquisado.length < 2 }
          onClick={ this.trigerButton }
          data-testid="search-artist-button"
        >
          Procura
        </button>
      </form>
    );
  }

  resolverLint() {

  }

  render() {
    const { isLoading, retorno, valorPesq } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        {isLoading ? <Loading /> : this.formSearch()}
        {!valorPesq ? (
        <div />
          ) : (
          <p>Resultado de álbuns de: {valorPesq}</p>
        )}
        {!valorPesq ? <div /> : <CardsList musicas={ retorno } valorPesq={ valorPesq } />}
      </div>
    );
  }
}

export default Search;
