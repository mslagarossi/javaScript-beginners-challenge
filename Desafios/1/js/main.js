
function conferesenha(){
    var pass = document.getElementById("senha").value;
    var regex= /[0-9]/; //determina que só recebe números. antes tava /^[0-9]+$;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; //só recebe caracteres especiais

    if(pass.length < 4 && pass !== ""){ //	Less than four characters
        document.getElementById("resultado_senha").innerHTML = "1 - Meh, less than four characters?";
    } 
    //Less than nine characters
    else if (pass.length > 4 && pass.length < 9){
        document.getElementById("resultado_senha").innerHTML = "2";
    } 
    //More than eight characters and all letters
    else if (!pass.match(regex) && pass.length > 8 && !pass.match(format)){ 
        document.getElementById("resultado_senha").innerHTML = "3 - only letters, huh!";
    }
    
    //More than eight characters includes a number
    else if(pass.match(regex) && 12 > pass.length > 8 && !pass.match(format)){
        document.getElementById("resultado_senha").innerHTML = "4 - you're getting there!";
    }

    //More than eight characters includes a number and special character
    else if(pass.match(format) && pass.match(regex) && 12>pass.length > 8){
        document.getElementById("resultado_senha").innerHTML = "5 - Almost perfect!";
    } 
    //More than twelve characters includes a number
    else if (pass.length > 12 && pass.match(regex) && !pass.match(format)){
        document.getElementById("resultado_senha").innerHTML = "6 - If you include a special character, this would be invencible";
    }

    //More than twelve characters includes a number and special character
    else if (pass.length > 12 && pass.match(regex) && pass.match(format)){
        document.getElementById("resultado_senha").innerHTML = "7 - Wow, now that's a good security!";
    }

    /*else if (typeof pass === 'string' && pass.length > 8){
        document.getElementById("resultado_senha").innerHTML = "3";
    } *//*else if(typeof pass == 'number' || typeof pass == 'symbol' && pass.length > 8) {
        document.getElementById("resultado_senha").innerHTML = "4";
    }*/
    
    else {
        document.getElementById("resultado_senha").innerHTML = "0 - I think something went wrong. Try again.";
    }
}
