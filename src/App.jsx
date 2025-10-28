import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <Navbar/>
        <main className="container mx-auto px-4">
          <Hero/>
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;