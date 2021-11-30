import * as React from 'react';
import "./configureMobx";
import { AppStateContextProvider, AppState } from './state/AppState';
import Header from './components/Header';
import Body from './components/Body/Body';

import './App.scss';

const appState = new AppState();

const App = () => {
  return (
    <AppStateContextProvider value={appState}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </AppStateContextProvider>
  );
}


export default App;
