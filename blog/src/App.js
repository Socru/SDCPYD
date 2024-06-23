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
          title="Documentación del Proyecto"
          content={`Este proyecto tiene como objetivo realizar 50 ejecuciones de un programa que convierte una imagen RGB a escala de grises en diferentes entornos:

1. En Windows sin usar OpenMP.
2. En Windows usando OpenMP.
3. En Linux sin usar OpenMP.
4. En Linux usando OpenMP.

El propósito es comparar el rendimiento de las ejecuciones en los diferentes entornos y observar el impacto del uso de OpenMP para paralelizar el procesamiento de imágenes. 

La máquina utilizada para este proyecto cuenta con un procesador Intel Core i7 13700 y 32 GB de RAM DDR5, lo que proporciona una plataforma robusta para realizar las pruebas y obtener resultados significativos.`}
        />
        <BlogPost 
          title="Proyecto Final"
          content={`El proyecto final se centra en la implementación y evaluación del procesamiento de imágenes en paralelo. Se han llevado a cabo diversas pruebas para medir el tiempo de ejecución y la eficiencia del procesamiento de una imagen RGB a escala de grises. Los resultados obtenidos se analizarán para determinar las ventajas y desventajas del uso de OpenMP en diferentes sistemas operativos.

Los pasos realizados incluyen:
1. Configuración del entorno de desarrollo en Windows y Linux.
2. Implementación del algoritmo de conversión de RGB a escala de grises.
3. Paralelización del algoritmo utilizando OpenMP.
4. Ejecución de las pruebas y recolección de datos.
5. Análisis de los resultados y elaboración de conclusiones.

Este proyecto ofrece una visión detallada del rendimiento del cómputo paralelo en el procesamiento de imágenes, proporcionando información valiosa para futuras optimizaciones y aplicaciones en este campo.`}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
