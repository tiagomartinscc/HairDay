import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector("form")
const selectedDate = document.getElementById('date')

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
selectedDate.value = inputToday
selectedDate.min = inputToday

const clientName = document.getElementById('client')

form.onsubmit = async (event) => {
  event.preventDefault()
  try {
    // recupera o nome do clinete

    const name = clientName.value.trim()
    if (!name) {
      return alert("Informe o nome do cliente!")
    }

    // Recuperar o horario selecionado
    const hourSelected = document.querySelector('.hour-selected')
    if (!hourSelected) {
      return alert("Selecione a hora")
    }

    //recupera a hora
    const [hour] = hourSelected.innerText.split(":")
    const when = dayjs(selectedDate.value).add(hour, "hour")
    const id = new Date().getTime()

    await scheduleNew({
      id,
      name,
      when
    })

  } catch (error) {
    alert("Não foi possível realizar o agendamento")
    console.log(error)
  }
}