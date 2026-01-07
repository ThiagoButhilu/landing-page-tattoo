import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import About from './components/About';
import Artists from './components/Artists';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-black">
      <Header />
      <Hero />
      <About />
      <Artists />
      <Testimonials />
      <InstagramFeed />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
