export function ViewSoy() {
  return `
    <div class="w-full space-y-12 animate-fade-in" style="animation-duration: 0.7s;">
      
      <div class="text-left space-y-2">
        <span class="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
          Sobre mí
        </span>
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Mi Historia y <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Filosofía</span>
        </h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div class="lg:col-span-5 space-y-4">


          <div class="bg-gray-900/40 border border-white/5 rounded-2xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden group">
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl transition-all group-hover:bg-indigo-500/20"></div>
            
            <div class="flex items-start gap-4">
              <div class="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"/>
                </svg>
              </div>
              <div class="space-y-1 text-left">
                <h3 class="text-lg font-semibold text-white">Desarrollo Backend</h3>
                <p class="text-sm text-gray-400 leading-relaxed">
                  Construcción de arquitecturas sólidas, cuidado y optimización de bases de datos y creación de sistemas eficientes y escalables.
                </p>
              </div>
            </div>
          </div>


          <div class="bg-gray-900/40 border border-white/5 rounded-2xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden group">
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl transition-all group-hover:bg-indigo-500/20"></div>
            
            <div class="flex items-start gap-4">
              <div class="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <i class="fa-solid fa-palette text-xl"></i>
              </div>
              <div class="space-y-1 text-left">
                <h3 class="text-lg font-semibold text-white">Desarrollo Frontend</h3>
                <p class="text-sm text-gray-400 leading-relaxed">
                 Transformación de ideas en experiencias digitales interactivas. Diseño de interfaces pulidas y dinámicas que combinan estética visual, accesibilidad y total adaptabilidad a cualquier dispositivo.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gray-900/40 border border-white/5 rounded-2xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden group">
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl transition-all group-hover:bg-purple-500/20"></div>
            
            <div class="flex items-start gap-4">
              <div class="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <i class="fa-display text-xl"></i>
              </div>
              <div class="space-y-1 text-left">
                <h3 class="text-lg font-semibold text-white">Interfaces Dinámicas</h3>
                <p class="text-sm text-gray-400 leading-relaxed">
                  Diseño UI/UX interactivo, limpio y enfocado en la experiencia del usuario, cuidando las transiciones y la responsividad.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gray-900/40 border border-white/5 rounded-2xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden group">
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl transition-all group-hover:bg-indigo-500/20"></div>
            
            <div class="flex items-start gap-4">
              <div class="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <i class="fa-solid fa-wand-magic-sparkles text-xl"></i> 
              </div>
              <div class="space-y-1 text-left">
                <h3 class="text-lg font-semibold text-white">Diseño Digital</h3>
                <p class="text-sm text-gray-400 leading-relaxed">
                  Creación de piezas gráficas conceptuales y composición de imágenes publicitarias de alto impacto. Enfoque estratégico en la producción de contenido visual y campañas digitales diseñadas para captar la atención, comunicar ideas clave y conectar con la audiencia. Enfoque en la consistencia de marca, la composición estética y la comunicación visual estratégica para entornos interactivos
                </p>
              </div>
            </div>
          </div>
          
          
        </div>

        <div class="lg:col-span-7 bg-gray-900/30 border border-white/5 rounded-3xl p-8 shadow-2xl backdrop-blur-md space-y-6 text-left">
          
          <div class="space-y-4 text-gray-300 font-light leading-relaxed text-base sm:text-lg">
            <p>
              ¡Hola! Mi nombre es Kevin Edmael Garcia Martinez. Desde que inicié mi camino en el desarrollo de software y web me he apasionado por fusionar la potencia
              lógica del código con interfaces visuales pulidas e intuitivas. Me formé profesionalmente en la Universidad Tecnológica de Zinacantepec y, a lo largo de mi trayectoria, 
              he enfocado mis esfuerzos en transformar problemas complejos en soluciones digitales estables, elegantes y eficientes.
            </p>
           
            <p>
              Me apasiona profundizar en el ecosistema del desarrollo, especializándome en construir la arquitectura y lógica detrás de aplicaciones web, páginas comerciales y sistemas robustos, sin descuidar el impacto visual y la velocidad de respuesta en el cliente.
            </p>
            <p>
              Constantemente busco superar nuevos retos técnicos, aprender metodologías ágiles y escribir código limpio y fácil de mantener que aporte un valor real a cada proyecto en el que trabajo.
            </p>
          </div>

          <div class="border-t border-white/5 my-6"></div>

          <div class="grid grid-cols-2 gap-4 pt-2">
            <div class="p-4 bg-white/5 border border-white/5 rounded-xl">
                <div class="text-2xl font-bold text-indigo-400 font-mono">
                +<span class="counter" data-target="8">0</span>
                </div>
                <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">Tecnologías Dominadas</div>
            </div>
            
            <div class="p-4 bg-white/5 border border-white/5 rounded-xl">
                <div class="text-2xl font-bold text-purple-400 font-mono">
                <span class="counter" data-target="100">0</span>%
                </div>
                <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">Enfoque en Calidad</div>
            </div>
            </div>

          <div class="flex flex-wrap gap-4 pt-4">
            <a href="/cv" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold tracking-wider text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:opacity-90 transition duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-indigo-500/10">
              Ver Currículum Completo
            </a>
            <a href="/contacto" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold tracking-wider text-gray-400 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition duration-300">
              Hablemos
            </a>
          </div>

        </div>

      </div>
    </div>
  `;
}