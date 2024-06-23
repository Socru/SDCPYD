import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <BlogPost title="Documentación del Proyecto" content="Aquí va la documentación del proyecto..." />
        <BlogPost title="Proyecto Final" content="Aquí va la descripción del proyecto final..." />
      </main>
      <Footer />
    </div>
  );
};

export default App;
