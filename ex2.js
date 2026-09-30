const valorCompra = 150;

let desconto;

if (valorCompra >= 200) {
    desconto = 0.15;
} else if (valorCompra >= 100 && valorCompra < 200) {
    desconto = 0.10;
} else {
    desconto = 0;
}

const valorDesconto = valorCompra * desconto;
const valorFinal = valorCompra - valorDesconto;

console.log("Valor original: R$ " + valorCompra.toFixed(2));
console.log("Valor do desconto: R$ " + valorDesconto.toFixed(2));
console.log("Valor final a pagar: R$ " + valorFinal.toFixed(2));