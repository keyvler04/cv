export function renderNavbar() {
   
  return `
    <nav class="w-full block bg-slate-900/70 backdrop-blur-md border-b border-indigo-500/10 shadow-[0_20px_50px_rgba(0,0,0,0.7),_inset_0_1px_2px_rgba(255,255,255,0.05)] sticky top-0 z-50">
      
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          
          <!-- Logo (Alineado a la izquierda sin posiciones absolutas que lo empalmen) -->
          <div class="flex shrink-0 items-center">
            <a href="/index" class="hover:opacity-80 transition duration-300 block">
              <img src="/keyvlercode.png" alt="logo" class="h-12 w-auto object-contain" width="40" height="40" />
            </a>
          </div>

          <!-- Botón Hamburguesa (Mantenido intacto, posicionado a la derecha en móvil) -->
          <div class="flex items-center sm:hidden">
            <button type="button" command="--toggle" commandfor="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6 in-aria-expanded:hidden">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          
          <!-- Menú para Escritorio (Tus enlaces originales intactos) -->
          <div class="hidden sm:flex flex-1 justify-around ml-10">
            <a href="/soy" class="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-white/5 hover:text-white transition duration-300" style="font-size: 1.25rem; letter-spacing: 0.15em;">¿Quién soy?</a>
            <a href="/cv" class="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-white/5 hover:text-white transition duration-300" style="font-size: 1.25rem; letter-spacing: 0.15em;">CV</a>
            <a href="/portafolio" class="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-white/5 hover:text-white transition duration-300" style="font-size: 1.25rem; letter-spacing: 0.15em;">Portafolio</a>
            <a href="/skills" class="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-white/5 hover:text-white transition duration-300" style="font-size: 1.25rem; letter-spacing: 0.15em;">Skills</a>
            <a href="/contacto" class="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-white/5 hover:text-white transition duration-300" style="font-size: 1.25rem; letter-spacing: 0.15em;">Contacto</a>
          </div>

        </div>
      </div>

      <!-- Menú Desplegable Móvil (Posicionado de forma absoluta debajo del nav para no encimarse al logo) -->
      <el-disclosure id="mobile-menu" hidden class="absolute top-full left-0 w-full sm:hidden bg-slate-900/95 backdrop-blur-md border-t border-b border-indigo-500/20 shadow-2xl">
        <div class="flex flex-col space-y-2 py-4 text-center"> 
          <a href="/soy" class="text-gray-300 py-2" style="font-size: 1.25rem; letter-spacing: 0.15em;">¿Quién soy?</a>
          <a href="/cv" class="text-gray-300 py-2" style="font-size: 1.25rem; letter-spacing: 0.15em;">CV</a>
          <a href="/portafolio" class="text-gray-300 py-2" style="font-size: 1.25rem; letter-spacing: 0.15em;">Portafolio</a>
          <a href="/skills" class="text-gray-300 py-2" style="font-size: 1.25rem; letter-spacing: 0.15em;">Skills</a>
          <a href="/contacto" class="text-gray-300 py-2" style="font-size: 1.25rem; letter-spacing: 0.15em;">Contacto</a>
        </div>
      </el-disclosure>

    </nav>
  `;
}