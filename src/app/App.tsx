import React, { useContext } from 'react';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router/AppRouter';
import { ThemeContext } from './providers/themeProvider/themeContext';
import { Sidebar } from '../widgets/Sidebar/index';

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`App ${theme}`}>
            <Navbar />
            <div className="app-content">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
}

export default App;
