import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0)

  // Font-sans akan di-load dari tailwind.config.js
  // Background di-set di index.css
  return (
    // Styling global diterapkan di sini
    <div className="font-poppins min-h-screen bg-gray-50 text-gray-900"> 
      <Navbar /> 
      {/* Home dirender di sini, DI ANTARA Navbar dan Footer */}
      <Home /> 
      <Footer />
    </div>
  );
}

export default App
