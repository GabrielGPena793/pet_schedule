import { scheduleDays } from "../schedules/load";

const selectDate = document.querySelector("#date-filter");

selectDate.onchange = () => {
  const date = selectDate.value;

  scheduleDays(date);
};
