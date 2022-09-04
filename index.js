const Clickbtn = document.querySelectorAll('#boton-carrito-card');
let carrito = []

Clickbtn.forEach(btn =>{
	btn.addEventListener('click', addItemCarrito)
})

function addItemCarrito(e) {
	const button = e.target
	const item = button.closest('.card-body')
	const itemTitle = item.querySelector('.card-title').textContent;
	const itemPrice = item.querySelector('.card-text').textContent;
	const itemImg = item.querySelector('.combo-img').src;


	const newItem = {
		title: itemTitle,
		precio: itemPrice,
		img: itemImg,
		cantidad: 1
	}

	addItemCarrito(newItem)

}

function addItemCarrito(newItem){

	carrito.push(newItem)

	renderCarrito()
	}
function renderCarrito(){
		tbody.innerHTML = '';
		carrito.map(item => {
			const tr = document.createElement('tr')
			tr.classList.add('ItemCarrito')
			const content = ` 
			      <td>
			        <div class="d-flex align-items-center">
			          <img class="foto-producto" src=${item.img} alt="" style="width: 45px; height: 45px"/>
			          <div class="ms-3">
			            <p class="fw-bold mb-1">${item.title}</p>
			          </div>
			        </div>
			      </td>
			      <td>
					${item.cantidad}
			      </td>
			      <td>
			        <span class="badge badge-success rounded-pill d-inline">${item.precio}</span>
			      </td>
			      <td>Senior</td>
			      <td>
			        <button type="button" class="btn btn-link btn-sm btn-rounded">
			          ❌
			        </button>
			      </td>
			 `
			 tr.innerHTML = content;
			 tbody.append(tr)

		})
}












