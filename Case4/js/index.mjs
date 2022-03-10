function toggleShowCompletedHandler (event) {
    const completedElements = document.querySelectorAll(".completed");
    for ( let item of completedElements ) {
        item.classList.toggle("hidden");
    }
}

function trigger(){

    let button = document.querySelector("#buttonUno");
    button.addEventListener("click", toggleShowCompletedHandler);

}
trigger();