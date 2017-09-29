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

        var tapTarget;

        Materialize.scrollFire([{
            selector: '[name=form]',
            offset: 100,
            callback: function() {
                clearTimeout(tapTarget);
                $('.tap-target').tapTarget('close');
            }
        }, {
            selector: '.section-1',
            offset: 100,
            callback: function() {
                tapTarget = setTimeout(function() {
                    $('.tap-target').tapTarget('open');
                }, 5000);
            }
        }]);
    }); // end of document ready
})(jQuery); // end of jQuery name space