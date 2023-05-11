var mic = document.getElementById("mic");
mic.onclick = function(e) {
    e.preventDefault()
    const words = document.querySelector('#text');


    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "es-ES";

    let p = document.createElement('p');
    words.appendChild(p);

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

        if(e.results[0].isFinal) {
            words.value += transcript;
        }
    });

    // recognition.addEventListener('end', recognition.start);

    recognition.start();
}


function generateTable(data) {
    let table = '<tr class="table-header">';
  
    for (let column in data) {
      if (data.hasOwnProperty(column)) {
        table += `<th class="header-th">${column}</th>`;
      }
    }
    table += '</tr>';
  
    for (let i = 0; i < Object.values(data)[0].length; i++) {
      table += '<tr class="table-body">';
  
      for (let column in data) {
        if (data.hasOwnProperty(column)) {
          table += `<td class="body-td">${data[column][i]}</td>`;
        }
      }
  
      table += '</tr>';
    }
  
    return table;
}

var submit = document.getElementById("submit");
submit.onclick = function(e) {
    e.preventDefault()
    const promptString = document.querySelector('#text').value;

    const url = 'https://f2w7pqyrsl.execute-api.eu-west-3.amazonaws.com/e';
    const data = { prompt: promptString };
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const $waiting = document.getElementById("waiting")
    const $table = document.getElementById("table-results")
    const $graficas = document.getElementById("graficas")
    $table.innerHTML = ''
    $waiting.style.display = 'block'
    $graficas.style.display = 'none'
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            const table = generateTable(data.res)
            $waiting.style.display = 'none'
            $graficas.style.display = 'block'
            $table.innerHTML = table
        })
        .catch(error => console.error(error));

}