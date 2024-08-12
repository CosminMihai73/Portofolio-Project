import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Creations from './pages/Creations';
import AddWorkPage from './pages/AddWorkPage';
import EditWorkPage from './pages/EditWorkPage';
import HomePage from './pages/HomePage';
import WorkDetailPage from './pages/WorkDetailPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portofolio" element={<Creations />} />
        <Route path="/add" element={<AddWorkPage />} />
        <Route path="/edit/:id" element={<EditWorkPage />} />
        <Route path="/works/:id" element={<WorkDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
