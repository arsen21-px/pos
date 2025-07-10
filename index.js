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