import dayjs from "dayjs"
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export function getTime() {
  const clock = document.getElementById("clock")
  return clock.textContent = dayjs().tz("Asia/Jakarta").format("hh:mm A");
}