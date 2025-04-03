import Navbar from "./Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <>
      <div className="bg-gray-950 min-h-screen">
        <Navbar />
        {/* Rest of your application content here */}
        {/* <Home /> */}
        {/* <About /> */}
        <Movies />
      </div>
    </>
  );
}

export default App;
