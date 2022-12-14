function createGame(player1, hour, player2) {
  return `
    <li>
    <div class="title-team">
       <img src="../assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
       <p>${player1}</p>
      </div>
      <strong>${hour}</strong>
      <div class="title-team">
        <img src="../assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
        <p>${player2}</p>
       </div>
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#group4").innerHTML =
  createCard(
    "09/12",
    "sexta",
    createGame("Brasil", "12:00", "Croácia") +
      createGame("Holanda", "16:00", "Argentina")
  ) +
  createCard(
    "10/12",
    "sábado",
    createGame("Marrocos", "12:00", "Portugal") +
      createGame("Inglaterra", "16:00", "França")
  )
