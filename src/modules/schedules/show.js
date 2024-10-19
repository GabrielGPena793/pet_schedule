import dayjs from "dayjs";

const periodMorning = document.querySelector("#morning .container");
const periodAfternoon = document.querySelector("#afternoon .container");
const periodNight = document.querySelector("#night .container");

export function scheduleShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    dailySchedules.forEach((schedule) => {
      const div = document.createElement("div");
      div.classList.add("container_content");
      div.setAttribute("data-id", schedule.id);

      const subDiv = document.createElement("div");

      const time = document.createElement("strong");
      time.classList.add("content_hour");

      const name = document.createElement("strong");
      name.classList.add("content_name");

      const petName = document.createElement("span");

      const typeConsultation = document.createElement("span");
      typeConsultation.classList.add("type_consultation");

      const buttonCancel = document.createElement("button");
      buttonCancel.classList.add("remove_schendule");

      const img = document.createElement("img");
      img.src = "./src/assets/edit.svg";
      img.alt = "Editar";
      img.id = "edit";

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.clientName;
      petName.textContent = ` / ${schedule.petName}`;
      typeConsultation.textContent = schedule.typeConsultation;
      buttonCancel.textContent = "Remover agendamento";

      name.append(petName);
      subDiv.append(img, time, name);
      div.append(subDiv, typeConsultation, buttonCancel);

      const hour = dayjs(schedule.when).hour();

      if (hour < 12) {
        periodMorning.appendChild(div);
      } else if (hour >= 12 && hour < 18) {
        periodAfternoon.appendChild(div);
      } else {
        periodNight.appendChild(div);
      }
    });
  } catch (error) {
    alert("Não foi possível exibir os agendamentos.");
    console.log(error);
  }
}
