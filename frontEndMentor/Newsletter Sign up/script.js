AOS.init();

let buttonSubscribe = document.querySelector("#subscribe");
let isValid = document.querySelector("#isValid");
let subscribe = document.querySelector("#thanks");
let container = document.querySelector("#container");
let successMessage = document.querySelector("#success");
let currentEmail = document.querySelector("#currentEmail");
buttonSubscribe.addEventListener("click", showInputValue);

function showInputValue() {
  let inputElement = document.querySelector("#err");
  let inputValue = inputElement.value;
  console.log(String(inputValue).length);
  if (
    !String(inputValue).endsWith("@gmail.com") ||
    String(inputValue).length < 14
  ) {
    inputElement.classList.toggle("error");
    isValid.classList.toggle("shown");
  } else {
    inputElement.classList.remove("error");
    isValid.classList.remove("shown");

    container.classList.add("hidden");
    subscribe.classList.remove("hidden");

    currentEmail.textContent = String(inputValue);
    currentEmail.classList.add("bold");
  }
}
subscribe.addEventListener("click", returnToPrevPage);
function returnToPrevPage() {
  container.classList.remove("hidden");
}
