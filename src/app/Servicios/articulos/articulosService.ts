import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { Articulo } from '../../Modelos/articulo';

@Injectable({
  providedIn: 'root'
})
export class Articulos {
  private url = 'http://localhost:3000/articulos';

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.url); 
  }

  getArticulo(id: string): Observable<Articulo> {
    return this.http.get<Articulo>(`${this.url}/${id}`); 
  }

  postArticulo(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(this.url, articulo); 
  }

  putArticulo(originalId: string, articulo: Articulo): Observable<Articulo> {
    return this.http.put<Articulo>(`${this.url}/${originalId}`, articulo); 
  }

  deleteArticulo(id: string): Observable<{}> {
    return this.http.delete<{}>(`${this.url}/${id}`); 
  }
}