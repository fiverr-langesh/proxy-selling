import Navbar from "./components/common/Navbar";
import Banner from "./components/home/Banner";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-primary px-[30px] sm:px-[100px] md:px-[130px] pt-[60px] font-urbanist">
      {/* <Navbar />
      <Banner /> */}
      <Routes>
        <Route path="/auth/register" element={<Register/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
