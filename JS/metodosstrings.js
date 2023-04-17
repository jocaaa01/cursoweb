console.log(part);
part = texto.slice(-12, -6); //Banana (del -12 al -6 no incluido)
console.log(part);

//Substring método
let str = "Manzana, Plátano, Kiwi";
document.getElementById("subs").innerHTML = str.substring(9, 16);
console.log(str);
document.getElementById("subs").innerHTML = str.substring(9, 16);
console.log(str);

//Método replace()

function reemplaza() {
    let textoReemplazable = document.getElementById("replace").innerHTML;
    document.getElementById("replace").innerHTML = textoReemplazable.replace("Lorem", "INARANDOMPLACE");
}