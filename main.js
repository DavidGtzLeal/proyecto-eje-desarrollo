
const cuadrado = document.getElementById("item");
const textbox = document.getElementById("textbox");
const boton = document.getElementById("button");
const n_element = document.getElementById("n_element");

let change = 50;


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





        




