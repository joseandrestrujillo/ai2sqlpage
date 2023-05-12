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
    var coolor = "rgba("+(percent_r * cantidad).toFixed(0)+"," + (percent_g * cantidad).toFixed(0) + "," + (percent_b * cantidad).toFixed(0) +", 0.8)";
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
        backgroundColor: 'rgba(255,206,26,0.8)',
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
    const $grafica = document.querySelector("#grafica-canvas");
    const etiquetas = eje_x;//Eje x;
    const datos = tipo == 'pie' ? generar_datos_pie(eje_y) : generar_datos(eje_y);

    $grafica.innerHTML = ''
    
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

const chartBtn = document.getElementById('generateChart')

chartBtn.onclick = (e) => {
    e.preventDefault()
    const canvas = document.getElementById('canvas')
    canvas.style.display = 'block'
    canvas.innerHTML = ''
    canvas.innerHTML = '<canvas id="grafica-canvas"></canvas>'
    const radios = document.getElementsByName('tipoGrafica');
    let selectedValue = '';
    for (const radio of radios) {
      if (radio.checked) {
        selectedValue = radio.value;
        break;
      }
    }

    const res_obj = generate_form_chartjs()
    const select1 = document.getElementById('select1')
    const select2 = document.getElementById('select2')
    
    
    graficos(selectedValue, res_obj[select1.value], res_obj[select2.value])

}