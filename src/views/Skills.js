export function ViewSkills() {
  return `
    <div class="w-full space-y-12 animate-fade-in" style="animation-duration: 0.7s;">
      
      <div class="text-left space-y-2">
        <span class="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          Habilidades
        </span>
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Mi Stack <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Tecnológico</span>
        </h1>
        <p class="text-gray-400 max-w-2xl font-light text-base sm:text-lg">
          Herramientas, frameworks y tecnologías que utilizo para transformar ideas en aplicaciones robustas, escalables y visualmente impactantes.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-gray-900/40 border border-white/5 rounded-3xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden group">
          <div class="absolute -top-12 -right-12 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl transition-all group-hover:bg-indigo-500/20"></div>
          
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a3 3 0 013-3v0a3 3 0 013 3M4.5 9h15M5.25 5.25h13.5" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-white">Desarrollo Backend</h2>
          </div>

          <div class="space-y-4">
            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">PHP </span>
                <span class="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/10">Avanzado</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000" style="width: 85%;"></div>
              </div>
            </div>
            
            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">Arquitectura de APIs / Eloquent Laravel</span>
                <span class="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/10">Intermedio-Avanzado</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000" style="width: 80%;"></div>
              </div>
            </div>

            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">Python</span>
                <span class="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/10">Intermedio</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000" style="width: 40%;"></div>
              </div>
            </div>



            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">Livewire & Inertia.js</span>
                <span class="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/10">Dominando</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000" style="width: 45%;"></div>
              </div>
            </div>
          </div>
        </div>



        <div class="bg-gray-900/40 border border-white/5 rounded-3xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden group">
          <div class="absolute -top-12 -right-12 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl transition-all group-hover:bg-purple-500/20"></div>
          
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-white">Desarrollo Frontend & UI Dinámica</h2>
          </div>

          <div class="space-y-4">
            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">Tailwind CSS & CSS Moderno</span>
                <span class="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/10">Avanzado</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-1000" style="width: 90%;"></div>
              </div>
            </div>
            
            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">JavaScrip</span>
                <span class="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/10">Intermedio-Avanzado</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-1000" style="width: 75%;"></div>
              </div>
            </div>

            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200"> Css</span>
                <span class="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/10">Intermedio-Avanzado</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-1000" style="width: 75%;"></div>
              </div>
            </div>



            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">Templates Css</span>
                <span class="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/10">Intermedio-Avanzado</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-1000" style="width: 75%;"></div>
              </div>
            </div>

            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">Vue.js / Alpine.js</span>
                <span class="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/10">En Aprendizaje</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-1000" style="width: 50%;"></div>
              </div>
            </div>
          </div>
        </div>


        

        <div class="bg-gray-900/40 border border-white/5 rounded-3xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden group">
          <div class="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl transition-all group-hover:bg-blue-500/20"></div>
          
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-white">Bases de Datos & Gestión</h2>
          </div>

          <div class="space-y-4">
            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">Relacionales: MySQL / MariaDB</span>
                <span class="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/10">Avanzado</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style="width: 80%;"></div>
              </div>
            </div>
            
            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">Administración con HeidiSQL</span>
                <span class="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/10">Avanzado</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style="width: 85%;"></div>
              </div>
            </div>

            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">Optimización de Consultas & Estructuras</span>
                <span class="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/10">Intermedio</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style="width: 70%;"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-900/40 border border-white/5 rounded-3xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden group">
          <div class="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl transition-all group-hover:bg-emerald-500/20"></div>
          
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527a1.125 1.125 0 01-1.448-.12l-.774-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.774-.773a1.125 1.125 0 011.449-.12l.738.527c.35.25.806.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-white">Herramientas & Entornos</h2>
          </div>

          <div class="space-y-4">
            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">Control de Versiones: Git & GitHub</span>
                <span class="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/10">Avanzado</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style="width: 85%;"></div>
              </div>
            </div>
            
            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">Entornos Locales: Laragon / Sail</span>
                <span class="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/10">Avanzado</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style="width: 90%;"></div>
              </div>
            </div>


            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">Xampp</span>
                <span class="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/10">Avanzado</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style="width: 90%;"></div>
              </div>
            </div>

            <div class="space-y-2 text-left">
              <div class="flex justify-between items-center text-sm">
                <span class="font-medium text-gray-200">Metodologías Ágiles</span>
                <span class="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/10">Avanzado</span>
              </div>
              <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style="width: 90%;"></div>
              </div>
            </div>
            

            
          </div>
        </div>

      </div>
    </div>
  `;
}