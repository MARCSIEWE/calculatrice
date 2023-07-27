const resultat = document.querySelector('.resul');
const operation = document.querySelector('.operation');
const bouton = [...document.querySelectorAll('.bouton')];

const alltouches = bouton.map(button => button.value);
console.log(alltouches);

document.addEventListener('click', (e) => {
   const valeur = e.target.value;
   calculer(valeur);
})

const calculer = (valeur) =>{
    if(alltouches.includes(valeur)){
        switch(valeur){
            case 'C':
                operation.textContent = "";
                resultat.textContent = "";
                break;
            case 'x':
                valeur= '*';
                operation.textContent += valeur;
                break; 
            case '=':
                const calcul = eval(operation.textContent);
                resultat.textContent = calcul;
                break;
            default:
                operation.textContent += valeur;
        }
    }
}

window.addEventListener('error', (e) =>{
    resultat.textContent = "MATH ERROR";
})