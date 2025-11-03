import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../Modelos/articulo';

import { Articulos } from '../../Servicios/articulos/articulosService'; 
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [RouterLink, CurrencyPipe], 
  templateUrl: './articulos.html',
  styleUrl: './articulos.css'
})
export class ArticulosComponent implements OnInit {
  
  public articulos: Articulo[] = [];

  constructor(private articulosService: Articulos) { }

  ngOnInit(): void {
    this.articulos = this.articulosService.getArticulos();
  }
}