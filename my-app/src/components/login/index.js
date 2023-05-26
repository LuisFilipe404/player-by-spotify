import React from "react";

const Login = ({ handleLogin }) => {
    return (
        <div className="flex">
            <button className="button__login-spotify" onClick={handleLogin}>Log in with Spotify</button>
        </div>
    )
}

export default Login;
