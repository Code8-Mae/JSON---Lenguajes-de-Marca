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
    JuegoPlataformasDiv.setAttribute("id", "plataformas");
    const JuegoPlataforma1 = document.createElement("span");
    const JuegoPlataforma2 = document.createElement("span");
    const JuegoPlataforma3 = document.createElement("span");

    const JuegoArticle = document.createElement("article");
    const JuegoDivValoraciones = document.createElement("div");
    const JuegoValoracion1 = document.createElement("div");
    const JuegoValoracion2 = document.createElement("div");
    const JuegoValoracion3 = document.createElement("div");
    const JuegoValoracion4 = document.createElement("div");

    JuegoNombre = document.createTextNode(juego.nombre);
    JuegoEstudio = document.createTextNode(juego.estudio);
    JuegoAnyio = document.createTextNode(juego.Fecha_Lanzamiento);

    juegoSection.append(JuegoNombre, JuegoEstudio, JuegoAnyio);

    for (let i = 0; i < juego.Plataformas.length; i++) {
      JuegoPlataforma1 = document.createTextNode(juego.Plataformas[i]);
      JuegoPlataforma2 = document.createTextNode(juego.Plataformas[i]);
      JuegoPlataforma3 = document.createTextNode(juego.Plataformas[i]);

      JuegoPlataformasDiv.append(JuegoPlataforma1);
      JuegoPlataformasDiv.append(JuegoPlataforma2);
      JuegoPlataformasDiv.append(JuegoPlataforma3);

      JuegoArticle.append(JuegoDivValoraciones);

      juegoSection.append(JuegoArticle);
    }

    for (let i = 0; i < juego.Valoraciones.length; i++) {
      JuegoValoracion1 = document.createTextNode(juego.Valoraciones[i].usuario);
      JuegoValoracion2 = document.createTextNode(
        juego.Valoraciones[i].puntuacion,
      );
      JuegoValoracion3 = document.createTextNode(
        juego.Valoraciones[i].comentario,
      );
      JuegoValoracion4 = document.createTextNode(juego.Valoraciones[i].fecha);

      JuegoDivValoraciones.append(JuegoValoracion1);
      JuegoDivValoraciones.append(JuegoValoracion2);
      JuegoDivValoraciones.append(JuegoValoracion3);
      JuegoDivValoraciones.append(JuegoValoracion4);

      JuegoArticle.append(JuegoDivValoraciones);

      juegoSection.append(JuegoArticle);
    }

    principal.append(juegoSection);
  });
}
