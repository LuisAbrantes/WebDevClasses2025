const obtemCep = async (cep) => {
    const result = await axios.get(`https://cep.awesomeapi.com.br/json/${cep}`);
    console.dir(result);
};
obtemCep(12311230);
