import { Injectable } from "@angular/core";
import { ARTICULOS, Articulo } from "../Modelos/articulo";

@Injectable({
    providedIn: 'root'
})
export class Articulos {
    constructor() {}

    articulos:Articulo[]= ARTICULOS

    getArticulos():Articulo[]{
        return this.articulos
    }

    getArticulo(id:string){
        let pos=this.articulos.findIndex(art=> art.id===id)
        return this.articulos[pos]
    }

    postArticulo(articulo:Articulo){
        let pos=this.articulos.findIndex(art=> art.id===articulo.id)
        if(pos===-1){
            this.articulos.push(articulo)
        }
        else
            alert("El articulo ya existe")
    }

    putArticulo(articulo:Articulo){
        let pos=this.articulos.findIndex(art=> art.id===articulo.id)
        this.articulos[pos]=articulo
    }

    deleteArticulo(id:string){
        let pos=this.articulos.findIndex(art=> art.id===id)
        this.articulos.splice(pos,1)
    }
}