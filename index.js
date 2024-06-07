document.addEventListener("DOMContentLoaded", function() {
    // Procesadores
    const procesadoresIntel = [
        { nombre: "Intel Core i5 12600K", precio: 26999, disponible: true, nucleos: 10, imagen: "./assets/Intel Core i5 12600K.jpg" },
        { nombre: "Intel Core i7 12700KF", precio: 38999, disponible: true, nucleos: 12, imagen: "./assets/Intel Core i7 12700KF.jpg" },
        { nombre: "Intel Core i9 12900K", precio: 49999, disponible: true, nucleos: 16, imagen: "./assets/Intel Core i9 12900K.jpg" }
    ];

    const procesadoresAMD = [
        { nombre: "AMD Ryzen 5 5600X", precio: 27999, disponible: true, nucleos: 6, imagen: "./assets/AMD Ryzen 5 5600X.jpg" },
        { nombre: "AMD Ryzen 7 5800X", precio: 35999, disponible: false, nucleos: 8, imagen: "./assets/AMD Ryzen 7 5800X.jpg" },
        { nombre: "AMD Ryzen 9 5900X", precio: 47999, disponible: true, nucleos: 12, imagen: "./assets/AMD Ryzen 9 5900X.jpg" }
    ];

    // Tarjetas gráficas
    const tarjetasNvidia = [
        { nombre: "Nvidia GeForce RTX 3060", precio: 44999, disponible: false, memoria: 12, imagen: "./assets/Nvidia GeForce RTX 3060.jpg" },
        { nombre: "Nvidia GeForce RTX 3070", precio: 62999, disponible: true, memoria: 12, imagen: "./assets/Nvidia GeForce RTX 3070.jpg" },
        { nombre: "Nvidia GeForce RTX 3080", precio: 89999, disponible: true, memoria: 12, imagen: "./assets/Nvidia GeForce RTX 3080.jpg" }
    ];

    const tarjetasAMD = [
        { nombre: "AMD Radeon RX 6600 XT", precio: 32999, disponible: true, memoria: 8, imagen: "./assets/AMD Radeon RX 6600 XT.jpg" },
        { nombre: "AMD Radeon RX 6700 XT", precio: 46999, disponible: false, memoria: 12, imagen: "./assets/AMD Radeon RX 6700 XT.jpg" },
        { nombre: "AMD Radeon RX 6800 XT", precio: 67999, disponible: true, memoria: 16, imagen: "./assets/AMD Radeon RX 6800 XT.jpg" }
    ];

    function mostrarProcesadores(procesadores) {
        const container = document.getElementById("procesadores");
        container.innerHTML = "";
        procesadores.forEach(procesador => {
            const estadoStock = procesador.disponible ? "Agregar al carrito" : "Fuera de stock";
            const card = `
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${procesador.nombre}</h5>
                            <p class="card-text">Precio: $${procesador.precio}</p>
                            <p class="card-text">Núcleos: ${procesador.nucleos}</p>
                            <img class="producto-imagen" src="${procesador.imagen}"/>
                            <button class="btn btn-primary" id="boton-carrito-card">${estadoStock}</button>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    }
    
    function mostrarTarjetasGraficas(tarjetas) {
        const container = document.getElementById("gpus");
        container.innerHTML = "";
        tarjetas.forEach(tarjeta => {
            const estadoStock = tarjeta.disponible ? "Agregar al carrito" : "Fuera de stock";
            const card = `
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${tarjeta.nombre}</h5>
                            <p class="card-text">Precio: $${tarjeta.precio}</p>
                            <p class="card-text">Memoria: ${tarjeta.memoria} GB</p>
                            <img class="producto-imagen" src="${tarjeta.imagen}"/>
                            <button class="btn btn-primary" id="boton-carrito-card">${estadoStock}</button>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    }

    mostrarProcesadores(procesadoresIntel);
    mostrarTarjetasGraficas(tarjetasNvidia);

    const filtroMarcaProcesadores = document.getElementById("filtro-marca-procesadores");
    filtroMarcaProcesadores.addEventListener("change", function() {
        const marcaSeleccionada = filtroMarcaProcesadores.value;
        if (marcaSeleccionada === "intel") {
            mostrarProcesadores(procesadoresIntel);
        } else if (marcaSeleccionada === "amd") {
            mostrarProcesadores(procesadoresAMD);
        }
    });

    const filtroMarcaTarjetas = document.getElementById("filtro-marca-gpus");
    filtroMarcaTarjetas.addEventListener("change", function() {
        const marcaSeleccionada = filtroMarcaTarjetas.value;
        if (marcaSeleccionada === "nvidia") {
            mostrarTarjetasGraficas(tarjetasNvidia);
        } else if (marcaSeleccionada === "amd_gpu") {
            mostrarTarjetasGraficas(tarjetasAMD);
        }
    });
});
