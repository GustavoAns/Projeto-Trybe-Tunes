import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Pages from './pages/Pages';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    );
  }
}

export default App;
