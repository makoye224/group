import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import useAuth from "../auth/useAuth";

const universities = [
  { key: '1', value: 'University of Dar es Salaam (UDSM)' },
  { key: '2', value: 'Ardhi University (ARU)' },
  { key: '3', value: 'Mzumbe University (MU)' },
  { key: '4', value: 'Sokoine University of Agriculture (SUA)' },
  { key: '5', value: 'The Open University of Tanzania (OUT)' },
  { key: '6', value: 'Hubert Kairuki Memorial University (HKMU)' },
  { key: '7', value: 'St. Augustine University of Tanzania (SAUT)' },
  { key: '8', value: 'University of Dodoma (UDOM)' },
  { key: '9', value: 'State University of Zanzibar (SUZA)' },
  { key: '10', value: 'Muhimbili University of Health and Allied Sciences (MUHAS)' },
  { key: '11', value: 'Nelson Mandela African Institute of Science and Technology (NM-AIST)' }
];

function RegisterScreen() {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
    university: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.re_password) {
      setError("Passwords do not match");
      return;
    }
    try {
      await register(formData);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        
        <div className="mb-4">
          <label htmlFor="first_name" className="block text-gray-700">First Name</label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="last_name" className="block text-gray-700">Last Name</label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="university" className="block text-gray-700">University</label>
          <select
            id="university"
            name="university"
            value={formData.university}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option value="" disabled>Select a University</option>
            {universities.map((university) => (
              <option key={university.key} value={university.value}>
                {university.value}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="re_password" className="block text-gray-700">Confirm Password</label>
          <input
            id="re_password"
            name="re_password"
            type="password"
            value={formData.re_password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-4">
          Register
        </button>
      </form>

      <div className="flex justify-between w-full max-w-md mt-4">
        <button onClick={() => navigate("/")} className="text-blue-500">Home</button>
        <button onClick={() => navigate("/login")} className="text-blue-500">Log in</button>
      </div>
    </div>
  );
}

export default RegisterScreen;
