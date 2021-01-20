import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Contactus from "./components/pages/Contactus";
import Navbar from "./components/pages/layout/Navbar";

function App() {
  return (
    <div className="App">
      {/* <h1>app main page</h1> */}
      <Navbar/>
      <Home></Home>
      <Aboutus />
      <Contactus/>
    </div>
  );
}

export default App;
