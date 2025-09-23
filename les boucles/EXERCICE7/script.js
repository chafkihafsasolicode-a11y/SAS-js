let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Pour chaque i...

  for (let j = 2; j < i; j++) { // cherche un diviseur ..
    if (i % j == 0) continue nextPrime; // pas un premier, on passe au prochain i
  }

  alert( i ); // un premier
}