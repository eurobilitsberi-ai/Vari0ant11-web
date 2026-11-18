//Константы расчёта из conditions.js
const unitValue = 210;
const extraValue = 50;

function getResult(quantityText, unitAmount, extraAmount) {
  if (quantityText.trim() === "") {
    return "Ошибка: укажите количество";
  }
  const quantity = Number(quantityText);

  if (!Number.isFinite(quantity)) {
    return "Ошибка: введите число";
  }

  if (quantity <= 0 || !Number.isInteger(quantity)) {
    return "Ошибка: нужно положительное целое количество";
  }

  const totalAmount = unitAmount * quantity + extraAmount;
  return "Итого: " + totalAmount;
}


// Ссылки на элементы
const form = document.querySelector("form");
const result = document.querySelector("#result");

// Счётчик отправок
let submitCount = 0;

// Обработчик отправки
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const quantityText = document.querySelector("#quantity").value;
    
  const select = document.querySelector("#item");
  const itemName = select.options[select.selectedIndex].text;

  
  const message = getResult(quantityText, unitValue, extraValue);
    console.log(message);
  submitCount = submitCount + 1;
  result.textContent = "Проверка " + submitCount + ". " + itemName + ". " + message;
});