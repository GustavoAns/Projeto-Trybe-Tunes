import React from 'react';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      nome: '',
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
  trigerButton() {
    const { nome } = this.state;
    createUser({name: nome});
  }
  render() {
    const { nome } = this.state;
    return (
      <div data-testid="page-login" >
        <input type="text"
        data-testid="login-name-input"
        name="nome"
        value={ nome }
        onChange={this.handleChange} />

        <button
          disabled={nome.length < 4}
          data-testid="login-submit-button"
          // onClick={console.log(nome)}
          onClick={this.trigerButton}
          >
          Entrar
        </button>
      </div>
    ) 
  }
}
export default Login;
