function toggleShowCompletedHandler (event) {
    const completedElements = document.querySelectorAll(".completed");
    for ( let item of completedElements ) {
        item.classList.toggle("hidden");
    }
}