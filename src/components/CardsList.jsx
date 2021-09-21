import React, { Component } from 'react';
import CardCreator from './CardCreator';

export class CardsList extends Component {
  render() {
    const { musicas, valorPesq } = this.props;
    const { collectionId } = musicas;
    if (musicas.length === 0) {
      return (
        <p>Nenhum álbum foi encontrado</p>
      );
    }
    return (
      <div>
        {musicas.map((musica) => (<CardCreator
          key={ musica.collectionId }
          musica={ musica }
          valorPesq={ valorPesq }
          testid={ `link-to-album-${musica.collectionId}` }
        />))}
      </div>
    );
  }
}

export default CardsList;
