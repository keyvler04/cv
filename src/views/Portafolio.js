export function ViewPortafolio() {
  return `
    <div class="w-full space-y-12 animate-fade-in" style="animation-duration: 0.7s;">
      
      <div class="text-left space-y-2">
        <span class="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          Mis Proyectos
        </span>
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Casos de <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Estudio</span>
        </h1>
        <p class="text-gray-400 max-w-2xl font-light text-base sm:text-lg">
          Una selección de las plataformas y sistemas que he diseñado y programado, cuidando tanto la lógica del servidor como la experiencia visual.
        </p>
      </div>

      <div class="flex flex-wrap gap-3 text-left" id="portfolio-filters">
        <button data-filter="all" class="portfolio-btn px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/10 transition">
          Todos
        </button>
        <button data-filter="backend" class="portfolio-btn px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition">
          Sistemas 
        </button>
        <button data-filter="ui" class="portfolio-btn px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition">
          Sitios Web / UI
        </button>
        <button data-filter="pu" class="portfolio-btn px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition">
          Diseño
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8" id="portfolio-grid">
        
        <div class="portfolio-item bg-gray-900/40 border border-white/5 rounded-3xl overflow-hidden shadow-xl backdrop-blur-sm flex flex-col justify-between group relative" data-category="backend">
          <div class="absolute -top-20 -right-20 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl transition-all group-hover:bg-indigo-500/10"></div>
          
          <div class="p-6 space-y-4 text-left relative z-10">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-mono tracking-widest uppercase text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/10">
                Sistema de Gestión de Refaccionaria / Database
              </span>
              <span class="text-xs font-mono text-gray-500">2026</span>
            </div>
            
            <h3 class="text-xl font-bold text-white group-hover:text-indigo-400 transition">
              SISTEMA PARA LA OPTIMIZACIÓN DE PROCESOS OPERATIVOS: GESTIÓN DE INVENTARIOS
            </h3>
            
            <p class="text-sm text-gray-400 font-light leading-relaxed">
               Sistema de gestión administrativa especializado en el control de stock, recepción de componentes y administración de refacciones automotrices.
               Mediante el diseño de una base de datos relacional optimizada, eliminé la redundancia de datos, automaticé el registro de pérdidas por merma y sistematicé 
               la generación de reportes operativos, mejorando significativamente los tiempos de consulta y el flujo del inventario.
            </p>
            
            <div class="flex flex-wrap gap-2 pt-2">
              <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">PHP</span>
              <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">Laravel</span>
              <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">MySQL / HeidiSQL</span>
              <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">JavaScript</span>
              <span class="text-[10px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">bootstrap</span>
            </div>
          </div>

          <div class="p-6 pt-0 flex gap-4 relative z-10">
            <a href="/contacto" class="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Contáctame para más información
            </a>
            <span class="text-gray-700">|</span>
            <button type="button" class="open-demo-btn inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition cursor-pointer" 
                    data-images="/refaccionaria/nota.png, /refaccionaria/Inicio_sesion.png, /refaccionaria/registro.png, /refaccionaria/inicio.png, /refaccionaria/categoria.png, /refaccionaria/agrego_cat.png, /refaccionaria/nuevo_producto.png, /refaccionaria/producto.png, /refaccionaria/venta.png, /refaccionaria/confirmar_venta.png, /refaccionaria/venta_realizada.png, /refaccionaria/carrito_limpio.png, /refaccionaria/historial_venta.png, /refaccionaria/cliente.png, /refaccionaria/movimientos.png, /refaccionaria/detalles_venta.png, /refaccionaria/ticket.png">
              Ver Galeria <span class="transition-transform group-hover:translate-x-0.5">→</span>
            </button>
          </div>
        </div>

      </div>

      <!-- MODAL DE GALERÍA DE IMÁGENES -->
      <div id="demo-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity">
        <div class="relative max-w-4xl w-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 space-y-4">
          
          <div class="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 class="text-lg font-semibold text-white">Capturas del Sistema</h3>
            <button id="close-modal" class="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="relative flex items-center justify-center min-h-[300px] max-h-[70vh]">
            <img id="modal-img" src="" alt="Demostración de pantalla" class="max-h-[65vh] w-auto rounded-lg object-contain border border-white/5" />
          </div>

          <div class="flex items-center justify-between pt-2">
            <button id="prev-img" class="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-xl border border-white/10 transition">
              ← Anterior
            </button>
            <span id="img-counter" class="text-xs font-mono text-gray-400">1 / 1</span>
            <button id="next-img" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition">
              Siguiente →
            </button>
          </div>

        </div>
      </div>

    </div>
  `;
}

// FUNCIÓN INYECTORA DE LÓGICA
export function initPortafolioLogic() {
  // --- Lógica de Filtros ---
  const filterContainer = document.getElementById('portfolio-filters');
  if (filterContainer) {
    const buttons = filterContainer.querySelectorAll('.portfolio-btn');
    const items = document.querySelectorAll('.portfolio-item');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => {
          btn.className = "portfolio-btn px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition";
        });

        button.className = "portfolio-btn px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/10 transition";

        const filterValue = button.getAttribute('data-filter');
        items.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          if (filterValue === 'all' || itemCategory === filterValue) {
            item.style.display = 'flex';
            item.classList.add('animate-fade-in');
          } else {
            item.style.display = 'none';
            item.classList.remove('animate-fade-in');
          }
        });
      });
    });
  }

  // --- Lógica de Galería / Modal ---
  const modal = document.getElementById('demo-modal');
  const modalImg = document.getElementById('modal-img');
  const imgCounter = document.getElementById('img-counter');
  const closeModalBtn = document.getElementById('close-modal');
  const prevBtn = document.getElementById('prev-img');
  const nextBtn = document.getElementById('next-img');

  let currentImages = [];
  let currentIndex = 0;

  const updateModalImage = () => {
    if (currentImages.length > 0) {
      modalImg.src = currentImages[currentIndex];
      imgCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
    }
  };

  document.querySelectorAll('.open-demo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const rawImages = btn.getAttribute('data-images');
      if (rawImages) {
        currentImages = rawImages.split(',');
        currentIndex = 0;
        updateModalImage();
        modal.classList.remove('hidden');
      }
    });
  });

  closeModalBtn?.addEventListener('click', () => modal.classList.add('hidden'));

  prevBtn?.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateModalImage();
    }
  });

  nextBtn?.addEventListener('click', () => {
    if (currentIndex < currentImages.length - 1) {
      currentIndex++;
      updateModalImage();
    }
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });
}