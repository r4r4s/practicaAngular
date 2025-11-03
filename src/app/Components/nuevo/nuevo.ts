import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Articulos } from '../../Servicios/articulos/articulosService'; 
import { Articulo } from '../../Modelos/articulo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevo.html',
  styleUrl: './nuevo.css'
})
export class Nuevo {
  
  public nuevoArticulo: Articulo = {
    id: '',
    nombre: '',
    precio: 0,
    unidades: 0
  };

  constructor(
    private router: Router,
    private articulosService: Articulos
  ) { }

  grabar(): void {

    this.articulosService.postArticulo(this.nuevoArticulo);
    this.router.navigate(['/articulos']);
  }

  cancelar(): void {
    this.router.navigate(['/articulos']);
  }
}