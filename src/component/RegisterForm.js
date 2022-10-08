import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {registration} from "../redux/action";

const RegisterForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" placeholder='email' onChange={e => setEmail(e.target.value)} value={email}/>
            <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} value={password}/>
            <button>Auth</button>
            <button onClick={()  => registration(email, password)}>REG</button>
        </div>
    );
};

export default RegisterForm;