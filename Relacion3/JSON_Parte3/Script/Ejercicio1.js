const datos = {
  para: "Pedro",
  de: "Laura",
  titulo: "Recordatorio",
  contenido: "A las 7:00 pm en la puerta del teatro",
};

document.getElementById("caja-para").textContent = "Para: " + datos.para;
document.getElementById("caja-de").textContent = "De: " + datos.de;
document.getElementById("caja-titulo").textContent = datos.titulo;
document.getElementById("caja-contenido").textContent = datos.contenido;
