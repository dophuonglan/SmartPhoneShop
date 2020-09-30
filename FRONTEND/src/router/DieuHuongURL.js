import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Admin from '../components/admincomponents/Admin';
import LoginAdmin from '../components/admincomponents/LoginAdmin';
class DieuHuongURL extends Component {
    render() {
        return (
                <div>
                    <Switch>
                        <Route exact path="/admin">
                            <Admin />
                        </Route>
                        <Route exact path="/">
                            <Admin />
                        </Route>
                        <Route exact path="/admin">
                            <Admin />
                        </Route>
                        <Route exact path="/buttons">
                            <Admin />
                        </Route>
                        <Route exact path="/home">
                            <Admin />
                        </Route>
                        <Route exact path="/cards">
                            <Admin />
                        </Route>
                        <Route path="/login">
                            <LoginAdmin />
                        </Route>
                    </Switch>
                </div>
        );
    }
}

export default DieuHuongURL;