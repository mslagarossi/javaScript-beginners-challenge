function conversion(){
    var entrance = parseInt(document.getElementById("numero_entrada").value);
    
    var conta = -entrance;
    document.getElementById("result").innerHTML = conta;
    if (isNaN(entrance)){
        document.getElementById("result").innerHTML = "I asked you to write any number and yet you chose to write a letter.. smh";
    }
    return entrance;
}