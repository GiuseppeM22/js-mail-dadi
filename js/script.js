const invitati = ["giuseppe@gmail", "alessando@llibero", "mario@hotmail", "siamone@gmail", "marco@libero"]
console.log (invitati)
let controllo = prompt("inserire email di invito")
let messaggio;


for (let i = 0; i < invitati.length; i++) {
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


//soluzione corretta 

/*

const invitati = ["giuseppe@gmail", "alessando@llibero", "mario@hotmail", "siamone@gmail", "marco@libero"]
console.log (invitati)
let controllo = prompt("inserire email di invito")

let mailAutorizzata = false -----variabile di appoggio per poteer uscire fuori dal ciclo. parte dal valore di defoult ovvero falso...serve per "salvare il messagggio in questa variabile e poter uscire dal ciclo"


for (let i = 0; i < invitati.length; i++) {
    const invito = invitati[i];
    
    if(controllo == invito){
        mailAutorizzata = true
        cosi facendo il ciclo non andra anche a scrivere quelle non autorizzate
} 
poi fuori dal ciclo ci andiamo a scriver l'if per poter stampare in pagina o in console il messaggio

    if(mailAutorizzata == true){
        console.log ("benvenuto")
    }else {
        console.log ("il suo invito non è valido")
    }   

*/

