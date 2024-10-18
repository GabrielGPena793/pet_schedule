import { scheduleGetByDay } from "../../services/schedule-get-by-day";
import { hoursLoad } from "../form/hours-load";
import { scheduleShow } from "./show";

const selectDate = document.querySelector("#date-filter");
export async function scheduleDays(date) {
  selectDate.value = date;

  const dailySchedules = await scheduleGetByDay({ date });

  scheduleShow({ dailySchedules });

  hoursLoad({ date, dailySchedules });
}
