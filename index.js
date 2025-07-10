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
