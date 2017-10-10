import "./imask.js";
import "../css/main.scss";
import "whatwg-fetch";

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


    $("#send-email").click(
      function() {
        var name = ($("#name").val() == "" || $("#name").hasClass("invalid")) ? null : $("#name").val();
        var phone = ($("#phone").val() == "" || $("#phone").hasClass("invalid")) ? null : $("#phone").val();
        var email = ($("#email").val() == "" || $("#email").hasClass("invalid")) ? null : $("#email").val();

        if (!name || !phone || !email) {
          console.error("form error")
        } else {
          var message = {
            from: "order@vvnab.site",
            to: "vvnab@mail.ru",
            subject: `Заказ сайта`,
            text: `Имя: ${name}\nТелефон: ${phone}\nE-Mail: ${email}`
          };
          $("#send-email").attr("disabled", true);
          fetch("https://api-driver.taxi21.ru/utils/mail?mail-access-key=123456", {
            method: "POST",
            mode: "cors",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
          })
            .then(result => {
              console.log("OK", name, phone, email);
              Materialize.toast('Сообщение успешно отправлено', 4000, "red");
            })
            .catch(error => console.error(error));
        }
      }
    )
  }); // end of document ready
})(jQuery); // end of jQuery name space
