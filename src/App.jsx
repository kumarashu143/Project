import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollTopButton';
import { HeroSection } from './components/HeroSection';
import { CourseOverview, LogoSlider } from './components/CourseOverview';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Register from './pages/Register';
import Alumni from './pages/Alumni';
import Courses from './pages/Courses';
import FeeManager from './components/FeeManager';
import RequireAuth from './components/RequireAuth';

const Home = () => (
  <main>    
    <section>
      <HeroSection />
    </section>
    <section>
      <LogoSlider />
    </section>
    <section>
      <CourseOverview />
    </section>
  </main>
);

const Logout = () => {
  localStorage.removeItem('token');
  return <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />

       
        <Route path="/admin" element={<Navigate to="/admin/fees" />} />
        <Route path="/admin/fees" element={
          <RequireAuth>
            <FeeManager />
          </RequireAuth>
        } />

        
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
