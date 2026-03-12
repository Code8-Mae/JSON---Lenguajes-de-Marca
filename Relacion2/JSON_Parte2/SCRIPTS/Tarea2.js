const input = document.querySelector("input");
const ul = document.querySelector("ul");
const boton = document.querySelector("button");

boton.addEventListener("click", agregarElemento);

function agregarElemento() {
  const tarea = document.createTextNode(input.value);

  if (tarea.textContent !== "") {
    const li = document.createElement("li");
    li.appendChild(tarea);
    ul.appendChild(li);
    input.value = "";
  }
}
