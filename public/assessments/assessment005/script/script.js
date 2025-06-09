// 1. Campo de edição embutida nas tarefas;
//    a) Ao clicar em Editar, a tarefa vira um <input> com botão de Salvar.
//    b) O valor antigo da tarefa deve aparecer no campo.
 
// 2. Validação do formulário
//    a) Impedir que a tarefa seja adicionada se o campo estiver vazio.
//    b) Mostrar uma mensagem de ERRO!
 
// 3. Mensagem de confirmação
//    a) Exibir uma mensagem de "Tarefa adicionada com sucesso!" abaixo do formulário, por alguns segundos (setTimeout())
 
// 4. Contador de tarefas
//    a) Exibir dinamicamente a quantidade total de tarefas e a quantidade de tarefas concluídas.
 

var button = document.getElementById('addbutton');
var listodo = [];
var c = 0;
var motherbox = document.getElementById('listodo');

function showErrorMessage() {
    var errorDiv = document.getElementById('error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'error-message';
        errorDiv.style.color = 'red';
        errorDiv.style.fontWeight = 'bold';
        document.querySelector('div').appendChild(errorDiv);
    }
    errorDiv.textContent = 'ERRO! Por favor, insira uma tarefa.';
    setTimeout(function() {
        errorDiv.textContent = '';
    }, 3000);
}

function showSuccessMessage() {
    var successDiv = document.getElementById('success-message');
    if (!successDiv) {
        successDiv = document.createElement('div');
        successDiv.id = 'success-message';
        successDiv.style.color = 'green';
        successDiv.style.fontWeight = 'bold';
        document.querySelector('div').appendChild(successDiv);
    }
    successDiv.textContent = 'Tarefa adicionada com sucesso!';
    setTimeout(function() {
        successDiv.textContent = '';
    }, 3000);
}

function updateTaskCounter() {
    var total = listodo.length;
    var completed = 0;
    
    for (var i = 0; i < total; i++) {
        var checkId = 'check' + i;
        var checkbox = document.getElementById(checkId);
        if (checkbox && checkbox.checked) {
            completed++;
        }
    }
    
    var counterDiv = document.getElementById('task-counter');
    if (!counterDiv) {
        counterDiv = document.createElement('div');
        counterDiv.id = 'task-counter';
        counterDiv.style.fontWeight = 'bold';
        counterDiv.style.margin = '10px 0';
        document.querySelector('div').appendChild(counterDiv);
    }
    counterDiv.textContent = `Total de tarefas: ${total} | Concluídas: ${completed}`;
}

button.addEventListener('click', function () {
    var input = document.getElementById('input');
    var todo = input.value.trim();
    var html = '';
    if (todo === '') {
        showErrorMessage();
        return;
    } else {        listodo.push(`
            <div class="todobox" id="box${c}">
                <h1>${todo}</h1>
                <p>Complete :</p>
                <input type="checkbox" id="check${c}" onclick="Complete('box${c}','check${c}')"/>
                <button class="editbtn" onclick="inputnow('box${c}')">Edit</button>
              </div>
            `);
        showSuccessMessage();
    }

    for (var i = 0; i < listodo.length; i++) {
        html += listodo[i];
    }
    input.value = '';
    motherbox.innerHTML = html;
    c++;
    updateTaskCounter();
});

function Complete(box, check) {
    var checked = document.getElementById(check);
    var boxx = document.getElementById(box);
    if (checked.checked) {
        boxx.style.backgroundColor = '#008000';
        boxx.style.color = 'white';
    } else {
        boxx.style.color = 'black';
        boxx.style.backgroundColor = '#f4f4f4';
    }
}

var modo = document.getElementById('modo');
modo.addEventListener('click', function () {
    var body = document.body;
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = 'black';
        modo.innerHTML = 'Dark Mode';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        modo.innerHTML = 'Light Mode';
    }
});

function inputnow(id) {
    var div = document.getElementById(id);
    div.innerHTML = `
  <form>
    <input placeholder="TESTE" id="input${id}" class="inputbnt">
    <button id="addbutton" onclick="newvalue('${id}')">Save</button>
  </form>
    `;
}

function newvalue(id) {
    var div = document.getElementById('listodo');
    var input = document.getElementById(`input${id}`);
    div.innerHTML = `
              <div class="todobox" id="box${c}">
                <h1>${input.value}</h1>
                <p>Complete :</p>
                <input type="checkbox" id="check${c}"onclick="Complete('box${c}','check${c}')"/>
                <button class="editbtn" onclick="inputnow('box${c}')">Edit</button>
              </div>
  `;
    console.log('FUNTIONOU');

    c++;
}

function inputnow(id) {
    var div = document.getElementById(id);
    var currentTask = div.querySelector('h1').textContent;
    div.innerHTML = `
  <form>
    <input placeholder="TESTE" id="input${id}" class="inputbnt" value="${currentTask}">
    <button id="addbutton" onclick="newvalue('${id}')">Save</button>
  </form>
    `;
}