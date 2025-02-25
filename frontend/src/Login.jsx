import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:3001/login", { email, password})
        .then((result) => {
            console.log(result);
            if (result.data === "success") {
                navigate("/home");

            } else alert ("NO DATA FOUND");
        })
            .catch((err) => console.log(err));
        };
    
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg" style={{ width: '22rem' }}>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
              

                {/* email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}/>

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
                        onChange={(e) => setPassword(e.target.value)}
                      
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">Login</button>
            </form>
            <p className="text-center mt-3">Does not have an Account?</p>
            <Link 
            to={"/register"} 
            className="btn btn-secondary w-100">Signup</Link>
        </div>
    </div>
);
};


export default Login;