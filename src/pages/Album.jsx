import React, { Component } from 'react'
import Header from '../components/Header'
import Loading from '../components/Loading'
import MusicCard from '../components/MusicCard'
import getMusics from '../services/musicsAPI'

export class Album extends Component {
  constructor() {
    super()
    this.state = {
      retorno: [],
      isLoading: false,
    }
    this.obterMusicas = this.obterMusicas.bind(this);
    this.albumPage = this.albumPage.bind(this);
  }

  obterMusicas(){
    const { match: { params: { id } } } = this.props;
    getMusics(id).then((result) => {
      this.setState({
        retorno: result,
      })
    })
  }

  componentDidMount() {
    this.obterMusicas()
  }

  albumPage() {
    const { retorno } = this.state

    return (
      retorno.map((musica) => <MusicCard musica={musica}/> )
    )
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { retorno } = this.state
    

    return (
      <div data-testid="page-album">
        <Header />
        {retorno[0] === undefined ? <Loading /> : <h1 data-testid="artist-name">{retorno[1].artistName}</h1> }
        {retorno[0] === undefined ? <Loading /> : <h1 data-testid="album-name">{retorno[1].collectionCensoredName}</h1> }
        
        {!retorno ? <Loading /> : this.albumPage() }
      </div>
    )
  }
}

export default Album
