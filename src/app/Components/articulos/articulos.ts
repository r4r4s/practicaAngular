import { Articulos } from './../../Servicios/articulos/articulosService';
import { Component, OnInit, inject } from '@angular/core';
import { Articulo } from '../../Modelos/articulo';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, CommonModule], 
  providers: [Articulos],
  templateUrl: './articulos.html',
  styleUrl: './articulos.css'
})
export class ArticulosComponent implements OnInit {

  articulos$!: Observable<Articulo[]>;
  public articulos: Articulo[] = [];
  private articulosService = inject(Articulos);

  ngOnInit(): void {
    this.articulos$ = this.articulosService.getArticulos();
  }

 
}