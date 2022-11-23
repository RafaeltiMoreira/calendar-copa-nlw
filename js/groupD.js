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

document.querySelector("#groupD").innerHTML =
  createCard(
    "22/11",
    "terça",
    createGame("Dinamarca", "0 x 0", "Tunísia") +
      createGame("França", "4 x 1", "Austrália")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("Tunísia", "07:00", "Austrália") +
      createGame("França", "13:00", "Dinamarca")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("Tunísia", "12:00", "França") +
      createGame("Austrália", "12:00", "Dinamarca")
  )
