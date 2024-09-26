document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json") // Update with the path to your JSON file
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector(".tent-list tbody");
      tableBody.innerHTML = ""; // Clear existing rows

      data.forEach((item) => {
        const row = document.createElement("tr");

        row.innerHTML = `
                    <td>${item.tent}</td>
                    <td>${item.price_per_day}</td>
                    <td>${item.description}</td>
                    <td>
                        ${item.renter}
                        ${item.renter_image ? `<img src="${item.renter_image}" alt="Renter Image" class="renter-image">` : ""}
                    </td>
                    <td>${item.available_from}</td>
                `;

        tableBody.appendChild(row);
      });
    })

            // Обработчик события прокрутки
            window.addEventListener("scroll", function () {
                const scrollProgress =
                    document.getElementById("scrollProgress");
                const totalHeight =
                    document.body.scrollHeight - window.innerHeight;
                const progressHeight = (window.scrollY / totalHeight) * 100;
                scrollProgress.style.height = progressHeight + "%"; // Изменяем высоту прогресса
            });
