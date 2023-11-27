import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import LandingPage from "./pages/landing-page/LandingPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  );
}

export default App;
