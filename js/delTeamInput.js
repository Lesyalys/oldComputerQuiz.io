import {state,elements} from'./const.js';
import { updateTeamsNumbering } from "./updateTeamsNumbering.js";
import { checkStartConditions } from "./checkStartConditions.js";

export function delTeamInput() {
    try {
        // Проверяем, есть ли команды для удаления
        if (state.teams.length <= 2) {
            throw new Error("Должно остаться минимум 2 команды!");
        }

        // Получаем ID последней команды
        const lastTeamId = state.teams.length - 1;
        
        // Удаляем из состояния
        state.teams = state.teams.slice(0, -1);
        
        // Удаляем из DOM
        const inputs = elements.teamsContainer.querySelectorAll('.team-input');
        if (inputs.length > 0) {
            elements.teamsContainer.removeChild(inputs[inputs.length - 1]);
        }
        
        // Обновляем нумерацию оставшихся команд
        updateTeamsNumbering();
        
        // Проверяем условия старта
        checkStartConditions();
        
    } catch (error) {
        console.error("Ошибка при удалении команды:", error.message);
        alert(error.message);
    }
}


