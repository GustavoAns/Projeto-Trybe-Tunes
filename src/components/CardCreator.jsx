import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CardCreator extends Component {
  render() {
    const { musica, valorPesq } = this.props
    const { collectionName, artworkUrl100, artistId } = musica
    const albumId = `/album/${artistId}`
    return (
      <Link to={albumId}>
        <div>
          <img alt="Music Cover" src={ artworkUrl100 } />
          <div>
            <h5>{collectionName}</h5>
            <h4>{valorPesq}</h4>
          </div>
        </div>
      </Link>
    )
  }
}

export default CardCreator
