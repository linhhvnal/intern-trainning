import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import UserList from "./pages/UserList/UserList.jsx";
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import './index.css'

const routes = (
  <Router>
    <Routes>  
      <Route path="/dashboard" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  </Router>

)

const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}
export default App
