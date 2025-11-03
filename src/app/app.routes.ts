
import { Routes } from '@angular/router';

import { Inicio} from './Components/inicio/inicio';
import {ArticulosComponent} from './Components/articulos/articulos';
import { Nuevo } from './Components/nuevo/nuevo';
import { Ver } from './Components/ver/ver';
import { Modificar} from './Components/modificar/modificar';
import { Borrar } from './Components/borrar/borrar';
import { Error } from './Components/error/error';

export const routes: Routes = [

  { path: '', component: Inicio },

  { path: 'articulos', component: ArticulosComponent},

  { path: 'nuevo', component: Nuevo },

  { path: 'ver/:id', component: Ver},

  { path: 'modificar/:id', component: Modificar },

  { path: 'borrar/:id', component: Borrar },

  { path: '**', component: Error }
];