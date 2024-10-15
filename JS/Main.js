function mostrarSubtemas(temaId) {
    var subtemas = document.getElementById(temaId);
    if (subtemas.style.display === "block") {
        subtemas.style.display = "none";
    } else {
        subtemas.style.display = "block";
    }
}
