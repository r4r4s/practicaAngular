// src/app/Components/articulos/articulos.component.ts

import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../Modelos/articulo';
// 1. CORRECCIÓN: Importa 'ArticulosService', no 'Articulos'
import { Articulos } from '../../Servicios/articulosService'; 
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
  
  // Esta es tu variable para el array
  public articulos: Articulo[] = [];

  // 2. CORRECCIÓN: Nombra el servicio 'articulosService' y usa el tipo 'ArticulosService'
  constructor(private articulosService: Articulos) { }

  ngOnInit(): void {
    // 3. CORRECIÓN: Llama a 'this.articulosService' para obtener los datos
    this.articulos = this.articulosService.getArticulos();
  }
}