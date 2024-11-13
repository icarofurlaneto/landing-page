import React from 'react';
import Header from './components/header';
import Projetos from './components/projetos';
import About from './components/about';
import Contato from './components/contato';
import GlobalStyles from './GlobalStyles';
import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Header />
      <About />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
