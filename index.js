const ul = document.getElementById("menuList");


const selectLi1 = document.createElement("li");
const select1 = document.createElement("select");
select1.id = "productSelect1";



const option1_1234 = document.createElement("option");
option1_1234.textContent = "Продукты";
const option1_2345 = document.createElement("option");
option1_2345.textContent = "Еда";
const option1_3456 = document.createElement("option");
option1_3456.textContent = "Мебель";
const option1_34567 = document.createElement("option");
option1_34567.textContent = "Ноутбуки";

select1.append(option1_1234, option1_2345, option1_3456,option1_34567);
selectLi1.appendChild(select1);
ul.appendChild(selectLi1);

const selectLi2 = document.createElement("li");
const select2 = document.createElement("select");
select2.id = "productSelect2";

const option2_umarchik = document.createElement("option");
option2_umarchik.textContent = "Типы бизнеса";
const option2_umar = document.createElement("option");
option2_umar.textContent = "Малый бизнес";
const option2_umka = document.createElement("option");
option2_umka.textContent = "Средний бизнес";
const option3_umka = document.createElement("option");
option3_umka.textContent = "Крупный бизнес";
select2.append(option2_umarchik, option2_umar, option2_umka,option3_umka);
selectLi2.appendChild(select2);
ul.appendChild(selectLi2);

// --- Постоянные li ---
const menuItems = ["Почему мы", "Цены", "Партнерам"];

menuItems.forEach((text) => {
  const li = document.createElement("li");
  li.classList.add("productText");
  li.textContent = text;
  ul.appendChild(li);
});
