import React from "react";
import { Routes, Route } from "react-router-dom";

import LayoutDivider from "./layout/LayoutDivider";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import Main from "./pages/Main";
// import Board_edit from "./pages/board/Board_edit";
// import Board from "./pages/board/Board";
// import Board_view from "./pages/board/Board_view";
// import Board_write from "./pages/board/Board_write";
// import UserList from "./pages/admin/UserList"
import PrimeBoard from "./pages/board/PrimeBoard";

const App = () => {
    return (
        <div>

            <LayoutDivider>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/admin" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    {/* <Route path="/board/board_edit" element={<Board_edit />} />
                    <Route path="/board/board_view" element={<Board_view />} />
                    <Route path="/board/board_write" element={<Board_write />} />
                    <Route path="/board" element={<Board />} /> */}
                    {/* <Route path="/admin/userlist" element={<UserList />} /> */}
                    <Route path="/board" element={<PrimeBoard />} />
                </Routes>
            </LayoutDivider>
        </div>
    );
};

export default App;
