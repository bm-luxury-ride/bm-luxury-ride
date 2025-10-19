
// src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/components/Home';
import Layout from '@/components/layout'; // 1. Import your Layout component

// Let's assume you have an About page component as well
const About = () => <div>This is the About Page</div>;

function App() {
  return (
    <Routes>
      {/* 2. Create a parent route that uses your Layout component */}
      <Route path="/" element={<Layout />}>
        {/* 3. Nest your page routes inside. These will render in the Outlet */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* Add other pages that should have the layout here */}
      </Route>
    </Routes>
  );
}

export default App;