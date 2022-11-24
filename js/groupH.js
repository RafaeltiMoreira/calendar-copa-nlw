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

document.querySelector("#groupH").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("Uruguai", "0 x 0", "Coreia do Sul") +
      createGame("Portugal", "3 x 2", "Gana")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("Coreia do Sul", "10:00", "Gana") +
      createGame("Portugal", "16:00", "Uruguai")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("Coreia do Sul", "12:00", "Portugal") +
      createGame("Gana", "12:00", "Uruguai")
  )
