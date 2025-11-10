
import { Routes } from '@angular/router';

import { Login } from './Components/login/login';
import { Inicio} from './Components/inicio/inicio';
import {ArticulosComponent} from './Components/articulos/articulos';
import { ProductosComponent } from './Components/productos/productos';
import { NuevoComponent } from './Components/nuevo/nuevo';
import { VerComponent } from './Components/ver/ver';
import { ModificarComponent} from './Components/modificar/modificar';
import { Borrar } from './Components/borrar/borrar';
import { Error } from './Components/error/error';

import { authGuard } from './Guarda/login-guarda-guard';
import { Miaplicacion } from './Components/miaplicacion/miaplicacion';
import { Opcion1 } from './Components/opcion1/opcion1';
import { Opcion2 } from './Components/opcion2/opcion2';

export const routes: Routes = [


  { path: '', component: Login },
  { path: 'inicio', component: Inicio, canActivate: [authGuard]},
  { path: 'articulos', component: ArticulosComponent, canActivate: [authGuard]},
  { path: 'productos', component: ProductosComponent, canActivate: [authGuard] },
  { path: 'nuevo', component: NuevoComponent, canActivate: [authGuard] },
  { path: 'ver/:id', component: VerComponent, canActivate: [authGuard]},
  { path: 'modificar/:id', component: ModificarComponent, canActivate: [authGuard] },
  { path: 'borrar/:id', component: Borrar, canActivate: [authGuard] },
  { path: 'miaplicacion', component: Miaplicacion, canActivate: [authGuard],
    children: [
      { path: 'opcion1', component: Opcion1 },
      { path: 'opcion2', component: Opcion2 },
    ]
  },
  { path: '**', component: Error }
];