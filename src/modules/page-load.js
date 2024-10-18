import dayjs from "dayjs";
import { scheduleDays } from "./schedules/load";

const selectDate = document.querySelector("#date-filter");

// data atual e minima para o input
const today = dayjs().format("YYYY-MM-DD");
selectDate.min = today;

document.addEventListener("DOMContentLoaded", function () {
  scheduleDays(today);
});
