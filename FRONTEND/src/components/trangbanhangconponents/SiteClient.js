import React, { Component } from 'react';
import BreadcrumbAreaStart from './BreadcrumbAreaStart';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';

class SiteClient extends Component {
    render() {
        return (
            <div>
                {/* Main Wrapper Start Here */}
                <div className="wrapper">
                    <Header/>
                    <BreadcrumbAreaStart/>
                    <Login/>
                    <Footer/>
                </div>
                {/* Main Wrapper End Here */}

            </div>
        );
    }
}

export default SiteClient;