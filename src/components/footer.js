export function renderFooter() {
  return `
    <footer class="w-full bg-[#0b0f19] text-gray-400 py-12 px-6 border-t border-gray-800 mt-auto">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10">
                <div class="md:col-span-1 flex flex-col gap-4">
                    <div class="flex items-center gap-2 text-white font-bold text-lg">
                        <span class="text-[#7c3aed]">{</span>K<span class="text-[#7c3aed]">}</span> keyvlercode
                    </div>
                    <p class="text-xs text-gray-500">Soluciones digitales elegantes y eficientes.</p>
                    <a href="/contacto" class="w-fit px-4 py-2 bg-[#7c3aed] text-white text-sm font-medium rounded-full hover:bg-[#6d28d9] transition-all text-center">
                        Contáctame
                    </a>
                </div>
                <div>
                    <h3 class="text-white font-semibold text-sm mb-4">Explorar</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="/index" class="hover:text-white transition">Inicio</a></li>
                        <li><a href="/soy" class="hover:text-white transition">¿Quién soy?</a></li>
                        <li><a href="/portafolio" class="hover:text-white transition">Portafolio</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-white font-semibold text-sm mb-4">Recursos</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="/cv" class="hover:text-white transition">Mi CV</a></li>
                        <li><a href="/skills" class="hover:text-white transition">Habilidades</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-white font-semibold text-sm mb-4">Lo que hago</h3>
                    <ul class="space-y-2 text-sm">
                        <li><span class="text-gray-500">Desarrollo Full Stack</span></li>
                        <li><span class="text-gray-500">Diseño UI/UX Dinámico</span></li>
                        <li><span class="text-gray-500">Sistemas Robustos</span></li>
                        <li><span class="text-gray-500">Desarrollo web</span></li>
                        <li><span class="text-gray-500">PHP</span></li>
                        <li><span class="text-gray-500">Laravel</span></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-white font-semibold text-sm mb-4">¿Tienes un proyecto?</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="/contacto" class="hover:text-white transition">Hablemos por correo</a></li>
                        <li><a href="https://wa.me/+527261626093" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:underline transition">WhatsApp Directo</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-800 my-6"></div>
            <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <div class="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                    <span>&copy; 2026 keyvlercode. Todos los derechos reservados.</span>
                </div>
                <div class="flex items-center gap-3">
                    <a href="https://github.com/keyvler04" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition">
                        <i class="fab fa-github"></i>
                    </a>
                    <!-- CORREGIDO: Se agregó https:// y target="_blank" -->
                    <a href="https://www.linkedin.com/in/kevin-edmael-garcia-martinez-6bb098309" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition text-xs">
                        𝕏
                    </a>
                </div>
            </div>
        </div>
    </footer>
  `;
}