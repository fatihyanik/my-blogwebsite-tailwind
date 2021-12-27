import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Write from "./pages/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/posts" element={<Home/>} />
        <Route path="/register" element={currentUser ? <Home /> : <Register />} />
        <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;