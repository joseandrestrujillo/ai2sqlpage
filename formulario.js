const $tabla = document.querySelector("#table-results");
const filas = $tabla.getElementsByTagName("tr");

const generate_form_chartjs = () => {   
    const columnas = filas[0].getElementsByTagName("th");

    const resultado = {};

    for (let i = 0; i < columnas.length; i++){
        resultado[columnas[i].textContent] = [];
        for (let j = 1; j < filas.length; j++){
            resultado[columnas[i].textContent].push(filas[j].getElementsByTagName("td")[i].textContent);
        }
    }
    return resultado
}


function updateForm() {
    const radios = document.getElementsByName('tipoGrafica');
    const selectDiv = document.getElementById('selectDiv');
    let selectedValue = '';
    for (const radio of radios) {
      if (radio.checked) {
        selectedValue = radio.value;
        break;
      }
    }

    if (selectedValue === 'Nada') {
        selectDiv.style.display = 'none';
        const canvas = document.getElementById('canvas')
        canvas.style.display = 'none'
    } else {
      selectDiv.style.display = 'block';
    }

    const res_obj = generate_form_chartjs()
    const select1 = document.getElementById('select1')
    const select2 = document.getElementById('select2')

    select1.innerHTML = ''
    select2.innerHTML = ''
    Object.keys(res_obj).forEach(key => {
        select1.innerHTML += '<option>' + key + '</option>'
        select2.innerHTML += '<option>' + key + '</option>'
    })
    
}