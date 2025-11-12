



let bibliotheque=JSON.parse(localStorage.getItem("bibliotheque"));

let form =document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();


let book={
    code: document.getElementById("code").value,
    titre: document.getElementById("nom").value,
    auteur: document.getElementById("auteur").value,
    disponible: document.getElementById("disponible").value === "true",
    
    
};

bibliotheque.push(book);
localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
alert("book added successfully");


});












