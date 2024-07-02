document.addEventListener("DOMContentLoaded", function() {
    const materiasLink = document.getElementById("materias-link");
    const materiasList = document.getElementById("materias-list");

    materiasLink.addEventListener("click", function(event) {
        event.preventDefault();
        if (materiasList.classList.contains("hidden")) {
            materiasList.classList.remove("hidden");
            materiasList.classList.add("visible");
        } else {
            materiasList.classList.remove("visible");
            materiasList.classList.add("hidden");
        }
    });
});
