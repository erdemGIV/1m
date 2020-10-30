document.getElementById("bio").innerHTML = "Erdem Güzel - 1996";

let intro1 = document.getElementById("intro1");
let mesaj = document.getElementById("mesaj");

mesaj.innerText = intro1.innerHTML;

let tumListeler = document.getElementsByTagName("ul");
let sehirler = tumListeler[0];

tumElemanlar = sehirler.getElementsByTagName("li");

for(i = 0; i < tumElemanlar.length; i++) {
    console.log(tumElemanlar[i].innerHTML); // Burada innerHTML ile içeriği gösteriyoruz.
}



let classElemanlari = document.getElementsByClassName("intro1");

console.log(classElemanlari[0].innerHTML);


// query selector

let queryElemanlari = document.querySelectorAll("p.intro1");
console.log(queryElemanlari.length); // Burası aslında p taglarından kaç tanesinin intro1 class'ını kullandığını gösterdi.


// byName

let isimElemanlari = document.getElementsByName("musteriAdi");
console.log(isimElemanlari[0].value);


// AddEventListener

let erdem = document.getElementById("erdem").addEventListener("click", rengiDegistir);

function rengiDegistir() {
    document.getElementById("div1").style.color = "red";
    isimElemanlari[0].value = "Derin";
}