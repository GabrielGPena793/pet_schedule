import dayjs from "dayjs";
import { scheduleGetById } from "../../services/shedule-gey-by-id";
import { openModal } from "../modal";

const form = document.querySelector("form");

const clientName = document.querySelector("#client_name");
const petName = document.querySelector("#pet_name");
const phone = document.querySelector("#phone");
const descriptionService = document.querySelector("#description_service");
const selectDate = document.querySelector("#date");
const hourSelected = document.querySelector("#hour");

export async function editSchedule(id) {
  try {
    const schedule = await scheduleGetById({ id });

    clientName.value = schedule.clientName;
    petName.value = schedule.petName;
    descriptionService.value = schedule.typeConsultation;
    phone.value = schedule.phone;

    selectDate.value = dayjs(schedule.when).format("YYYY-MM-DD");
    hourSelected.value = dayjs(schedule.when).format("HH:mm");
    form.id = schedule.id;

    openModal();
  } catch (error) {
    console.log(error);
    alert("Erro ao editar agendamento");
  }
}
