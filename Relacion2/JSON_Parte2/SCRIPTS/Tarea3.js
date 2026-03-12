const boton = document.querySelector("button");

boton.addEventListener("click", generarTabla);

const datos = [
  { alumno: "Ana", nota1: 7, nota2: 9 },
  { alumno: "Luis", nota1: 8, nota2: 6 },
  { alumno: "Marta", nota1: 10, nota2: 9 },
];

function generarTabla() {
  const tabla = document.createElement("table");

  const encabezados = ["Alumno", "Nota 1", "Nota 2"];
  const filaEncabezado = document.createElement("tr");

  for (let i = 0; i < encabezados.length; i++) {
    const th = document.createElement("th");
    const texto = document.createTextNode(encabezados[i]);
    th.appendChild(texto);
    filaEncabezado.appendChild(th);
  }

  tabla.appendChild(filaEncabezado);

  for (let i = 0; i < datos.length; i++) {
    const fila = document.createElement("tr");

    const tdAlumno = document.createElement("td");
    const textoAlumno = document.createTextNode(datos[i].alumno);
    tdAlumno.appendChild(textoAlumno);
    fila.appendChild(tdAlumno);

    const tdNota1 = document.createElement("td");
    const textoNota1 = document.createTextNode(datos[i].nota1);
    tdNota1.appendChild(textoNota1);
    fila.appendChild(tdNota1);

    const tdNota2 = document.createElement("td");
    const textoNota2 = document.createTextNode(datos[i].nota2);
    tdNota2.appendChild(textoNota2);
    fila.appendChild(tdNota2);

    tabla.appendChild(fila);
  }

  tabla.setAttribute("border", "2");

  const contenedor = document.getElementById("contenedor");
  contenedor.appendChild(tabla);
}

// Código del Profe.

/*
  const datos = [
    { alumno: "Ana", nota1: 7, nota2: 9 },
    { alumno: "Luis", nota1: 8, nota2: 6 },
    { alumno: "Marta", nota1: 10, nota2: 9 },
  ];
  function generarTabla() {
    const tabla = document.createElement("table");
    const tbody = document.createElement("tbody");

    const row = document.createElement("tr");

    const cellHead1 = document.createElement("th");
    const cellHeadText1 = document.createTextNode("Alumno");

    const cellHead2 = document.createElement("th");
    const cellHeadText2 = document.createTextNode("Nota 1");

    const cellHead3 = document.createElement("th");
    const cellHeadText3 = document.createTextNode("Nota 2");

    cellHead1.appendChild(cellHeadText1);
    cellHead2.appendChild(cellHeadText2);
    cellHead3.appendChild(cellHeadText3);

    tbody.appendChild(row);

    datos.forEach((dato) => {
      const row = document.createElement("tr");

      for (let clave in dato) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(dato[clave]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }

      tbody.appendChild(row);
    });

    tabla.appendChild(tbody);
    tabla.setAttribute("border", "2");
  }
*/
