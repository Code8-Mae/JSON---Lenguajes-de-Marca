const sectionDatos = document.querySelector("#datos");
const sectionExcursiones = document.querySelector("#excursiones");

const url = "../JSON/Esteban_Martín_ofertas.json";

async function cargarJSON() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    agencia(data);
  } catch (error) {
    console.error("Error cargando el JSON:", error);
  }
}

cargarJSON();

function agencia(datosAgencia) {
  // Primera Parte H1.
  const agenciaNombre = document.createElement("h1");
  nombreAgencia = document.createTextNode(datosAgencia.nombreAgencia);
  agenciaNombre.append(nombreAgencia);

  sectionDatos.append(agenciaNombre);

  // Segunda Parte Div con H2 y P.
  const informacionDiv = document.createElement("div");
  const tituloH2 = document.createElement("h2");
  const pTelefono = document.createElement("p");
  const pEmail = document.createElement("p");

  H2titulo = document.createTextNode("Información de Contacto");
  telefono = document.createTextNode(datosAgencia.informacion.telefono);
  email = document.createTextNode(datosAgencia.informacion.email);

  tituloH2.append(H2titulo);
  pTelefono.append(telefono);
  pEmail.append(email);

  informacionDiv.append(tituloH2, pTelefono, pEmail);
  sectionDatos.append(informacionDiv);

  // Tercera Parte Cards con H3, Div y Span.
  for (let i = 0; i < datosAgencia.excursiones.length; i++) {
    // Primera Parte Card y H3.
    const card = document.createElement("card");
    const destinoH3 = document.createElement("h3");
    const paisH3 = document.createElement("h3");
    const precioH3 = document.createElement("h3");

    H3destino = document.createTextNode(datosAgencia.excursiones[i].destino);
    H3pais = document.createTextNode(datosAgencia.excursiones[i].pais);
    H3precio = document.createTextNode(datosAgencia.excursiones[i].precio);

    destinoH3.append(H3destino);
    paisH3.append(H3pais);
    precioH3.append(H3precio);

    // Segunda Parte Div y Span.
    const actividadDiv = document.createElement("div");

    for (let j = 0; j < datosAgencia.excursiones[i].actividades.length; j++) {
      const actividadSpan = document.createElement("span");

      actividad = document.createTextNode(
        datosAgencia.excursiones[i].actividades[j],
      );

      actividadSpan.append(actividad);
      actividadDiv.append(actividadSpan);
    }

    card.append(destinoH3, paisH3, precioH3, actividadDiv);

    sectionExcursiones.append(card);
  }
}
