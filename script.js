

function start() {



let opt = document.querySelector("#select");
var tex = document.querySelector(".name").value;
var tex2 = document.querySelector(".name2").value;
var tex3 = document.querySelector(".name3").value;
var tex4 = document.querySelector(".name4").value;
var tex5 = document.querySelector(".name5").value;
var tex6 = document.querySelector(".name6").value;
var exp = document.querySelector(".name7").value;
var tex8 = document.querySelector(".name8").value;
var index = opt.selectedIndex;



if (index == 0) {
  var texx1 = localStorage.getItem('act1');
var index = texx1;


}


if (index == 1)  {
var texx2 = localStorage.getItem('act2');
var index = texx2;

}

if (index == 2) {
var texx3 = localStorage.getItem('act3');
var index = texx3;


}

if (index == 3) {
  var texx4 = localStorage.getItem('act4');

  var index = texx4;

}

if (index == 4) {
    var texx5 = localStorage.getItem('act5');

  var index = texx5;

}





var final =  " <br> <br>" + "Nom : " + tex + " <br>" + "Prenom : " + tex2 + "<br>" + "Date de naissance : " + tex3 + "<br> Adresse : " + tex4 + "<br> Code postal : " + tex5 + " <br> Numéro de téléphone : " + tex6 + " <br> Mois dans laquelle vous vouliez faire l'activité " + tex8;



  Email.send({
  Host: "smtp.gmail.com",
  Username : "testrt598@gmail.com",
  Password : "mdp770@8",
  To : "testrt598@gmail.com",
  From : "testrt598@gmail.com",
  Subject : "inscription " + index,
  Body : "Formulaire remplis concernant " + index + "<br>" + final,
  })

var time = window.setTimeout(client, 2000);

function client() {
  


    Email.send({
  Host: "smtp.gmail.com",
  Username : "testrt598@gmail.com",
  Password : "mdp770@8",
  To : exp,
  From : "testrt598@gmail.com",
  Subject : "Votre candidature à été posté",
  Body : "Votre inscription pour l'activiter " + index + " à été enrengistrer avec succés. " + "<br> Voici les informations que vous avez noter. <br>" + final + " <br> <br> <br> Nous vous contacterons dans les plus proches délais. ",
  })
    window.location.href='https://www.centre-social-lazare-garreau-lille.fr/';

}




}











/*
function sendEmail() {
  Email.send({
  Host: "smtp.gmail.com",
  Username : "testrt598@gmail.com",
  Password : "mdp770@8",
  To : "testrt598@gmail.com",
  From : "testrt598@gmail.com",
  Subject : index,
  Body : "Formulaire",
  })
}

*/