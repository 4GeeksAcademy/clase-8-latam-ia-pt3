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

///calse 3 

//funciones (void) sin valor de retorno 

function registrarLogAuditora(usuario: string, accion: string): void{
  const fechaHora: string = new Date().toISOString();
  console.log(`[LOG ${fechaHora}] El usuario ${usuario} ejecuto la accion: ${accion}`);
  //aqui se conectaria con un aBD o con una API externa. 
}

registrarLogAuditora("Carlos", "LOGIN EXITOSO");


// metodos de cadena de texto (string)

const codigoSKU:string = "PROD-2026-X"
const esDigital: boolean= codigoSKU.includes("Digital") 
const esProducto:boolean= codigoSKU.startsWith("PROD")

console.log(`es digital: ${esDigital}`);
console.log(`es producto: ${esProducto}`);

const entradaUsuario :string = "  astrid.mata@GMAIL.COM   "
// LIMPIEZA DE DATOS 
const correoNormalizado :string = entradaUsuario
.trim()
.toLowerCase()
.replace("@gmail.com", "@empresa.com");

console.log(correoNormalizado);


// metodos matematicos (math)

// .isInteger()
// .isNaN()

const notaFinal: number= 18.678;
const promedioNota: string = notaFinal.toFixed(2);
console.log(promedioNota);

// MATH FLOOR
 const creditosAprobados:number = Math.floor(15.3);
 console.log(creditosAprobados);
 

//  rifa
const minimo:number= 1000;
const maximo:number= 9999;

const numeroAleatorio: number = Math.floor(Math.random()* (maximo-minimo+1)+minimo)
console.log(numeroAleatorio);



////////////////////////////////////////////////////////////////////////////////////////////////////

type TotalesCompra = {
  valorDescuento: number;
  totalPagar: number;
};

function normalizarNombre(nombre: string): string {
  const nombreLimpio = nombre.trim();

  if (nombreLimpio.length === 0) {
    return "";
  }

  const primeraLetra = nombreLimpio.charAt(0).toUpperCase();
  const restoNombre = nombreLimpio.slice(1).toLowerCase();
  return primeraLetra + restoNombre;
}

function edadEsValida(edad: number): boolean {
  return Number.isFinite(edad) && edad > 0;
}

function montoEsValido(monto: number): boolean {
  return Number.isFinite(monto) && monto > 0;
}

function obtenerDescuentoPorEdad(edad: number): number {
  return edad >= 50 ? 0.2 : 0;
}

function calcularTotalesCompra(monto: number, descuento: number): TotalesCompra {
  const valorDescuento = monto * descuento;
  const totalPagar = monto - valorDescuento;

  return { valorDescuento, totalPagar };
}

function generarCodigoCupon(prefijo: string = "VIP"): string {
  const numero = Math.floor(Math.random() * 9000) + 1000;
  return `${prefijo}-${numero}`;
}

function imprimirReporteCompra(
  nombre: string,
  edad: number,
  monto: number,
  valorDescuento: number,
  totalPagar: number,
  codigoCupon: string
): void {
  console.log("___________________________________________");
  console.log(`CLIENTE REGISTRADO: ${nombre} (${edad} ANOS)`);
  console.log(`COMPRA ORIGINAL: ${monto.toFixed(2)}`);
  console.log(`DESCUENTO APLICADO: ${valorDescuento.toFixed(2)}`);
  console.log(`TOTAL A PAGAR: ${totalPagar.toFixed(2)}`);
  console.log(`CUPON GENERADO: ${codigoCupon}`);
  console.log("___________________________________________");
}

// funcion principal: coordina validacion, calculo y reporte
function procesarClienteyCompra(nombre: string, edadCliente: number, montoCompra: number): void {
  const nombreFinal = normalizarNombre(nombre);

  if (nombreFinal.length === 0) {
    console.log("Error: el nombre no puede estar vacio");
    return;
  }

  if (!edadEsValida(edadCliente)) {
    console.log("Error: la edad ingresada no es valida");
    return;
  }

  if (!montoEsValido(montoCompra)) {
    console.log("Error: el monto de compra no es valido");
    return;
  }

  const descuentoCliente = obtenerDescuentoPorEdad(edadCliente);
  const { valorDescuento, totalPagar } = calcularTotalesCompra(montoCompra, descuentoCliente);
  const codigoCupon = generarCodigoCupon();

  imprimirReporteCompra(
    nombreFinal,
    edadCliente,
    montoCompra,
    valorDescuento,
    totalPagar,
    codigoCupon
  );
}

procesarClienteyCompra("     aStrID peña  ", 22, 250)