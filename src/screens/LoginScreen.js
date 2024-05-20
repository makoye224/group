import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import useAuth from "../auth/useAuth";

function LoginScreen() {
  const { logIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Logo */}
      {/* <img src={require("../assets/logo.png")} alt="Logo" className="w-48 h-32 mb-5" /> */}
      
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-4">Login</button>
      </form>

      <div className="flex justify-between w-full max-w-md mt-4">
        <button onClick={() => navigate("/forgotpassword")} className="text-blue-500">Forgot Password?</button>
        <button onClick={() => navigate("/register")} className="text-blue-500">Register</button>
      </div>
    </div>
  );
}

export default LoginScreen;
