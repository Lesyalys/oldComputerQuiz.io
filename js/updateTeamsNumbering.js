import {elements} from'./const.js';

export function updateTeamsNumbering() {
    const inputs = elements.teamsContainer.querySelectorAll('.team-input');
    inputs.forEach((input, index) => {
        input.querySelector('label').textContent = `Команда ${index + 1}`;
    });
}