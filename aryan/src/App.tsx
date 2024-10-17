import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import PersonalizedRoadmap from './pages/PersonalizedRoadmap';
import OnlineCourses from './pages/OnlineCourses';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/roadmap" element={<PersonalizedRoadmap />} />
            <Route path="/courses" element={<OnlineCourses />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;