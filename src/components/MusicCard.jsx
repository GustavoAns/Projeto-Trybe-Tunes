import React, { Component } from 'react'
import { addSong, removeSong } from '../services/favoriteSongsAPI'
import CheckboxMusicCard from './CheckboxMusicCard';
import Loading from './Loading';

export class MusicCard extends Component {
  constructor() {
    super()
    this.state = {
      bookmarkedOnly: false,
      isLoading: false,
    }
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  componentDidMount() {
    const { musica } = this.props;
    this.setState ({
      musica: musica,
    })
  }

  onBookmarkedChange(event) {
    const { name, checked } = event.target;
    const { musica, isLoading } = this.state;

    if(checked){
      this.setState({isLoading: true, [name]: checked,}, () => {
        addSong(musica).then(() => {
          return this.setState({
            isLoading: false,
          })
        })
      })
    }
    else if (checked === false){
      this.setState({isLoading: true, [name]: checked,}, () => {
        removeSong(musica).then(() => {
          return this.setState({
            isLoading: false,
          })
        })
      })
    }

  }

  render() {
    const { bookmarkedOnly, isLoading } = this.state;
    const { musica } = this.props;
    const { trackName, previewUrl, trackId } = musica;
    if(!previewUrl || isLoading === true){
      return(
        <Loading />
      )
    }
    else{
      return (
        <div>
          <p>{trackName}</p>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
              O seu navegador não suporta o elemento <code>audio</code>.
          </audio>
          <CheckboxMusicCard
            trackId={trackId}
            onBookmarkedChange={this.onBookmarkedChange}
            bookmarkedOnly={bookmarkedOnly} />
        </div>
      )
    }
  }
}

export default MusicCard
