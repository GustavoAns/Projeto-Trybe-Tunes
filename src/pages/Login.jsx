import React from 'react';
import PropTypes from 'prop-types';
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
    console.log(history);
    this.setState({ isLoading: true }, () => {
      createUser({ name: nome }).then(() => history.push('search'));
    });
  }

  loginDiv() {
    const { nome } = this.state;
    const numeroMinimoDeCaracteres = 3;
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
          type="button"
          disabled={ nome.length < numeroMinimoDeCaracteres }
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

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default Login;
