import React, { Component } from 'react'
import Header from '../components/Header'

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      valorPesquisado: '',
      isLoading: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.trigerButton = this.trigerButton.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  trigerButton(event) {
    event.preventDefault();
    const { nome } = this.state;
    const { history } = this.props;

    this.setState({isLoading: true}, () => {
      
    })
  }
  
  render() {
    const { valorPesquisado } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            type="text"
            value={valorPesquisado}
            name="valorPesquisado"
            onChange={this.handleChange}
            data-testid="search-artist-input" />
          <button
            disabled={valorPesquisado.length < 3}
            onClick={this.trigerButton}
            data-testid="search-artist-button">
            Procura
          </button>
        </form>
      </div>
    )
  }
}

export default Search
