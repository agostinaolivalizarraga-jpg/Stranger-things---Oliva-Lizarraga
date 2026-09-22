/* ========================= PAGINA INFORMACIÓN ========================= */
     function mostrarInfo(seccion) {

            let contenidos = document.querySelectorAll(".contenido_info");
            for (let i = 0; i < contenidos.length; i++) {
                contenidos[i].style.display = "none";
            }
            document.getElementById(seccion).style.display = "block";
        }

/* ========================= PÁGINA DATOS ========================= */

    function mostrarDato(boton) {

        let tarjeta = boton.parentElement;
        let informacion = tarjeta.querySelector(".info_oculta");
        if (informacion.style.display == "block") {
        informacion.style.display = "none";
        boton.textContent = "DESCUBRIR";

        } else {
        informacion.style.display = "block";
        boton.textContent = "OCULTAR"; }
    }

    function datoAleatorio() {

        let datos = [
            "La segunda temporada fue donde se introdujeron más efectos especiales, pero entonces ¿cómo lo hicieron en la primera? Dentro del demogorgon de esta temporada se encontraba una persona. El actor Mark Steger llevaba un traje de monstruo, zancos y piezas de ropa verde (croma) para que no se le vieran los brazos. ",

            "La última escena de la tercera temporada es posiblemente la más emotiva de Stranger Things. Once cree que Hopper ha muerto y lee la carta que la dejó. La actriz, Millie Bobby Brown, ha afirmado que había un audio pre-grabado con la voz de David Harbour, pero ella se negó a escucharlo antes del momento de grabar. Pretendía escucharlo por primera vez mientras rodaban para que su reacción fuera totalmente real.",

            "Millie Bobby Brown se rapó para la primera temporada. Sin embargo, no lo hizo en ninguna de las otras entregas. Durante la cuarta parte, se narra la infancia de Once, a través de escenas vemos sus recuerdos. Para recrear a una Millie pequeña, se contrató a la actriz Marty Blair, la cual fue ayudada para recrear las expresiones y el lenguaje corporal de la Once del inicio de la serie. Además se usó tecnología de rejuvenecimiento mediante IA para que la cara de Millie se reflejara en el cuerpo de Marty. ",

            "El actor Jamie Campbell Bower pasó cerca de 70 horas sentado en la silla del equipo de prótesis para convertirse en Vecna. Usó lentes de contacto y dentaduras a medida para permitir la máxima expresividad facial posible.",

            "Para crear la atmósfera de el Upside Down y sus enredaderas, se usaron alrededor de 44 km de tubos flotadores y 130 km de cuerda, y se fabricaron cerca de 84 km de tentáculos. Además, el departamento de arte fabricó enredaderas de hasta 4 metros de alto, que luego el equipo de VFX extendió digitalmente sobre árboles y edificios."
        ];

        let numero = Math.floor(Math.random() * datos.length);

        document.getElementById("datoRandom").textContent = datos[numero];
    }

/* ========================= PÁGINA EPISODIOS ========================= */

    function mostrarTemporada(numero) {

        let temporadas = document.querySelectorAll(".lista_episodios");
        for (let i = 0; i < temporadas.length; i++) {
            temporadas[i].style.display = "none";
            }
        document.getElementById("temporada" + numero).style.display = "block";
        }

