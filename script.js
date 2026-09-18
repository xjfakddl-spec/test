const reservations = [
  { id: 1, name: "Kim", room: "Single", price: 12000, status: "confirmed" },
  { id: 2, name: "Tanaka", room: "Double", price: 15000, status: "confirmed" },
  { id: 3, name: "Lee", room: "Single", price: 10000, status: "cancelled" },
  { id: 4, name: "Park", room: "Suite", price: 22000, status: "confirmed" }
];

const search = document.querySelector("#search-input");
const allButton = document.querySelector("#all-btn");
const confirmedButton = document.querySelector("#confirmed-btn");
const cancelledButton = document.querySelector("#cancelled-btn");
const list = document.querySelector("#reservation-list");
const ascButton = document.querySelector("#price-asc");
const descButton = document.querySelector("#price-desc");
const form = document.querySelector("#reservation-form");
const nameInput = document.querySelector("#name-input");
const roomInput = document.querySelector("#room-input");
const priceInput = document.querySelector("#price-input");

let choice = "all";
let sortOrder = "none";

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const id = Number(event.target.dataset.id);

    const index = reservations.findIndex((re) => re.id === id);

    console.log(id);
    console.log(index);
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const room = roomInput.value.trim();
  const price = Number(priceInput.value);
  
  if (name === "" || room === "" || price === 0) {
  alert("모든 값을 입력해주세요.");
  return;
}

  const newReservation = {
    name,
    room,
    price,
    status: "confirmed"
  };

  reservations.push(newReservation);

  renderReservations();
  
  nameInput.value = "";
  roomInput.value = "";
  priceInput.value = "";
});

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
      .map(
  (re) => `
    <p>
      ${re.name} / ${re.room} / ${re.price}
      <button class="delete-btn" data-id="${re.id}">삭제</button>
    </p>
  `)
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

ascButton.addEventListener("click", () => {
  sortOrder = "asc";
  renderReservations();
});

descButton.addEventListener("click", () => {
  sortOrder = "desc";
  renderReservations();
});

search.addEventListener("input", () => {
  renderReservations();
});


renderReservations();
