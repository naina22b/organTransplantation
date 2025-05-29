import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Here you can add real authentication logic
    if (email === "user@example.com" && password === "123456") {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4 text-primary">
                Login
              </h3>
              {error && (
                <div className="alert alert-danger text-center">{error}</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={loginData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={loginData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>

              <div className="text-center mt-3">
                <small>
                  Don’t have an account?{" "}
                  <span
                    style={{ color: "#0d6efd", cursor: "pointer" }}
                    onClick={() => navigate("/register")}
                  >
                    Register here
                  </span>
                </small>
              </div>

              <div className="text-center mt-2">
                <button
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => alert("MetaMask Login coming soon!")}
                >
                  Login with MetaMask
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
