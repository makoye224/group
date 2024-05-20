import React from "react";
import { useNavigate } from 'react-router-dom';

function WelcomeScreen() {
  const navigate = useNavigate()

  const handleLogin = ()=>{
    navigate("/login");
  }
  const handleRegister = ()=>{
    navigate("/register");
  }

  return (
    <div className="relative h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${require("../assets/background.jpg")})` }}>
      <div className="absolute top-20 flex flex-col items-center">
        <h1 className="text-blue-500 text-5xl font-bold mb-4">University Group</h1>
        <p className="text-black text-2xl font-bold">connect with peers and employers</p>
      </div>
      <div className="absolute flex flex-col items-center w-full px-16">
        <button className="mb-4 px-8 py-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none" 
        onClick={handleLogin}>
          Login
          </button>
          
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
        onClick={handleRegister}>
          Register
          </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
