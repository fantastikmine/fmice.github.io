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
    .catch((error) => console.error("Error loading JSON data:", error));
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".menu-modal").classList.toggle("show");
});
