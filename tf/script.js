document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            const tableBody = document.getElementById("tent-data");
            data.forEach((item) => {
                const row = document.createElement("tr");
                row.innerHTML = 
                    <td>${item.tent}</td>
                    <td>${item.price_per_day}</td>
                    <td>${item.description}</td>
                    <td>${item.renter}</td>
                    <td>${item.available_from}</td>
                ;
                tableBody.appendChild(row);
            });
        })
        .catch((error) => console.error("Ошибка загрузки данных:", error));

    // Обработчик события прокрутки
    window.addEventListener("scroll", function () {
        const scrollProgress = document.getElementById("scrollProgress");
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progressHeight = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.height = progressHeight + "%"; // Изменяем высоту прогресса
    });

    // Toggle mobile menu
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}
