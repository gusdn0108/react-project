import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutDivider from "./layout/LayoutDivider";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import Main from "./pages/Main";
import Boardlist from "./pages/board/Boardlist";
import BoardWrite from "./pages/board/BoardWrite";

const App = () => {
    return (
        <div>

            <LayoutDivider>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/admin" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/board/list/:category" element={<Boardlist />} />
                    <Route path="/board/write/:category" element={<BoardWrite />} />
                </Routes>
            </LayoutDivider>
        </div>
    );
};

export default App;
