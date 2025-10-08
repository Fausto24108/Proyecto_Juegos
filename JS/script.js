let ColorActual = "";

function Modo(){
    const Barra = document.getElementsByClassName("Barra_navegacion")[0]; 
    
    if(ColorActual === "black"){
        Barra.style.backgroundColor = "white";
        Barra.style.borderTop = "3px solid crimson";
        Barra.style.borderBottom = "3px solid crimson";
        ColorActual = "";
    }

    else{
        Barra.style.backgroundColor = "black";
        Barra.style.borderTop = "3px solid black";
        Barra.style.borderBottom = "3px solid black";
        ColorActual = "black";
    }
    
    Barra.style.backgroundColor = color;
}