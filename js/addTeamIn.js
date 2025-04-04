import './_homeStart.js'

export function addTeamInput() {
    const teamId = state.teams.length;
    const teamInput = document.createElement('div');
    teamInput.className = 'team-input';
    teamInput.innerHTML = `
        <label>Команда ${teamId + 1}</label>
        <input type="text" id="team-${teamId}" placeholder="Название команды">
    `;
    elements.teamsContainer.appendChild(teamInput);
    
    // Добавляем пустую команду в состояние
    state.teams.push({
        id: teamId,
        name: '',
        points: 0
    });
    
    // Слушатель изменения названия команды
    document.getElementById(`team-${teamId}`).addEventListener('input', (e) => {
        state.teams[teamId].name = e.target.value.trim();
        checkStartConditions();
    });
    
    // Активируем кнопку "Начать игру", если есть хотя бы 2 команды
    if (state.teams.length >= 2) {
        elements.startGame.disabled = false;
    }
}