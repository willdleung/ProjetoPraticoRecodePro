import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {lazy, Suspense} from 'react';
// import Menu from './Components/Menu/Menu.js';
// import Rotas from './Rotas.js';
// import Footer from './Components/Footer/Footer.js';
import load from './CodeSplitting/img/loading.gif';
import './App.css';

// Code splitting

const Menu = lazy( () => import('./CodeSplitting/Menu'));
const Footer = lazy( () => import('./CodeSplitting/Footer'));
const Rotas = lazy( () => import('./CodeSplitting/Rotas'));


 class App extends React.Component {
    render(){
        return(
            <>
                <BrowserRouter>
                
                    <header>
                        <Suspense fallback = {
                            <p>Loading</p>
                        }>
                        <Menu/>
                        </Suspense>
                    </header>

                    <main>
                        <Suspense fallback = {
                            <img src={load}/>
                        }>
                        <Rotas/>
                        </Suspense>
                    </main>

                    <footer>
                        <Suspense fallback = {
                            <p>Loading</p>
                        }>
                        <Footer/>
                        </Suspense>
                    </footer>

                </BrowserRouter>
            </>
        );
    }
}

export default App;