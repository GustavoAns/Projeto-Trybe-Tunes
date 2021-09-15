import React, { Component } from 'react'

export class MusicCard extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const { musica } = this.props;
    this.setState = {
      musica: musica,
    }
  }

  render() {
    const { musica } = this.props;
    const { trackName, previewUrl } = musica;
    if(!previewUrl){
      return(
        <div></div>
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
        </div>
      )
    }
  }
}

export default MusicCard
