import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Clientes from './telas/clientes'
import Produtos from './telas/produtos'
import CadastrarClientes from './telas/cadastrarClientes'
import CadastrarProdutos from './telas/cadastrarProdutos'

function App() {
    return <>
        <Router>
            <Switch>
                <Route path="/clientes">
                    <Clientes />
                </Route>
                <Route path="/produtos">
                    <Produtos />
                </Route>
                <Route path="/cadastrarclientes">
                    <CadastrarClientes/>
                </Route>
                <Route path="/cadastrarprodutos">
                    <CadastrarProdutos/>
                </Route>

            </Switch>
        </Router>
    </>
}

export default App
