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

document.querySelector("#groupC").innerHTML =
  createCard(
    "22/11",
    "terça",
    createGame("Argentina", "07:00", "Arábia Saudita") +
      createGame("México", "13:00", "Polônia")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("Polônia", "10:00", "Arábia Saudita") +
      createGame("Argentina", "16:00", "México")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("Polônia", "16:00", "Argentina") +
      createGame("Arábia Saudita", "16:00", "México")
  )
