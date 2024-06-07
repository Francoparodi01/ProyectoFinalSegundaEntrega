document.addEventListener("DOMContentLoaded", function() {
    // Procesadores
    class Procesador {
        constructor(nombre, precio, disponible, nucleos, imagen) { 
            this.nombre = nombre;
            this.precio = parseFloat(precio);
            this.disponible = disponible; 
            this.nucleos = parseInt(nucleos);
            this.imagen = imagen; 
        }
    }

    const procesadoresIntel = [
        new Procesador("Intel Core i5 12600K", 26999, true, 10, "./assets/Intel Core i5 12600K.jpg"),
        new Procesador("Intel Core i7 12700KF", 38999, true, 12, "./assets/Intel Core i7 12700KF.jpg"),
        new Procesador("Intel Core i9 12900K", 49999, true, 16, "./assets/Intel Core i9 12900K.jpg")
    ];

    const procesadoresAMD = [
        new Procesador("AMD Ryzen 5 5600X", 27999, true, 6, "./assets/AMD Ryzen 5 5600X.jpg"),
        new Procesador("AMD Ryzen 7 5800X", 35999, true, 8, "./assets/AMD Ryzen 7 5800X.jpg"),
        new Procesador("AMD Ryzen 9 5900X", 47999, true, 12, "./assets/AMD Ryzen 9 5900X.jpg")
    ];

    // Tarjetas gráficas
    class TarjetaGrafica {
        constructor(nombre, precio, disponible, memoria, imagen) { 
            this.nombre = nombre;
            this.precio = parseFloat(precio);
            this.disponible = disponible;
            this.memoria = parseInt(memoria);
            this.imagen = imagen;
        }
    }

    const tarjetasNvidia = [
        new TarjetaGrafica("Nvidia GeForce RTX 3060", 44999, true, 12, "./assets/Nvidia GeForce RTX 3060.jpg"),
        new TarjetaGrafica("Nvidia GeForce RTX 3070", 62999, true, 12, "./assets/Nvidia GeForce RTX 3070.jpg"),
        new TarjetaGrafica("Nvidia GeForce RTX 3080", 89999, true, 12, "./assets/Nvidia GeForce RTX 3080.jpg")
    ];

    const tarjetasAMD = [
        new TarjetaGrafica("AMD Radeon RX 6600 XT", 32999, true, 8, "./assets/AMD Radeon RX 6600 XT.jpg"),
        new TarjetaGrafica("AMD Radeon RX 6700 XT", 46999, true, 12, "./assets/AMD Radeon RX 6700 XT.jpg"),
        new TarjetaGrafica("AMD Radeon RX 6800 XT", 67999, true, 16, "./assets/AMD Radeon RX 6800 XT.jpg")
    ];

    // Función para mostrar procesadores
    function mostrarProcesadores(procesadores) {
        const container = document.getElementById("products");
        container.innerHTML = ""; // Limpiar el contenido actual
        procesadores.forEach(procesador => {
            if (procesador.disponible) {
                const card = `
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${procesador.nombre}</h5>
                                <p class="card-text">Precio: $${procesador.precio}</p>
                                <p class="card-text">Núcleos: ${procesador.nucleos}</p>
								<img class="producto-imagen" src="${procesador.imagen}"/>
                                <button class="btn btn-primary" id="boton-carrito-card">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            }
        });
    }

    // Función para mostrar tarjetas gráficas
    function mostrarTarjetasGraficas(tarjetas) {
        const container = document.getElementById("products");
        container.innerHTML = ""; // Limpiar el contenido actual

        tarjetas.forEach(tarjeta => {
            if (tarjeta.disponible) {
                const card = `
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${tarjeta.nombre}</h5>
                                <p class="card-text">Precio: $${tarjeta.precio}</p>
                                <p class="card-text">Memoria: ${tarjeta.memoria} GB</p>
								<img src="${tarjeta.imagen}"/>
                                <button class="btn btn-primary" id="boton-carrito-card">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            }
        });
    }

    // Mostrar productos al cargar la página
    mostrarProcesadores(procesadoresIntel); // Muestra procesadores Intel por defecto

    // Manejar el cambio de filtro
    const filtroMarca = document.getElementById("filtro-marca");
    filtroMarca.addEventListener("change", function() {
        const marcaSeleccionada = filtroMarca.value;
        if (marcaSeleccionada === "intel") {
            mostrarProcesadores(procesadoresIntel);
        } else if (marcaSeleccionada === "amd") {
            mostrarProcesadores(procesadoresAMD);
        } else if (marcaSeleccionada === "nvidia") {
            mostrarTarjetasGraficas(tarjetasNvidia);
        } else if (marcaSeleccionada === "amd_gpu") {
            mostrarTarjetasGraficas(tarjetasAMD);
        }
    });
});
