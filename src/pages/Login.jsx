import React from 'react';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.trigerButton = this.trigerButton.bind(this);
    this.loginDiv = this.loginDiv.bind(this);
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

    this.setState({ isLoading: true }, () => {
      createUser({ name: nome }).then(() => history.push('search'));
    });
  }

  loginDiv() {
    const { nome } = this.state;
    return (
      <div data-testid="page-login">
        <input
          type="text"
          data-testid="login-name-input"
          name="nome"
          value={ nome }
          onChange={ this.handleChange }
        />

        <button
          disabled={ nome.length < 3 }
          data-testid="login-submit-button"

          onClick={ this.trigerButton }
        >
          Entrar
        </button>
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;

    return (
      <section>
        { isLoading ? <Loading /> : this.loginDiv()}
      </section>
    );
  }
}
export default Login;
