document.addEventListener("DOMContentLoaded", function() {
    // Procesadores
    const procesadoresIntel = [
        { id: 1, nombre: "Intel Core i5 12600K", precio: 26999, disponible: true, nucleos: 10, imagen: "./assets/Intel Core i5 12600K.jpg" },
        { id: 2, nombre: "Intel Core i7 12700KF", precio: 38999, disponible: true, nucleos: 12, imagen: "./assets/Intel Core i7 12700KF.jpg" },
        { id: 3, nombre: "Intel Core i9 12900K", precio: 49999, disponible: true, nucleos: 16, imagen: "./assets/Intel Core i9 12900K.jpg" }
    ];

    const procesadoresAMD = [
        { id: 4, nombre: "AMD Ryzen 5 5600X", precio: 27999, disponible: true, nucleos: 6, imagen: "./assets/AMD Ryzen 5 5600X.jpg" },
        { id: 5, nombre: "AMD Ryzen 7 5800X", precio: 35999, disponible: false, nucleos: 8, imagen: "./assets/AMD Ryzen 7 5800X.jpg" },
        { id: 6, nombre: "AMD Ryzen 9 5900X", precio: 47999, disponible: true, nucleos: 12, imagen: "./assets/AMD Ryzen 9 5900X.jpg" }
    ];

    // Tarjetas gráficas
    const tarjetasNvidia = [
        { id: 7, nombre: "Nvidia GeForce RTX 3060", precio: 44999, disponible: false, memoria: 12, imagen: "./assets/Nvidia GeForce RTX 3060.jpg" },
        { id: 8, nombre: "Nvidia GeForce RTX 3070", precio: 62999, disponible: true, memoria: 12, imagen: "./assets/Nvidia GeForce RTX 3070.jpg" },
        { id: 9, nombre: "Nvidia GeForce RTX 3080", precio: 89999, disponible: true, memoria: 12, imagen: "./assets/Nvidia GeForce RTX 3080.jpg" }
    ];

    const tarjetasAMD = [
        { id: 10, nombre: "AMD Radeon RX 6600 XT", precio: 32999, disponible: true, memoria: 8, imagen: "./assets/AMD Radeon RX 6600 XT.jpg" },
        { id: 11, nombre: "AMD Radeon RX 6700 XT", precio: 46999, disponible: false, memoria: 12, imagen: "./assets/AMD Radeon RX 6700 XT.jpg" },
        { id: 12, nombre: "AMD Radeon RX 6800 XT", precio: 67999, disponible: true, memoria: 16, imagen: "./assets/AMD Radeon RX 6800 XT.jpg" }
    ];

    // Carrito. En caso de que no haya un carrito guardado en el localStorage, se inicia un carrito con array vacio
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Definimos variables y tomamos ids de la tabla del carrito
    const carritoItems = document.getElementById('carrito-items');
    const totalCarrito = document.getElementById('total-carrito');

    // Definimos el total en 0 y para cada producto nuevo agregado, indicamos sus propiedades (valor, nombre, etc)  y lo renderizamos.
    const renderCarrito = () => {
        carritoItems.innerHTML = '';
        let total = 0;
        carrito.forEach((producto, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td><input type="number" value="${producto.cantidad}" min="1" data-index="${index}" class="cantidad"/></td>
                <td>$${producto.precio * producto.cantidad}</td>
                <td><button class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button></td>
            `;
            carritoItems.appendChild(row);
            total += producto.precio * producto.cantidad;
        });
        totalCarrito.textContent = total.toFixed(2);
    };

    // Guardamos el carrito en localstorage y volvemos a renderizar
    const guardarCarrito = () => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        renderCarrito();
    };

    //Evento para modificar cantidad de un producto en el carrito
    carritoItems.addEventListener('change', (e) => {
        if (e.target.classList.contains('cantidad')) {
            const index = e.target.getAttribute('data-index');
            carrito[index].cantidad = parseInt(e.target.value);
            guardarCarrito();
        }
    });

    // Botón para eliminar productos del carrito. Si existe un boton con clase "btn-danger" hacemos un splice, eliminando los datos/elementos
    carritoItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-danger')) {
            const index = e.target.getAttribute('data-index');
            carrito.splice(index, 1);
            guardarCarrito();
        }
    });

    // la variable existe, busca en el carrito si el producto existe. Si existe, al apretar el boton de "agregar al carrito", el producto se le suma la cantidad, sino,
    //  se agrega el producto al carrito. Este codigo está centrado en la parte del "localstorage"
    const agregarAlCarrito = (producto) => {
        const existe = carrito.find(item => item.id === producto.id);
        if (existe) {
            existe.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }
        guardarCarrito();
    };

    // Renderizado de procesarodres.
    function mostrarProcesadores(procesadores) {
        const container = document.getElementById("procesadores");
        container.innerHTML = "";
        procesadores.forEach(procesador => {
            const estadoStock = procesador.disponible ? "Agregar al carrito" : "Fuera de stock";
            const botonClase = procesador.disponible ? "btn-primary" : "btn-danger";
            const card = `
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${procesador.nombre}</h5>
                            <p class="card-text">Precio: $${procesador.precio}</p>
                            <p class="card-text">Núcleos: ${procesador.nucleos}</p>
                            <img class="producto-imagen" src="${procesador.imagen}"/>
                            <button class="btn ${botonClase}" ${procesador.disponible ? '' : 'disabled'} data-id="${procesador.id}">${estadoStock}</button>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    }
    
    
    // Renderizado de Gpus.
    function mostrarTarjetasGraficas(tarjetas) {
        const container = document.getElementById("gpus");
        container.innerHTML = "";
        tarjetas.forEach(tarjeta => {
            const estadoStock = tarjeta.disponible ? "Agregar al carrito" : "Fuera de stock";
            const botonClase = tarjeta.disponible ? "btn-primary" : "btn-danger";
            const card = `
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${tarjeta.nombre}</h5>
                            <p class="card-text">Precio: $${tarjeta.precio}</p>
                            <p class="card-text">Memoria: ${tarjeta.memoria} GB</p>
                            <img class="producto-imagen" src="${tarjeta.imagen}"/>
                            <button class="btn ${botonClase}" ${tarjeta.disponible ? '' : 'disabled'} data-id="${tarjeta.id}">${estadoStock}</button>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    }

    // Para que el sitio renderice de forma predeterminada los dos componentes y luego puedan ser alternados por la otra función.
    mostrarProcesadores(procesadoresIntel);
    mostrarTarjetasGraficas(tarjetasNvidia);

    // Tomamos los arrays y los filtramos. Al tomar un valor, renderiza la función que muestra procesadores, y dependiendo la marca seleccionada, filtra.
    const filtroMarcaProcesadores = document.getElementById("filtro-marca-procesadores");
    filtroMarcaProcesadores.addEventListener("change", () => {
        const marcaSeleccionada = filtroMarcaProcesadores.value;
        if (marcaSeleccionada === "intel") {
            mostrarProcesadores(procesadoresIntel);
        } else if (marcaSeleccionada === "amd") {
            mostrarProcesadores(procesadoresAMD);
        }
    });

    // Mismo filtro pero con GPUS
    const filtroMarcaTarjetas = document.getElementById("filtro-marca-gpus");
    filtroMarcaTarjetas.addEventListener("change", () => {
        const marcaSeleccionada = filtroMarcaTarjetas.value;
        if (marcaSeleccionada === "nvidia") {
            mostrarTarjetasGraficas(tarjetasNvidia);
        } else if (marcaSeleccionada === "amd_gpu") {
            mostrarTarjetasGraficas(tarjetasAMD);
        }
    });

    // Agrega un producto al carrito cuando se hace click en un boton "btn-primary", agregando el producto de manera GRAFICA!
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            let producto;
            [procesadoresIntel, procesadoresAMD, tarjetasNvidia, tarjetasAMD].forEach(grupo => {
                const encontrado = grupo.find(item => item.id === id);
                if (encontrado) producto = encontrado;
            });
            if (producto) agregarAlCarrito(producto);
        }
    });

    renderCarrito();

});
