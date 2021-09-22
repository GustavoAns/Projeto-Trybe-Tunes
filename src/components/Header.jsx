import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
    this.headerShape = this.headerShape.bind(this);
  }

  componentDidMount() {
    getUser().then((name) => {
      this.setState({
        name: name.name,
        isLoading: false,
      });
    });
  }

  // getUser().then((name) => {
  //   return this.setState({
  //     isLoading: false ,
  //     name: name.name,
  //   })
  // })
  // }

  headerShape() {
    const { name } = this.state;
    return (
      <div>
        <p data-testid="header-user-name">{name}</p>
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
