
const cuadrado = document.getElementById("item");
const textbox = document.getElementById("textbox");
const boton = document.getElementById("button");
const n_element = document.getElementById("n_element");
const reset = document.getElementById("reset");
const points = document.getElementById("Points")
const store = document.getElementById("store")
const canv_mascot = document.getElementById("canv_mascot")


let change = 50;
let puntaje = 0;
let myWindow;


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

function calaca_buy(e){
    if(puntaje >= 400){

        let calaca_mascota = new Image();
        calaca_mascota.src = "../assets/C3ZwL.png" 
        

        calaca_mascota.onload = function() {
            init();
        }

        let calaca_canv = document.querySelector("canv_mascot")
        let ctx = calaca_canv.getContext("2d")

        function init() {
            ctx.drawImage(img_calaca, 128, 128, 55, 64, 0, 0, 100, 100);
        }
        

    }else{
        window.alert("creditos insuficientes")
    }
}



