import React, {useContext} from 'react';
import './styles/index.scss';
import {Navbar} from "widgets/Navbar";
import {AppRouter} from "./providers/router/AppRouter";
import {ThemeContext} from "./providers/themeProvider/themeContext";

function App() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`App ${theme}`}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
