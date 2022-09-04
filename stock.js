

//procesadores

class Procesador {
    constructor(nombre, precio, disponible, nucleos) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.disponible = true;
        this.nucleos = parseInt(nucleos);
    }
}
	const procesadoresIntel = [
	{
		nombre: "Intel celeron G5905",
		disponible: true,
		precio: 7049,
		nucleos:2
	},
	{
		nombre: "Intel Celeron G5925",
		disponible: true,
		precio: 8135,
		nucleos:2
	},
	{
		nombre: "Intel Pentium Gold G6400",
		disponible: false,	
		precio: 10300,
		nucleos:2
	}
]
	

procesadoresIntel.push(new Procesador("Intel Celeron G6900", 10339, true, 2))
procesadoresIntel.push(new Procesador("Intel Pentium Gold G6405", 10376, true, 2))
procesadoresIntel.push(new Procesador("Intel Pentium Gold G7400", 15099, true, 2))
procesadoresIntel.push(new Procesador("Intel Core i3 10105F", 14719, true, 4))
procesadoresIntel.push(new Procesador("Intel Core i3 12100", 25689, true, 4))
procesadoresIntel.push(new Procesador("Intel Core i5 11400", 41900, true, 6))
procesadoresIntel.push(new Procesador("Intel Core i7 10700F", 54999, true, 8))
procesadoresIntel.push(new Procesador("Intel Core i7 10700KF", 63989, true, 8))
procesadoresIntel.push(new Procesador("Intel Core i7 12700KF", 87989, true, 12))
procesadoresIntel.push(new Procesador("Intel Core i9 12900KF", 134299, false, 16))


/*function sumaImp(){
	this.precio = this.precio + (this.precio*1.21)
}
for (const nombre in ProcesadoresIntel) {
  if (ProcesadoresIntel.hasOwnProperty(nombre)) {
    const element = ProcesadoresIntel[nombre];
    console.log(element);
  }
}
*/

//combos actualización

class combo {
    constructor(Procesador,mother,ram, precio, disponible) {
        this.Procesador = Procesador;
        this.mother = mother;
        this.ram = ram;
        this.precio = parseFloat(precio);
        this.disponible = true;
    }
}

const combos = [];
//COMBO MICRO INTEL I3 10100 + H410 + 8GB
combos.push(new combo("Intel i3 10100", "H410", "8gb", 44600 ,true ))
combos.push(new combo("Intel i5 11400f", "H510", "8gb", 54200, true))
combos.push(new combo("Intel i5 11400f", "H510", "16gb", 60400, true))
combos.push(new combo("Intel i5 11400f", "b560", "8gb", 60600, true))