// Definindo nove 'Promisse' 
const novaPromise = new Promise((resolve, reject) => {
   let condicao = 'teste';
    if(!condicao === 'teste'){
        setTimeout(() => {
            resolve({nome: 'Gustavo', 
                idade: 23, 
                mensagem: 'Isso é um teste'});
        }, 1500)
    }else {
        reject(Error('Condição não atingida'));
    }
});

novaPromise.then((resolve) => {
    console.log(resolve);
}).catch((reject) => {
    console.log(reject);
})


// ===================================================================

const login = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Login Realizado com Sucesso!!');
    }, 1500);
});

const dados = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Dados carregos com sucesso!!');
    });
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then((respostas) => {
    respostas.forEach(e => {
        console.log('Resposta: ' + e);
    });
});

// ===================================================================

// then().then()
// O método 'then()' retorna outra Promisse.
// Podemos colocar 'then()' após 'then()' e fazer um encadeamento de promessas.
// O valor do primeiro argumento de cada 'then', será o valor do retorno anterior.

const promessa = new Promise((resolve, reject) => {
    resolve('Etapa 1');
});

promessa.then((resolucao) => {
    console.log(resolucao); // 'Etapa 1'
    return 'Etapa 2';
}).then(resolucao => {
    console.log(resolucao) // 'Etapa 2'
    return 'Etapa 3';
}).then((r) => {
    r + 4;
}).then((r) => {
    console.log(r); // 'Etapa 34'
});




// ===================================================================