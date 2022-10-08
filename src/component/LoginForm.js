import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from "../redux/action";

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    return (
        <div>
            <input type="text" placeholder='email' onChange={e => setEmail(e.target.value)} value={email}/>
            <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} value={password}/>
            <button onClick={() => dispatch(login(email, password))}>Auth</button>
            <button>REG</button>
        </div>
    );
};

export default LoginForm;