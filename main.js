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

const confirmBtn = document.querySelector(".confirm-btn");
const infoSection = document.querySelector(".info-section");
const form = document.querySelector('form');

const continueBtn = document.querySelector(".thanks-btn");

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

cardNumberInput.addEventListener('invalid', () => {
    cardNumberInput.classList.add('error');
    const inputId = cardNumberInput.id;
    const errorSpan = document.querySelector(`[data-js=${inputId}-error]`);

    if (cardNumberInput.value === '') {
        errorSpan.textContent = "Can't be blank";
    } else {
        errorSpan.textContent = 'Wrong format, numbers only';
    }
});

cardHolderInput.addEventListener('input', (e) => {
    cardHolderOutput.textContent = e.target.value.toUpperCase();
    if (e.target.value == '') {
        cardHolderOutput.textContent = 'JANE APPLESEED'
    }
});

cardHolderInput.addEventListener('invalid', () => {
    cardHolderInput.classList.add('error');
    const inputId = cardHolderInput.id;
    const errorSpan = document.querySelector(`[data-js=${inputId}-error]`);

    if (cardHolderInput.value === '') {
        errorSpan.textContent = "Can't be blank";
    } else {
        errorSpan.textContent = 'Wrong format, numbers only';
    }
})

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

cardMonthInput.addEventListener('invalid', () => {
    cardMonthInput.classList.add('error');
    const inputId = cardMonthInput.id;
    const errorSpan = document.querySelector(`[data-js=${inputId}-error]`);

    if (cardMonthInput.value === '') {
        errorSpan.textContent = "Can't be blank";
    } else {
        errorSpan.textContent = 'Wrong format, numbers only';
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

cardYearInput.addEventListener('invalid', () => {
    cardYearInput.classList.add('error');
    const inputId = cardMonthInput.id;
    const errorSpan = document.querySelector(`[data-js=${inputId}-error]`);

    if (cardMonthInput.value === '') {
        errorSpan.textContent = "Can't be blank";
    } else {
        errorSpan.textContent = 'Wrong format, numbers only';
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

cardCVCInput.addEventListener('invalid', () => {
    cardCVCInput.classList.add('error');
    const inputId = cardCVCInput.id;
    const errorSpan = document.querySelector(`[data-js=${inputId}-error]`);

    if (cardCVCInput.value === '') {
        errorSpan.textContent = "Can't be blank";
    } else {
        errorSpan.textContent = 'Wrong format, numbers only';
    }
});

confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (form.reportValidity()) {
        infoSection.classList.toggle('submitted');
    } else {
        form.classList.add('error');
    }
});

continueBtn.addEventListener('click', () => {
    form.classList.toggle('submitted');
    location.reload();
})