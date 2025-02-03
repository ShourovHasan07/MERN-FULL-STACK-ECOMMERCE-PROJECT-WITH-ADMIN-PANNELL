import React, { useEffect, useState } from "react";
import Navebar from "./components/Navebar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import Login from "./components/Login";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { ToastContainer } from "react-toastify";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'): "");

  useEffect (()=>{
    localStorage.setItem('token',token)

  },[token])

  return (
    <div className="bg-green-50 min-h-screen">
      <ToastContainer />

      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navebar  setToken={setToken}  /> 
          <hr />
          <div className="flex">
            <Sidebar />
            <div className="w-[70%] max-h-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add  token={token}  />} />
                <Route path="/list" element={<List  token={token} />} />
                <Route path="/orders" element={<Order token={token}  />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
