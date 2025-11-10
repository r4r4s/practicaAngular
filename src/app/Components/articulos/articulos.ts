import { Component, OnInit, inject } from '@angular/core';
import { Articulo } from '../../Modelos/articulo';
import { Articulos } from '../../Servicios/articulos/articulosService'; 
import { RouterLink } from '@angular/router';
import { CurrencyPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, CommonModule], 
  providers: [Articulos],
  templateUrl: './articulos.html',
  styleUrl: './articulos.css'
})
export class ArticulosComponent implements OnInit {
  public articulos: Articulo[] = [];
  private articulosService = inject(Articulos);

  ngOnInit(): void {
    this.cargarArticulos();
  }

  cargarArticulos(): void {
    this.articulosService.getArticulos().subscribe({
      next: (data: Articulo[]) => {
        this.articulos = data;
      },
      error: (err: any) => {
        console.error('Error al cargar artículos:', err);
      }
    });
  }
}