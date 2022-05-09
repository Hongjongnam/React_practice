import React, { useState } from "react";

const State = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(username, password)
        alert('로그인성공/실패')
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} /><br />
                <input placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                /> <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default State