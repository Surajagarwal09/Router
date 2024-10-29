import React from "react";
function Login({ onLogin }) {
    return (
        <div>
            This is a login pagr
            <button onClick={onLogin}>Login</button>
        </div>
    )
}
export default Login;