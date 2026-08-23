export function ViewCv() {
  // Función para cerrar el modal desde JS o evento global
  window.closeCertModal = function() {
    const modal = document.getElementById('cert-modal');
    if (modal) modal.classList.add('hidden');
  };

  // Función para abrir el modal pasando la ruta de la imagen y título
  window.openCertModal = function(imageSrc, title) {
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('cert-modal-img');
    const modalTitle = document.getElementById('cert-modal-title');
    
    if (modal && modalImg && modalTitle) {
      modalImg.src = imageSrc;
      modalTitle.textContent = title;
      modal.classList.remove('hidden');
    }
  };

  return `
    <div class="w-full space-y-12 animate-fade-in" style="animation-duration: 0.7s;">
      
      <!-- Encabezado y Acción -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
        <div class="text-left space-y-2">
          <span class="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            Trayectoria
          </span>
          <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Currículum <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Vitae</span>
          </h1>
          <p class="text-gray-400 font-light text-base">
            Un resumen de mi formación académica, experiencia técnica y evolución profesional.
          </p>
        </div>
        
        <div class="flex-shrink-0 text-left">
          <a href="/KEVIN%20EDMAEL%20GARCIA%20MARTINEZ.pdf" download class="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold tracking-wider text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition duration-300 transform hover:-translate-y-0.5 shadow-lg group">
            <svg class="w-4 h-4 text-purple-400 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Descargar PDF
          </a>
        </div>
      </div>

      <!-- GRID PRINCIPAL DE 2 COLUMNAS (Experiencia | Educación) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Columna Izquierda: Experiencia -->
        <div class="lg:col-span-7 space-y-8 text-left">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 .552-.448 1-1 1H4.75c-.552 0-1-.448-1-1v-4.25m16.5 0a3 3 0 00-3-3H6.75a3 3 0 00-3 3m16.5 0V9.33c0-.79-.413-1.526-1.087-1.936L13.163 4.9a2.25 2.25 0 00-2.326 0L4.837 7.394A2.25 2.25 0 003.75 9.33v4.82" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-white">Experiencia Profesional</h2>
          </div>

          <div class="relative border-l-2 border-gray-800 ml-3 pl-6 space-y-10">
            <div class="relative">
              <div class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-gray-950 shadow-sm"></div>
              <div class="space-y-2">
                <div class="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 class="text-lg font-bold text-white">Generation México</h3>
                  <span class="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/10"> En proceso</span>
                </div>
                <p class="text-sm font-medium text-gray-400">Proyecto Integrador</p>
                <div class="flex flex-wrap gap-2 pt-1">
                  <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">Redes</span>
                  <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">Linux</span>
                  <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">Python</span>
                  <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">Gestión de incidencias</span>
                  <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">Tickets</span>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-gray-950 shadow-sm"></div>
              <div class="space-y-2">
                <div class="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 class="text-lg font-bold text-white">Estadías en Universidad UNIEM</h3>
                  <span class="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/10"> Mayo 2024 - Agosto 2024</span>
                </div>
                <p class="text-sm font-medium text-gray-400">Desarrollo de sistema de HelpDesk</p>
                <p class="text-sm text-gray-300 font-light leading-relaxed">
                  Realicé mis prácticas profesionales en el área de TI, donde brindé soporte técnico a las diversas áreas del instituto. Paralelamente, colaboré en el departamento de mercadotecnia digital desarrollando publicidad y generando contenido visual y audiovisual. Como proyecto principal del área asignada, 
                  implementé un sistema de mesa de ayuda (helpdesk) que resolvió la problemática central de reportes, abriendo paso a una gestión eficiente del soporte técnico preventivo y correctivo.
                </p>
                <div class="flex flex-wrap gap-2 pt-1">
                  <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">PHP</span>
                  <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">MySQL</span>
                  <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">XAMPP</span>
                  <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">Template star UI</span>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-950 shadow-sm"></div>
              <div class="space-y-2">
                <div class="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 class="text-lg font-bold text-white">Estadías en Frenos MX</h3>
                  <span class="text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/10">Enero 2026 - Mayo 2026</span>
                </div>
                <p class="text-sm font-medium text-gray-400">Desarrollo de sistema de inventario</p>
                <p class="text-sm text-gray-300 font-light leading-relaxed">
                  Durante mi estadía profesional en el área de almacén, lideré el desarrollo de un sistema de inventario basado en Laravel, PHP y HeidiSQL (bajo un entorno Laragon). La solución implementada permitió el control total del stock mediante la administración automatizada de entradas,
                  salidas, pérdidas por merma, recepción y ventas. Asimismo, optimicé la operación logística integrando la localización precisa de piezas y la generación de códigos de barras propios.
                </p>
                <div class="flex flex-wrap gap-2 pt-1">
                  <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">HeidiSQL</span>
                  <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">PHP</span>
                  <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">Laragon</span>
                  <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">Git bash</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Educación -->
        <div class="lg:col-span-5 space-y-8 text-left">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.174L11.25 15.89M11.25 15.89l7.017-5.717M11.25 15.89V21m0-5.716l-7.017-5.717m7.017 5.717l7.017-5.717m0 0L21 9.333M3 9.333l8.25-6.726 8.25 6.726M3 9.333l8.25 6.726M3 9.333v5.667C3 16.193 6.694 18 11.25 18s8.25-1.807 8.25-4.125V9.333M11.25 15.89L21 9.333M11.25 15.89L3 9.333" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-white">Educación</h2>
          </div>

          <div class="space-y-6">
            <div class="bg-gray-900/40 border border-white/5 rounded-2xl p-5 shadow-lg backdrop-blur-sm relative overflow-hidden group">
              <span class="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/10 absolute top-5 right-5">En curso</span>
              <div class="space-y-2 max-w-[80%]">
                <h4 class="text-base font-bold text-white">Especialista Helpdesk</h4>
                <p class="text-xs text-gray-400">Generation México</p>
                <p class="text-xs text-gray-300 font-light leading-relaxed">
                  Me especializo en el soporte técnico integral y la gestión de infraestructura TI (Helpdesk), combinando la resolución ágil de incidencias con un enfoque estratégico orientado al usuario.
                </p>
              </div>
            </div>

            <div class="bg-gray-900/40 border border-white/5 rounded-2xl p-5 shadow-lg backdrop-blur-sm relative overflow-hidden group">
              <span class="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/10 absolute top-5 right-5">Titulado</span>
              <div class="space-y-2 max-w-[80%]">
                <h4 class="text-base font-bold text-white">Ingeniería en Entornos Virtuales y Negocios Digitales</h4>
                <p class="text-xs text-gray-400">Universidad Tecnológica de Zinacantepec</p>
                <p class="text-xs text-gray-300 font-light leading-relaxed">
                  Me especializo en la dirección, diseño y desarrollo de proyectos tecnológicos avanzados que fusionan la interactividad multimedia con la estrategia empresarial.
                </p>
              </div>
            </div>

            <div class="bg-gray-900/40 border border-white/5 rounded-2xl p-5 shadow-lg backdrop-blur-sm relative overflow-hidden group">
              <span class="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/10 absolute top-5 right-5">Titulado</span>
              <div class="space-y-2 max-w-[80%]">
                <h4 class="text-base font-bold text-white">T.S.U en Tecnologías de la información</h4>
                <p class="text-xs text-gray-400">Universidad Tecnológica de Zinacantepec</p>
                <p class="text-xs text-gray-300 font-light leading-relaxed">
                  Como Técnico Superior Universitario (T.S.U.) en Tecnologías de la Información, mi formación combina la ingeniería de software con la producción multimedia y la administración de sistemas.
                </p>
              </div>
            </div>

            <div class="bg-gray-900/40 border border-white/5 rounded-2xl p-5 shadow-lg backdrop-blur-sm relative overflow-hidden group">
              <span class="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/10 absolute top-5 right-5">Pasante</span>
              <div class="space-y-2 max-w-[80%]">
                <h4 class="text-base font-bold text-white">Técnico en Programación</h4>
                <p class="text-xs text-gray-400">Centro de Estudios Tecnológicos Industrial y de Servicios No.64</p>
                <p class="text-xs text-gray-300 font-light leading-relaxed">
                  Como Técnico en Programación, mi formación se enfoca en el desarrollo de software estructurado y la construcción de soluciones digitales funcionales.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- SECCIÓN INDEPENDIENTE: CURSOS Y CERTIFICACIONES -->
      <div class="w-full space-y-6 text-left pt-6 border-t border-white/5">
        <div class="flex items-center gap-2 pb-2">
          <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.174L10.74 12c.307.086.613.086.92 0l6.48-1.826M12 21.75V15m0 0a3 3 0 100-6 3 3 0 000 6zm-7.5-3.219c-.61-.312-1-.937-1-1.623V11.25c0-.686.39-1.311 1-1.623l7.5-3.834a1.125 1.125 0 011 0l7.5 3.834c.61.312 1 .937 1 1.623v5.658c0 .686-.39 1.311-1 1.623l-7.5 3.834a1.125 1.125 0 01-1 0l-7.5-3.834z" />
          </svg>
          <h2 class="text-xl font-bold text-white tracking-wide">Cursos y Certificaciones</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

          <!-- Tarjeta 1 -->
          <div onclick="openCertModal('/certificado.PNG', 'Core Skills Test')" class="cursor-pointer bg-gray-900/40 border border-white/5 rounded-2xl p-5 relative overflow-hidden group transition hover:border-indigo-500/40 hover:scale-[1.02] duration-300">
            <div class="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl transition-all group-hover:bg-indigo-500/10"></div>
            <div class="flex justify-between items-start gap-4">
              <div class="space-y-1">
                <span class="text-[10px] font-mono tracking-wider uppercase text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                  Certificate in EnglishScore.
                </span>
                <h3 class="text-base font-bold text-white pt-1 group-hover:text-indigo-400 transition flex items-center gap-2">
                  Core Skills Test
                  <svg class="w-4 h-4 text-gray-500 group-hover:text-indigo-400 transition" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </h3>
                <p class="text-xs text-gray-400 font-light">
                  The course was held, reviewed by an American speaker. I obtained the B2 level in that course
                </p>
              </div>
              <span class="text-xs font-mono text-gray-500 whitespace-nowrap bg-white/5 px-2 py-1 rounded">
                Agosto - 2025
              </span>
            </div>
          </div>

          <!-- Tarjeta 2 -->
          <div onclick="openCertModal('/wadwani.PNG', 'Job Ready: Habilidades para la empleabilidad')" class="cursor-pointer bg-gray-900/40 border border-white/5 rounded-2xl p-5 relative overflow-hidden group transition hover:border-purple-500/40 hover:scale-[1.02] duration-300">
            <div class="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl transition-all group-hover:bg-purple-500/10"></div>
            <div class="flex justify-between items-start gap-4">
              <div class="space-y-1">
                <span class="text-[10px] font-mono tracking-wider uppercase text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                  Habilidades blandas
                </span>
                <h3 class="text-base font-bold text-white pt-1 group-hover:text-purple-400 transition flex items-center gap-2">
                  Job Ready: Habilidades para la empleabilidad
                  <svg class="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </h3>
                <p class="text-xs text-gray-400 font-light">
                  Habilidades para la empleabilidad son habilidades básicas necesarias en casi todos los trabajos. Estas son las habilidades generales que buscan los empleadores al momento de contratar.
                </p>
              </div>
              <span class="text-xs font-mono text-gray-500 whitespace-nowrap bg-white/5 px-2 py-1 rounded">
                Noviembre - 2025
              </span>
            </div>
          </div>

          <!-- Tarjeta 3 -->
          <div onclick="openCertModal('/huawey.JPG', 'HCIA-AI v3.5 COURSE INDONESIAN (HUAWEI TALENT ONLINE)')" class="cursor-pointer bg-gray-900/40 border border-white/5 rounded-2xl p-5 relative overflow-hidden group transition hover:border-indigo-500/40 hover:scale-[1.02] duration-300">
            <div class="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl transition-all group-hover:bg-indigo-500/10"></div>
            <div class="flex justify-between items-start gap-4">
              <div class="space-y-1">
                <span class="text-[10px] font-mono tracking-wider uppercase text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                  Certificado
                </span>
                <h3 class="text-base font-bold text-white pt-1 group-hover:text-indigo-400 transition flex items-center gap-2">
                  HCIA-AI v3.5 COURSE INDONESIAN (HUAWEI TALENT ONLINE)
                  <svg class="w-4 h-4 text-gray-500 group-hover:text-indigo-400 transition" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </h3>
                <p class="text-xs text-gray-400 font-light">
                  Curso de talento de Huawei online de indonesia
                </p>
              </div>
              <span class="text-xs font-mono text-gray-500 whitespace-nowrap bg-white/5 px-2 py-1 rounded">
                Marzo - 2024
              </span>
            </div>
          </div>

        </div>
      </div>

      <!-- MODAL DE VISUALIZACIÓN DE CERTIFICADO -->
      <div id="cert-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
        <div class="relative max-w-4xl w-full bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl space-y-4 p-6">
          
          <div class="flex justify-between items-center border-b border-white/10 pb-4">
            <h3 id="cert-modal-title" class="text-lg font-bold text-white">Certificado</h3>
            <button onclick="closeCertModal()" class="text-gray-400 hover:text-white transition p-1 bg-white/5 hover:bg-white/10 rounded-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div class="w-full max-h-[75vh] overflow-auto flex justify-center items-center rounded-xl bg-black/50 p-2">
            <img id="cert-modal-img" src="" alt="Certificado Vista Previa" class="max-w-full h-auto object-contain rounded-lg shadow-lg" />
          </div>

        </div>
      </div>

    </div>
  `;
}