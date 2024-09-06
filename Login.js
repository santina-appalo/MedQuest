import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { username, password });
            localStorage.setItem('token', response.data.token);
            alert('Login successful');
        } catch (error) {
            console.error('Error logging in', error);
            alert('Login failed');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login;
