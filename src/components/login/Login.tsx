import React, { useState } from "react";
import "./Login.scss";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login;