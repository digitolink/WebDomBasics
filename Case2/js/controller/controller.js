


export function dup(){
    
    let ButtonForDuplicate = document.querySelector("#buttonUno");
    ButtonForDuplicate.addEventListener("click",sumaUnoHandler);

}

function sumaUnoHandler(event){
    let numberOfTextBox = document.querySelector("#duplicate");
    numberOfTextBox.value=parseInt(numberOfTextBox.value)+1;

}