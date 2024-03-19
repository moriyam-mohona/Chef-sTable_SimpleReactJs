
import "./App.css";
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Recipe from "./components/Recipe/Recipe";

function App() {

  return (
    <div>
      <Toaster />
      <div className="custom-container mx-auto py-8">
        <Navbar />
      </div>
      <div className="custom-container mx-auto ">
        <Banner />
        <Recipe />
      </div>


    </div>
  );
}

export default App;
