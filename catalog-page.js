const catalog = [ // Массив каталога
  {
    position: 1,
    name: "Государственный Эрмитаж",
    specs: "Сокровищница · Иорданская лестница",
    description: "Парадные залы, Леонардо да Винчи, Рембрандт, Георгиевский тронный зал, Лоджии Рафаэля и Древнеегипетский зал.",
    image: "images/mountains.png",
    link: "item.html"
  },
  {
    position: 2,
    name: "Русский музей",
    specs: "Живопись · От икон до авангарда",
    description: "Древнерусские иконы XII–XVII веков, XVIII век, «Последний день Помпеи» Брюллова и раздел второй половины XIX века.",
    image: "images/mountain.png",
    link: "item2.html"
  },
  {
    position: 3,
    name: "Исаакиевский собор",
    specs: "Архитектура · 262 ступени",
    description: "Скульптуры на фасадах, мозаики и 176 живописных работ, подъём на колоннаду ради лучшего вида на город.",
    image: "images/mountain1.png",
    link: "item3.html"
  },
  {
    position: 4,
    name: "Казанский собор",
    specs: "Воинская слава · Могила Кутузова",
    description: "Колоннада из 96 колонн, Казанская икона Божией Матери, могила фельдмаршала М. И. Кутузова и трофеи войны 1812 года.",
    image: "images/mountain2.png",
    link: "item4.html"
  },
  {
    position: 5,
    name: "Ново-Иерусалимский монастырь",
    specs: "История · Патриарх Никон",
    description: "Основан в 1656 году. Царь Алексей Михайлович назвал монастырь «Новым Иерусалимом». История строительства и трагическая судьба Патриарха Никона.",
    image: "images/non1.png",
    link: "item5.html"
  }
];
// Фильтр
function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();

  if (normalized === "") {
    return items;
  }

  return items.filter(item => item.name.toLowerCase().includes(normalized));
}

// Элементы страницы
const catalogList = document.querySelector("#catalog-list");
const statusText = document.querySelector("#status");
                                            // Рендер карточек
function renderCatalog(items) {
  catalogList.replaceChildren();

  for (const item of items) {
    const card = document.createElement("article");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = item.name;

    const specs = document.createElement("p");
    specs.textContent = item.specs;

    const description = document.createElement("p");
    description.textContent = item.description;

    card.append(title, specs, description);
                                        // Картинка (если есть)
    if (item.image) {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      img.width = 240;
      card.append(img);
    }
                                    // Ссылка Подробнее
    if (item.link) {
      const linkP = document.createElement("p");
      const link = document.createElement("a");
      link.href = item.link;
      link.textContent = "Подробнее →";
      link.style.color = "#176B64";
      link.style.fontWeight = "bold";
      link.style.textDecoration = "none";
      linkP.append(link);
      card.append(linkP);
    }

    catalogList.append(card);
  }

  if (items.length === 0) {
    statusText.textContent = "Ничего не найдено :(";
  } else {
    statusText.textContent = "Показано: " + items.length + " из " + catalog.length;
  }
}
//Первый вывод — весь каталог
renderCatalog(catalog);

                    // Поиск
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", function () {
  const found = filterByText(catalog, searchInput.value);
  renderCatalog(found);
});