const $tabla = document.querySelector("#tabla_resultados");

const filas = $tabla.getElementsByTagName("tr");

console.log(filas);

const columnas = filas[0].getElementsByTagName("th");

console.log(columnas);

const resultado = {};

for (let i = 0; i < columnas.length; i++){
    resultado[columnas[i].textContent] =[];
    for (let j = 1; j < filas.length; j++){
        resultado[columnas[i].textContent].push(filas[j].getElementsByTagName("td")[i].textContent);
    }
}


console.log(resultado);