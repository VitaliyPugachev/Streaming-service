import React, {useContext, useEffect} from 'react';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router/AppRouter';
import { ThemeContext } from './providers/themeProvider/themeContext';
import { Sidebar } from '../widgets/Sidebar/index';
import {Page} from "../shared/ui/Page/Page";
import {fetchMovieTitles} from "../features/fetchMovieTitles/model/services/fetchMovieTitles";
import {useAppDispatch} from "../shared/lib/hooks/useAppDispatch/useAppDispatch";

function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`App ${theme}`}>
            <Navbar />
            <Page>
                <Sidebar />
                <AppRouter />
            </Page>
        </div>
    );
}

export default App;
