

function start() {

let opt = document.querySelector("select");
var tex = document.querySelector(".name").value;
var tex2 = document.querySelector(".name2").value;
var tex3 = document.querySelector(".name3").value;
var tex4 = document.querySelector(".name4").value;
var tex5 = document.querySelector(".name5").value;
var tex6 = document.querySelector(".name6").value;
var exp = document.querySelector(".name7").value;
var index = opt.selectedIndex;



if (index == 0) {

var index = "sortie SKI ";


}


if (index == 1)  {

var index = "sortie Cinema ";

}

if (index == 2) {

  var index = "sortie Bowling";
}










var final = index + " <br> <br>" + "Nom : " + tex + " <br>" + "Prenom : " + tex2 + "<br>" + "Date de naissance : " + tex3 + "<br> Adresse : " + tex4 + "<br> Code postal : " + tex5 + " <br> Numéro de téléphone : " + tex6;



  Email.send({
  Host: "smtp.gmail.com",
  Username : "testrt598@gmail.com",
  Password : "mdp770@8",
  To : "testrt598@gmail.com",
  From : "testrt598@gmail.com",
  Subject : "inscription " + index,
  Body : "Formulaire remplis concernant " + final,
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
  Body : "Votre inscription pour l'activiter " + index + " à été enrengistrer avec succés. " + "<br> Voici les informations que vous avez noter. <br>" + final,
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
