

const inputFeld = document.querySelector("#input");
const trennungsPosFeld = document.querySelector("#position");
const radioBtnDavor = document.querySelector("#dT");
const outputVorne = document.querySelector(".outputVorne");
const outputHinten = document.querySelector(".outputHinten");
const aktuelleOption = document.querySelector("h2");

const btn = document.querySelector("#subBTN");

let index = 0;
let textToTrim = "";

const radioText = () => radioBtnDavor.checked ? aktuelleOption.innerHTML = "AUSGABE MIT WORT DAVOR" : aktuelleOption.innerHTML = "AUSGABE MIT WORT DANACH";  


const cutME = () =>{
    let aktuellerInput = inputFeld.value;
    let aktuelleTrennPos = trennungsPosFeld.value;

    if(aktuellerInput.includes(aktuelleTrennPos)){
       getPOS(index);
      
    }else{
        outputVorne.innerHTML = "Zeichen ist im Input nicht vorhanden";
        outputHinten.innerHTML = aktuellerInput;
    }
}


const getPOS = (indexPos)=> {
    if(textToTrim.includes(trennungsPosFeld.value)){

        if(radioBtnDavor.checked){
            let ausgabeVorne = textToTrim.replace(trennungsPosFeld.value,"")
            outputVorne.innerHTML = ausgabeVorne;
            outputHinten.innerHTML = inputFeld.value.replace(ausgabeVorne,"");

        }else{
            outputVorne.innerHTML =  textToTrim;
            outputHinten.innerHTML = inputFeld.value.replace(textToTrim,"")       
         }

        index = 0;
        textToTrim = "";

    } else{
        textToTrim = inputFeld.value.slice(0,index);
        index++;
        getPOS(index);
    }
}



//### 

let leverControl = document.getElementById("leverControl");

leverControl.addEventListener('click', () => {
  gsap.fromTo(".lever", 
    { rotate: -80}, 
    { rotate: 30, duration:"1", repeat: 0, ease: "Sine.out"}
    
  );
  btn.click();
}, { once: false });