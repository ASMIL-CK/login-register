import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup(){

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPaaaword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: '22rem' }}>
                <h3 className="text-center mb-4">Register</h3>
                <form onSubmit={handleSubmit}>
                    {/* name */}
                    <div className="mb-3">
                        <label 
                        htmlFor="name" 
                        className="form-label"
                        >Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Enter Name"
                            
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                         
                        />
                    </div>
                    {/* password */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={(e) => setPaaaword(e.target.value)}
                          
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Register</button>
                </form>
                <p className="text-center mt-3">Already Have an Account?</p>
                <Link to={"/login"} className="btn btn-secondary w-100">Login</Link>
            </div>
        </div>
    );
};

export default Signup;
