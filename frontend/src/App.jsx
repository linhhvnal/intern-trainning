import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import UserList from "./pages/UserList/UserList.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import './index.css'

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
