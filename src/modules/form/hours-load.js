import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

const hours = document.querySelector("#hour");

export function hoursLoad({ date, dailySchedules }) {
  hours.innerHTML = "";

  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());
    const isHourUnavailable = unavailableHours.includes(hour);

    const available = isHourPast || isHourUnavailable;

    return {
      hour,
      available,
    };
  });

  opening.forEach(({ hour, available }) => {
    const option = document.createElement("option");
    option.value = hour;
    option.innerText = hour;
    option.disabled = available;

    hours.appendChild(option);
  });
}
