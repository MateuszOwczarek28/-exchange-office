{
    const welcome = () => {
        console.log("Witam serdecznie w moim kantorze");
    }
    welcome()

    const plnElement = document.querySelector(".js-PLN");
    const formElement = document.querySelector(".js-form");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    const onForSubmit = (event) => {
        event.preventDefault();

        const amount = plnElement.value;
        const currency = currencyElement.value;

        const result = amount / currency;

        resultElement.innerText = result.toFixed(2);
    }

    formElement.addEventListener("submit", onForSubmit);


}
