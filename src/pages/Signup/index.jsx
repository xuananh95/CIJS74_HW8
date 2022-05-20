import React from 'react'
import { useState } from 'react'

const Signup = () => {

    const [user, setUser] = useState({
        user: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
        users = ([...users, user])
        localStorage.setItem('users', JSON.stringify(users))

    }
    return (
        <form onSubmit={handleSubmit}>
            <h1 className="title">REGISTER</h1>
            <input type="text" placeholder="Username" value={user.user} onChange={(e) => { setUser({ ...user, user: e.target.value }) }} />
            <input type="password" placeholder="Password" value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
            <button type="submit">Register</button>
        </form>
    )
}

export default Signup