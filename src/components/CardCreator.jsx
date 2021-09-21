import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CardCreator extends Component {
  render() {
    const { musica, valorPesq, testid } = this.props;
    const { collectionName, artworkUrl100, collectionId } = musica;
    const albumId = `/album/${collectionId}`;
    return (
      <Link to={ albumId } data-testid={ testid }>
        <div>
          <img alt="Music Cover" src={ artworkUrl100 } />
          <div>
            <h5>{collectionName}</h5>
            <h4>{valorPesq}</h4>
          </div>
        </div>
      </Link>
    );
  }
}

export default CardCreator;
