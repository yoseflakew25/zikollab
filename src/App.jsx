import AllRoutes from "./Routes";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <NavBar />
      <AllRoutes />
      <Footer />
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true}
    />      
    </>
  );
}

export default App;
