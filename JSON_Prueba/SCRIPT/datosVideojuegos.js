const principal = document.querySelector("#juegos");

const url = "../JSON/videojuegos.json";

async function cargarJSON() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    generaListaJuegos(data);
  } catch (error) {
    console.error("Error cargando el JSON:", error);
  }
}

cargarJSON();

function generaListaJuegos(datosJuegos) {
  datosJuegos.forEach((juego) => {
    const juegoSection = document.createElement("section");
    const JuegoNombre = document.createElement("h3");
    const JuegoEstudio = document.createElement("h3");
    const JuegoAnyio = document.createElement("h3");

    const JuegoPlataformasDiv = document.createElement("div");
    JuegoPlataformasDiv.setAttribute("class", "plataforma");

    const JuegoArticle = document.createElement("article");

    NombreJuego = document.createTextNode(juego.nombre);
    EstudioJuego = document.createTextNode(juego.estudio);
    AnyioJuego = document.createTextNode(juego.Fecha_Lanzamiento);

    JuegoNombre.append(NombreJuego);
    JuegoEstudio.append(EstudioJuego);
    JuegoAnyio.append(AnyioJuego);

    juegoSection.append(JuegoNombre, JuegoEstudio, JuegoAnyio);

    for (let i = 0; i < juego.Plataformas.length; i++) {
      const span = document.createElement("span");

      const textoPlataforma = document.createTextNode(juego.Plataformas[i]);

      span.append(textoPlataforma);

      JuegoPlataformasDiv.append(span);
    }

    juegoSection.append(JuegoPlataformasDiv);

    for (let i = 0; i < juego.Valoraciones.length; i++) {
      const divValoracion = document.createElement("div");

      const divGamer = document.createElement("div");
      const divJugabilidad = document.createElement("div");
      const divDiseño = document.createElement("div");
      const divHistoria = document.createElement("div");

      const textoUsuario = document.createTextNode(
        "Usuario: " + juego.Valoraciones[i].usuario,
      );
      const textoJugabilidad = document.createTextNode(
        "Jugabilidad: " + juego.Valoraciones[i].puntuacion_Jugabilidad,
      );
      const textoDiseño = document.createTextNode(
        "Diseño: " + juego.Valoraciones[i].puntuacion_Diseño,
      );
      const textoHistoria = document.createTextNode(
        "Historia: " + juego.Valoraciones[i].puntuacion_Historia,
      );

      divGamer.append(textoUsuario);
      divJugabilidad.append(textoJugabilidad);
      divDiseño.append(textoDiseño);
      divHistoria.append(textoHistoria);

      divValoracion.append(divGamer, divJugabilidad, divDiseño, divHistoria);
      JuegoArticle.append(divValoracion);
    }

    juegoSection.append(JuegoArticle);

    principal.append(juegoSection);
  });
}
