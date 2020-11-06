function rest() {
 var firstNumber= document.getElementById('firstNumber').value ;
 var secondNumber= document.getElementById('secondNumber').value ;
 var result=(firstNumber % secondNumber) ;
return(result) ;
}

function displayAlert() {
    var myResult= rest () ;
    alert (myResult) ;
}