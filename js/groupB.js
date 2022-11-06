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
    "21/11",
    "segunda",
    createGame("Inglaterra", "10:00", "Irã") +
      createGame("Estados Unidos", "16:00", "Gales")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("Gales", "07:00", "Irã") +
      createGame("Inglaterra", "16:00", "Estados Unidos")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("Irã", "16:00", "Estados Unidos") +
      createGame("Gales", "16:00", "Inglaterra")
  )
