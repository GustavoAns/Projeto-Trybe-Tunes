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
    this.loadingState = this.loadingState.bind(this);
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

  loadingState(element) {
    // const { isLoading } = this.state
    // if(isLoading)
    // return(
    //   this.setState({
    //     isLoading: false,
    //   })
    // )
    // else if(isLoading === false)
    // return(
    //   this.setState({
    //     isLoading: true,
    //   })
    // )
    return this.setState({
      isLoading: element,
    })
  }

  albumPage() {
    const { retorno } = this.state

    return (
      retorno.map((musica) => <MusicCard loadingState={this.loadingState} key={musica.trackId} musica={musica}/> )
    )
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { retorno, isLoading } = this.state
    

    return (
      <div data-testid="page-album">
        <Header />
        {retorno[0] === undefined ? <Loading /> : <h1 data-testid="artist-name">{retorno[1].artistName}</h1> }
        {retorno[0] === undefined ? <Loading /> : <h1 data-testid="album-name">{retorno[1].collectionCensoredName}</h1> }
        
        {isLoading ? <Loading /> : this.albumPage() }
      </div>
    )
  }
}

export default Album
