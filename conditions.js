const quantityText = "3";                       //хранит кол-во в виде текста!
const unitValue = 210;                          //хранит цену за 1 еденицу!
const extraValue = 50;                           //фиксированная добавка!
const itemName = "Мир ремёсел";
const isTraining = true;       


console.log("Название позиции:", itemName);
console.log("Количество (строка):", quantityText);
console.log("Величина на единицу:", unitValue);
console.log("Общая добавка:", extraValue);
console.log("Учебные данные:", isTraining);

function getResult(quantityText, unitAmount, extraAmount) {

  if (quantityText.trim() === "") {                                 //проверяет на пустоту, если пусто то покажет оишбку!
    return "Ошибка: укажите количество";
  }
  const quantity = Number(quantityText);                            //превращает теест в число!

  if (!Number.isFinite(quantity)) {                                 // убирает бесконечность и буквы!
    return "Ошибка: введите число";
  }
  if (quantity <= 0) {                                              // убирает 0 и отрицательное число, если 0 или - то покажет ошибку, введите положит. число!
    return "Ошибка: нужно положительное целое количество";
  }
  if (!Number.isInteger(quantity)) {                                //отсекает дробные числа!
    return "Ошибка: нужно положительное целое количество";
  }
  const totalAmount = unitAmount * quantity + extraAmount;          //подсчитывает итог, складывает и получаем сумму! 
  return "Итого: " + totalAmount;
}
                                                                        //вызывает функцию правильн. данными и выводит в консоль то что мы складывали 210 цена билета + кол-во билетов и * на фиксированную одноразовый сбор 50 рублей за экскурсию!
const resultMessage = getResult(quantityText, unitValue, extraValue);
console.log(resultMessage);

//Это грубо говоря мозг программы!
console.log("Одна единица:", getResult("1", unitValue, extraValue)); 

console.log("Три единицы:", getResult("3", unitValue, extraValue)); 

console.log("Пустое поле:", getResult("", unitValue, extraValue));

console.log("Только пробелы:", getResult("   ", unitValue, extraValue));

console.log("Слово:", getResult("два", unitValue, extraValue));

console.log("Бесконечность:", getResult("Infinity", unitValue, extraValue));

console.log("Ноль:", getResult("0", unitValue, extraValue));

console.log("Отрицательное:", getResult("-1", unitValue, extraValue));

console.log("Дробное:", getResult("1.5", unitValue, extraValue));

console.log("Пробелы вокруг числа:", getResult(" 2 ", unitValue, extraValue));

// Доп. тесты изменить цену или доставку, итог пересчитывается.
console.log("Цена больше на 10:", getResult("2", unitValue + 10, extraValue));

console.log("Доставка больше на 10:", getResult("2", unitValue, extraValue + 10));