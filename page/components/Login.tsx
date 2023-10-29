import React from 'react';
import { SERVER_URL } from '../app/config/server';
import styles from './Login.module.css';

const Login: React.FC<{ provider: string }> = ({ provider }) => {
    const handleLogin = () => {
        window.location.href = SERVER_URL + '/login/' + provider + '?redirect=' + window.location.pathname;
    };

    return (
        <div className={`${styles.login} ${styles[provider.toLowerCase()]}`}>
            <button onClick={handleLogin} className={styles.loginButton}>Sign in with {provider}</button>
        </div>
    );
};

export default Login;
