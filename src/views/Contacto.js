// Función global para manejar el envío por AJAX y limpiar el formulario
window.enviarFormulario = async function(event) {
  event.preventDefault(); // Evita la redirección a Formspree
  
  const form = event.target;
  const button = form.querySelector('button[type="submit"]');
  const feedback = document.getElementById('form-feedback');
  const originalBtnText = button.innerHTML;

  // Feedback visual de carga
  button.disabled = true;
  button.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Enviando...
  `;

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset(); // Vacía los campos del formulario de la interfaz
      feedback.className = "text-sm text-emerald-400 font-medium text-center";
      feedback.textContent = "¡Mensaje enviado con éxito!";
    } else {
      feedback.className = "text-sm text-red-400 font-medium text-center";
      feedback.textContent = "Ocurrió un error al enviar. Inténtalo de nuevo.";
    }
  } catch (error) {
    feedback.className = "text-sm text-red-400 font-medium text-center";
    feedback.textContent = "Error de conexión. Revisa tu red.";
  } finally {
    button.disabled = false;
    button.innerHTML = originalBtnText;

    setTimeout(() => {
      feedback.textContent = '';
    }, 4000);
  }
};

export function ViewContacto() {
  return `
    <div class="w-full space-y-12 animate-fade-in" style="animation-duration: 0.7s;">
      
      <!-- Encabezado de la Sección -->
      <div class="text-left space-y-2">
        <span class="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
          Conectemos
        </span>
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          ¿Tienes un <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Proyecto?</span>
        </h1>
        <p class="text-gray-400 max-w-2xl font-light text-base sm:text-lg">
          Estoy disponible para propuestas laborales, proyectos freelance o simplemente para charlar sobre desarrollo web. ¡Escríbeme!
        </p>
      </div>

      <!-- Cuadrícula de Contacto -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- COLUMNA IZQUIERDA: Canales Directos -->
        <div class="lg:col-span-5 space-y-4">
          
          <!-- Tarjeta de Correo -->
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kevegm1@gmail.com" target="_blank" rel="noopener noreferrer" class="block bg-gray-900/40 border border-white/5 rounded-2xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden group text-left transition hover:border-indigo-500/30">
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl transition-all group-hover:bg-indigo-500/20"></div>
            
            <div class="flex items-center gap-4">
              <div class="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-400 uppercase tracking-wider">Hablemos por correo</h3>
                <p class="text-base font-semibold text-white mt-0.5 break-all">kevegm1@gmail.com</p>
              </div>
            </div>
          </a>

          <!-- Tarjeta de WhatsApp -->
          <a href="https://wa.me/+527261626093" target="_blank" rel="noopener noreferrer" class="block bg-gray-900/40 border border-white/5 rounded-2xl p-6 shadow-xl backdrop-blur-sm relative overflow-hidden group text-left transition hover:border-emerald-500/30">
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl transition-all group-hover:bg-emerald-500/20"></div>
            
            <div class="flex items-center gap-4">
              <div class="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.117-6.942-6.942l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.75z" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-400 uppercase tracking-wider">WhatsApp Directo</h3>
                <p class="text-base font-semibold text-emerald-400 mt-0.5">Enviar Mensaje →</p>
              </div>
            </div>
          </a>

        </div>

        <!-- COLUMNA DERECHA: Formulario Estilizado -->
        <div class="lg:col-span-7 bg-gray-900/30 border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          <form action="https://formspree.io/f/xvkpylbe" method="POST" onsubmit="enviarFormulario(event)" class="space-y-5 text-left">
            
            <!-- Campo: Nombre -->
            <div class="space-y-2">
              <label for="name" class="text-xs font-semibold uppercase tracking-wider text-gray-400">Nombre Completo</label>
              <input type="text" id="name" name="name" required placeholder="nombre" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5 transition duration-300 text-sm" />
            </div>

            <!-- Campo: Correo -->
            <div class="space-y-2">
              <label for="email" class="text-xs font-semibold uppercase tracking-wider text-gray-400">Correo Electrónico</label>
              <input type="email" id="email" name="email" required placeholder="tu@correo.com" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5 transition duration-300 text-sm" />
            </div>

            <!-- Campo: Mensaje -->
            <div class="space-y-2">
              <label for="message" class="text-xs font-semibold uppercase tracking-wider text-gray-400">Tu Mensaje</label>
              <textarea id="message" name="message" required rows="4" placeholder="Cuéntame sobre tu idea o propuesta..." class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5 transition duration-300 text-sm resize-none"></textarea>
            </div>

            <!-- Div para notificaciones de estado -->
            <div id="form-feedback" class="min-h-[20px]"></div>


            <!-- AVISO DE PRIVACIDAD DISCRETO -->
            <p class="text-[11px] text-gray-500 leading-relaxed">
              Al enviar este formulario, aceptas que tus datos sean utilizados únicamente para responder a tu mensaje. No comparto tu información con terceros.
            </p>

            <!-- Botón de Envío -->
            <div class="pt-2">
              <button type="submit" class="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold tracking-wider text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:opacity-90 transition duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-indigo-500/10">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Enviar Mensaje
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  `;
}