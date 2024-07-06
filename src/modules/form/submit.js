import dayjs from "dayjs"

const selectedDate = document.getElementById('date')

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
selectedDate.value = inputToday
selectedDate.min = inputToday
const form = document.querySelector("form")
form.onsubmit = (event) => {
  event.preventDefault()
}