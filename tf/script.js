document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("tent-data");
    const loadingMessage = document.createElement("p");
    loadingMessage.textContent = "Загрузка палаток...";
    loadingMessage.style.color = "#bfbfbf"; // Grey text for loading message
    tableBody.appendChild(loadingMessage);

    fetch("data.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Ошибка сети");
            }
            return response.json();
        })
        .then((data) => {
            tableBody.innerHTML = ''; // Clear loading message
            data.forEach((item) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.tent}</td>
                    <td>${item.price_per_day}</td>
                    <td>${item.description}</td>
                    <td>${item.renter}</td>
                    <td>${item.available_from}</td>
                    <td><button class="reserve-button" data-tent="${item.tent}">Забронировать</button></td>
                `;
                tableBody.appendChild(row);
            });
            addReservationListeners(); // Call function to add listeners to buttons
        })
        .catch((error) => {
            console.error("Ошибка загрузки данных:", error);
            tableBody.innerHTML = "<tr><td colspan='6' class='error-message'>Ошибка загрузки палаток. Пожалуйста, попробуйте позже.</td></tr>";
        });

    // Scroll progress
    window.addEventListener("scroll", function () {
        const scrollProgress = document.getElementById("scrollProgress");
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progressHeight = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.height = progressHeight + "%";
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.add("open");
    });

    closeMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
    });
});

// Function to add reservation listeners
function addReservationListeners() {
    const buttons = document.querySelectorAll(".reserve-button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const tentName = this.dataset.tent;
            alert(`Вы забронировали палатку: ${tentName}`);
            // Here you would add logic to actually reserve the tent, possibly with another fetch request
        });
    });
}
