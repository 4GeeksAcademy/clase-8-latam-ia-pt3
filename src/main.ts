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

procesarClienteyCompra("     aStrID mata  ", 55, 250)



/////////////////////////////mini-modulo 4 ts 

//.forEach()

const usuarios: string[] = ["Ana", "Luis", "Carlos", "Maria", "Sofia"];
usuarios.forEach((user, index)=>{
  console.log(`Enviando correo de bienvenida a ${user} (posicion: ${index})`);

  
});

//.map()

const precioBase: number[]= [100, 200, 300];
const precioConIva = precioBase.map(precio => precio * 1.21);

console.log("precios originales: " + precioBase);
console.log("precios con IVA: " + precioConIva);

// .filter()
const edades :number[]= [15, 22, 18, 14 ,30];
const mayoresDeEdad= edades.filter(edad => edad >= 18);
console.log("edades filtradas:" + mayoresDeEdad);


//.find()

const codigosPostales: number[] = [1301, 1414, 1200, 1010, 1200]
const primerValorAlto= codigosPostales.find(codigo => codigo>1300)

console.log("primer codigo encontrado: "+ primerValorAlto);

//sort()

const frutas : string[] = ["Manzana", "Banana", "Zanahoria", "Pera", "Arandanos"]
frutas.sort()
console.log(frutas);

const mixNumeros= [100, 20, 40]
mixNumeros.sort((a,b)=>a-b);
console.log(mixNumeros);

//.includes()

const hasAna= usuarios.includes("Ana");
console.log(`Esta Ana en la lista? ${hasAna}`);


///matrices array2D

const matriz :string[][] = [
  ["Alicia", "Bob", "Carlos"],   // fila 0
  ["David", "Emma", "Fran"],     // fila 1
  ["Grecia", "Enrique", "Iris"]  //  fila 2
]

console.log(matriz[1][2]);


////////////////////////////////////////juego ta te ti /tres en raya

let grillaJuego : string[][]= [];

const totalFilas= 3;
const totalColumnas= 3;

for (let i =0; i<totalFilas; i++){
  const fila:string[]=[]
  for (let j=0; j<totalColumnas; j++){
    fila.push("-");
  }
  grillaJuego.push(fila);
}

function imprimirGrilla(matriz :string[][]): void{
console.log("estado del tablero");
for (let i=0; i<matriz.length; i++){
  console.log(matriz[i].join(" | "));
  
}

}
imprimirGrilla(grillaJuego)
//primera jugada 
grillaJuego[1][2] = "X"
console.log("tu turno");

imprimirGrilla(grillaJuego)
//segunda jugada 

grillaJuego[2][1] = "0"
console.log("tu turno");

imprimirGrilla(grillaJuego)


//TERCERA  jugada 

grillaJuego[1][1] = "X"
console.log("tu turno");

imprimirGrilla(grillaJuego)

//////////////////////ejemplo de estacionamiento
// paso 1: crea una grilla 4x6 con todas las plazas libres (0).
function initLot(): number[][] {
  const filas = 4;
  const columnas = 6;
  const lot: number[][] = [];

  for (let i = 0; i < filas; i++) {
    const fila: number[] = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(0);
    }
    lot.push(fila);
  }

  return lot;
}

// paso 2: imprime la grilla con etiquetas de fila/columna y estado visual (_ libre, X ocupada).
function displayLot(lot: number[][]): void {
  if (lot.length === 0 || lot[0].length === 0) {
    console.log("Aparcamiento vacio");
    return;
  }

  const encabezadoColumnas = lot[0]
    .map((_, indiceColumna) => `C${indiceColumna}`)
    .join(" ");

  console.log(`   ${encabezadoColumnas}`);

  for (let fila = 0; fila < lot.length; fila++) {
    const visualFila = lot[fila]
      .map((espacio) => (espacio === 0 ? "_" : "X"))
      .join("  ");

    console.log(`F${fila} ${visualFila}`);
  }
}

// se inicializa el estacionamiento y se muestra su estado inicial.
const parkingLot = initLot();
console.log("Estado inicial del estacionamiento:", parkingLot);
displayLot(parkingLot);

// paso 3: reserva una plaza si esta libre; si no, informa que ya estaba ocupada.
function reserveSpace(lot: number[][], row: number, col: number): string {
  if (lot[row][col] === 1) {
    return "Plaza ya ocupada";
  }

  lot[row][col] = 1;
  return `Reservada F${row}C${col}`;
}

console.log(reserveSpace(parkingLot, 2, 4));
displayLot(parkingLot);

// pruebas de reserva para validar caso exitoso y caso duplicado.
console.log(reserveSpace(parkingLot, 3, 4));
console.log(reserveSpace(parkingLot, 2, 4)); //me sirve para validar cuando esta ocupado
displayLot(parkingLot);

// paso 4: ocupa mas plazas para luego calcular el resumen de disponibilidad.
console.log(reserveSpace(parkingLot, 0, 0));
console.log(reserveSpace(parkingLot, 0, 1));
console.log(reserveSpace(parkingLot, 1, 0));
console.log(reserveSpace(parkingLot, 1, 1));

