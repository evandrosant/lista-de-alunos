let numeroDeAlunos = 10;

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    console.log(contador);
    
    if (contador === 0) {
        console.log("o numero atual é ZERO");
    } else if (contador % 2 == 0) {
        console.log("o numero " + contador + " é PAR")
    } else {
        console.log("o numero " + contador + " é IMPAR")
    }
}

    let listaDeAluno = ["marcela", "pedro", "julio", "ana"]

    for (const aluno of listaDeAluno) {
        console.log(aluno);
}