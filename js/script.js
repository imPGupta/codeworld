// Loader
// $(document).ready(function(){
//   setTimeout(function(){
//     $('body').addClass('loaded');
//   }, 2000);
// });

// Navbar
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

// Modal

$(document).ready(function(){
  $("#myModal").modal('show');
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
