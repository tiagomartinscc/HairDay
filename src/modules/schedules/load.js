import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { scheduleShow } from "./show.js"

const selectedDate = document.getElementById('date')

export async function schedulesDay() {
  // renderiza as horas disponiveis
  const date = selectedDate.value
  
  // Buscar na api os agendamentos
  const dailySchedules = await scheduleFetchByDay({date})
  console.log(dailySchedules)

  scheduleShow({dailySchedules})

  hoursLoad({date, dailySchedules})
}

