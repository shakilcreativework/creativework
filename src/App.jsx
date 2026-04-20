
import { Outlet } from 'react-router';
import './App.css';
import Navbar from './shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className='min-h-dvh flex flex-col dm-sans'>
      <Navbar />
      <div className='flex-1 bg-[#fdfcf8]'>
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
