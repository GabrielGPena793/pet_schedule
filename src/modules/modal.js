const buttonModal = document.querySelector("#new_schendule");
const modal = document.querySelector("#modal");

const form = document.querySelector("form");
const clientName = document.querySelector("#client_name");
const petName = document.querySelector("#pet_name");
const phone = document.querySelector("#phone");
const descriptionService = document.querySelector("#description_service");
const selectDate = document.querySelector("#date");
const hourSelected = document.querySelector("#hour");

buttonModal.onclick = () => {
  openModal(true);
};

modal.onclick = (event) => {
  if (event.target.id === "modal") {
    modal.classList.add("hidden");
  }
};

export function closeModal() {
  modal.classList.add("hidden");
}

export function openModal(clearInputs) {
  if (clearInputs) {
    clientName.value = "";
    petName.value = "";
    descriptionService.value = "";
    phone.value = "";

    selectDate.value = "";
    hourSelected.value = "";
    form.id = "";
  }

  modal.classList.remove("hidden");
}
