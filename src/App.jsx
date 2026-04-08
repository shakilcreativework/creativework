
import { Outlet } from 'react-router';
import './App.css';
import Navbar from './shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />

      <ToastContainer />
    </div>
  )
}

export default App
