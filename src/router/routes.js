
import { ViewInicio } from '../views/Inicio.js';
import { ViewSoy } from '../views/Soy.js';
import { ViewCv } from '../views/Cv.js';
import { ViewPortafolio } from '../views/Portafolio.js';
import { ViewSkills } from '../views/Skills.js';
import { ViewContacto } from '../views/Contacto.js';

export const routes = {
  '/': ViewInicio(),
  '/index': ViewInicio(),
  '/soy': ViewSoy(),
  '/cv': ViewCv(),
  '/portafolio': ViewPortafolio(),
  '/skills': ViewSkills(),
  '/contacto': ViewContacto(),
};
