import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ButtonsAdmin from './ButtonsAdmin';
import CardsAdmin from './CardsAdmin';
import ContainLeftAdmin from './ContainLeftAdmin';
import FooterAdmin from './FooterAdmin';
import HeaderAdmin from './HeaderAdmin';
import HomeAdmin from './HomeAdmin';
class Admin extends Component {
    render() {
        return (
                <div>
                    <Switch>
                        <div id="wrapper">
                            <ContainLeftAdmin />
                            <div id="content-wrapper" className="d-flex flex-column">
                                <div id="content">
                                    <HeaderAdmin />
                                    <Route exact path="/">
                                        <HomeAdmin />
                                    </Route>
                                    <Route exact path="/admin">
                                        <HomeAdmin />
                                    </Route>
                                    <Route exact path="/buttons">
                                        <ButtonsAdmin />
                                    </Route>
                                    <Route exact path="/home">
                                        <HomeAdmin />
                                    </Route>
                                    <Route exact path="/cards">
                                        <CardsAdmin />
                                    </Route>
                                </div>
                                <FooterAdmin />
                            </div>
                        </div>
                    </Switch>
                </div>
        );
    }
}

export default Admin;