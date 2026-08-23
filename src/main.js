import './style.css';
import '@tailwindplus/elements';
import { renderNavbar } from '/src/components/Navbar.js'; 
import { renderFooter } from '/src/components/footer.js'; // Asegúrate del nombre exacto del archivo (footer.js o Footer.js)
import { routes } from '/src/router/routes.js';
import { initPortafolioLogic } from './views/Portafolio.js';

const app = document.querySelector('#app');

function navigate(path) {
  const content = routes[path] || routes['/'];
  
  // 1. Inyectamos la estructura base limpia con el contenido HTML correspondiente
  app.innerHTML = `
    <div class="min-h-screen flex flex-col bg-gray-950 text-white font-sans overflow-x-hidden">
      
      ${renderNavbar()}
      
      <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-center">
        <div id="router-view" class="w-full">
          ${content}
        </div>
      </main>

      ${renderFooter()}
    </div>
  `; 

  window.history.pushState({}, '', path);
  
  // Sube el scroll al inicio de la página al cambiar de vista
  window.scrollTo(0, 0);

  // 2. EJECUCIÓN DE LÓGICA VIVA: Se ejecuta DESPUÉS de pintar el HTML en el DOM
  if (path === '/soy') {
    initCounters();
  }

  // Despierta los filtros interactivos si entraste a la ruta del portafolio
  if (path === '/portafolio' || window.location.pathname === '/portafolio') {
    initPortafolioLogic();
  }
}

// CORREGIDO: Se cambia 'app' por 'document' para capturar el Footer y Navbar sin fallos
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a');
  
  // Capturar solo enlaces internos que no abran pestaña nueva
  if (anchor && anchor.getAttribute('href') && anchor.getAttribute('href').startsWith('/') && !anchor.target) {
    e.preventDefault();
    const path = anchor.getAttribute('href');
    navigate(path);
  }
});

// Carga inicial de la app
navigate(window.location.pathname);

window.addEventListener('popstate', () => {
  navigate(window.location.pathname);
});

export function initCounters() {
  const counters = document.querySelectorAll('.counter');
  
  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const duration = 1500; 
    const startTime = performance.now();

    const updateNumber = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeOutQuad = progress * (2 - progress);
      
      const currentValue = Math.floor(easeOutQuad * target);
      counter.innerText = currentValue;

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        counter.innerText = target; 
      }
    };

    requestAnimationFrame(updateNumber);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(counter => observer.observe(counter));
}