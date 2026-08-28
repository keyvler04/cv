import './style.css';
import '@tailwindplus/elements';
import { renderNavbar } from '/src/components/Navbar.js'; 
import { renderFooter } from '/src/components/footer.js';
import { routes } from '/src/router/routes.js';
import { initPortafolioLogic } from './views/Portafolio.js';

const app = document.querySelector('#app');

// Inicializamos el cascarón estático una sola vez
app.innerHTML = `
  <div class="min-h-screen flex flex-col bg-gray-950 text-white font-sans overflow-x-hidden">
    ${renderNavbar()}
    <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-center">
      <div id="router-view" class="w-full"></div>
    </main>
    ${renderFooter()}
  </div>
`;

const routerView = document.querySelector('#router-view');

function navigate(path) {
  const content = routes[path] || routes['/'];
  
  // Cambiamos únicamente el contenido dinámico
  routerView.innerHTML = content;

  window.history.pushState({}, '', path);
  window.scrollTo(0, 0);

  if (path === '/soy') {
    initCounters();
  }

  if (path === '/portafolio' || window.location.pathname === '/portafolio') {
    initPortafolioLogic();
  }
}

// Interceptor de enlaces (sin cambios)
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a');
  
  if (anchor) {
    const href = anchor.getAttribute('href');
    const isDownload = anchor.hasAttribute('download');
    const isPdf = href && href.endsWith('.pdf');

    if (href && href.startsWith('/') && !anchor.target && !isDownload && !isPdf) {
      e.preventDefault();
      navigate(href);
    }
  }
});

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