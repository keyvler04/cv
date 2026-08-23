export function renderNavbar() {
   
  return `
    <nav class="w-full block bg-slate-900/70 backdrop-blur-md border-b border-indigo-500/10 shadow-[0_20px_50px_rgba(0,0,0,0.7),_inset_0_1px_2px_rgba(255,255,255,0.05)] sticky top-0 z-50">
      
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative flex h-20 items-center justify-between">
          
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" command="--toggle" commandfor="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6 in-aria-expanded:hidden">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          
          <div class="flex flex-1 items-center justify-between w-full">
            
            <div class="flex shrink-0 items-center">
              <a href="/index" class="hover:opacity-80 transition duration-300 block">
                <img src="/keyvlercode.png" alt="logo" class="h-12 w-auto object-contain" width="40" height="40" />
              </a>
            </div>
            
            <div class="hidden sm:flex flex-1 justify-around ml-10">
              <a href="/soy" class="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-white/5 hover:text-white transition duration-300" style="font-size: 1.25rem; letter-spacing: 0.15em;">¿Quién soy?</a>
              <a href="/cv" class="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-white/5 hover:text-white transition duration-300" style="font-size: 1.25rem; letter-spacing: 0.15em;">CV</a>
              <a href="/portafolio" class="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-white/5 hover:text-white transition duration-300" style="font-size: 1.25rem; letter-spacing: 0.15em;">Portafolio</a>
              <a href="/skills" class="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-white/5 hover:text-white transition duration-300" style="font-size: 1.25rem; letter-spacing: 0.15em;">Skills</a>
              <a href="/contacto" class="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-white/5 hover:text-white transition duration-300" style="font-size: 1.25rem; letter-spacing: 0.15em;">Contacto</a>
            </div>

          </div>
        </div>
      </div>

      <el-disclosure id="mobile-menu" hidden class="block sm:hidden bg-gray-900/90 border-t border-white/5">
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