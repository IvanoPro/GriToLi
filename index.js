function toggleMe(a) {
    var eContent = document.getElementById("sub_menu"),
        eHelp    = document.getElementById("predUsl"),
        eGPGKey  = document.getElementById("plan");
        eRow  = document.getElementById("row");
    if(!eContent || !eHelp || !eGPGKey)
        return;

    if (a === "sub_menu" && eContent.style.display === "none") {
        eContent.style.display = "block";
        eHelp.style.display    = "none";
        eGPGKey.style.display  = "none";
        eRow.style.display  = "none";
    }
    else if (a === "predUsl" && eHelp.style.display === "none") {
        eContent.style.display = "none";
        eHelp.style.display    = "block";
        eGPGKey.style.display  = "none";
        eRow.style.display  = "none";
    }
    else if (a === "plan" && eGPGKey.style.display === "none") {
        eContent.style.display = "none";
        eHelp.style.display    = "none";
        eGPGKey.style.display  = "block";
        eRow.style.display  = "none";
    }
    else if (a === "sub_menu") {
        eContent.style.display = "none";
        eRow.style.display = "block";
    }
    else if (a === "predUsl") {
        eHelp.style.display = "none";
        eRow.style.display = "block";
    }
    else if (a === "plan") {
        eGPGKey.style.display = "none";
        eRow.style.display = "block";
    }
}
