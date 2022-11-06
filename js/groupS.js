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
  createCard("13/12", "terça", createGame("Aguardem", "16:00", "Aguardem")) +
  createCard("14/12", "quarta", createGame("Aguardem", "16:00", "Aguardem"))
