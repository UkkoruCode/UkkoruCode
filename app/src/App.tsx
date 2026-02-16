import { Toaster } from 'sonner';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a12]">
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#132187',
            color: '#fff',
            border: '1px solid rgba(65, 213, 250, 0.3)',
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
