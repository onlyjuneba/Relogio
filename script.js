const hours = document.getElementById("hours")
const min = document.getElementById("min")
const sec = document.getElementById("sec")

const time = setInterval(function time() {
  const date = new Date()
  let nhr = date.getHours()
  let nmin = date.getMinutes()
  let nsec = date.getSeconds()

  if (nhr < 10) nhr = "0" + nhr
  if (nmin < 10) nmin = "0" + nmin
  if (nsec < 10) nsec = "0" + nsec

  hours.textContent = nhr
  min.textContent = nmin
  sec.textContent = nsec
})
