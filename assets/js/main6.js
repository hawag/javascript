function sendData() {
    var shoeSize  = document.getElementById('shoeSize').value;
    var birthDate = document.getElementById('birthDate').value;
    var result    = (((((shoeSize * 2) + 5) * 50) - birthDate) + 1769 );
    alert('Résultat :' + result) ;
}