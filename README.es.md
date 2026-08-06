# Hola Mundo con Typescript

<!-- hide -->
> Por [@ehiber](https://github.com/ehiber) y contribuidores de [4Geeks Academy](https://4geeksacademy.com/)

[![build by developers](https://img.shields.io/badge/build_by-Developers-blue)](https://4geeks.com)
[![twitter](https://img.shields.io/twitter/follow/4geeksacademy?style=social&logo=twitter)](https://twitter.com/4geeksacademy)

*These instructions are available in [english](./README.md).*
<!-- endhide -->

Empieza a programar un sitio con TypeScript/HTML/CSS en 30 segundos abriendo esta plantilla con [One-Click Coding](https://s.4geeks.com/start?repo=https://github.com/4GeeksAcademy/typescript-hello) de 4Geeks o en tu computadora local.

## Antes de empezar

Instala los paquetes escribiendo:

```bash
npm install
```

## Como ejecuto mi sitio para ver cambios en vivo?

Escribe en la linea de comandos:

```bash
npm run start
```

Luego abre la URL local en el navegador (normalmente `http://localhost:5173`).

## Como ejecuto esto en GitHub Codespaces?

Usa el mismo servidor de desarrollo:

```bash
npm run start
```

Vite esta configurado para escuchar en `0.0.0.0`, asi que Codespaces puede detectar y redirigir automaticamente el puerto `5173`.

## Como ejecuto solo la validacion de TypeScript?

Usa este comando para validar solo TypeScript sin iniciar Vite:

```bash
npm run typecheck
```

## Como ejecuto `main.ts` desde la terminal?

Si quieres ejecutar `./src/main.ts` directamente y ver la salida de `console.log` en la terminal, usa:

```bash
npm run console
```

Este comando ya viene conectado por defecto a `./src/main.ts`.

## Donde escribo mi codigo?

Depende del lenguaje:

- `./src/main.ts` para la logica en TypeScript.
- `./src/style.css` para estilos (Tailwind CSS v4 ya viene importado).
- `./index.html` para el HTML base.

Puedes agregar mas archivos cuando quieras, solo asegúrate de importarlos desde `main.ts`.

Nota: si puedes ver la tarjeta de "Hello Rigo" y el mensaje "If you can see this, Tailwind is working.", entonces Tailwind esta configurado correctamente.

## Solucion de problemas

### No veo mis cambios...

Cada vez que cambias cualquier archivo dentro de `./src`, el sitio se refresca automaticamente (hot reload).

Si aun no ves cambios, recarga limpiando cache:

- Mac: `Cmd + Shift + R`
- Windows/Linux: `Ctrl + Shift + R`

## Como incluyo mas imagenes en mi proyecto?

Agregalas dentro de `./public` y referencialas en HTML con `/nombre-imagen.ext`.

Ejemplo:

```html
<img src="/rigo-baby.jpg" alt="Rigo" />
```

## Como incluyo mas archivos TypeScript?

Agrega archivos en `./src` e importalos desde `main.ts`.

Ejemplo:

```ts
import { myVar } from "./file2";
```

## Como publico el sitio?

Este boilerplate es compatible con Vercel en un solo paso.

## Contribuidores

Esta plantilla fue creada como parte del [Coding Bootcamp de 4Geeks Academy](https://4geeksacademy.com/us/coding-bootcamp) por [ehiber](https://github.com/ehiber) y otros contribuidores. Conoce mas sobre nuestro [AI Engineering Course](https://4geeksacademy.com/us/coding-bootcamps/ai-engineering), [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), y [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

Puedes encontrar otras plantillas y recursos como este en la [pagina de GitHub de la escuela](https://github.com/4geeksacademy/).


<!-- ////////////////////////////////ejemplo de la clase  -->

## El Escenario
### Gestor de Estacionamiento 

Un pequeño aparcamiento municipal con **4 filas y 6 plazas por fila** necesita una herramienta de gestión sencilla. El vigilante lleva actualmente el control de disponibilidad en una cuadrícula de papel. Tu equipo construirá un programa de línea de comandos en TypeScript que le permita al vigilante ver qué plazas están libres, reservar una plaza para un vehículo y encontrar dos plazas contiguas libres para vehículos de gran tamaño (por ejemplo, una furgoneta o remolque).

**Qué vas a aprender:**
- Cómo representar un espacio físico como un array bidimensional (matriz)
- Cómo recorrer y modificar una matriz con bucles y condicionales
- Cómo diseñar funciones con parámetros y valores de retorno en TypeScript
- Cómo buscar un patrón (celdas libres contiguas) dentro de una matriz

---

## Modelo de Datos

```
Fila 0:  [ 0, 0, 1, 0, 0, 1 ]
Fila 1:  [ 1, 0, 0, 0, 1, 0 ]
Fila 2:  [ 0, 0, 0, 1, 0, 0 ]
Fila 3:  [ 0, 1, 0, 0, 0, 0 ]
```

- `0` = plaza libre
- `1` = plaza ocupada

La visualización en consola usa `_` (libre) y `X` (ocupada), con etiquetas de fila y columna.

---

## Tareas

### Funciones Principales

- [ ] `initLot(): number[][]` — crea una matriz de 4×6 inicializada a `0` (todas las plazas libres)
- [ ] `displayLot(lot: number[][]): void` — imprime el aparcamiento en consola con etiquetas de fila y columna:

  ```
      C0  C1  C2  C3  C4  C5
  F0 [  _   _   X   _   _   X ]
  F1 [  X   _   _   _   X   _ ]
  ...
  ```

- [ ] `reserveSpace(lot: number[][], row: number, col: number): string` — marca una plaza como ocupada (`0 → 1`); devuelve `"Reservada F{row}C{col}"` o `"Plaza ya ocupada"` si estaba tomada
- [ ] `countSpaces(lot: number[][]): { free: number; occupied: number }` — devuelve el conteo de plazas libres y ocupadas

### Función Avanzada

- [ ] `findAdjacentPair(lot: number[][]): [number, number][] | null` — busca en cada fila dos plazas libres consecutivas (`0, 0`) y devuelve sus posiciones `[fila, columna]`; devuelve el primer par encontrado, o `null` si no hay ninguno

### Escenarios de Prueba

Ejecuta tu programa con estos cuatro estados e imprime el aparcamiento después de cada uno:

- [ ] Aparcamiento vacío — todas las plazas libres
- [ ] Parcialmente ocupado (establece manualmente algunas plazas a `1`)
- [ ] Casi lleno (solo una o dos plazas aisladas libres)
- [ ] Completamente lleno — confirma que `findAdjacentPair` devuelve `null`

---

## Salida Esperada por Consola (Ejemplo)

```
=== ESTADO DEL APARCAMIENTO ===
      C0  C1  C2  C3  C4  C5
  F0 [  _   _   X   _   _   X ]
  F1 [  X   _   _   _   X   _ ]
  F2 [  _   _   _   X   _   _ ]
  F3 [  _   X   _   _   _   _ ]

Libres: 18  |  Ocupadas: 6

Reservando F0C0... Reservada F0C0
Reservando F0C0 de nuevo... Plaza ya ocupada

Par contiguo para vehículo grande: F0C3 y F0C4
```

---

## Restricciones

> ⚠️ **No uses** clases ni objetos para almacenar los datos del aparcamiento. La matriz debe ser un `number[][]` simple. Usa parámetros de función y valores de retorno para pasar el estado entre funciones.

---