import { Component, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Articulos } from '../../Servicios/articulos/articulosService';
import { Articulo } from '../../Modelos/articulo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nuevo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [Articulos],
  templateUrl: './nuevo.html',
  styleUrl: './nuevo.css'
})
export class NuevoComponent implements OnDestroy {
  private router = inject(Router);
  private articulosService = inject(Articulos);
  private subscriptions = new Subscription();
  
  nuevoArticulo: Articulo = {
    id: '',
    nombre: '',
    precio: 0,
    unidades: 0
  };

  grabar(): void {
    if (!this.nuevoArticulo.id || !this.nuevoArticulo.nombre || this.nuevoArticulo.precio <= 0) {
      alert("Por favor completa todos los campos correctamente.");
      return;
    }

    const postSub = this.articulosService.postArticulo(this.nuevoArticulo).subscribe({
      next: (articuloCreado: Articulo) => {
        alert('Artículo creado correctamente');
        this.router.navigate(['/articulos']);
      },
      error: (err: any) => {
        console.error('Error al crear:', err);
        if (err.status === 500) {
          alert("Error: El ID de artículo ya existe.");
        } else {
          alert("Ocurrió un error al grabar el artículo.");
        }
      }
    });
    this.subscriptions.add(postSub);
  }

  cancelar(): void {
    this.router.navigate(['/articulos']);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}