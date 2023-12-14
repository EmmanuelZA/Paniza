var nombre, info, cantidadPersonas, cantidadPizza, entrega, tiempo;

function pedidoCliente() {
    nombre = prompt('Bienvenido/a a Paniza, cuál es tu nombre?');
    alert('Bienvenido/a ' + nombre);
    info = prompt('Cómo conociste nuestro emprendimiento?');
    cantidadPersonas = prompt('Cuántos comensales son?');
    cantidadPizza = cantidadPersonas * 2;
    alert('Te recomiendo comprar ' + cantidadPizza + ' pizzas.');
    entrega = prompt('Por favor, indica la dirección a la cual deseas enviar el pedido, o si prefieres take away.');
    
}