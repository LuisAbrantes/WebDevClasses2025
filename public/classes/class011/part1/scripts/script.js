// conteudo da aula:
// em js, eh possivel receber uma funcao em uma variavel.

let rolaDado = function () {
    let dado = Math.floor(Math.random() * 6) + 1;
    console.log(dado);
};

let chamaDuasVezes = function (func) {
    //ou let chamaDuasVezes = (func)=> {
    func();
    func();
};

chamaDuasVezes(rolaDado);
