import { scheduleCancel } from "../../services/schedule-cancel";
import { scheduleDays } from "./load";
import { editSchedule } from "../form/edit";

const periods = document.querySelectorAll(".container");
const selectDate = document.querySelector("#date-filter");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("remove_schendule")) {
      const item = event.target.closest("div");
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm("Deseja realmente cancelar o agendamento?");

        if (isConfirm) {
          await scheduleCancel({ id });
          scheduleDays(selectDate.value);
        }
      }
    }

    if (event.target.id === "edit") {
      const item = event.target.closest("div.container_content");
      const { id } = item.dataset;

      editSchedule(id);
    }
  });
});
