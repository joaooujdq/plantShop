import React from 'react';
import './styles.css';
import Header from '../../components/Header';

const Login: React.FC = () => {
    return(
        <div id="page-login">
            <Header/>
            <body>
            <h1>Login</h1>
            <form id="form-login" action="/login" acceptCharset="UTF_8">
                <div className="form-field">
                <input type="email" id="client-email" placeholder="Email"/>
                </div>
                <div className="form-field">
                <input type="password" id="client-password" placeholder="Password"/>
                </div>
                <div className="form-action">
                <button type="submit">Sign in</button>
                <div id="form-helper">
                    <h2>New Customer? <a href="/register">Create Account.</a></h2>
                </div>
                </div>

            </form>
            </body>
            <footer>
                
            </footer>

        </div>
    )
}

export default Login;