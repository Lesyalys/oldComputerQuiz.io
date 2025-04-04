import {state,elements} from'./const.js';
export function updateModalScoreBoard() {
    elements.modalTeamsScore.innerHTML = '';
    
    state.teams.forEach((team, index) => {
        const teamEl = document.createElement('div');
        teamEl.className = 'team-score';
        teamEl.innerHTML = `
            <input type="radio" name="modal-team" id="modal-team-${index}" value="${index}">
            <label for="modal-team-${index}">
                <div class="team-name">${team.name}</div>
                <div class="team-points">${team.points}</div>
            </label>
        `;
        elements.modalTeamsScore.appendChild(teamEl);
    });
}