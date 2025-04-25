import { Rive } from "@rive-app/canvas";
import {delTeamInput} from './delTeamInput';

      const riveCanvas = document.querySelector(".button remove");

      const riveInstance = new Rive({
      src: "../public/rive/deleteBtn.riv",
      canvas: riveCanvas,
      autoplay: true,
      stateMachines: 'sm1',
      onLoad: () => {
        riveInstance.resizeDrawingSurfaceToCanvas();
        
        const input = riveInstance.stateMachineInputs('sm1');
        const triggere = input.find(i => i.name === 'Trigger 1');
        riveCanvas.onclick = () => {
            if (triggere.value === false){
                triggere.value = true;
                delTeamInput();
            }
            else if (triggere.value === true){
                triggere.value = false;
                delTeamInput();
            }}
        
      }
    });

  window.addEventListener(
    "resize",
    () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
    },
    false
  );