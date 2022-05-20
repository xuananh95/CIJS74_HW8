import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<User />} />
                    <Route path="log-in" element={<Login />} />
                    <Route path="sign-up" element={<Signup />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
