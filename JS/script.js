let ModoDN = false;
let Dia = "rgb(233, 223, 223)";
let Noche = "black";
let ContenedorDia = "whitesmoke";
let ContenedorNoche = "rgb(60, 60, 60)";
let FooterDia = "rgba(102, 55, 211, 0.966)";
let FooterNoche = "grey";

function Modo(){
    const Barra = document.getElementsByClassName("Barra_navegacion")[0]; 
    const Contenedor = document.getElementsByClassName("Contenedor")[0]; 
    const Parrafos = document.getElementsByClassName("Descripcion"); 
    const Footer = document.getElementsByTagName("footer")[0]; 


    if(ModoDN){
        document.body.style.backgroundColor = Dia;
        document.body.style.filter = "brightness(1)";
        Barra.style.backgroundColor = "white";
        Barra.style.borderTop = "3px solid crimson";
        Barra.style.borderBottom = "3px solid crimson";
        Contenedor.style.backgroundColor = ContenedorDia;
        Footer.style.backgroundColor = FooterDia;

        for(let i = 0; i<Parrafos.length; i++){
        Parrafos[i].style.color = "black";
        }

        ModoDN = false;
    }

    else{
        document.body.style.backgroundColor = Noche;
        document.body.style.filter = "brightness(0.9)";
        Barra.style.backgroundColor = "black";
        Barra.style.borderTop = "3px solid black";
        Barra.style.borderBottom = "3px solid black";
        Contenedor.style.backgroundColor = ContenedorNoche;
        Footer.style.backgroundColor = FooterNoche;

        for(let i = 0; i<Parrafos.length; i++){
        Parrafos[i].style.color = "white";
        }

        ModoDN = true;
    }
    
}