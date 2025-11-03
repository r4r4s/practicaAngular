import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Articulos } from '../../Servicios/articulos/articulosService';
import { Articulo } from '../../Modelos/articulo';
import { CurrencyPipe } from '@angular/common'; 

@Component({
  selector: 'app-ver',
  standalone: true,
  imports: [CurrencyPipe], 
  templateUrl: './ver.html',
  styleUrl: './ver.css'
})
export class Ver implements OnInit {
  
 
  public articulo?: Articulo; 

  constructor(
    private route: ActivatedRoute, 
    private router: Router,  
    private articulosService: Articulos
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.articulo = this.articulosService.getArticulo(id);
      }
      
      if (!this.articulo) {
         this.router.navigate(['/error']);
      }
    });
  }

  volver(): void {
    this.router.navigate(['/articulos']);
  }
}