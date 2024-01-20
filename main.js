const cardNumberInput = document.querySelector("#card-number");
const cardNumberOutput = document.querySelector("[data-js=card-number]");

const cardHolderInput = document.querySelector("#cardholder");
const cardHolderOutput = document.querySelector("[data-js=cardholder]");

const cardMonthInput = document.querySelector("#month");
const cardMonthOutput = document.querySelector("[data-js=card-month");

const cardYearInput = document.querySelector("#year");
const cardYearOutput = document.querySelector("[data-js=card-year");

const cardCVCInput = document.querySelector("#cvc");
const cardCVCOutput = document.querySelector("[data-js=card-cvc");

cardNumberInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replaceAll(" ", "").split("").reduce((seed, next, index) => {
        if (index !== 0 && !(index % 4)) seed += " ";
        return seed + next;
      }, "");
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
});

cardMonthInput.addEventListener('input', (e) => {
    let setText = '';
    if (e.target.value.length < 2) {
        setText = setText.concat('0', e.target.value);
    } else {
        setText = e.target.value;
    }
    cardMonthOutput.textContent = setText;
    if (e.target.value == '') {
        cardMonthOutput.textContent = '00';
    }
});

cardYearInput.addEventListener('input', (e) => {
    let setText = '';
    if (e.target.value.length < 2) {
        setText = setText.concat('0', e.target.value);
    } else {
        setText = e.target.value;
    }
    cardYearOutput.textContent = setText;
    if (e.target.value == '') {
        cardYearOutput.textContent = '00';
    }
});

cardCVCInput.addEventListener('input', (e) => {
    let setText = '';
    if (e.target.value.length < 3) {
        setText = setText.concat('0', e.target.value);
    } else {
        setText = e.target.value;
    }
    cardCVCOutput.textContent = setText;
    if (e.target.value == '') {
        cardCVCOutput.textContent = '000';
    }
});