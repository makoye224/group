import React from "react";

import { useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

const menuItems = [
  // Add menu items here
];

function AccountScreen() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <div className="flex items-center">
          <img
            src="https://d3ski4a8qseigv.cloudfront.net/member3"
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.title} className="border-b border-gray-200">
              <button
                onClick={() => navigate(item.targetScreen)}
                className="w-full flex items-center p-4 hover:bg-gray-100"
              >
                <div
                  className={`w-10 h-10 rounded-full mr-4 bg-${item.icon.backgroundColor}`}
                >
                  <i className={`icon-${item.icon.name} text-white`} />
                </div>
                <span>{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <button
          onClick={() => {logOut(); navigate("/")}}
          className="w-full flex items-center p-4 text-red-500 hover:bg-red-100"
        >
          <div className="w-10 h-10 rounded-full mr-4 bg-tomato">
            <i className="icon-logout text-white" />
          </div>
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}

export default AccountScreen;
