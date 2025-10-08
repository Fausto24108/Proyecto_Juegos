let ModoDN = false;
let Dia = "rgb(233, 223, 223)";
let Noche = "black";

function Modo(){
    const Barra = document.getElementsByClassName("Barra_navegacion")[0]; 
    
    if(ModoDN){
        document.body.style.backgroundColor = Dia;
        Barra.style.backgroundColor = "white";
        Barra.style.borderTop = "3px solid crimson";
        Barra.style.borderBottom = "3px solid crimson";
        ModoDN = "false";
    }

    else{
        document.body.style.backgroundColor = Noche;
        Barra.style.backgroundColor = "black";
        Barra.style.borderTop = "3px solid black";
        Barra.style.borderBottom = "3px solid black";
        ModoDN = true;
    }
    
    Barra.style.backgroundColor = color;
}