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

document.querySelector("#groupE").innerHTML =
  createCard(
    "23/11",
    "quarta",
    createGame("Alemanha", "1 x 2", "Japão") +
      createGame("Espanha", "7 x 0", "Costa Rica")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("Japão", "0 x 1", "Costa Rica") +
      createGame("Espanha", "1 x 1", "Alemanha")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("Japão", "2 x 1", "Espanha") +
      createGame("Costa Rica", "2 x 4", "Alemanha")
  )
