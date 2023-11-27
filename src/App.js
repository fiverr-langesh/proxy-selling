import Navbar from "./components/common/Navbar";
import Banner from "./components/home/Banner";

function App() {
  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-primary px-[30px] sm:px-[100px] md:px-[130px] pt-[60px] font-urbanist">
      <Navbar />
      <Banner />
    </main>
  );
}

export default App;
