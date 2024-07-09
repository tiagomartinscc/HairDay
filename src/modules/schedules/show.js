import dayjs from "dayjs"

const periodMorning = document.getElementById('period-morning')
const periodAfternoon = document.getElementById('period-afternoon')
const periodNight = document.getElementById('period-night')

export function scheduleShow({dailySchedules}) {
  try {
    periodMorning.innerHTML = ''
    periodAfternoon.innerHTML = ''
    periodNight.innerHTML = ''

    dailySchedules.forEach((schedule) => {
      const item = document.createElement('li')
      const time = document.createElement('strong')
      const name = document.createElement('span')
      const cancelIcon = document.createElement('img')
      item.setAttribute('data-id', schedule.id)

      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute('src', './src/assets/cancel.svg')
      cancelIcon.setAttribute('alt', 'Cancelar')
    
      item.append(time, name, cancelIcon)

      const hours = dayjs(schedule.when).hour()

      if (hours <= 12) {
        periodMorning.append(item)
      } else if (hours > 12 && hours <=18) {
        periodAfternoon.append(item)
      } else {
        periodNight.append(item)
      }
    })

    
  } catch (error) {
   console.log(error)
   alert("Não foi possível exibir os agendamentos do dia!") 
  }
}