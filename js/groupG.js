function createGame(player1, hour, player2) {
  return `
    <li>
    <div class="title-team">
       <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
       <p>${player1}</p>
      </div>
      <strong>${hour}</strong>
      <div class="title-team">
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
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

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("Suíça", "07:00", "Camarões") +
      createGame("Brasil", "16:00", "Sérvia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("Camarões", "07:00", "Sérvia") +
      createGame("Brasil", "13:00", "Suíça")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("Sérvia", "16:00", "Suíça") +
      createGame("Camarões", "16:00", "Brasil")
  )
