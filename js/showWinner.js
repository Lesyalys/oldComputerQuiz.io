import {state} from'./const.js';

export function showWinner() {
     // Находим команду с максимальным количеством очков
     let winner = state.teams[0];
     let isDraw = false;
     
     for (let i = 1; i < state.teams.length; i++) {
         if (state.teams[i].points > winner.points) {
             winner = state.teams[i];
             isDraw = false;
         } else if (state.teams[i].points === winner.points) {
             isDraw = true;
         }
     }
     
     const winnerModal = document.getElementById('winnerModal');
     const winnerInfo = document.getElementById('winnerInfo');
     
     if (isDraw) {
         // Ничья
         document.getElementById('winnerTitle').textContent = 'Ничья!';
         winnerInfo.innerHTML = `
             <p>Несколько команд набрали одинаковое количество очков:</p>
             ${state.teams.filter(t => t.points === winner.points)
                 .map(t => `<p><strong>${t.name}</strong> - ${t.points} очков</p>`)
                 .join('')}
         `;
     } else {
         // Есть победитель
         winnerInfo.innerHTML = `
             <p>Победила команда <strong>${winner.name}</strong>!</p>
             <p>С результатом: <strong>${winner.points}</strong> очков</p>
         `;
     }
     
     winnerModal.style.display = 'flex';
 }