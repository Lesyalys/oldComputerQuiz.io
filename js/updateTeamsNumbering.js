import {elements} from'./const.js';

export function updateTeamsNumbering() {
    const inputs = elements.teamsContainer.querySelectorAll('.team-input');
    inputs.forEach((input, index) => {
        input.querySelector('label').textContent = `Команда ${index + 1}`;
        input.querySelector('div').querySelector(`input`).setAttribute('id', `team-${index}`)
        input.querySelector('div').querySelector(`div`).setAttribute('id', `remove-${index}`)
    });
}