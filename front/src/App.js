import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutDivider from "./layout/LayoutDivider";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import Main from "./pages/Main";
import Button from "./pages/randomButton/Button";

const App = () => {
    return (
        <div>
            <LayoutDivider>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/admin" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/Button" element={<Button />} />
                </Routes>
            </LayoutDivider>
        </div>
    );
};

export default App;
