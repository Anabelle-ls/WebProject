import { Routes } from '@angular/router';

import { Vitrine } from './vitrine/vitrine';
import { Cesta } from './cesta/cesta';
// import { Cadastro } from './cadastro/cadastro';
import { Entrar } from './entrar/entrar';

export const routes: Routes = [
  { path: '', component: Vitrine },
  { path: 'vitrine', component: Vitrine },
  { path: 'cesta', component: Cesta },
  // { path: 'cadastro', component: Cadastro },
  { path: 'entrar', component: Entrar }

];