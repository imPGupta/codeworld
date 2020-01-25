
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$(document).click(function(event) {
    $(event.target).closest(".navbar").length || $(".navbar-collapse.show").length && $(".navbar-collapse.show").collapse("hide")
  });

$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    
});


AOS.init({
    offset:120,
    duration:1000,
});

// scroll color
$('body').scrollspy({
    target: '#myNavbar',
    offset: 250,
  });

