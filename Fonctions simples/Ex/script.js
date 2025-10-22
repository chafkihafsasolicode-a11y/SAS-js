function max(a ,b ,c) {
    if (a>=b && a>=c){
        return a;
    }
    else if (b>=a && b>=c) {
        return b;
    }
    else {
        return c;
    }
}
let maximum = max(100, 90,3);
console.log("Le maximum est : " + maximum);