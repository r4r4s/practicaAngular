import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulos } from '../../Servicios/articulos/articulosService';
import { Articulo } from '../../Modelos/articulo';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Observable, catchError, of, shareReplay, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-ver',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  providers: [Articulos],
  templateUrl: './ver.html',
  styleUrls: ['./ver.css']
})
export class VerComponent {
  articulo$: Observable<Articulo | null>;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private articulosService = inject(Articulos);

  constructor() {
    this.articulo$ = this.route.params.pipe(
      switchMap((params) => {
        const id = params['id'];
        if (!id) {
          return of(null);
        }

        return this.articulosService.getArticulo(id).pipe(
          tap((data: Articulo) => {
            if (!data) {
              console.warn(`Artículo con id ${id} no encontrado.`);
            }
          }),
          catchError((err) => {
            console.error('Error al cargar artículo:', err);
            this.router.navigate(['/error']);
            return of(null);
          })
        );
      }),
      shareReplay(1)
    );
  }

  volver(): void {
    this.router.navigate(['/articulos']);
  }

  useDefaultImage(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/default.jpg';
  }
}