import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulos } from '../../Servicios/articulos/articulosService';
import { Articulo } from '../../Modelos/articulo';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-borrar',
  standalone: true,
  imports: [CommonModule],
  providers: [Articulos],
  templateUrl: './borrar.html',
  styleUrl: './borrar.css'
})
export class Borrar implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private articulosService = inject(Articulos);
  private subscriptions = new Subscription();
  
  private idArticulo: string = '';
  articulo?: Articulo;

  ngOnInit(): void {
    const paramsSub = this.route.params.subscribe((params: any) => {
      this.idArticulo = params['id'];
      if (this.idArticulo) {
        const getArticuloSub = this.articulosService.getArticulo(this.idArticulo).subscribe({
          next: (data: Articulo) => {
            this.articulo = data;
          },
          error: (err: any) => {
            console.error('Error al cargar artículo:', err);
            this.router.navigate(['/articulos']);
          }
        });
        this.subscriptions.add(getArticuloSub);
      }
    });
    this.subscriptions.add(paramsSub);
  }

  borrar(): void {
    if (!this.idArticulo) {
      alert("No se especificó un ID válido");
      return;
    }
    
    const deleteSub = this.articulosService.deleteArticulo(this.idArticulo).subscribe({
      next: () => {
        alert('Artículo borrado correctamente');
        this.router.navigate(['/articulos']);
      },
      error: (err: any) => {
        console.error('Error al borrar:', err);
        alert("Error al borrar el artículo");
      }
    });
    this.subscriptions.add(deleteSub);
  }

  cancelar(): void {
    this.router.navigate(['/articulos']);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}