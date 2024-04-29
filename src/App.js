import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/HomeMain/Home';
import About from './Components/About/AboutMain/About';
import Team from './Components/Team/TeamMain/Team';
import Testimonials from './Components/Testimonials/TestimonialMain/Testimonials';
import Footer from './Components/Footer/Footer';
import ContactMain from './Components/Contact/ContactMain/ContactMain';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<ContactMain />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
