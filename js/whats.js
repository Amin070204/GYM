 document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = encodeURIComponent(this.nombre.value.trim());
    const servicio = encodeURIComponent(this.servicio.value.trim());
    const mensaje = encodeURIComponent(this.mensaje.value.trim());

    const numero = "9611449749"; // 🔁 Tu número de WhatsApp sin + ni espacios

    const texto = `Hola, soy ${nombre}. Estoy interesado en el servicio: ${servicio}. Este es mi mensaje: ${mensaje}`;
    const url = `https://wa.me/${numero}?text=${texto}`;

    window.open(url, '_blank');
  });