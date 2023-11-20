let temperatura = prompt("Ingresá la temperatura");

let temperaturaActual = document.getElementById("titulo");

temperaturaActual.innerText = `Temperatura actual ${temperatura}°`;

if(temperatura < 0){
    document.body.style.color = "blue";
}
else if(temperatura >= 0 && temperatura < 15){
    document.body.style.color = "lightblue";
}
else if(temperatura >= 15 && temperatura < 25){
    document.body.style.color = "green";
}
else if(temperatura >= 25 && temperatura < 30){
    document.body.style.color = "yellow";
}
else if(temperatura >= 30 && temperatura < 35){
    document.body.style.color = "orange";
}
else if(temperatura > 35){
    document.body.style.color = "red";
}
else{
    alert(`Ingresá una temperatura válida`)
}
