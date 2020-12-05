//Pacotes, Frameworks
import React from 'react';
import { Switch, Route} from 'react-router-dom';

//Componentes
import Home from './Pages/Home/Home.js';
import Produtos from './Pages/Produtos/Produtos.js';
import Lojas from './Pages/Lojas/Lojas.js';
import Contatos from './Pages/Contatos/Contatos.js';

export default function Rotas(){
    return(
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/produtos" component={Produtos}></Route>
            <Route exact path="/lojas" component={Lojas}></Route>
            <Route exact path="/contatos" component={Contatos}></Route>
        </Switch>
    );
}