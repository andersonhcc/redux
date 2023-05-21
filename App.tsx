import React from 'react';
import Home from './src/pages/home.page';
import {Provider} from 'react-redux';
import {store} from './src/store-redux-old';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
