// src/app/Components/modificar/modificar.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulos } from '../../Servicios/articulosService';
import { Articulo } from '../../Modelos/articulo';
import { FormsModule } from '@angular/forms'; // (Teoría: Tema 3)

@Component({
  selector: 'app-modificar',
  standalone: true,
  imports: [FormsModule], // 1. Importar FormsModule
  templateUrl: './modificar.html',
  styleUrl: './modificar.css'
})
export class Modificar implements OnInit {
  
  public articulo: Articulo = {
    id: '',
    nombre: '',

    precio: 0,
    unidades: 0 
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articulos: Articulos
  ) { }

  ngOnInit(): void {
  
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        
        const articuloEncontrado = this.articulos.getArticulo(id);
        if (articuloEncontrado) {
          
          this.articulo = { ...articuloEncontrado };
        } else {
          
          this.router.navigate(['/articulos']);
        }
      }
    });
  }

  
  modificar(): void {
    this.articulos.putArticulo(this.articulo);
    this.router.navigate(['/articulos']);
  }


  cancelar(): void {
    this.router.navigate(['/articulos']);
  }
}