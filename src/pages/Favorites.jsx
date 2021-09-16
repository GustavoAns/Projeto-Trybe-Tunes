import React, { Component } from 'react'
import Header from '../components/Header'
import Loading from '../components/Loading'
import MusicCard from '../components/MusicCard'
import {getFavoriteSongs} from '../services/favoriteSongsAPI'

export class Favorites extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      lista: [],
    }
    this.creatListFSongs = this.creatListFSongs.bind(this)
    this.favoriteePage = this.favoritePage.bind(this)
  }

  componentDidMount() {
    this.creatListFSongs()
  }

  creatListFSongs() {
    getFavoriteSongs().then((retorno) => {
      return this.setState({
        isLoading: false,
        lista: retorno,
      })
    })
  }

  favoritePage() {
    const { lista } = this.state

    return (
      lista.map((musica) => <MusicCard check={true} key={musica.trackId} musica={musica}/> )
    )
  }

  render() {
    const { isLoading } = this.state
    return (
      <div data-testid="page-favorites">
        <Header />
        {isLoading ? <Loading /> : this.favoritePage()}
      </div>
    )
  }
}

export default Favorites