/* ========================= PÁGINA PERSONAJES ========================= */

    function abrirPersonaje(personaje) {

        let nombre = "";
        let numero = "";
        let texto = "";

        if (personaje == "eleven") {

            numero = "FILE 001";
            nombre = "ELEVEN";
            texto = "Eleven es una joven con habilidades sobrenaturales que fue sometida a experimentos en el Laboratorio Nacional de Hawkins. Su encuentro con Mike, Dustin y Lucas la convierte en una pieza fundamental del grupo.";
        }

        if (personaje == "mike") {

            numero = "FILE 002";
            nombre = "MIKE WHEELER";
            texto = "Mike es uno de los protagonistas principales y uno de los líderes del grupo de amigos. Es leal, curioso y está dispuesto a enfrentarse a cualquier peligro para proteger a las personas que quiere.";
        }

        if (personaje == "dustin") {

            numero = "FILE 003";
            nombre = "DUSTIN HENDERSON";
            texto = "Dustin se caracteriza por su inteligencia, sentido del humor y capacidad para resolver problemas. Su conocimiento y curiosidad resultan fundamentales para descubrir los misterios de Hawkins.";
        }

        if (personaje == "lucas") {

            numero = "FILE 004";
            nombre = "LUCAS SINCLAIR";
            texto = "Lucas es decidido, práctico y protector. A lo largo de la historia demuestra ser un miembro fundamental del grupo y enfrenta numerosas amenazas junto a sus amigos.";
        }

        if (personaje == "max") {

            numero = "FILE 005";
            nombre = "MAX MAYFIELD";
            texto = "Max llega a Hawkins y rápidamente se integra al grupo. Es independiente, valiente y apasionada por el skate. Su historia se vuelve especialmente importante durante las temporadas posteriores.";
        }

        if (personaje == "will") {

            numero = "FILE 006";
            nombre = "WILL BYERS";
            texto = "Will es el niño cuya desaparición desencadena los acontecimientos de la primera temporada. Su conexión con el Mundo del Revés continúa teniendo consecuencias a lo largo de la serie.";
        }

        if (personaje == "hopper") {

            numero = "FILE 007";
            nombre = "JIM HOPPER";
            texto = "Jim Hopper es el jefe de policía de Hawkins. Es una figura protectora para los jóvenes y especialmente importante para Eleven. Su carácter fuerte esconde un lado profundamente sensible.";
        }

        if (personaje == "joyce") {

            numero = "FILE 008";
            nombre = "JOYCE BYERS"
            texto = "Joyce es la madre de Will y Jonathan. Su determinación y capacidad para creer en lo imposible la llevan a descubrir la verdad detrás de los acontecimientos sobrenaturales de Hawkins.";
        }

         if (personaje == "nancy") {

            numero = "FILE 009";
            nombre = "NANCY WHEELER";
            texto = "Es la verdadera comandante del grupo. No espera a que nadie le dé órdenes; toma la iniciativa, interroga a los testigos, organiza las expediciones de ataque y toma las decisiones difíciles cuando las cosas se ponen feas.";
        }

        if (personaje == "jonathan") {

            numero = "FILE 010";
            nombre = "JONATHAN BYERS";
            texto = "Su papel es la lealtad incondicional. Actúa como el respaldo táctico silencioso de Nancy y la brújula moral de su familia; es el que está ahí para asegurar la logística, conducir el auto de huida y mantener a flote a la gente que quiere.";
        }

        if (personaje == "steve") {

            numero = "FILE 011";
            nombre = "STEVE HARRINGTON";
            texto = "Su rol principal es el de chofer y protector. Pasa la mayor parte del tiempo cuidando a los niños, sirviendo de señuelo para los monstruos y recibiendo los golpes para que los demás puedan ejecutar sus planes.";
        }

        if (personaje == "robin") {

            numero = "FILE 012";
            nombre = "ROBIN BUCKLEY"
            texto = "Funciona como la Mente ágil del equipo. Es la que conecta conceptos absurdos en segundos, traduce información clave y encuentra las fallas en las teorías de los demás gracias a su hiperactividad mental.";
        }


        document.getElementById("numeroVentana").textContent = numero;
        document.getElementById("nombreVentana").textContent = nombre;
        document.getElementById("textoVentana").textContent = texto;
        document.getElementById("ventana").style.display = "flex";
        }

        function cerrarPersonaje() {
        document.getElementById("ventana").style.display = "none";
        }

/* ========================= PÁGINA GALERÍA ========================= */

var imagenes = document.querySelectorAll(".imagen_galeria");
var indiceActual = 0;

function filtrarImagenes(categoria) {

    var botones = document.querySelectorAll(".filtro");

    botones.forEach(function(boton) {
        boton.classList.remove("activo");
    });

    event.target.classList.add("activo");

    imagenes.forEach(function(imagen) {

        if (categoria == "todos") {
            imagen.style.display = "block";

        } else if (imagen.classList.contains(categoria)) {
            imagen.style.display = "block";

        } else {
            imagen.style.display = "none";
        }

    });
}


function abrirImagen(indice) {

    indiceActual = indice;

    mostrarImagen();

    document.getElementById("visor").style.display = "flex";
}


function mostrarImagen() {

    var imagen = imagenes[indiceActual];

    var foto = imagen.querySelector("img");
    var titulo = imagen.querySelector("h3");
    var numero = imagen.querySelector("span");

    document.getElementById("imagenGrande").src = foto.src;

    document.getElementById("tituloImagen").innerHTML = titulo.innerHTML;

    document.getElementById("numeroImagen").innerHTML = numero.innerHTML;

    /* Categoría */

    if (imagen.classList.contains("personajes")) {
        document.getElementById("categoriaImagen").innerHTML = "PERSONAJES";

    } else if (imagen.classList.contains("hawkins")) {
        document.getElementById("categoriaImagen").innerHTML = "LUGAR";

    } else if (imagen.classList.contains("mundo")) {
        document.getElementById("categoriaImagen").innerHTML = "UPSIDE DOWN";

    } else if (imagen.classList.contains("detras")) {
        document.getElementById("categoriaImagen").innerHTML = "AFUERA DE LA SERIE";
    }
}

function cerrarImagen() {

    document.getElementById("visor").style.display = "none";

}

function cambiarImagen(direccion) {

    indiceActual = indiceActual + direccion;

    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }

    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }

    mostrarImagen();
}

/* ========================= PÁGINA REGISTRO ========================= */

    var formulario = document.getElementById("formularioRegistro");

    var mensaje = document.getElementById("mensajeRegistro");


    formulario.onsubmit = function(event) {

    event.preventDefault();

    formulario.style.display = "none";

    mensaje.style.display = "block";

        };

