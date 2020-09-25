function actif(id) {
     document.getElementById('1').style.background='transparent' ;
     document.getElementById('2').style.background='transparent';
     document.getElementById('3').style.background='transparent';
     document.getElementById('4').style.background='transparent';
     document.getElementById(id).style.background='white' ;
     document.getElementById(id).style.borderRadius='25px';
     

 }

function color(id) {
     document.getElementById('1').style.color='#999';
     document.getElementById('2').style.color='#999';
     document.getElementById('3').style.color='#999';
     document.getElementById('4').style.color='#999';
     document.getElementById(id).style.color='black';

 }

$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1100);
            }
        }
    });
});

