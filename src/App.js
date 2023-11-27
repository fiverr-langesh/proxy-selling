import Banner from "./components/home/Banner";
import Proxy from "./components/proxy/Proxy";
import ProxyLocation from "./pages/proxy-location/proxyLocation";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/auth/register" element={<Register/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/" element={<Banner/>}/>
        <Route path="/proxy" element={<Proxy />} />
        <Route path="proxy-location" element={<ProxyLocation/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  );
}

export default App;
