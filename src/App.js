import React, { useEffect, useState } from 'react';
import './App.css';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthContext from './auth/context';
import ListingsScreen from './screens/ ListingsScreen';
import { auth } from './firebase/firebase';
import Header from './components/Header';
import AccountScreen from './screens/AccountScreen';
import ListingEditScreen from './screens/ListingEditScreen';
import FeedButtons from './components/FeedButtons';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authenticatedUser) => {
      setUser(authenticatedUser); 
    });
    return () => unsubscribe();
  }, []); 

  return (
    <AuthContext.Provider value={{ user, setUser }}>
    <>
      <BrowserRouter>
      {user && <Header/> }
      <div class="container mx-auto">
      <FeedButtons/>
      <Routes>
        <Route path="/" element={user ? <ListingsScreen/> : <WelcomeScreen/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path="/account" element={<AccountScreen/>} />
        <Route path="/post" element={<ListingEditScreen/>} />
        </Routes>
        </div>
        </BrowserRouter>
        
        </>
        </AuthContext.Provider>
  );
}

export default App;
