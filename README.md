# verduleria

Este es el proyecto web desarrollado para la primera parte de la Diplomatura en Diseño Web Fullstack dictada por la extensión universitaria de la UTN. Se trata de un sitio web que debe integrar los conocimientos y tecnologías aprendidos durante la cursada.

El presente repositorio contiene los archivos que están subidos al hosting utilizado (000hosting) en el estado en que se encuentran en el link suministrado.

El sitio web está compuesto por X cantidad de páginas, desarrolladas utilizando HTML, CSS y Bootstrap, con aplicaciones de JavaScript y PHP para determinadas partes de la misma y la inclusión de 2 tablas de base de datos trabajadas con MYSQL a traves de Workbench y de phpmyadmin (en la versión incluida en 000hosting). Se sumó la librería JQuery de JavaScript para trabajar de forma mas sencilla con este lenguaje.

Javascript fue utilizado de forma cosmética, programandose un banner en la página de index.html el cual puede ocultarse cliqueando un botón mediante la función ocultarCarrusel (hide). Tambien se programó un carrito de compras en la página verduleriacarrito.html, donde se hizo una tabla con Bootstrap que contiene los nombres y fotografias de los productos a comercializar; alli se puede cliquear en los botones para sumar o restar las cantidades a comprar y al presionar el boton de checkout se obtiene la suma de los valores de los productos seleccionados y se lleva al usuario a una página que contiene las opciones de forma de pago.

Se implementó en varias páginas la posibilidad de registrarse para un mailing mediante un formulario que ingresa la información via PHP a la base de datos en 000webhosting, una tabla llamada registro (se puede revisar la información subida a la tabla mediante una página (no accesible en el sitio, que imprime el contenido de la tabla, https://verduleriarodriguez.000webhostapp.com/usuarios.php).

Lo mismo se puede ingresar tambien a una página llamada Portal Proveedores donde ingresando un mail y clave determinado se puede ingresar a una página donde se reproducen via PHP los contenidos de una tabla que contiene precios y cantidades de varios productos.
