document.getElementById("btn-primary").addEventListener("click", function () {
    // Obtener valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Construir enlace mailto
    const mailtoLink = `mailto:alexlp1404@gmail.com?subject=Contacto%20a%20través%20del%20portfolio&body=Nombre:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMensaje:%20${encodeURIComponent(message)}`;

    // Abrir el enlace
    window.location.href = mailtoLink;
});