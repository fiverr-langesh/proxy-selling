import Navbar from "./components/common/Navbar";
import Banner from "./components/home/Banner";
import LoginComponent from "./pages/auth/Login";

function App() {
  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-primary px-[30px] sm:px-[100px] md:px-[130px] pt-[60px] font-urbanist">
      {/* <Navbar />
      <Banner /> */}
      <LoginComponent />
    </main>
  );
}

export default App;
