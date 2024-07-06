import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById('date')

export function schedulesDay() {
  // renderiza as horas disponiveis
  const date = selectedDate.value
  hoursLoad({date})
}

