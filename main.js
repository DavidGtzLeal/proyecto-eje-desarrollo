
//Este es el script principal

const cuadrado = document.getElementById("item"); 
const textbox = document.getElementById("textbox"); 
const boton = document.getElementById("button");
const n_element = document.getElementById("n_element");
const reset = document.getElementById("reset");
const points = document.getElementById("Points")
const store = document.getElementById("store")
const sub_container = document.getElementById("subcontainer");
const webos = true;


let change = 50;
let puntaje = 0;
let myWindow;
let calaca_active = false;



//función que detecta si el cuadrado de color fue presionado por el 
//mouse para poder moverlo
//dinamicamente
cuadrado.addEventListener("mousedown", mousedown);    

function mousedown(e){
        let prev_mousedown = true;
        window.addEventListener("mouseup", mouseup);
        textbox.addEventListener("mousedown", txt_mousedown);

        function txt_mousedown(e){
            prev_mousedown = false;
        }
        function mouseup(e){

            if(prev_mousedown == true){
                cuadrado.style.marginLeft = event.clientX + "px";
                cuadrado.style.marginTop = event.clientY + "px";
            }
            prev_mousedown = false;
            
        }  
    
     
}

boton.addEventListener("mousedown", nu_elem);


//función para agregar un nuevo elemento al cuadrado de color
function nu_elem(e){
    let created_elem = document.createElement("div");
    let elem_Text = document.createTextNode(textbox.value);
    let check_elem = document.createElement("input");

    check_elem.setAttribute("type","checkbox");
    check_elem.setAttribute("class","checkbox");
    check_elem.setAttribute("id","checkbox");

    created_elem.appendChild(check_elem);
    created_elem.appendChild(elem_Text);

    created_elem.setAttribute("class","nu_elem");
    created_elem.setAttribute("id","nu_elem");

    created_elem.style.fontSize = "10" + "px";
    cuadrado.appendChild(created_elem);
    
}

reset.addEventListener("mousedown", checkreset);

//función para reiniciar el contenido de la lista
function checkreset(e){
    if(reset.checked){
        let cuadrado_HTML_I = "<input type='checkbox' class='checkbox' id='reset'>";
        let cuadrado_HTML_II = "<input type='text' class='textbox' id='textbox' >";
        let cuadrado_HTML_III = "<button class='button' id='button'></button>";
        let cuadrado_HTML_IV = "</button >";
        let cuadrado_HTML_V = "<div class='n_element' id='n_element'></div>";

        cuadrado.innerHTML = cuadrado_HTML_I + cuadrado_HTML_II + cuadrado_HTML_III + cuadrado_HTML_IV + cuadrado_HTML_V;
        
        let textbox_temp = document.getElementById("textbox")
        let boton_temp = document.getElementById("button");

        textbox.value = textbox_temp.value
        boton_temp.addEventListener("mousedown", nu_elem)
        

        let reset_temp = document.getElementById("reset");
        reset_temp.addEventListener("mousedown", checkreset);

        puntaje = puntaje + 100;

        points.innerHTML = "Points " + puntaje;

    }
    
}


store.addEventListener("mousedown", storeopener);

//función para abrir la tienda
function storeopener(e){
    let myWindow = window.open("", "myWindow", "width=600, height=500");

    myWindow.document.write("<link href='stylesheet.css' rel='stylesheet'>")
    myWindow.document.write("<canvas width='100' height='100' id='canvas'></canvas>");
    myWindow.document.write("<h3 id='mascot_name'>Calaca Chida</h3>");
    myWindow.document.write("<h4>400 puntos</h4>")
    myWindow.document.write("<button id='buy' class='buy' >Buy</button>")

    let img_calaca = new Image();
    img_calaca.src = "../assets/C3ZwL.png" 

    img_calaca.onload = function() {
        init();
    };

    let canvas = myWindow.document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let buy = myWindow.document.getElementById("buy");

    function init() {
        ctx.drawImage(img_calaca, 128, 128, 55, 64, 0, 0, 100, 100);

        buy.addEventListener("mousedown", calaca_buy)
    }     

}

//función para comprar la mascota de la Calaca Chida
function calaca_buy(e){
    if(puntaje >= 400){
    calaca_active = true;
    puntaje = puntaje - 400;
    }else{
        window.alert("creditos insuficientes")
    }

    if(calaca_active == true){
        let html_calaca = '<div id="sprite-container">';
        let html_calaca_I = ' = <div id="sprite-image"></div>';
        let html_calaca_II = '</div>';

        sub_container.innerHTML = html_calaca + html_calaca_I + html_calaca_II;
        sub_container.style.marginLeft = sub_container.style.marginLeft + 20
        
    }
    
}




