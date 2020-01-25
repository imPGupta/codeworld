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

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-156947534-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-156947534-1');
</script>
