import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:5000/api/users/register', { username, password });
            alert('Registration successful');
        } catch (error) {
            console.error('Error registering', error);
            alert('Registration failed');
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleRegister}>Register</button>
            </form>
        </div>
    );
}

export default Register;
