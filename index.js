// RANDOM USER
function makeid()
{
    var text = "User";
    var possible = "0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};
// INPUT TEXT
$("input[type='text'").keypress(function(event){
  if(event.which === 13){ // 13 = Entré
  var todoText = $(this).val(); //recup new valeur
  $(this).val("");
  $(this).parent().siblings("ul").append("<li>•"+makeid()+" : "+ todoText + "</li>")
}
});
// CHANGE HEART LIKE
function myFunction(change) {
  if (change.className == "icons2") {
    change.className = "icons3"
  }
  else if (change.className == "icons3") {
    change.className = "icons2"
  }
};