// cuenta plazas libres y ocupadas recorriendo toda la matriz.
function countSpaces(lot: number[][]): { free: number; occupied: number } {
  let free = 0;
  let occupied = 0;

  for (let fila = 0; fila < lot.length; fila++) {
    for (let col = 0; col < lot[fila].length; col++) {
      if (lot[fila][col] === 0) {
        free++;
      } else {
        occupied++;
      }
    }
  }

  return { free, occupied };
}

const resumenEspacios = countSpaces(parkingLot);
console.log(`Libres: ${resumenEspacios.free}  |  Ocupadas: ${resumenEspacios.occupied}`);

displayLot(parkingLot);

// paso 5: busca el primer par de plazas contiguas libres en una misma fila.
function findAdjacentPair(lot: number[][]): string | null {
  // Recorre todas las filas del estacionamiento de arriba hacia abajo.
  for (let fila = 0; fila < lot.length; fila++) {
    // Recorre columnas de izquierda a derecha.
    // Se usa `length - 1` para poder mirar la columna actual y la siguiente sin salir del arreglo.
    for (let col = 0; col < lot[fila].length - 1; col++) {
      // Verifica si hay dos plazas libres seguidas (0, 0) en la misma fila.
      if (lot[fila][col] === 0 && lot[fila][col + 1] === 0) {
        // Devuelve de inmediato el primer par encontrado con formato de coordenadas.
        return `Par contiguo : F${fila}C${col} y F${fila}C${col + 1}`;
      }
    }
  }

  // Si no existe ningun par contiguo libre en toda la matriz, devuelve null.
  return null;
}

// muestra el primer par contiguo encontrado, o un mensaje si no existe.
const parConsecutivoLibre = findAdjacentPair(parkingLot);
// Si la funcion devuelve null, se muestra un mensaje alternativo con `??`.
console.log(parConsecutivoLibre ?? "No hay par contiguo disponible");

////////////////////////////////////////////MODELAR LA VIDA REAL MEDIANTE OBJETOS


const usuarioMalo={
  nombre:"David",
  direccion:{
    ciudad:"Madrid",
    calle:{
      nombre:"Castellana",
      numero: 25
    }
  }
}

const usuarioMalo1={
  nombre:"Ana",
  direccion:{
    ciudad:"Barcelona",
    calle:{
      nombre:"Castellana"
      }
  }
}

// usamos interfaces para solucionar el error

interface User{id:number; email:string};
interface UserPersonalData {id:number, name:string; age:number};
interface UserAddress {id:number, city:string};

const users: User[]=[
  {id:1, email: "david@123.com"},
  {id:2, email: "ana@123.com"},
];

const usersPersonalData: UserPersonalData[]=[
  {id:1, name: "david", age: 20},
  {id:2, name: "ana", age:30},
];

const userAddress: UserAddress[]=[
  {id:1, city: "Madrid"},
  {id:2, city: "Barcelona"},
];

//trabajando con metodos:

const bankAccount={
  titular: "Ana",
  balance: 500,
  withdraw: function(amount:number){
    if(amount<= this.balance){
      this.balance -= amount; //actualiza el estado interno del objeto
      return `Retiro exitoso. Nuevo saldo: ${this.balance}`;
    }
    return "fondos insuficiente";
  }
}
console.log(bankAccount.withdraw(100));


//clases 

class Vehiculo {
  //propiedad de la clase 
  model: string;
  year: number;
  marca: string;
  
  //constructor: 
  constructor(model:string, year:number, marca:string){
    this.model= model;
    this.year= year;
    this.marca=marca;
  }

  //metodo de comportamiento
  getInfo():string{
    return `${this.marca} ${this.model} del año ${this.year} `
  }
}

// creamos multiples objetos

const auto1=new Vehiculo("Corolla", 2020, "Toyota");
const auto2=new Vehiculo("Civic", 2010, "Honda");
const auto3=new Vehiculo("Mustang", 2023, "Ford");

console.log(auto1.getInfo());
console.log(auto2.getInfo());
console.log(auto3.getInfo());

///ejemplo completo


// usuario base
class User{
  id:number;
  email:string;

  constructor(id:number, email:string){
    this.id = id;
    this.email=email
  }
}

// datos personales 

class UserPersonalData{
  id:number;
  name:string;
  age:number;

  constructor(id:number, name:string, age:number){
    this.id = id;
    this.name=name;
    this.age=age;
  }
  //metodo de comportamiento
  getInfo():string{
    return `Nombre: ${this.name} Edad: ${this.age}`
  }

}

//direccion

class UserAddress{
  id:number;
  city:string;
  street: string;

  constructor(id:number, city:string, street:string){
    this.id = id;
    this.city=city;
    this.street=street;
  }

  //metodo de comportamiento
  getInfo():string{
    return `Ciudad: ${this.city} calle: ${this.street}`
  }
}

const user1= new User (1, "david@123.com")
const user2= new User (2, "ana@123.com")



const personalData: UserPersonalData[] = [
  new UserPersonalData(1,"david", 34),
  new UserPersonalData(2,"ana", 24),
]

const address: UserAddress[] = [
  new UserAddress(1,"madrid", "libertad"),
  new UserAddress(2,"barcelona", " avenida principal")
];



//  uno a uno 
//  uno a muchos
//  muchos a muchos

//actores - peliculas 