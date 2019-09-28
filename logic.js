function Checkradiobutton() {

    if (document.getElementById("mod_u").checked) {
        document.getElementById("restriccion").disabled = true;
    } else {
        document.getElementById("restriccion").disabled = false;
        document.getElementById("restriccion").min = 2;
    }
}

function agregar_opcion(obj) {
    let texto = document.getElementById("opcion");
    if (texto.value != "") {
        var div_tarea = document.createElement("div");
        var eliminar = document.createElement("div");
        eliminar.innerHTML = "\u2717";
        eliminar.style.color = "red";
        eliminar.addEventListener("click", function() { eliminar_opcion(this); });
        div_tarea.appendChild(eliminar);
        div_tarea.appendChild(document.createTextNode(texto.value));
        var contenedor = document.getElementById("contenido");
        contenedor.appendChild(div_tarea);
        texto.value = "";
    }
}

function eliminar_opcion(obj) {
    let padre = obj.parentNode.parentNode;
    let tarea = obj.parentNode;
    padre.removeChild(tarea);
}

function obtener_configuracion() {
    var mod = []; 
    var enblanco, espublica;
    var descr = document.getElementById("descripinput").value;
    var op_contenedor = document.getElementById("contenido");
    var cantidad = document.getElementById("restriccion").value;
    var opciones = [];
    if(cantidad>op_contenedor.childNodes.length ){
        return alert("La cantidad de opciones no es congruente con la cantidad de opciones disponibles a marcar\n Por favor intente de nuevo")
    }
    if (op_contenedor.childNodes.length > 0) {
        for (i = 0; i < op_contenedor.childNodes.length; i++) {
            opciones.push(op_contenedor.childNodes[i].childNodes[1].textContent);
        }
    } else{
        return alert("Por favor agregue al menos 2 opciones")
    }


    if (descr == "") {
        descr = "DESCRIPCION NULA";
    }
    if (document.getElementById('mod_u').checked) {
        mod.push('única');
        mod.push(1);
    } else {
        mod.push('múltiple');
        mod.push(cantidad);        
    }

    if (document.getElementById('blanco_s').checked) {
        enblanco = true;
    } else {
        enblanco = false;
    }

    if (document.getElementById('publica_s').checked) {
        espublica = true;
    } else {
        espublica = false;
    }

    var config = {
        "descripcion": descr,
        "opciones": opciones,
        "modalidad": mod,
        "voto_en_blanco": enblanco,
        "votacion_publica": espublica
    };
    console.log(config);
    
    actualizar_votacion(config);

}

function actualizar_votacion(mijson) //aqui se recibe un json
{
    var votacion = document.getElementById("votacion");

    document.getElementById("mostrarDescr").innerHTML = mijson.descripcion;

    for (var i in mijson.opciones) {
        var votoOpcion = document.createElement("input");
        votoOpcion.type = "checkbox";
        votoOpcion.id = mijson.opciones[i];
        votoOpcion.value = mijson.opciones[i];
        var text = document.createTextNode(mijson.opciones[i]);
        votacion.appendChild(text);
        votacion.appendChild(votoOpcion);
    }
    if (mijson.voto_en_blanco != false) {
        var votoBlanco = document.createElement("input");
        votoBlanco.type = "checkbox";
        votoBlanco.id = "enBlanco";
        votoBlanco.value = "En blanco";
        var text_blanco = document.createTextNode("En blanco");
        votacion.appendChild(text_blanco);
        votacion.appendChild(votoBlanco);
    }

    if(mijson.votacion_publica!=true){
        document.getElementById("votacion").id = "votacion_priv";
    }

    //agregar masiel 
}

function votar() {
    //cuando "votar" verificar las opciones, al menos 1 select
    //si no mensaje d q seleccione algo

    //y de fijo  verificar modalidad y cantidad con lo seleccionado
    //si no mensaje de paso del límite
}