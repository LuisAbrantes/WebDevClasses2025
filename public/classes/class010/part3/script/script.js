/*
Faça um programa com funções e arrays que implementam uma agenda que armazena eventos. Utilizar estrutura de repetição.
Siga os requisitos:
* inserção de eventos; 
* leitura de eventos;
* edição 

* Eventos:
*   Descroção;
*   data;
*   local.
*/
// repetição

let agenda = [];

// Insert event function
function insertEvent() {
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let local = document.getElementById('local').value;
    agenda.push({ description, date, local });
}

// List event function
function listEvent() {
    let output = '';
    let c = 0;
    while (c < agenda.length) {
        output += `Event ${c + 1}:\n`;
        output += `Description: ${agenda[c].description}\n`;
        output += `Date: ${agenda[c].date}\n`;
        output += `Local: ${agenda[c].local}\n\n`;
        c++;
    }

    listResult.innerText = output;
}

// Edit event function

// listeners
let insertButton = document.getElementById('insertButton');
let readButton = document.getElementById('readButton');
let editButton = document.getElementById('editButton');
let listResult = document.getElementById('listResult');
