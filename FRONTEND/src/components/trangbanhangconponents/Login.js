import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                {/* Login Page Start Here */}
                <div className="login ptb-80">
                    <div className="container">
                        <h3 className="login-header">Log in to your account </h3>
                        <div className="row">
                            <div className="col-xl-6 col-lg-8 offset-xl-3 offset-lg-2">
                                <div className="login-form">
                                    <form>
                                        <div className="form-group row">
                                            <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                                            <div className="col-sm-7">
                                                <input type="text" className="form-control" id="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Password</label>
                                            <div className="col-sm-7">
                                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                                <button className="btn show-btn" type="button">Show</button>
                                            </div>
                                        </div>
                                        <div className="login-details text-center mb-25">
                                            <a href="admin">Forgot your password? </a>
                                            <a href="/admin" class="btn btn-secondary btn-lg">Login</a>  
                                        </div>
                                        <div className="login-footer text-center">
                                            <p>No account? <a href="register.html">Create one here</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Login Page End Here */}
            </div>
        );
    }
}

export default Login;