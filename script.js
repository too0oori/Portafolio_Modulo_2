window.onload = function() {
    
    // ÚNICO EFECTO: Navegación suave al hacer click en el menú
    var enlaces = document.querySelectorAll('.nav-link');
    
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].onclick = function(evento) {
            var href = this.getAttribute('href');
            
            // Solo si el enlace empieza con #
            if (href && href[0] === '#') {
                evento.preventDefault();
                var seccion = document.querySelector(href);
                
                if (seccion) {
                    seccion.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
    }
    
    // Mensaje simple en consola
    console.log('¡Hola! Mi portafolio está funcionando correctamente 👋');
};

// flechita para subir //