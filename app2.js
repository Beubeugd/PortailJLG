function bouton() {

    
    var tex = document.querySelector(".input1").value;
    var tex2 = document.querySelector(".input2").value;
    var tex3 = document.querySelector(".input3").value;
    var tex4 = document.querySelector(".input4").value;
    var tex5 = document.querySelector(".input5").value;

    localStorage.setItem('act1', tex);
    localStorage.setItem('act2', tex2);
    localStorage.setItem('act3', tex3);
    localStorage.setItem('act4', tex4);
    localStorage.setItem('act5', tex5);

}

