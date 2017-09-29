import "./imask.js";
import "../css/main.scss";


(function($) {
    $(function() {

        // $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $("#copy-date").text(new Date().getFullYear());

        var phoneMask = new IMask(document.getElementById('phone'), {
            mask: '+{7} (000) 000-00-00'
        });

        var tapTarget = setTimeout(function() {
            $('.tap-target').tapTarget('open');
        }, 10000);

        Materialize.scrollFire([{
            selector: '.scroll-spy',
            offset: 200,
            callback: function() {
                clearTimeout(tapTarget);
                $('.tap-target').tapTarget('close');
            }
        }]);
    }); // end of document ready
})(jQuery); // end of jQuery name space