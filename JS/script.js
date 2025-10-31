let ModoDN = false;
let Dia = "rgb(233, 223, 223)";
let Noche = "black";
let ContenedorDia = "whitesmoke";
let ContenedorNoche = "hsla(0, 0%, 24%, 1.00)";
let FooterDia = "rgba(102, 55, 211, 0.966)";
let FooterNoche = "grey";
let ContenedorAbierto = true;

function Modo(){
    const Main = document.getElementsByTagName("main")[0];
    const Barra = document.getElementsByClassName("Barra_navegacion")[0]; 
    const Contenedor = document.getElementsByClassName("Contenedor")[0]; 
    const Parrafos = document.getElementsByClassName("Descripcion"); 
    const Footer = document.getElementsByTagName("footer")[0]; 
    const Botones = document.querySelectorAll(".Barra_navegacion nav a");
    const MarioMedio = document.getElementsByClassName("Medio")[0];

    if(ModoDN){
        document.body.style.backgroundColor = Dia;
        Main.style.filter = "brightness(1)";
        Barra.style.backgroundColor = "white";
        Barra.style.borderTop = "3px solid crimson";
        Barra.style.borderBottom = "3px solid crimson";
        Contenedor.style.backgroundColor = ContenedorDia;
        Footer.style.backgroundColor = FooterDia;
        MarioMedio.style.backgroundImage = "url(Recursos/Medio.jpg)";

        for(let i = 0; i<Parrafos.length; i++){
        Parrafos[i].style.color = "black";
        }

        for(let i = 0; i<Botones.length; i++){
        Botones[i].style.backgroundColor = "red";
        Botones[i].style.color = "white";

        Botones[i].addEventListener("mouseover", function(){
            Botones[i].style.color = "blue";
        });

        Botones[i].addEventListener("mouseout", function(){
            Botones[i].style.color = "white";
        });
        }

        ModoDN = false;
    }

    else{
        document.body.style.backgroundColor = Noche;
        Main.style.filter = "brightness(0.9)";
        Barra.style.backgroundColor = "black";
        Barra.style.borderTop = "3px solid black";
        Barra.style.borderBottom = "3px solid black";
        Contenedor.style.backgroundColor = ContenedorNoche;
        Footer.style.backgroundColor = FooterNoche;
        MarioMedio.style.backgroundImage = "url(Recursos/MedioN.jpg)";

        for(let i = 0; i<Parrafos.length; i++){
        Parrafos[i].style.color = "white";
        }

        for(let i = 0; i<Botones.length; i++){
        Botones[i].style.backgroundColor = "blue";
        Botones[i].style.color = "white";

        Botones[i].addEventListener("mouseover", function(){
            Botones[i].style.color = "red";
        });
        Botones[i].addEventListener("mouseout", function(){
            Botones[i].style.color = "white";
        });
        }

        ModoDN = true;
    }
}

function ActivarContenedor(){
    const Contenedor = document.getElementsByClassName("Contenedor")[0]; 
        
    if(ContenedorAbierto){
        Contenedor.style.maxHeight = "0px";
        Contenedor.style.padding = "15px";
        ContenedorAbierto = false;
    }

    else{
        Contenedor.style.maxHeight = "9999px";
        Contenedor.style.padding = "20px";
        ContenedorAbierto = true;
    }
}

function SubirPagina(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const mostrar= document.getElementById('mostrar');
const int= document.getElementById('int');
const ext= document.getElementById('ext');
const ver= document.getElementById('ver');

mostrar.addEventListener('click', function(){
    if(int.style.display== 'none'){
    int.style.display= 'block';
    }
    else{
        int.style.display= 'none';
    }
});

ver.addEventListener('click', function(){
    if(ext.style.display== 'none'){
    ext.style.display= 'block';
    }
    else{
        ext.style.display= 'none';
    }
});

const Ceferino=document.getElementById('Ceferino');
const forma=document.getElementById('forma');

const img1= './Recursos/favmgs.gif';
const img2= './Recursos/Ceferino.png';

forma.addEventListener('click', function(){
    if(Ceferino.src.includes('Ceferino.png')){
        Ceferino.src=img1;
    }
    else{
        Ceferino.src=img2;
    }
});
const Robert=document.getElementById('Robert');
const forma4=document.getElementById('forma4');

const img41= './Recursos/pkmn.gif';
const img42= './Recursos/Robert.png';

forma4.addEventListener('click', function(){
    if(Robert.src.includes('Robert.png')){
        Robert.src=img41;
    }
    else{
        Robert.src=img42;
    }
});

const Marco=document.getElementById('Marco');
const forma2=document.getElementById('forma2');

const img21= './Recursos/hrzn.gif';
const img22= './Recursos/Marco.png';

forma2.addEventListener('click', function(){
    if(Marco.src.includes('Marco.png')){
        Marco.src=img21;
    }
    else{
        Marco.src=img22;
    }
});

const Thiago=document.getElementById('Thiago');
const forma3=document.getElementById('forma3');

const img31= './Recursos/tlou.gif';
const img32= './Recursos/Thiago.png';

forma3.addEventListener('click', function(){
    if(Thiago.src.includes('Thiago.png')){
        Thiago.src=img31;
    }
    else{
        Thiago.src=img32;
    }
});

const activa=document.getElementById('activa');
const tema=document.getElementById('tema');

activa.addEventListener('click', function(){
    if(tema.paused){
    tema.play();
    }
    else{
        tema.pause();
    }
});