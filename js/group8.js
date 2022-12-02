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

document.querySelector("#group8").innerHTML =
  createCard(
    "03/12",
    "sábado",
    createGame("Holanda", "12:00", "Estados Unidos") +
      createGame("Argentina", "16:00", "Austrália")
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("França", "12:00", "Polônia") +
      createGame("Inglaterra", "16:00", "Senegal")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("Japão", "12:00", "Croácia") +
      createGame("Brasil", "16:00", "Coreia do Sul")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("Marrocos", "12:00", "Espanha") +
      createGame("Portugal", "16:00", "Suiça")
  )
