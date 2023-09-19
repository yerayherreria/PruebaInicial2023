function anniadir() {
    let newFila=document.createElement("tr");
    let c1=document.createElement("td");
    let c2=document.createElement("td");
    let c3=document.createElement("td");
    let c4=document.createElement("td");
    
    let nume = document.createTextNode(document.getElementsByTagName("tr").length-1);
    
    c1.appendChild(nume);
    newFila.appendChild(c1);
    
    let nomb=document.getElementById("nombre").value; 
    let apell =document.getElementById("apellido").value;
    let dni =document.getElementById("dni").value;
   
    if (nomb!="" && apell!="" && dni!="") {
        //Añadir nombre
        let nomb1=document.createTextNode(nomb);
        c2.appendChild(nomb1);
        newFila.appendChild(c2);
        //Añadir apellido
        let apell2 = document.createTextNode(apell);
        c3.appendChild(apell2);
        newFila.appendChild(c3);
        //Añadir DNI
        let dni2 = document.createTextNode(dni);
        c4.appendChild(dni2);
        newFila.appendChild(c4);

        let tabla=document.getElementById("tablaCont");
        tabla.appendChild(newFila);
    } else {
        alert("Datos no válido.");
    }

}

function borrarFila() {
    const num =[1,2,3,4,5,6,7,8,9,0];
    let numF=document.getElementById("numero").value;
    
    if (num.includes(parseInt(numF))){
        numF = parseInt(numF)+1;
        let aborrar=document.getElementsByTagName("tr")[numF];
        aborrar.remove();
    } else {
        alert("Dato no válido.");
    }
}