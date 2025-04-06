// import { backgroundImages } from "./const";

export function darckShem(){
    const mode = document.getElementById('mode');
    const logo = document.getElementById('logoNVSU');

    if (mode){
        const corHref = mode.getAttribute('href');

        if (corHref === 'css/style.css'){
            mode.setAttribute('href','css/dark.css')
            logo.setAttribute('src','./public/imgDark/logoNVSU.png')

        }
        else if (corHref === 'css/dark.css'){
            mode.setAttribute('href','css/style.css')
            logo.setAttribute('src','./public/imgLight/logoNVSU.png')

        }
    }
 
}
