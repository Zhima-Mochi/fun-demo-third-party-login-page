import React from 'react';

const Login: React.FC<{ provider: string }> = ({ provider }) => {
    const handleLogin = () => {
        window.location.href = 'http://localhost:3000/login/' + provider+'?redirect='+window.location.pathname;
    };

    return (
        <div className="login">
            <button onClick={handleLogin} className="login__button">Login with {provider}</button>
        </div>
    );
};

export default Login;
