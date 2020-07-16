import React from 'react';
import Navigator from './src/routes/drawer';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';


export default function App() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )

}