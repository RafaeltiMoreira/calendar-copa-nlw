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
    createGame("Alemanha", "10:00", "Japão") +
      createGame("Espanha", "13:00", "Costa Rica")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("Japão", "07:00", "Costa Rica") +
      createGame("Espanha", "16:00", "Alemanha")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("Japão", "16:00", "Espanha") +
      createGame("Costa Rica", "16:00", "Alemanha")
  )
