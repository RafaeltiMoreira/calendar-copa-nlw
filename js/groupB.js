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

document.querySelector("#groupB").innerHTML =
  createCard(
    "21/11",
    "segunda",
    createGame("Inglaterra", "6 x 2", "Irã") +
      createGame("Estados Unidos", "1 x 1", "Gales")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("Gales", "0 x 2", "Irã") +
      createGame("Inglaterra", "0 x 0", "Estados Unidos")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("Irã", "16:00", "Estados Unidos") +
      createGame("Gales", "16:00", "Inglaterra")
  )
