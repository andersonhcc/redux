import React from 'react';
// import HomeOldRedux from './src/pages/home.page-redux-old';
import HomeReduxTolkit from './src/pages/home.page.redux-tolkit';
import {Provider} from 'react-redux';
// import {store} from './src/store-redux-old';
import {store as storeTolkit} from './src/store';

const App: React.FC = () => {
  return (
    <Provider store={storeTolkit}>
      <HomeReduxTolkit />
    </Provider>
  );
};

export default App;
