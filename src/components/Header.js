import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <h1
        onClick={() => navigate("/")}
        className="text-xl font-bold cursor-pointer"
      >
        Ugroup
      </h1>
      {user ?(
      <button
        onClick={()=>{navigate("/account")}}
        className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
      >
        Account
      </button>
      )
      :
    //   (
    //   <button
    //     onClick={()=>{navigate("/login")}}
    //     className="bg-secondary hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
    //   >
    //     Login
    //   </button>
    //   )
    null
      }
    </header>
  );
};

export default Header;
