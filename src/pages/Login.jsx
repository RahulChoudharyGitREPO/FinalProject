import React, { useState } from 'react';
import axios from 'axios'; // Don't forget to import axios for making HTTP requests

function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://reqres.in/api/login', { email, password });

            if (response.data.token) {
                history.push('/');
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            setError('Something went wrong');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Login;
