import React from 'react';
import './styles/index.scss';
import {Navbar} from "widgets/Navbar";
import {AppRouter} from "./providers/router/AppRouter";

function App() {
  return (
    <div className="App dark_theme">
        <Navbar/>
        <AppRouter/>
    </div>
  );
}

export default App;
