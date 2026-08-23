export function ViewInicio() {
  return `
    <header class="relative overflow-hidden rounded-3xl bg-gray-900 border border-white/5 shadow-2xl min-h-[75vh] flex items-center w-full">
      <div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]"></div>
        <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600 rounded-full blur-[100px]"></div>
      </div>

      <div class="relative z-10 w-full px-6 py-16 mx-auto sm:px-12 lg:px-16 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 text-left">
          <div class="animate-fade-in-up" style="animation-delay: 100ms; animation-fill-mode: both;">
            <span class="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Disponible para trabajar
            </span>
          </div>
          
          <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up" style="animation-delay: 300ms; animation-fill-mode: both;">
            Hola, soy <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300">Kevin Garcia</span>
          </h1>
          
          <p class="text-base sm:text-lg text-gray-300 max-w-lg leading-relaxed font-light animate-fade-in-up" style="animation-delay: 500ms; animation-fill-mode: both;">
            Desarrollador Web apasionado por crear soluciones digitales elegantes y eficientes. Especializado en construir aplicaciones, páginas web y sistemas robustos, así como en diseñar interfaces dinámicas y modernas.
          </p>
          
          <div class="flex flex-wrap gap-4 pt-2 animate-fade-in-up" style="animation-delay: 700ms; animation-fill-mode: both;">
            <a href="/portafolio" class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wider text-white bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition duration-300 transform hover:-translate-y-0.5">
              Ver Proyectos
            </a>
            <a href="/contacto" class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wider text-gray-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition duration-300 transform hover:-translate-y-0.5">
              Contáctame
            </a>
          </div>
        </div>

        <div class="relative flex justify-center lg:justify-end z-10 animate-fade-in" style="animation-delay: 400ms; animation-fill-mode: both;">
          <div class="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-1.5 bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-2xl group cursor-pointer">
            <div class="w-full h-full rounded-full bg-[#000000] group-hover:bg-[#ffffff] overflow-hidden flex items-center justify-center p-6 relative transition-colors duration-500 ease-in-out">
              <img src="/keyvlercode.png" alt="Logo Keyvlercode" class="w-full h-auto max-h-[60%] object-contain transition-all duration-500 ease-in-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 absolute" />
              <img src="/kevinGarcia.png" alt="Kevin García Foto" class="w-full h-auto max-h-[100%] object-contain transition-all duration-500 ease-in-out opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 absolute" />
            </div>
          </div>
        </div>
      </div>
    </header>

    <style>
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
      .animate-fade-in { animation: fadeIn 1s ease-out; }
    </style>
  `;
}