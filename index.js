console.log();


// js aikokul 
const bCards = document.querySelector(".b-cards")

const cards = [
    {
        icon: "./img/home.svg",
        name: "Торговый эквайринг",
        pText: "Когда клиент оплачивает счет через тап или пин код.",
        p2Text: "2.2% за транзакцию или 0.4% через СБП",
        bgColor: "#D9E1FF"
    },
    {
        icon: "./img/mobail.svg",
        name: "Мобильное <br/> приложение",
        pText: "Когда ваш клиент делает покупку через мобильное приложение в заведении или на доставку.",
        p2Text: "2.99% за транзакцию или 0.4% через СБП",
        bgColor: " rgba(244, 231, 246, 1)"
    },
    {
        icon: "./img/kart.svg",
        name: "Онлайн",
        pText: "Когда ваш клиент делает покупку через сайт на самовывоз или доставку.",
        p2Text: "2.99% за транзакцию или 0.4% через СБП",
        bgColor: "rgba(255, 233, 218, 1)"
    }
]

for (const c of cards) {
    bCards.innerHTML += `
            <div class="b-card" style="background-color: ${c.bgColor} ;">
                <div class="bg">
                    <img class="card-icon" src="${c.icon}" alt="">
                </div>
                <h3>${c.name}</h3>
                <p class="p1">${c.pText}</p>
                <p class="p2">${c.p2Text}</p>
            </div>
    `
}
// js aikokul  end 
// instrument-doni
const container = document.querySelector(".d-card-s");
const dinstrm = [
    {
        title: "Аналитика",
        description: "Специализированные отчеты в реальном времени - выручка, прибыл, фильтрация по категориям, движение товаров, учет затрат клиентов и акций",
        price: "0 ₽/мес"
    },
    {
        title: "Лояльность",
        description: "Удерживайте клиентов и увеличивайте ключевые метрики с удобной и простой системой лояльности",
        price: "0 ₽/мес"
    },
    {
        title: "Аналитика по товарам",
        description: "Узнайте как меняется цена у ваших поставщиков и как это влияет на вашу маржинальность Мы интегрируемая со всеми терминалами",
        price: "0 ₽/мес"
    },
    {
        title: "Роли и доступы",
        description: "Настраивайте удобные для вас роли и присваивайте их любым сотрудникам",
        price: "0 ₽/мес"
    },
    {
        title: "QR меню",
        description: "Запускайте онлайн меню и автоматически генерируйте QR код ",
        price: "0 ₽/мес"
    },
    {
        title: "Эквайринг и 3в1",
        description: "Мы интегрируемая со всеми терминалами на smart sale и aqsi",
        price: "0 ₽/мес"
    },
    {
        title: "Инвентаризация",
        description: "Удобная инвентаризация которую можно быстро провести",
        price: "0 ₽/мес"
    }
];

dinstrm.forEach(item => {
    const blog = document.createElement('div');
    blog.className = 'd-blog';
    blog.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <h3>${item.price}</h3>
    `;
    container.appendChild(blog);
});
// instrument-doni end
// umar start
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


const menuItems = ["Почему мы", "Цены", "Партнерам"];

menuItems.forEach((text) => {
  const li = document.createElement("li");
  li.classList.add("productText");
  li.textContent = text;
  ul.appendChild(li);
});


    // умар end