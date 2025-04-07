import {state,elements} from'./const.js';
import { updateTeamsNumbering } from "./updateTeamsNumbering.js";
import { checkStartConditions } from "./checkStartConditions.js";

export function delTeamInput() {
    try {
        if (state.teams.length <= 2) {
            throw new Error("Должно остаться минимум 2 команды!");
        }
        const id = this.attributes[1].nodeValue;
        const id_num = +id.slice(id.indexOf("-")+1);
        this.parentElement.parentElement.remove()

        state.teams = state.teams.slice(0, id_num).concat(state.teams.slice(id_num+1));
        
        // Обновляем нумерацию оставшихся команд
        updateTeamsNumbering();
        
        // Проверяем условия старта
        checkStartConditions();
        
    } catch (error) {
        console.error("Ошибка при удалении команды:", error.message);
        alert(error.message);
    }
}