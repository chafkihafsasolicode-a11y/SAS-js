let livres = [
{ titre:"Le Petit Prince ", auteur:"Antoine de Saint-Exupéry",prix:65},
{titre:"Harry Potter à l’école des sorciers",auteur: "J. K. Rowling",prix:130} ,
  {titre:"Les Misérables",auteur:"Victor Hugo" ,prix:150},
];

livres.forEach((livre)=> console.log(livre.titre +" "+ livre.auteur));

//totale des prix;
let total=0;
livres.forEach((livre)=> total+= livre.prix);
console.log("le total:"+ total);

//livres le prix est supérieur à 100 DH;
livres.forEach((livre)=> {if(livre.prix>=100){console.log(livre.titre);}});
let taille= livres.length;
console.log(livres[taille -1].titre);

