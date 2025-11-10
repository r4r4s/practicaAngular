import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulos } from '../../Servicios/articulos/articulosService';
import { Articulo } from '../../Modelos/articulo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modificar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [Articulos],
  templateUrl: './modificar.html',
  styleUrl: './modificar.css'
})
export class ModificarComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private articulosService = inject(Articulos);
  private subscriptions = new Subscription();

  originalId: string = '';
  articulo: Articulo = {
    id: '',
    nombre: '',
    precio: 0,
    unidades: 0
  };

  ngOnInit(): void {
    const paramsSub = this.route.params.subscribe((params: any) => {
      const id = params['id'];
      if (id) {
        this.originalId = id;
        const getArticuloSub = this.articulosService.getArticulo(id).subscribe({
          next: (data: Articulo) => {
            this.articulo = { ...data };
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
  
  modificar(): void {
    const putSub = this.articulosService.putArticulo(this.originalId, this.articulo).subscribe({
      next: () => {
        alert('Artículo modificado correctamente');
        this.router.navigate(['/articulos']);
      },
      error: (err: any) => {
        console.error('Error al modificar:', err);
        alert("Ocurrió un error al modificar el artículo.");
      }
    });
    this.subscriptions.add(putSub);
  }

  cancelar(): void {
    this.router.navigate(['/articulos']);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}