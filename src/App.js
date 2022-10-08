import './App.css';
import {Route, Routes} from "react-router-dom";
import LoginForm from "./component/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import RegisterForm from "./component/RegisterForm";
import {useEffect} from "react";
import {checkAuth} from "./redux/action";

function App() {
    const users = useSelector(state => {
        const {authReducer} = state
        return authReducer
    })

    const dispatch = useDispatch()

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         checkAuth()
    //     }
    // }, [])

    console.log(users)

    if (!users.isAuth) {
        return (<div>
            <Routes>
                <Route path="/registration" element={<RegisterForm/>}/>
                <Route path="/login" element={<LoginForm/>}/>
            </Routes>
        </div>)
    }

    return (
        <div className="App">
            {users.isAuth ? users.currentUser.rows.map(data => <div key={data.id}>{data.email}</div>) : 'авторизуйтесь'}
        </div>
    );
}

export default App;
