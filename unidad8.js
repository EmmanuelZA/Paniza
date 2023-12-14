
function mostrarRespuestas() {
    var cajaInfo = document.getElementById('cont_js');
    cajaInfo.style.display="block";
    cajaInfo.innerHTML = `
    <h1>Bienvenido/a a nuestro emprendimiento,  ` + nombre + `</h1>
    <p>Nos alegra saber que nos conociste por medio de ` + info + `</p>
    <p>Cantidad de comensales: ` + cantidadPersonas + `</p>
    <p>Te recomendamos comprar ` + cantidadPizza + ` pizzas</p>
    <p>Forma de entrega: ` + entrega + `</p>
    `;
}

function tiempoEntrega() {
    var delivery = document.getElementById('cont_js2');
    delivery.style.display="block";
    if (entrega == 'take away') {
        delivery.innerHTML = 'Tu orden estará lista dentro de 20 minutos para ser retirada en el local, te esperamos!';
    } else {
        delivery.innerHTML = 'Tu pedido llegará a tu domicilio en los próximos 30 minutos, muchas gracias!';
    }
}

