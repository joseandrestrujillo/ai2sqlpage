function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
function generador_numero_colores(){
    return random(255, 510);
}

function generador_numero(numero){
    return (Math.random() * numero);
}

function generar_color(){
    const percent_r = generador_numero(0.5);
    console.log(percent_r);
    const percent_b = generador_numero(1-percent_r);
    console.log(percent_b);
    const percent_g = 1-percent_r-percent_b
    console.log(percent_g);
    const cantidad = generador_numero_colores();
    console.log(cantidad);
    var coolor = "rgba("+(percent_r * cantidad).toFixed(0)+"," + (percent_g * cantidad).toFixed(0) + "," + (percent_b * cantidad).toFixed(0) +", 0.25)";
	return coolor;
}

function generar_array(datos){
    const array = [];
    datos.forEach(element => {
        array.push(generar_color())
    });
    return array;
}

const colorgenerado = generar_color();
console.log(colorgenerado);
const datosrec= [ 50, 80, 70, 65, 90 ];
const $grafica = document.querySelector("#grafica");
const etiquetas = [ "Lunes", "Martes", "Miercoles", "Jueves", "Viernes" ];//Eje x;
const datos = {
    label: "Trafico por dia de las semana",
    data: datosrec, //Eje y
    backgroundColor: generar_array(datosrec),
    borderColor: 'rgb(0,0,0)'
};

new Chart($grafica, {
    type:'pie',//Lineas: line, Barras:bar, Tartas: pie
    data: {
        labels: etiquetas,
        datasets: [
            datos,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }],
        },
    }
});