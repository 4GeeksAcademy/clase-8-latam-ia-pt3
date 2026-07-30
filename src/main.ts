if (typeof document !== "undefined") {
  import("./style.css").then(() => {
    const app = document.querySelector<HTMLParagraphElement>("#app");
    if (app) {
      app.textContent = "If you can see this, Tailwind is working.";
    }
  });
}

console.log("Hello from src/main.ts");

export { };


// seguridad de tipos
// adopcion en la industria
// Mejores herramientas
// Mejor legibilidad

const nombre: string = "Astrid";
const edad: number = 20;
const activo: boolean = true;

// let track: number = "two" 

// typescrip infiere el tipo 
const age = 28;
const precioProducto = 999.99;


// mala nomenclatura
const x = 10;  //que representa x ?? 


const nombre_usuario = "bob";
const EdadUsuario = 25;
const correoUsuario = "bob@123";

// funciones 
function presentarUsuario(nombre: string, edad: number, activo: boolean): string {
  let estado = activo ? "conectado" : "desconectado";
  return `${nombre} tiene ${edad} años y esta ${estado}`;

}
console.log(presentarUsuario("Sofia", 22, true));

// reglas 
// todas las sentencias terminan con ;
// seguimos usando llaves y respetamos identacion
// las declaracion de variables con el type 

// tipos de datos
// Symbol: Symbol() unico inmutable 

const idCliente1 = Symbol("id")
const idCliente2 = Symbol("id")

console.log(idCliente1 === idCliente2);

const usuario = {
  nombre: "Carlos",
  [idCliente1]: 1005
};


let notSet: string | undefined;


// type rolUsuario = "admin" | "editor" | "invitado";
// let rolActual : rolUsuario;
// rolAltual="admin";

// || && !



let edadPersona: number = 18;

if (edadPersona < 12) {
  console.log("es niño");

} else if (edadPersona < 18) {
  console.log("es adolescente");

} else {
  console.log("es mayor de edad");

}