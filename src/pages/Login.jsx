import { useRef } from 'react';

import Form from 'react-bootstrap/Form';

import { verifyUser } from '../data/users';

import './Login.css'

const Login = ({ setToken, setRole }) => {
    const userRef = useRef()
    const passRef = useRef()
    return (
            <div className="Login-container">
                <div >
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control
                    type="text"
                    id="username"
                    placeholder='user'
                    ref={userRef}
                />
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                    type="password"
                    id="password"
                    placeholder='password'
                    ref={passRef}
                />
                    <button className=' btn btn-success mt-3' onClick={() => {
                        const user = userRef.current.value
                        const pass = passRef.current.value
                        userRef.current.value = ''
                        passRef.current.value = ''
                        const userInfo = verifyUser(user, pass)
                        if (userInfo === null) {
                            alert('Wrong user or password')
                            userRef.current.focus()
                        } else {
                            setToken(userInfo.token)
                            setRole(userInfo.role)
                        }

                    }}>Login</button>
                </div>
            </div>
    );
}

export default Login;