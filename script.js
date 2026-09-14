const reservations = [
  { name: "Kim", room: "Single", price: 12000, status: "confirmed" },
  { name: "Tanaka", room: "Double", price: 15000, status: "confirmed" },
  { name: "Lee", room: "Single", price: 10000, status: "cancelled" },
  { name: "Park", room: "Suite", price: 22000, status: "confirmed" }
];

const search = document.querySelector("#search-input");
const allButton = document.querySelector("#all-btn");
const confirmedButton = document.querySelector("#confirmed-btn");
const cancelledButton = document.querySelector("#cancelled-btn");
const list = document.querySelector("#reservation-list");

let choice = "all";

const renderReservations = () => {
  const searchText = search.value.toLowerCase();

  const result = reservations.filter(
    (re) =>
      (choice === "all" || re.status === choice) &&
      re.name.toLowerCase().includes(searchText)
  );

  if (sortOrder === "asc") {
    result.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    result.sort((a, b) => b.price - a.price);
  }

  if (result.length === 0) {
    list.innerHTML = "결과 없음";
  } else {
    const html = result
      .map((re) => `<p>${re.name} / ${re.room} / ${re.price}</p>`)
      .join("");

    list.innerHTML = html;
  }
};

allButton.addEventListener("click", () => {
  choice = "all";
  renderReservations();
});

confirmedButton.addEventListener("click", () => {
  choice = "confirmed";
  renderReservations();
});

cancelledButton.addEventListener("click", () => {
  choice = "cancelled";
  renderReservations();
});

search.addEventListener("input", () => {
  renderReservations();
});

renderReservations();
