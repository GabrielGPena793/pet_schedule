import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new";
import { scheduleDays } from "../schedules/load";
import { closeModal } from "../modal";

const form = document.querySelector("form");
const clientName = document.querySelector("#client_name");
const petName = document.querySelector("#pet_name");
const phone = document.querySelector("#phone");
const descriptionService = document.querySelector("#description_service");
const selectDate = document.querySelector("#date");
const hourSelected = document.querySelector("#hour");

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const clientNameValue = clientName.value.trim();
    const petNameValue = petName.value.trim();
    const descriptionServiceValue = descriptionService.value.trim();
    const phoneValue = phone.value;
    const dateValue = selectDate.value;

    if (!clientNameValue) {
      return alert("Informe o nome do cliente.");
    }

    if (!petNameValue) {
      return alert("Informe o nome do pet.");
    }

    if (!hourSelected) {
      return alert("Selecione um horário.");
    }

    if (!phoneValue) {
      return alert("Informe um telefone.");
    }

    if (!descriptionServiceValue) {
      return alert("Informe qual serviço a ser realizado.");
    }

    const [hour] = hourSelected.value.split(":");

    const when = dayjs(dateValue).add(hour, "hour");

    const id = new Date().getTime();

    await scheduleNew({
      id,
      clientName: clientNameValue,
      petName: petNameValue,
      typeConsultation: descriptionServiceValue,
      phone: phoneValue,
      when,
    });

    scheduleDays(dateValue);
    closeModal();
    clientName.value = "";
    descriptionService.value = "";
    petName.value = "";
    phone.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};

phone.addEventListener("input", (event) => {
  const hasCharacterRegex = /\D+/;

  phone.value = phone.value.replace(hasCharacterRegex, "");
});
