export interface Articulo {
    id:string;
    nombre:string;
    descripcion:string;
    precio:number;
    unidades:number
}

export const ARTICULOS: Array<Articulo> = [
    {
        id: 'm1',
        nombre: 'Articulo 1',
        descripcion: 'Descripcion del Articulo 1',
        precio: 100,
        unidades: 10
    },
    {
        id: 'm2',
        nombre: 'Articulo 2',
        descripcion: 'Descripcion del Articulo 2',
        precio: 200,
        unidades: 20
    },
    {
        id: 'm3',
        nombre: 'Articulo 3',
        descripcion: 'Descripcion del Articulo 3',
        precio: 300,
        unidades: 30
    }
];
