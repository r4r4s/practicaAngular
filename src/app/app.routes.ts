
import { Routes } from '@angular/router';

import { Login } from './Components/login/login';
import { Inicio} from './Components/inicio/inicio';
import {ArticulosComponent} from './Components/articulos/articulos';
import { Nuevo } from './Components/nuevo/nuevo';
import { Ver } from './Components/ver/ver';
import { Modificar} from './Components/modificar/modificar';
import { Borrar } from './Components/borrar/borrar';
import { Error } from './Components/error/error';

import { authGuard } from './Guarda/login-guarda-guard';

export const routes: Routes = [


  { path: '', component: Login },

  { path: 'inicio', component: Inicio, canActivate: [authGuard]},

  { path: 'articulos', component: ArticulosComponent, canActivate: [authGuard]},

  { path: 'nuevo', component: Nuevo, canActivate: [authGuard] },

  { path: 'ver/:id', component: Ver, canActivate: [authGuard]},

  { path: 'modificar/:id', component: Modificar, canActivate: [authGuard] },

  { path: 'borrar/:id', component: Borrar, canActivate: [authGuard] },

  { path: '**', component: Error }
];