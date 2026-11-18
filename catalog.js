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



const catalog = [
  {
    position: 1,
    name: "Мир ремёсел",
    specs: "Традиции · 2-й зал",
    description: "Инструменты и изделия местных мастеров"
  },
  {
    position: 2,
    name: "Свет и цвет",
    specs: "Живопись · 3-й зал",
    description: "Пейзажи и работы современных художников"
  },
  {
    position: 3,
    name: "Старый город",
    specs: "История · 1-й зал",
    description: "Карты, фотографии и городские истории"
  }
];

function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();

  if (normalized === "") {
    return items;
  }

  return items.filter(item => item.name.toLowerCase().includes(normalized));
}


const catSelectedName = "Мир ремёсел";
const catQuantityText = "3";
const catUnitValue = 210;
const catExtraValue = 50;

let foundCount = 0;

console.log("Записей:", catalog.length);


for (const item of catalog) {

  console.log(item.position + ". " + item.name);
  console.log("Характеристика:", item.specs);
  console.log("Описание:", item.description);

  if (item.name === catSelectedName) {
    foundCount = foundCount + 1;
    console.log("Выбрано для расчёта:", item.name);
    const message = getResult(catQuantityText, catUnitValue, catExtraValue);
    console.log(message);
    console.log("Единица расчёта: усл. руб.");
  }
}

console.log("Найдено записей:", foundCount);
if (foundCount === 0) {
  console.log("Запись не найдена:", catSelectedName);
}
if (foundCount > 1) {
  console.log("Проверьте повторяющиеся названия");
}

console.table(catalog);
console.log(catalog.length);

const names = catalog.map(item => item.name);
console.log(names);

const longNames = catalog.filter(item => item.name.length > 8);
console.log(longNames.length);

const searchName = "Свет и цвет";
const found = catalog.find(item => item.name === searchName);
console.log(found);

if (found) {
  console.log(found.specs);
} else {
  console.log("Запись не найдена");
}

console.log(filterByText(catalog, "").length);
console.log(filterByText(catalog, "Мир"));
console.log(filterByText(catalog, "  СТАРЫЙ  "));
console.log(filterByText(catalog, "нет такой записи").length);
console.log(filterByText(catalog, "ремёсл"));
console.log(filterByText(catalog, "цвет"));
console.log(filterByText(catalog, "  ЦВЕТ  "));


//Число записей в абзац #status
const statusEl = document.querySelector("#status");

if (statusEl) {
  statusEl.textContent = catalog[0].name + " — " + catalog.length + " записей";
}


const namesList = document.querySelector("#names");

let clicks = 0;

function renderNames() {
  if (!namesList) return;

  namesList.replaceChildren();

  for (const item of catalog) {
    const line = document.createElement("li");
    line.textContent = item.name;
    namesList.append(line);
  }

  clicks++;
  if (statusEl) {
    statusEl.textContent =
      "Список показан. Нажатий: " + clicks +
      " · Записей в каталоге: " + catalog.length;
  }
}

const showButton = document.querySelector("#show-names");
const hideButton = document.querySelector("#hide-names");

if (showButton) {
  showButton.addEventListener("click", renderNames);
}

if (hideButton) {
  hideButton.addEventListener("click", function () {
    if (namesList) namesList.replaceChildren();
    if (statusEl) {
      statusEl.textContent = "Список скрыт. Записей в каталоге: " + catalog.length;
    }
  });
}

if (statusEl) {
  console.log("Абзацев на странице: " + document.querySelectorAll("p").length);
}