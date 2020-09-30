import React, { Component } from 'react';

class BreadcrumbAreaStart extends Component {
    render() {
        return (
            <div>
                {/* Breadcrumb Area Start Here */}
                <div className="breadcrumb-area">
                    <div className="container">
                        <ol className="breadcrumb breadcrumb-list">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Login</li>
                        </ol>
                    </div>
                </div>
                {/* Breadcrumb Area End Here */}
            </div>
        );
    }
}

export default BreadcrumbAreaStart;