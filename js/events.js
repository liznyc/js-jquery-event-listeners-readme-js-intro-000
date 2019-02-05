function getIt(){
  $('p').on("eventname", function(){
      return alert("Hey!");//action you want taken
  });
}

function frameIt(){
  $('img').on('load', function(){
    $("img").addClass("tasty")
  });
}

function pressIt(){
$(document).on('keydown', function(key) {
if(key.which == “g”){
alert('G was pressed');
}
});
}

function submitIt(){
$("form").on("submit", function() {
    alert('your form is going to be submitted now');
    return;
});
}
//define functions here

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();
  submitIt();

// call functions here

});
