import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardCreator from './CardCreator';

class CardsList extends Component {
  render() {
    const { musicas, valorPesq } = this.props;
    console.log(musicas);
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

CardsList.propTypes = {
  valorPesq: PropTypes.string.isRequired,
  musicas: PropTypes.arrayOf(
    PropTypes.shape({
      collectionId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CardsList;
