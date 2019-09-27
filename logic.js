function agregar_opcion(obj)
{
    let texto=document.getElementById("opcion");
    if (texto.value!="")
    {
        var div_tarea=document.createElement("div");
        var eliminar=document.createElement("div");
        eliminar.innerHTML="\u2717";
        eliminar.style.color="red";
        eliminar.addEventListener("click",function () {eliminarTarea(obj);});
        div_tarea.appendChild(eliminar);
        div_tarea.appendChild(document.createTextNode(texto.value))
        var contenedor=document.getElementById("contenido");
        contenedor.appendChild(div_tarea);
        texto.value="";
    }
}
function eliminarTarea(obj)
{
    let padre=obj.parentNode.parentNode;
    let tarea=obj.parentNode;
    padre.removeChild(tarea);      
}   