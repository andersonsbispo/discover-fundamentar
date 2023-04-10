// Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 0; i < 10; i++) {
    console.log(i);
}

for(let j = 100; j > 0; j--) {
    if(j === 50) {
        break;
    }
    console.log(j);
}

for(let k = 10; k > 0; k--) {
    if(k === 5) {
        continue;
    }
    console.log(k);
}