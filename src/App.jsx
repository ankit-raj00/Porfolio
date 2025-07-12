import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import PositionsOfResponsibility from './components/PositionsOfResponsibility';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

import { ThemeProvider } from './ThemeContext';
import data from './data.json';

function App() {
  return (
    <ThemeProvider>
      <div className="relative bg-white dark:bg-gray-900">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <Hero data={data.hero} />
        <About data={data.about} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
        <Internships data={data.internships} />
        <PositionsOfResponsibility data={data.positionsOfResponsibility} />
        <Achievements data={data.achievements} />
        <Contact data={data.contact} />
        <Footer data={data.footer} />
      </div>
    </ThemeProvider>
  );
}

export default App;