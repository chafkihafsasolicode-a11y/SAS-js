let nombre1 = prompt(" entrez le premier nombre :");
let opération = prompt("entrez l'opération ( + , - , * , / ) :");
let nombre2 = prompt("entrez le deuxième nombre :");

switch (opération) {
case "+":
    alert(+nombre1 + +nombre2);
    break;
    case "-":
        alert (nombre1 - nombre2);
        break;
        case "*":
            alert (nombre1 * nombre2);
            break;
            case "/":
                alert (nombre1 / nombre2);
                break;
if (nombre2 != 0) {
    alert (nombre1 / nombre2);
} else {
    alert ("erreur");
}
default: alert("erreur:(try again")







}