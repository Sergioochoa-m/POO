//  EJERCICIO 1

class Juan {
    constructor(nombre, ingles, programacion, html) {
        this.nombre = nombre;
        this.ingles = ingles;
        this.programacion = programacion;
        this.html = html;

        this.laMedia = function () {
            let media = (this.ingles + this.programacion + this.html) / 3;
            return `la media de ${nombre} es ${media}`
        }
    }
}

let donJuan = new Juan("Juan", 9, 8, 7);

console.log(donJuan.laMedia())


// EJERCICIO 2


// class Vestido {
//     constructor(precio, descuento) {
//         this.precio = precio;
//         this.descuento = descuento;

//         this.elMetodo = function () {
//             let metodo = (this.precio - this.descuento * this.precio / 100);
//             return `El precio es de ${metodo}`
//         }
//     }
// }


// let precio = prompt("Cual es el precio")
// let descuento = prompt("Cual es el decuento")
// let donVestido = new Vestido(precio, descuento);

// console.log(donVestido.elMetodo())




//EJERCICIO 3

class Piedra {
    constructor(masa, volumen) {
        this.masa = masa;
        this.volumen = volumen;

        this.laDensidad = function () {
            let densidad = (this.masa / this.volumen);
            return `La densidad es de ${densidad}`
        }
    }
}


let donDensidad = new Piedra(194, 10);

console.log(donDensidad.laDensidad())



//EJERCICIO 4

let Dinero = function (nombre, saldo) {

    this.nombre = nombre;
    this.saldo = saldo;

    this.ingresar = function (cantidad) {
       this.saldo = (this.saldo + cantidad)
       return this.saldo
    }

    this.retirar = function (cantidadRetirar) {
       this.saldo = (this.saldo - cantidadRetirar)
       return this.saldo
    }

}
 
let donDinero = new Dinero("Juan", 0)


console.log(donDinero.ingresar(1000))
console.log(donDinero.retirar(100))


//EJERCICIO 6

class Conductor {
    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.licencia = licencia
    }
}

//Instancia
const jose = new Conductor("Jose", 1111);


class Bus {
    constructor(capacidad, conductor) {
        this.capacidad = capacidad;
        this.pasajeros = 0;          // Empieza a 0
        this.conductor = conductor
    }

    subir(numPasajeros) {
        //Pongo math.min para que se quede con el numero mas pequeño(la capacidad) y asi no se suban mas
        this.pasajeros = Math.min(this.capacidad, this.pasajeros + numPasajeros)
    }

    bajar(numPasajeros) {
        //pongo 0 de base y Math.max para que se quede a 0, que no hayan numeros negativos y en caso de quedarse mas pues que de el numero mas alto
        this.pasajeros = Math.max(0, this.pasajeros - numPasajeros)
    }

}

const linea1 = new Bus(40, "jose");

linea1.subir(25)
console.log(linea1.pasajeros)
linea1.subir(35)
console.log(linea1.pasajeros)
linea1.bajar(45)
console.log(linea1.pasajeros)


//EJERCICIO 7


class Proveedor {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono
    }
}

const tecnoShop = new Proveedor("TecnoShop", "tcn@tecno.com", "1234567");



class Articulo {
    constructor(proveedor, nombre, precio) {
        this.proveedor = proveedor; // Objeto proveedor
        this.nombre = nombre;       // Nombre del artículo ("monitor")
        this.precio = precio    // Precio del artículo (200)
    }

    //funcion telefono para mostrar el mensaje nombre + telefono
    telefono() {
        return `El telefono de ${this.proveedor.nombre} es ${this.proveedor.telefono}`
    }
}


const monitor = new Articulo(tecnoShop, "monitor", 200);

console.log(monitor.telefono()); 

