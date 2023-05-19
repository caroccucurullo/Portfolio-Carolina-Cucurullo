//FUNCION FILTRO DE CATEGORIAS
function verCategoria() {
    const todos = document.getElementsByClassName("todos");
    for (let i = 0; i < todos.length; i++) {
        todos[i].style.display = "none";
    }
    const categoria = document.getElementsByClassName(cat);
        for (let i = 0; i < categoria.length; i++) {
            categoria[i].style.display = "block";
        }

    const links = document.querySelectorAll(".proyectos categorias a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "activo";

}

