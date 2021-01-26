document.getElementById('hamburger').addEventListener('click', navStatus);

// Prüfen ob die Navigation geöffnet oder geschlossen ist
function navStatus() {
  if (document.body.classList.contains('hamburger-active')) {
    navClose();
  }
  else {
    navOpen();
  }
}

// Wenn die Navi geschlossen wird, Klasse für »offen« entfernen
function navClose() {
  document.body.classList.remove('hamburger-active');
}

// Wenn die Navi geöffnet wird, Klasse für »geschlossen« entfernen
function navOpen() {
  document.body.classList.add('hamburger-active');
}


$( ".toggle-dashboard-nav").click(function(){
  $( ".left-sidebar-lg-redim").toggle(10, function(){
    if ($(".left-sidebar-lg-redim").is(":hidden")){
    $(".left-sidebar-lg-redim").hide('slow');

      $('#main-panel-content').removeClass("resize-lg-left-navigation");
      $('#main-panel-content').addClass("resize-sm-left-navigation");
    }else{
      $('#main-panel-content').removeClass("resize-sm-left-navigation");
      $('#main-panel-content').addClass("resize-lg-left-navigation");

    $(".left-sidebar-lg-redim").show('slow');
    }
  });
});
