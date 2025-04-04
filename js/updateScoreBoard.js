import {state,elements} from'./const.js';

export function updateScoreBoard() {
    elements.teamsScore.innerHTML = '';
    
    state.teams.forEach(team => {
        const teamEl = document.createElement('div');
        teamEl.className = 'team-score';
        teamEl.innerHTML = `
            <div class="team-name">${team.name}</div>
            <div class="team-points">${team.points}</div>
        `;
        elements.teamsScore.appendChild(teamEl);
    });
}