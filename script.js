// 1. 데이터
const savedReservations = localStorage.getItem("reservations");
const reservations = savedReservations
  ? JSON.parse(savedReservations)
  : [
      { id: 1, name: "Kim", room: "Single", price: 12000, status: "confirmed" },
      {
        id: 2,
        name: "Tanaka",
        room: "Double",
        price: 15000,
        status: "confirmed",
      },
      { id: 3, name: "Lee", room: "Single", price: 10000, status: "cancelled" },
      { id: 4, name: "Park", room: "Suite", price: 22000, status: "confirmed" },
    ];

// 2. DOM 가져오기

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
const submitButton = form.querySelector('button[type="submit"]');
const cancelEditButton = document.querySelector("#cancel-edit-btn");
const errorMessage = document.querySelector("#form-error");

// 3. 상태

let choice = "all";
let sortOrder = "none";
let editingId = null;

// 4. 함수

const renderReservations = () => {
  const searchText = search.value.toLowerCase();

  const result = reservations.filter(
    (re) =>
      (choice === "all" || re.status === choice) &&
      re.name.toLowerCase().includes(searchText),
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
      <button class="delete-btn" data-id="${re.id}">삭제</button> /
      <button class="edit-btn" data-id="${re.id}">수정</button>
    </p>
  `,
      )
      .join("");

    list.innerHTML = html;
  }
};

const saveReservations = () => {
  localStorage.setItem("reservations", JSON.stringify(reservations));
};

// 5. 이벤트

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const id = Number(event.target.dataset.id);

    const index = reservations.findIndex((re) => re.id === id);
    const ok = confirm("정말 삭제하시겠습니까?");
    if (ok) {
      reservations.splice(index, 1);
      saveReservations();
      renderReservations();
    }
  }
  if (event.target.classList.contains("edit-btn")) {
    const id = Number(event.target.dataset.id);

    const reservation = reservations.find((re) => re.id === id);

    editingId = id;
    submitButton.textContent = "예약 수정";
    cancelEditButton.hidden = false;

    nameInput.value = reservation.name;
    roomInput.value = reservation.room;
    priceInput.value = reservation.price;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const room = roomInput.value.trim();
  const price = Number(priceInput.value);

  if (name === "" || room === "") {
    errorMessage.textContent =
      "예약자 이름과 객실 타입을 올바르게 입력해주세요.";
    return;
  }
  if (price <= 0 || !Number.isFinite(price)) {
    errorMessage.textContent = "가격을 올바르게 입력해주세요.";
    return;
  }
  if (editingId !== null) {
    const reservation = reservations.find((re) => re.id === editingId);

    reservation.name = name;
    reservation.room = room;
    reservation.price = price;

    editingId = null;
    submitButton.textContent = "예약 추가";
  } else {
    const ids = reservations.map((re) => re.id);
    const maxId = ids.length === 0 ? 0 : Math.max(...ids);
    const newId = maxId + 1;

    const newReservation = {
      id: newId,
      name,
      room,
      price,
      status: "confirmed",
    };
    reservations.push(newReservation);
  }

  saveReservations();
  renderReservations();
  cancelEditButton.hidden = true;
  errorMessage.textContent = "";
  form.reset();
});

cancelEditButton.addEventListener("click", () => {
  editingId = null;
  form.reset();
  submitButton.textContent = "예약 추가";
  cancelEditButton.hidden = true;
  errorMessage.textContent = "";
});

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

// 6. 최초 실행

renderReservations();
cancelEditButton.hidden = true;

async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("요청 실패");
    }

    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.log(error.message);
  }
}

getUser();
