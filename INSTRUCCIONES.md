# Instrucciones para Ejecutar la Aplicación

## Configuración de la Base de Datos con json-server

La aplicación está configurada para leer datos de `db.json` mediante HTTP usando **json-server**.

### Paso 1: Instalar json-server (si no está instalado)

```bash
npm install -g json-server
```

### Paso 2: Ejecutar json-server

Abre una terminal en la carpeta raíz del proyecto y ejecuta:

```bash
json-server --watch db.json --port 3000
```

Esto iniciará el servidor en `http://localhost:3000`

### Paso 3: Ejecutar la aplicación Angular

En otra terminal, ejecuta:

```bash
npm start
```

## Estructura de Datos

El archivo `db.json` contiene un array llamado `articulos` con la siguiente estructura:

```json
{
  "articulos": [
    {
      "id": "m1",
      "nombre": "Articulo 1",
      "precio": 100,
      "unidades": 10
    },
    ...
  ]
}
```

## Endpoints Disponibles

- **GET** `http://localhost:3000/articulos` - Obtener todos los artículos
- **GET** `http://localhost:3000/articulos/:id` - Obtener un artículo por ID
- **POST** `http://localhost:3000/articulos` - Crear un nuevo artículo
- **PUT** `http://localhost:3000/articulos/:id` - Actualizar un artículo
- **DELETE** `http://localhost:3000/articulos/:id` - Eliminar un artículo

## Notas Importantes

1. El puerto **3000** debe estar disponible
2. El servidor json-server debe estar ejecutándose antes de iniciar la aplicación Angular
3. Los cambios realizados en la aplicación (crear, actualizar, eliminar) se guardarán automáticamente en `db.json`
