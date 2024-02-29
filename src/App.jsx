import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TripPlanning from './pages/TripPlanning';
import SleepSchedule from './pages/SleepSchedule';
import MealTimes from './pages/MealTimes';
import NappingGuidelines from './pages/NappingGuidelines';
import Notifications from './pages/Notifications';
import RelaxationTechniques from './pages/RelaxationTechniques';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trip-planning" element={<TripPlanning />} />
            <Route path="/sleep-schedule" element={<SleepSchedule />} />
            <Route path="/meal-times" element={<MealTimes />} />
            <Route path="/napping-guidelines" element={<NappingGuidelines />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/relaxation-techniques" element={<RelaxationTechniques />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;