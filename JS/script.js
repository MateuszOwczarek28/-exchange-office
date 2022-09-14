let plnElement = document.querySelector(".js-PLN");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");



formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = plnElement.value;
    let currency = currencyElement.value;

    let result = amount / currency;

    resultElement.innerText = result.toFixed(2);
});