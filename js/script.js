
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

<<<<<<< HEAD

// copy to clipboard
$('.card-action #btn').tooltip({
    trigger: 'click',
    placement: 'bottom'
  });
  
  function setTooltip(message) {
    $('.card-action #btn').tooltip('hide')
      .attr('data-original-title', message)
      .tooltip('show');
  }
  
  function hideTooltip() {
    setTimeout(function() {
      $('.card-action #btn').tooltip('hide');
    }, 1000);
  }
=======
>>>>>>> c8f3da41026ea8ba1b7be47b023109947ec11364
