 let ad = prompt("Adınızı daxil edin:")

let limit = Math.floor(Math.random() * 13 + 2);
let limit1 = Math.floor(Math.random() * 13 + 2);
let limit2 = Math.floor(Math.random() * 13 + 2);
let reng = Math.floor(Math.random() * 4);
let reng1 = Math.floor(Math.random() * 4);
let reng2 = Math.floor(Math.random() * 4);




// Kart nomreleri
if (limit == 11) {
    netice = `Valent`;

}

else if (limit == 12) {

    netice = `Dama`;


}
else if (limit == 13) {

    netice = `Karol`;


}
else if (limit == 14) {

    netice = `Tuz`;
}

else if (limit == 10) {

    netice = `10`;


}

else if (limit == 9) {

    netice = `9`;


}

else if ( limit == 8){
netice = `8`;


}

else if (limit == 7) {

    netice = `7`;


}
else if (limit == 6) {

    netice = `6`;


}

else if (limit == 5) {

    netice = `5`;


}

else if (limit == 4) {

    netice = `4`;


}


else if (limit == 3) {

    netice = `3`;


}

else if (limit == 2) {

    netice = `2`;


}
// kart nomreleri son

// kart rengleri

if (reng == 0) {
    et = `Qara`;

}

else if (reng == 1) {

    et = `Kerpic`;


}
else if (reng == 2) {

    et = `Xac`;


}
else if (reng == 3) {

    et = `Urek`;
}
// kart rengleri son


// Kart nomreleri
if (limit1 == 11) {
    a = `Valent`;

}

else if (limit1 == 12) {

    a = `Dama`;


}
else if (limit1 == 13) {

    a = `Karol`;


}
else if (limit1 == 14) {

    a = `Tuz`;
}

else if (limit1 == 10) {

    a = `10`;


}

else if (limit1 == 9) {

    a = `9`;


}

else if ( limit1 == 8){
a = `8`;


}

else if (limit1 == 7) {

    a = `7`;


}
else if (limit1 == 6) {

    a = `6`;


}

else if (limit1 == 5) {

    a = `5`;


}

else if (limit1 == 4) {

    a = `4`;


}


else if (limit1 == 3) {

    a = `3`;


}

else if (limit1 == 2) {
1
    a = `2`;


}
// kart nomreleri son

// kart rengleri

if (reng1 == 0) {
    et1 = `Qara`;

}

else if (reng1 == 1) {

    et1 = `Kerpic`;


}
else if (reng1 == 2) {

    et1 = `Xac`;


}
else if (reng1 == 3) {

    et1 = `Urek`;
}
// kart rengleri son

if (limit2 == 11) {
    b = `Valent`;

}

else if (limit2 == 12) {

    b = `Dama`;


}
else if (limit2 == 13) {

    b = `Karol`;


}
else if (limit2 == 14) {

    b = `Tuz`;
}

else if (limit2 == 10) {

    b = `10`;


}

else if (limit == 9) {

    b = `9`;


}

else if ( limit2 == 8){
b = `8`;


}

else if (limit2 == 7) {

    b = `7`;


}
else if (limit2 == 6) {

    b = `6`;


}

else if (limit2 == 5) {

    b = `5`;


}

else if (limit2 == 4) {

    b = `4`;


}


else if (limit2 == 3) {

    b = `3`;


}

else if (limit2 == 2) {

    b = `2`;


}
// kart nomreleri son

// kart rengleri

if (reng2 == 0) {
    et2 = `Qara`;

}

else if (reng2 == 1) {

    et2 = `Kerpic`;


}
else if (reng2 == 2) {

    et = `Xac`;


}
else if (reng2 == 3) {

    et2 = `Urek`;
}
// kart rengleri son

const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

const card1 = document.querySelector(".card1__inner");

card1.addEventListener("click", function (e) {
  card1.classList.toggle('is-flipped1');
});


const card2 = document.querySelector(".card2__inner");

card2.addEventListener("click", function (e) {
  card2.classList.toggle('is-flipped2');
});





document.getElementById("ad").innerHTML = ad;
document.getElementById("cevab").innerHTML = netice + ' ' + et;
document.getElementById("cevab1").innerHTML = a + ' ' + et1;
document.getElementById("cevab2").innerHTML = b + ' ' + et2;b

