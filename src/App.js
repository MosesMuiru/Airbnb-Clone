import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Rentals from './components/Rentals';

import './App.css';
// import { FaBeer } from "react-icons/fa"

function App() {
  return (
    <div className=''>
      <Navbar/>

      <div>
      <Filters/>
      <Rentals/>
      </div>
  
    </div>
    
    // <div className=' text-blue-300'>welcome to react with tailwind</div>
   
  );
}

export default App;
