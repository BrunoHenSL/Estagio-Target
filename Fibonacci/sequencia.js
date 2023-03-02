function fibonacci(limite){
    let numb1 = 0;
    let numb2 = 1;
    let proximo;

    while (numb2 <= limite){
        proximo = numb1 + numb2;
        numb1 = numb2;
        numb2 = proximo;
    }

    return numb2 === limite || numb1 === limite;
}

const numero = parseInt(prompt("informe um número:"));

if(fibonacci(numero)){
    alert(numero + " pertence à sequência de Fibonacci.");
} else{
    alert(numero + " não pertence à sequência.");
}

