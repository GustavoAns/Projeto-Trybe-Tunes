import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      nome: '',
    };
    this.headerShape = this.headerShape.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      getUser().then((name) => this.setState({
        isLoading: false,
        name: name.name,
      }));
    });

    // getUser().then((name) => {
    //   return this.setState({
    //     isLoading: false ,
    //     name: name.name,
    //   })
    // })
  }

  headerShape() {
    return (
      <div>
        <p data-testid="header-user-name">{this.state.name}</p>
        <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
        <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <header data-testid="header-component">
        { isLoading ? <Loading /> : this.headerShape() }
      </header>
    );
  }
}

export default Header;
