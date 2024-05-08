const taxasDeCambio = {
    "BRL": { "USD": 0.20, "EUR": 0.18, "GBP": 0.16, "JPY": 26.33, "BRL": 1 },
    "USD": { "BRL": 5, "EUR": 0.9, "GBP": 0.8, "JPY": 131.5, "USD": 1 },
    "EUR": { "BRL": 5.56, "USD": 1.11, "GBP": 0.89, "JPY": 146.27, "EUR": 1 },
    "GBP": { "BRL": 6.25, "USD": 1.25, "EUR": 1.12, "JPY": 164.29, "GBP": 1 },
    "JPY": { "BRL": 0.038, "USD": 0.0076, "EUR": 0.0068, "GBP": 0.0061, "JPY": 1 }
};

function converterMoeda() {
    const valor = document.getElementById('valor').value;
    const moedaOrigem = document.getElementById('moedaOrigem').value;
    const moedaDestino = document.getElementById('moedaDestino').value;
    const resultado = document.getElementById('resultado');

    if (!valor || isNaN(valor)) {
        resultado.textContent = 'Por favor, digite um valor numérico válido.';
        return;
    }

    const taxa = taxasDeCambio[moedaOrigem][moedaDestino];
    const valorConvertido = (valor * taxa).toFixed(2);

    resultado.textContent = `${valor} ${moedaOrigem} equivale a ${valorConvertido} ${moedaDestino} com taxa de câmbio de ${taxa}.`;
}

document.getElementById('valor').addEventListener('input', function() {
    document.getElementById('resultado').textContent = '';
});
