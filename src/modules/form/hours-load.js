import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hour-click.js"

const hours = document.getElementById('hours')

export function hoursLoad({date, dailySchedules}) {
  // limpa lista de horarios
  hours.innerHTML = ""

  const unavailableHours = dailySchedules.map( (schedule) => dayjs(schedule.when).format("HH:mm") )

  const opening = openingHours.map( (hour) => {
    const [scheduleHour] = hour.split(":")
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available
    }
  })

  //Renderiza os horarios
  opening.forEach(({hour, available}) => {
    const li = document.createElement('li')
    li.classList.add('hour')
    li.classList.add(available ? 'hour-available': 'hour-unavailable')
    li.textContent = hour;
    if(hour === "09:00") {
      hourHeadAdd("Manhã")
    } else if (hour === "13:00") {
      hourHeadAdd("Tarde")
    } else if (hour === '18:00') {
      hourHeadAdd("Noite")
    }
    hours.append(li)
  })

  hoursClick()
}

function hourHeadAdd(title) {
  const header = document.createElement('l1')
  header.classList.add('hour-period')
  header.textContent = title

  hours.append(header)
}