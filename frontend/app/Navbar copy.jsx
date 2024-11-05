import React from 'react';

const Header = () => {
  return (
    <header className="relative flex w-screen max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-white md:mx-auto md:flex-row md:items-center">
      
      <a href="#" className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
        <img
          src="/logo_empresa.png" 
          alt="Logo de la Cámara de Comercio La Maná"
          className="h-10 w-10 mr-2" 
        />
        Cámara de Comercio La Maná
      </a>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
      <nav aria-label="Header Navigation" className="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start">
        <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
          <li className="font-bold md:mr-12"><a href="#">Inicio</a></li>
          <li className="md:mr-12"><a href="#">Acerca</a></li>
          <li className="md:mr-12"><a href="#">Servicios</a></li>
          <li className="md:mr-12"><a href="#">Misión/Visión</a></li>
          <li className="md:mr-12"><a href="#">Contacto</a></li>
        </ul>
        {/* Redes sociales */}
        <div className="mt-4 flex space-x-6 md:mt-0 md:ml-12">
          <a href="https://www.facebook.com/camaracomer" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white transition-colors duration-200 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/camaracomer" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white transition-colors duration-200 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11c0 1.551-1.069 3-3 3m0 0c0 1.551 1.069 3 3 3m0 0c0-1.551-1.069-3-3-3m0 0c0-1.551 1.069-3 3-3M5 7c0 1.551-1.069 3-3 3m0 0c0-1.551 1.069-3 3-3m0 0c0 1.551-1.069 3-3 3m0 0c0-1.551 1.069-3 3-3M17 7c0 1.551-1.069 3-3 3s-3-1.447-3-3 1.069-3 3-3 3 1.447 3 3zm-5 1c0 1.551-1.069 3-3 3s-3-1.447-3-3 1.069-3 3-3 3 1.447 3 3zM4 3v2.25L3.5 4h-2.5L2 3v2.25L1.5 4h-2.5L.5 3V2.25L0 3.75V3h2.5L1.5 2.25V3h2.5L3 2.25V3h2.5L4.5 2.25V3z" />
            </svg>
          </a>
          <a href="https://twitter.com/camaracomer" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white transition-colors duration-200 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/camaracomer" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white transition-colors duration-200 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 01-6 6v8h8v-8a6 6 0 01-6-6zM2 9h8v1h8v-1H2z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

const Acerca = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-gradient-to-l from-slate-800 to-blue-900">
      <Header />
      <div className="mx-auto flex w-full flex-col px-4 py-16 sm:py-24 sm:px-8 md:max-w-3xl lg:max-w-5xl">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-12 lg:mb-0 lg:max-w-2xl lg:pr-8">
            <div className="mb-8 max-w-2xl">
              <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-6 text-lg font-semibold uppercase tracking-wider text-gray-50">
                Para tus Negocios
              </p>
              <h2 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Promoviendo el crecimiento de sus socios y el desarrollo
              </h2>
              <p className="text-lg text-gray-200">
                Somos la Cámara de Comercio La Maná, una institución que se dedica a promover el crecimiento y desarrollo de nuestros socios y la comunidad en general.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="tel:+593 958997536"
                className="mb-6 inline-flex h-16 w-full items-center justify-center rounded bg-yellow-400 px-8 text-lg font-medium text-blue-900 shadow-md transition duration-200 hover:bg-yellow-400 md:mr-8 md:mb-0 md:w-auto"
              >
                Llamar
              </a>
              <a
                href="mailto:camaracomer@gmail.com"
                className="inline-flex items-center font-semibold text-gray-50 underline-offset-2 transition-colors duration-200 hover:underline"
              >
                Enviar correo
              </a>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img className="h-64 w-full object-cover sm:h-96 lg:h-auto" src="/hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acerca;
