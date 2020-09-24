/*
    Função de comparação fnComp
    - Recebe dois valores para comparação
    - Retorno:
        - true se o PRIMEIRO valor for MAIOR que segundo
        - false caso contrário
*/
function selectionSort(vetor, fnComp) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0

    // Função que encontra o menor valor em um segmento de vetor (subvetor)
    // A função deve retornar A POSIÇÃO do menor valor encontrado
    function encontrarMenor(vetor, inicio) {
        let posMenor = inicio
        for(let i = inicio + 1; i < vetor.length; i++) {
            //if(vetor[i] < vetor[posMenor]) posMenor = i
            if(! fnComp(vetor[i], vetor[posMenor])) posMenor = i
            comparacoes++
        }
        return posMenor
    }

    // O for externo vai até a PENÚLTIMA posição 
    for(i = 0; i < vetor.length - 1; i++) {
        passadas++
        
        // Busca-se o menor valor no restante do vetor
        posMenor = encontrarMenor(vetor, i + 1)
        
        // Caso o valor encontrado seja menor que o valor atual,
        // procede-se à troca
        comparacoes++
        //if(vetor[posMenor] < vetor[i]) {
        if(fnComp(vetor[i], vetor[posMenor])) { // Ordem dos argumentos invertida
            // Permuta de valores usando desestruturação
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas})
}

let candidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
selectionSort(candidatos, (x, y) => x.NM_CANDIDATO > y.NM_CANDIDATO)
console.timeEnd('Teste candidatos')
// Medindo a memória utilizada pelo programa
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log(candidatos)
console.log('Memória utilizada (MB):', memoria)
