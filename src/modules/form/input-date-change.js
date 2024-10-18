import { scheduleDays } from "../schedules/load";

const selectDate = document.querySelector("#date");

selectDate.onchange = () => {
  const date = selectDate.value;
  scheduleDays(date);
};
