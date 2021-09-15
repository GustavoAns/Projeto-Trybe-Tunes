import React, { Component } from 'react'
import CardCreator from './CardCreator'

export class CardsList extends Component {
  render() {
    const { musicas, valorPesq } = this.props
    const { collectionId } = musicas
    if(musicas.length === 0) {
      return (
        <h1>Nenhum álbum foi encontrado</h1>
      ) 
    } 
    return (
      <div>
        {musicas.map((musica) => <CardCreator
        key={musica.collectionId}
        musica={musica}
        valorPesq={valorPesq}
        data-testid={`link-to-album-${collectionId}`} /> )}
      </div>
    )
  }
}

export default CardsList
