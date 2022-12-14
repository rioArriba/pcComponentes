
	
	function verCarro(){
		miDialog=document.getElementById("miDialogo");
		let miCarrito=document.getElementsByTagName("img");//para acceder a la imagen mehjor con el id creandolo
		//console.log(miCarrito[0]);
		miCarrito[0].onclick=function(){
		miDialog.showModal();
		miCarro.verCarrito();
	
								}
			
						}

	function efectuaPedido(){
		console.log(JSON.stringify(miCarro));	
	}

	window.onload=()=>{
		//miCarro = new Carrito();		
	document.getElementById("c-barra").onclick=function(){
		//esto te devuelve un array entonces habría que seleccionar al primer elemento
		let nav=document.getElementsByClassName("c-nav")[0];
		nav.style='display:block;';
		//alert("has pulsado");
	
		
	}
	/*
	carrito=new Carrito();
	articulos=Object.values(carrito);
		console.log(articulos);
		*/
}
/*
function mostrarCards(miArray){
	miArray.forEach(lista => {//`` seria con eso y concatenado la variable ${variable} así se ve más lejible 
		document.getElementById("contenedor").innerHTML+=`
		<div class="col">
		<img src="assets/${lista.codigo}.jpg" class="card-img-top">
		<div class="card-body">
		<h5 class="card-title">${lista.nombre}</h5>
		<p class="card-text">${lista.descripcion}</p>
		<b><p class="card-text text-center">${lista.precio}&#8364</p></b>
		</div>
		<button id="${lista.codigo}" class="btn-success">Comprar</button>
		</div>
		</div>`;
			/*console.log(lista.codigo);console.log(lista.nombre);console.log(lista.descripcion);console.log(lista.precio);*/ 
	/*
		});
	
}
*/

