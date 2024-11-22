import { Header } from "./components/header.js"
import { footer } from "./components/footer.js"
import { HomePage } from "./views/homepage.js"
import { AboutPage } from "./views/aboutpage.js"

function App(){
    return`
    ${Header()}
    <main id="content">
        <!--El contenido cambiara dinamicamente-->
    </main
    ${footer()}

    `;
}
function navigate(page){
    const content = document.querySelector("#content");

    if (page === "home"){
        content.innerHTML = HomePage();
    } else if (page === "about"){
        content.innerHTML = AboutPage();
    }

}

//carga la aplicacion 

document.querySelector("#root").innerHTML = App();

//Agregar eventos a los botones

const homeButton = document.querySelector("#homeButton");
const aboutButton = document.querySelector("#aboutButton");

homeButton.addEventListener("click", () => {
    navigate("home");
});
aboutButton.addEventListener("click", () => {
    navigate("about");
});

//Por defectos, mostramos la pagina de inicio

navigate('home');

//Exponer la funcion de navigate al scope global para poder ser llamada desde el html

window.navigate = navigate;
