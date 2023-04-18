const invitati = ["giuseppe@gmail", "alessando@llibero", "mario@hotmail", "siamone@gmail", "marco@libero"]
console.log (invitati)
let controllo = prompt("inserire email di invito")
let messaggio;


for (let i = 0; i < invitati.length; ++i) {
    const invito = invitati[i];
    
    if(controllo == invito){
        messaggio = "benvenuto"
        document.getElementById("invito").innerText = messaggio
        console.log(messaggio)
        break;

    }else if (controllo!= invito){
        messaggio = "Il suo invito non è valido"
        document.getElementById("invito").innerText = messaggio
        console.log(messaggio)

    }

}

