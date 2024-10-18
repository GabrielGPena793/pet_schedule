const buttonModal = document.querySelector("#new_schendule");
const modal = document.querySelector("#modal");

buttonModal.onclick = () => {
  modal.classList.remove("hidden");
};

modal.onclick = (event) => {
  if (event.target.id === "modal") {
    modal.classList.add("hidden");
  }
};

export function closeModal() {
  modal.classList.add("hidden");
}
