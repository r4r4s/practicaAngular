import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulos } from '../../Servicios/articulos/articulosService';
import { Articulo } from '../../Modelos/articulo';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ver',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  providers: [Articulos],
  templateUrl: './ver.html',
  styleUrl: './ver.css'
})
export class VerComponent implements OnInit, OnDestroy {
  articulo?: Articulo;
  private subscriptions = new Subscription();

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private articulosService = inject(Articulos);

  ngOnInit(): void {
    const paramsSub = this.route.params.subscribe((params: any) => {
      const id = params['id'];
      if (id) {
        const getArticuloSub = this.articulosService.getArticulo(id).subscribe({
          next: (data: Articulo) => {
            this.articulo = data;
          },
          error: (err: any) => {
            console.error('Error al cargar artículo:', err);
            this.router.navigate(['/error']);
          }
        });
        this.subscriptions.add(getArticuloSub);
      }
    });
    this.subscriptions.add(paramsSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  volver(): void {
    this.router.navigate(['/articulos']);
  }
}