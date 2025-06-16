// Faça um programa que obtem o CEP a partir de um input e apresenta as informações:   
//     - Endereço
//     - DDD 
//     - Cidade 
//     - Estado 

// const obtemCep = async () => {
//     var input = document.getElementById("cepinput")
//     var cep = input.value;
//     input.value = '';
//     const result = await axios.get(`https://cep.awesomeapi.com.br/json/${cep}`);
//     console.dir(`Address = ${result.data.address}\nDDD = ${result.data.ddd}\nCidade = ${result.data.city}\nEstado = ${result.data.state}`);
// };

// obtemCep();

const obterCep = async () => {
    var resultdiv = document.getElementById('resultdiv');
    var input = document.getElementById('cepi');
    var cep = input.value; 
    input.value = '';
    const resultado = await axios.get(
        `https://cep.awesomeapi.com.br/json/${cep}`
    );
    alert(
        `Endereço = ${resultado.data.address}\nDDD = ${resultado.data.ddd}\nCidade = ${resultado.data.city}\nEstado = ${resultado.data.state}`
    );
    resultdiv.innerText = `Endereço = ${resultado.data.address}\nDDD = ${resultado.data.ddd}\nCidade = ${resultado.data.city}\nEstado = ${resultado.data.state}`;
};
  