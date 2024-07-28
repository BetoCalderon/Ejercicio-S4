function determinarGrupo() {
    const letra = document.getElementById("letraInput").value.toLowerCase();

    let grupo;

    if ("aeiou".includes(letra)) {
        grupo = "A";
    } else if ("bcdfg".includes(letra)) {
        grupo = "B";
    } else if ("hjklm".includes(letra)) {
        grupo = "C";
    } else if ("npqr".includes(letra)) {
        grupo = "D";
    } else if ("stvwxyz".includes(letra)) {
        grupo = "E";
    } else {
        grupo = "Desconocido";
    }

    console.log("La letra" + {letra} + "pertenece al grupo " + {grupo});
}