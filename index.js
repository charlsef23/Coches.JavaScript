const coche = "BMW"
const COCHE_POR_DEFECTO = "Audi"
const PRECIO_COCHES = {
    Audi: '50000',
    Mazda: '9000',
    Chevrolet: '15000',
    BMW: '100000'
}
const precio = PRECIO_AUTOS[coche] || PRECIO_COCHES[COCHE_POR_DEFECTO]
console.log(`El precio del coche ${coche} es ${precio}`)