import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <BlogPost 
          title="Información del Proyecto y Características del Equipo"
          content={`Este proyecto tiene como objetivo realizar 50 ejecuciones de un programa que convierte una imagen RGB a escala de grises en diferentes entornos:\n\n
          1. En Windows sin usar OpenMP.\n
          2. En Windows usando OpenMP.\n
          3. En Linux sin usar OpenMP.\n
          4. En Linux usando OpenMP.\n\n
          El propósito es comparar el rendimiento de las ejecuciones en los diferentes entornos y observar el impacto del uso de OpenMP para paralelizar el procesamiento de imágenes.\n\n
          La máquina utilizada para este proyecto cuenta con las siguientes especificaciones:\n
          - Procesador: Intel Core i7 13700\n
          - Memoria RAM: 32 GB DDR5\n\n
          Esto proporciona una plataforma robusta para realizar las pruebas y obtener resultados significativos.`}
        />
        <BlogPost 
          title="Detalles del Proyecto Final"
          content={`El proyecto final se centra en la implementación y evaluación del procesamiento de imágenes en paralelo. Se han llevado a cabo diversas pruebas para medir el tiempo de ejecución y la eficiencia del procesamiento de una imagen RGB a escala de grises. Los resultados obtenidos se analizarán para determinar las ventajas y desventajas del uso de OpenMP en diferentes sistemas operativos.\n\n
          Los pasos realizados incluyen:\n
          - Implementación del algoritmo de conversión de RGB a escala de grises.\n
          - Paralelización del algoritmo utilizando OpenMP.\n
          - Ejecución de las pruebas y recolección de datos.\n
          - Paralelización del algoritmo utilizando sin OpenMP.\n
          - Ejecución de las pruebas y recolección de datos.\n
          - Análisis de los resultados y elaboración de conclusiones.\n\n
          Este proyecto ofrece una visión detallada del rendimiento del cómputo paralelo en el procesamiento de imágenes, proporcionando información valiosa para futuras optimizaciones y aplicaciones en este campo.`}
              />
              <section className="section">
          <h3>Gráficas de Ejecución En Windows Sin OMP</h3>
          <img src="ruta/" alt="Gráfica 1" />
          <img src="ruta/" alt="Gráfica 2" />
          <img src="ruta/" alt="Gráfica 3" />
          <img src="ruta/" alt="Gráfica 4" />
          <h3>Gráficas de Ejecución En Window Con OMPs</h3>
          <img src="ruta/" alt="Gráfica 5" />
          <img src="ruta/" alt="Gráfica 6" />
          <img src="ruta/" alt="Gráfica 7" />
          <img src="ruta/" alt="Gráfica 8" />
          <h3>Gráficas de Ejecución En Fedora Sin OMP</h3>
          <img src="ruta/" alt="Gráfica 1" />
          <img src="ruta/" alt="Gráfica 2" />
          <img src="ruta/" alt="Gráfica 3" />
          <img src="ruta/" alt="Gráfica 4" />
          <h3>Gráficas de Ejecución En Fedora Con OMP</h3>
          <img src="ruta/" alt="Gráfica 5" />
          <img src="ruta/" alt="Gráfica 6" />
          <img src="ruta/" alt="Gráfica 7" />
          <img src="ruta/" alt="Gráfica 8" />
        </section>

        <section className="section">
          <h3>Códigos Utilizados</h3>
          <pre>
            <code>
              {`
              // Aquí va tu código fuente
              `}
            </code>
          </pre>
              </section>
              
              <BlogPost 
          title="Conclusiones"
          content={`agregarlas`}
              />
      </main>
      <Footer />
    </div>
  );
};

export default App;
