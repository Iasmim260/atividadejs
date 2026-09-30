for (let i = 1; i <= 30; i++) {
    let tipo;

    if (i % 2 === 0) {
        tipo = "PAR";
    } else {
        tipo = "ÍMPAR";
    }

    if (i % 3 === 0) {
        console.log(i + " - " + tipo + " [Divisível por 3]");
    } else {
        console.log(i + " - " + tipo);
    }
}
