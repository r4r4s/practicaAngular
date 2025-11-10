
import { Component, OnInit, inject } from '@angular/core';
import { Articulo } from '../../Modelos/articulo';
import { Articulos } from '../../Servicios/articulos/articulosService';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common'; 

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe],
  providers: [Articulos],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class ProductosComponent implements OnInit {
  articulos: Articulo[] = [];
  private articulosService = inject(Articulos);

  ngOnInit(): void {
    this.articulosService.getArticulos().subscribe((data: Articulo[]) => {
      this.articulos = data;
    });
  }
}