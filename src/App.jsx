
import { Outlet } from 'react-router';
import './App.css';
import Navbar from './shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div>
      <Navbar />
      <div className='min-h-[calc(100vh-559px)] md:min-h-[calc(100vh-457px)]'>
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
