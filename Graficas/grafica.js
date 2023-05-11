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

function generar_datos(eje_y){
    return {
        data: eje_y, //Eje y
        backgroundColor: 'rgba(255,206,26,0.25)',
        borderColor: 'rgb(255,206,26,)'
    };
}

function generar_datos_pie(eje_y){
    return {
        data: eje_y, //Eje y
        backgroundColor: generar_array(eje_y),
        borderColor: 'rgb(0,0,0)'
    };
}

function graficos(tipo, eje_x, eje_y){
    const $grafica = document.querySelector("#grafica");
    const etiquetas = eje_x;//Eje x;
    const datos = type == 'pie' ? generar_datos_pie(eje_y) : generar_datos(eje_y);

    new Chart($grafica, {
        type:tipo,//Lineas: line, Barras:bar, Tartas: pie
        data: {
            labels: etiquetas,//eje_x
            datasets: [
                datos,//eje_y
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
}