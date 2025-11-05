
import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../Modelos/articulo';
import { Articulos } from '../../Servicios/articulos/articulosService';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common'; 

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe], 
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class Productos implements OnInit {

  public articulos: Articulo[] = [];

  constructor(
    private articulosService: Articulos 
  ) { }

  ngOnInit(): void {
    this.articulos = this.articulosService.getArticulos();
  }

  borrar(id: string): void {
    this.articulosService.deleteArticulo(id);
    this.articulos = this.articulosService.getArticulos();
  }
}