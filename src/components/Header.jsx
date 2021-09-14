import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../services/userAPI'
import Loading from './Loading'

export class Header extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      nome: '',
    }
    this.headerShape = this.headerShape.bind(this);
  }

  componentDidMount() {
    getUser().then((name) => {
      return this.setState({
        isLoading: false ,
        name: name.name,
      })
    })
  }

  headerShape() {
    return (
      <nav>
        <p data-testid="header-user-name">{this.state.name}</p>

      </nav>
    )
  }

  render() {
    const { isLoading } = this.state;
    return (
      <header data-testid="header-component">
        { isLoading ? <Loading /> : this.headerShape() }
      </header>
    )
  }
}

export default Header