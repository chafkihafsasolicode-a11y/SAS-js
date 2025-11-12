let bibliotheque = [

    { code:10,titre: " Le Petit Prince", auteur: "Antoine de Saint-Exupéry", année:  1943, disponible: true, prix: 65  },

    { code:18,titre: "Harry Potter and the Philosopher’s Stone", auteur: " J. K. Rowling", année: 1997, disponible: true, prix: 130 },
    
    { code:20,titre: " L'Étranger", auteur: "Albert Camus", année: 1942, disponible: true, prix: 95  },

    { code:32,titre: "Le Rouge et le Noir", auteur: "Stendhal", année: 1830, disponible: false, prix: 110  },

    { code: 38, titre: "Le Seigneur des Anneaux", auteur: "J.R.R. Tolkien", année: 1954, disponible: true, prix: 200 },

    { code: 45, titre: "Atomic Habits", auteur: "James Clear", année: 2018, disponible: true, prix: 140 },

];


let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';
function element()
{
    container.innerHTML= '';
    bibliotheque.forEach((book)=>{
       


       let card = document.createElement('div');
       card.style.border = '5px solid black';
       card.style.margin = '10px auto';
       card.style.padding = '10px';
       let liste = document.createElement('h2');
       liste.innerText =  book.titre;

       let code = document.createElement('p');
       code.innerText = " code : " + book.code;
       let auteur = document.createElement('p');
       auteur.innerText = " auteur : " + book.auteur;
       let année = document.createElement('p');
       année.innerText = " année : " + book.année;
       let disponible = document.createElement('p');
       disponible.innerText = " disponible : " + book.disponible;
       let prix = document.createElement('p');
       prix.innerText = " prix : " + book.prix;
       let button = document.createElement('button');
       button.innerText = 'supprimer';


       



    


    

    
    card.style.color = 'blue';
    card.style.padding = '10px';
    card.style.border = '15px';


    card.appendChild(liste);
    card.appendChild(code);
    card.appendChild(auteur);
    card.appendChild(année);
    card.appendChild(disponible);
    card.appendChild(prix);
    card.appendChild(button);


    container.appendChild(card);
    })




    let supprimer = document.body.querySelectorAll("button");
    supprimer.forEach((button)=>{
        button.addEventListener("click", function(){
            button.parentElement.remove();
        });
    });




}
element();