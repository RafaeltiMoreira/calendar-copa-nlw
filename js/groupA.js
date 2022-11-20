function createGame(player1, hour, player2, status) {
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

document.querySelector("#groupA").innerHTML =
  createCard("20/11", "domingo", createGame("Catar", "0 x 2", "Equador")) +
  createCard("21/11", "segunda", createGame("Senegal", "13:00", "Holanda")) +
  createCard(
    "25/11",
    "sexta",
    createGame("Catar", "10:00", "Senegal") +
      createGame("Holanda", "13:00", "Equador")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("Equador", "12:00", "Senegal") +
      createGame("Holanda", "12:00", "Catar")
  )
