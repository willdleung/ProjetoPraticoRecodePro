import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Menu from './Components/Menu/Menu.js';
import Rotas from './Rotas.js';
import Footer from './Components/Footer/Footer.js';
import './App.css';

 class App extends React.Component {
    render(){
        return(
            <>
                <BrowserRouter>
                    <header>
                        <Menu/>
                    </header>
                    <main>
                        <Rotas/>
                    </main>
                    <footer>
                        <Footer/>
                    </footer>
                </BrowserRouter>
            </>
        );
    }
}

export default App;