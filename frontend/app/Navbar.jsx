import React from 'react';
import { ArrowRight, BarChart2, Globe, Users, BriefcaseBusiness, Award, CalendarDays, TrendingUp, BookOpen, ChartPie, Target, Lightbulb, Handshake, ShieldCheck } from 'lucide-react';

const CamaraComercioHome = () => {
  return (
    <div className="min-h-screen bg-blue-950 text-white">
      {/* Navbar */}
      <nav className="bg-blue-950 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/api/placeholder/50/50" alt="Logo" className="mr-4" />
            <div className="text-2xl font-bold text-yellow-400">Cámara de Comercio</div>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-white hover:text-yellow-400 transition duration-300">Inicio</a>
            <a href="#servicios" className="text-white hover:text-yellow-400 transition duration-300">Servicios</a>
            <a href="#miembros" className="text-white hover:text-yellow-400 transition duration-300">Miembros</a>
            <a href="#eventos" className="text-white hover:text-yellow-400 transition duration-300">Eventos</a>
            <a href="#recursos" className="text-white hover:text-yellow-400 transition duration-300">Recursos</a>
            <a href="#contacto" className="text-white hover:text-yellow-400 transition duration-300">Contacto</a>
          </div>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="inicio" className="bg-blue-950 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Impulsando la Excelencia Empresarial
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Conectamos líderes, fomentamos la innovación y promovemos el crecimiento sostenible en nuestra comunidad empresarial.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-yellow-400 text-blue-950 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105">
              Únete a Nuestra Red
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-950 transition duration-300">
              Descubre Más
            </button>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-blue-950 p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-yellow-400">500+</p>
              <p className="text-xl">Empresas Miembro</p>
            </div>
            <div className="bg-blue-950 p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-yellow-400">50+</p>
              <p className="text-xl">Eventos Anuales</p>
            </div>
            <div className="bg-blue-950 p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-yellow-400">$100M+</p>
              <p className="text-xl">Impacto Económico</p>
            </div>
            <div className="bg-blue-950 p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold text-yellow-400">25+</p>
              <p className="text-xl">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/api/placeholder/600/400" alt="Sobre Nosotros" className="rounded-lg shadow-xl" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
              <p className="text-xl mb-6">
                La Cámara de Comercio es la voz líder de la comunidad empresarial, dedicada a fomentar un entorno propicio para el crecimiento y la innovación. Con más de 25 años de experiencia, nuestra misión es empoderar a las empresas locales y promover el desarrollo económico sostenible.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <ShieldCheck className="w-6 h-6 text-yellow-400 mr-2" />
                  <span>Defensores de políticas pro-empresariales</span>
                </li>
                <li className="flex items-center">
                  <Handshake className="w-6 h-6 text-yellow-400 mr-2" />
                  <span>Facilitadores de conexiones comerciales valiosas</span>
                </li>
                <li className="flex items-center">
                  <Lightbulb className="w-6 h-6 text-yellow-400 mr-2" />
                  <span>Catalizadores de innovación y crecimiento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-16">Nuestros Servicios Premium</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <Globe className="w-16 h-16 text-yellow-400 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center">Networking Global</h3>
              <p className="text-center">Conecta con empresas de todo el mundo y expande tus horizontes comerciales a través de nuestra plataforma de networking exclusiva.</p>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <BarChart2 className="w-16 h-16 text-yellow-400 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center">Inteligencia de Mercado</h3>
              <p className="text-center">Accede a datos y análisis exclusivos para tomar decisiones estratégicas informadas y mantenerte a la vanguardia de tu industria.</p>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <Users className="w-16 h-16 text-yellow-400 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center">Desarrollo Profesional</h3>
              <p className="text-center">Participa en programas de capacitación y mentorías exclusivas diseñadas para potenciar tus habilidades de liderazgo y gestión empresarial.</p>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <BriefcaseBusiness className="w-16 h-16 text-yellow-400 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center">Asesoría Empresarial</h3>
              <p className="text-center">Obtén orientación experta personalizada para superar desafíos, optimizar operaciones y aprovechar oportunidades de crecimiento.</p>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <Target className="w-16 h-16 text-yellow-400 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center">Promoción de Negocios</h3>
              <p className="text-center">Amplifica tu visibilidad en el mercado a través de nuestras plataformas de promoción y eventos de exposición empresarial.</p>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <ShieldCheck className="w-16 h-16 text-yellow-400 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center">Defensa de Intereses</h3>
              <p className="text-center">Tu voz será escuchada. Abogamos por políticas favorables a los negocios y representamos los intereses de nuestra comunidad empresarial.</p>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <BookOpen className="w-16 h-16 text-yellow-400 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center">Recursos y Publicaciones</h3>
              <p className="text-center">Accede a una biblioteca digital de recursos, informes de investigación y publicaciones exclusivas para mantenerte informado.</p>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <Handshake className="w-16 h-16 text-yellow-400 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center">Mediación Comercial</h3>
              <p className="text-center">Resuelve disputas comerciales de manera eficiente con nuestro servicio de mediación profesional y confidencial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section id="miembros" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Beneficios de la Membresía</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <ChartPie className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Acceso Exclusivo</h3>
              <ul className="space-y-2">
                <li>• Eventos de networking de alto nivel</li>
                <li>• Webinars y seminarios especializados</li>
                <li>• Plataforma de oportunidades de negocio</li>
              </ul>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <Award className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Reconocimiento</h3>
              <ul className="space-y-2">
                <li>• Perfil destacado en el directorio de miembros</li>
                <li>• Oportunidades de patrocinio y exposición</li>
                <li>• Premios anuales de excelencia empresarial</li>
              </ul>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <TrendingUp className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Crecimiento</h3>
              <ul className="space-y-2">
                <li>• Programas de mentoría personalizada</li>
                <li>• Acceso a fondos de desarrollo empresarial</li>
                <li>• Asesoría en expansión internacional</li>
              </ul>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <Globe className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Conexiones Globales</h3>
              <ul className="space-y-2">
                <li>• Red de cámaras de comercio internacionales</li>
                <li>• Misiones comerciales al extranjero</li>
                <li>• Asistencia en ferias internacionales</li>
              </ul>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <Lightbulb className="w-12 h-12 text-yellow-400 mb-4"></Lightbulb>
              <h3 className="text-2xl font-semibold mb-4">Innovación</h3>
              <ul className="space-y-2">
                <li>• Acceso a laboratorios de innovación</li>
                <li>• Colaboraciones con startups y aceleradoras</li>
                <li>• Workshops de design thinking y agilidad</li>
              </ul>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <ShieldCheck className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Protección y Apoyo</h3>
              <ul className="space-y-2">
                <li>• Asesoría legal y fiscal</li>
                <li>• Apoyo en gestión de crisis</li>
                <li>• Mediación en disputas comerciales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-16">Voces de Nuestros Miembros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <img src="/api/placeholder/100/100" alt="María Rodríguez" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="mb-4 italic">"Unirme a la Cámara de Comercio ha sido un punto de inflexión para mi empresa. Las oportunidades de networking son incomparables y el apoyo que recibimos ha sido fundamental para nuestro crecimiento."</p>
              <p className="font-semibold">María Rodríguez</p>
              <p className="text-sm text-yellow-400">CEO, TechInnovate</p>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <img src="/api/placeholder/100/100" alt="Juan Pérez" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="mb-4 italic">"Los recursos y la orientación que recibimos nos han ayudado a expandirnos a nuevos mercados con confianza. La red de contactos internacionales de la Cámara es verdaderamente impresionante."</p>
              <p className="font-semibold">Juan Pérez</p>
              <p className="text-sm text-yellow-400">Fundador, GreenSolutions</p>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <img src="/api/placeholder/100/100" alt="Ana Martínez" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="mb-4 italic">"La inteligencia de mercado proporcionada por la Cámara ha sido crucial para nuestras estrategias de crecimiento. Los informes y análisis son de primer nivel y nos dan una ventaja competitiva real."</p>
              <p className="font-semibold">Ana Martínez</p>
              <p className="text-sm text-yellow-400">Directora, GlobalTrade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="eventos" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Próximos Eventos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <CalendarDays className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Foro de Innovación Tecnológica</h3>
              <p className="mb-4">Explora las últimas tendencias en tecnología y su impacto en los negocios. Conferencias, demostraciones y networking con líderes tecnológicos.</p>
              <p className="text-yellow-400 mb-2">15 de Noviembre, 2024</p>
              <button className="bg-yellow-400 text-blue-950 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition duration-300">Reserva tu lugar</button>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <TrendingUp className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Cumbre de Liderazgo Empresarial</h3>
              <p className="mb-4">Aprende de líderes exitosos y desarrolla tus habilidades de liderazgo. Talleres interactivos, paneles de discusión y oportunidades de mentoría.</p>
              <p className="text-yellow-400 mb-2">3 de Diciembre, 2024</p>
              <button className="bg-yellow-400 text-blue-950 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition duration-300">Inscríbete ahora</button>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <Globe className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Expo Comercio Internacional</h3>
              <p className="mb-4">Conecta con empresas de todo el mundo y explora oportunidades globales. Pabellones por país, rondas de negocios y conferencias sobre comercio internacional.</p>
              <p className="text-yellow-400 mb-2">20 de Enero, 2025</p>
              <button className="bg-yellow-400 text-blue-950 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition duration-300">Más información</button>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#" className="text-yellow-400 hover:underline text-lg">Ver todos los eventos</a>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="recursos" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-16">Recursos para el Éxito Empresarial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <BookOpen className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Biblioteca Digital</h3>
              <p className="mb-4">Accede a nuestra extensa colección de e-books, informes de mercado y guías prácticas para potenciar tu conocimiento empresarial.</p>
              <a href="#" className="text-yellow-400 hover:underline">Explorar biblioteca</a>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <BarChart2 className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Centro de Investigación</h3>
              <p className="mb-4">Descubre análisis de tendencias, estudios sectoriales y proyecciones económicas elaborados por nuestro equipo de expertos.</p>
              <a href="#" className="text-yellow-400 hover:underline">Ver investigaciones</a>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Comunidad en Línea</h3>
              <p className="mb-4">Conéctate con otros miembros, participa en foros de discusión y comparte conocimientos en nuestra plataforma exclusiva.</p>
              <a href="#" className="text-yellow-400 hover:underline">Unirse a la comunidad</a>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <Lightbulb className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Centro de Innovación</h3>
              <p className="mb-4">Explora las últimas tecnologías, metodologías de innovación y casos de estudio de empresas disruptivas.</p>
              <a href="#" className="text-yellow-400 hover:underline">Descubrir innovaciones</a>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <Target className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Herramientas de Gestión</h3>
              <p className="mb-4">Utiliza nuestras plantillas, calculadoras y software especializados para optimizar tus operaciones empresariales.</p>
              <a href="#" className="text-yellow-400 hover:underline">Acceder a herramientas</a>
            </div>
            <div className="bg-blue-950 p-8 rounded-lg shadow-lg">
              <Globe className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Portal de Exportación</h3>
              <p className="mb-4">Encuentra información crucial sobre mercados internacionales, regulaciones y oportunidades de exportación.</p>
              <a href="#" className="text-yellow-400 hover:underline">Explorar oportunidades</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-400 text-blue-950 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Lleva tu Negocio al Siguiente Nivel</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Únete a nuestra red de empresarios visionarios y descubre un mundo de oportunidades para crecer y prosperar. La excelencia empresarial te espera.</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-blue-950 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-950 transition duration-300 flex items-center justify-center">
              Comienza tu Viaje de Éxito
              <ArrowRight className="ml-2" />
            </button>
            <button className="bg-transparent border-2 border-blue-950 text-blue-950 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-950 hover:text-white transition duration-300">
              Conoce Nuestros Planes
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Cámara de Comercio</h3>
              <p className="text-white">Impulsando el éxito empresarial desde 1990</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Enlaces Rápidos</h3>
              <ul className="text-white">
                <li><a href="#" className="hover:text-white">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white">Servicios</a></li>
                <li><a href="#" className="hover:text-white">Eventos</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contacto</h3>
              <p className="text-white">
                123 Calle Principal<br />
                Ciudad Empresa, CP 12345<br />
                Tel: (123) 456-7890<br />
                Email: info@camaracomercio.com
              </p>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-white hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-white hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-white">
            © 2024 Cámara de Comercio. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

  export default CamaraComercioHome
      