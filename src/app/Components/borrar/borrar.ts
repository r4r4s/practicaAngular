import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulos } from '../../Servicios/articulosService';
import { Articulo } from '../../Modelos/articulo'; 

@Component({
  selector: 'app-borrar',
  standalone: true,
  imports: [],
  templateUrl: './borrar.html',
  styleUrl: './borrar.css'
})
export class Borrar implements OnInit {
  
  private idArticulo: string = ''; 
  public articulo?: Articulo; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articulos: Articulos
  ) { }

  ngOnInit(): void {
    // 1. Leemos el ID de la URL
    this.route.params.subscribe(params => {
      this.idArticulo = params['id'];
      // 2. Buscamos el artículo para mostrar su nombre
      this.articulo = this.articulos.getArticulo(this.idArticulo);
      
      if (!this.articulo) {
        // Si no existe, volvemos al listado o a error
        this.router.navigate(['/articulos']);
      }
    });
  }

  // 3. Método para el botón "Si"
  borrar(): void {
    this.articulos.deleteArticulo(this.idArticulo);
    this.router.navigate(['/articulos']);
  }

  // 4. Método para el botón "No"
  cancelar(): void {
    this.router.navigate(['/articulos']);
  }
}