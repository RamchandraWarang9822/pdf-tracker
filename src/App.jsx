import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, UploadFile, NotFound } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<UploadFile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
