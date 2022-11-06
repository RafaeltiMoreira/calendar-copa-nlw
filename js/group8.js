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
    "03/12",
    "sábado",
    createGame("Aguardem", "12:00", "Aguardem") +
      createGame("Aguardem", "16:00", "Aguardem")
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("Aguardem", "12:00", "Aguardem") +
      createGame("Aguardem", "16:00", "Aguardem")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("Aguardem", "12:00", "Aguardem") +
      createGame("Aguardem", "16:00", "Aguardem")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("Aguardem", "12:00", "Aguardem") +
      createGame("Aguardem", "16:00", "Aguardem")
  )
