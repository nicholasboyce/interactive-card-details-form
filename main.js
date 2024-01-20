const cardNumberInput = document.querySelector("#card-number");
const cardNumberOutput = document.querySelector("[data-js=card-number]");

const cardHolderInput = document.querySelector("#cardholder");
const cardHolderOutput = document.querySelector("[data-js=cardholder]");

cardNumberInput.addEventListener('input', (e) => {
    cardNumberOutput.textContent = e.target.value;
    if (e.target.value == '') {
        cardNumberOutput.textContent = '0000 0000 0000 0000'
    }
});

cardHolderInput.addEventListener('input', (e) => {
    cardHolderOutput.textContent = e.target.value.toUpperCase();
    if (e.target.value == '') {
        cardHolderOutput.textContent = 'JANE APPLESEED'
    }
})