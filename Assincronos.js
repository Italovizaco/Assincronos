// Modelo de Callback com clearInterval para parar a execução.

let cont = 0
let interval
const teste = () => {
    cont++
    if (cont === 3) {
        clearInterval(interval)
    }
    console.log("Teste Assíncrono");
}
console.log("passo 1");
interval = setInterval(teste, 2000)
console.log("passo 2");

// Modelo de Promise: Representa um valor que pode estar disponível após o processamento.
// Pending(pendente) - Estado inicial que não foi realizada nem rejeitada, Fulfiled(realizada) - Sucesso na operação ou Rejected (rejeitado) - Falha na operação.


const api = async () => {
    return new Promise((resolve, reject) => {
        console.log("Passo Assync 1");
        setTimeout(() => {
            console.log("Passo Assync 2");
            resolve(200)
            // reject(-1)
        }, 2000);
    })
}
console.log("Passo 1");
api()
    .then((codigo) => {
        console.log("Código Sucesso = " + codigo);
    })
    .catch((codigo) => {
        console.log("Código Erro = " + codigo);
    })

console.log("Passo 2");
console.log("Passo 3");


// O Async e Await possuem a mesma função do Promise. O ponto positivo do async e await é que a forma de escrever o código é bem mais simples.
// O ponto negativo é que o controle de se ocorreu erro é muito melhor no Promises.
// Async faz uma função retornar um Promise. Await faz uma função esperar por uma Promise.

const iniciaConexao = async () => {
    console.log("Passo teste async 1");
    let info = await api("http://www.google.com");
    console.log("Passo teste async 2");
    console.log(info);
    if(info.status === 200) {
        //conexão OK
    }else{
        // Conexão Erro
    }
}

console.log("Passo 1");
iniciaConexao()
console.log("Passo 2");
console.log("Passo 3");