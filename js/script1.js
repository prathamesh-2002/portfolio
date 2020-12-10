emailjs.init('user_joXljjqqBz2oedqlRwY9U');
      document
        .querySelector("#form")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          document.querySelector(
                  "#send"
                ).innerHTML = "Sending...";

          var name1 = document
            .querySelector("#form")
            .getElementsByTagName("input")[0].value;
          var email1 = document
            .querySelector("#form")
            .getElementsByTagName("input")[1].value;
          var message1 = document
            .querySelector("#form")
            .getElementsByTagName("textarea")[0].value;

          var element = document.getElementById("#send");

          var templateParams = {
            from_name: name1 ,
            email: email1 ,
            message: message1 ,
          };

          emailjs
            .send("service_z85sh8", "template_lxn6ocl", templateParams)
            .then(
              function (response) {
                console.log(
                  "SUCCESS!",
                  response.status,
                  response.text
                );

                document.querySelector(
                  "#send"
                ).innerHTML = "✔️ Sent";

                document.getElementById("send").style.color = "#fff";
                document.getElementById("send").style.backgroundColor = "#00e677";
              },
              function (error) {
                console.log("FAILED...", error);

                document.querySelector(
                  "#send"
                ).innerHTML = "❌ Failed";

                document.getElementById("send").style.color = "#fff";
                document.getElementById("send").style.backgroundColor = "red";
              }
            );
        });


        document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('js-loading');
}

(function($){
        'use strict';
        $(window).on('load', function () {
        if ($(".loader-wrapper").length > 0)
          {
              $(".loader-wrapper").fadeOut("slow");
          }
       });
    })(jQuery)

@-webkit-keyframes lol {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-300px);
  }
  33% {
    opacity: 1;
    -webkit-transform: translateX(0px);
  }
  66% {
    opacity: 1;
    -webkit-transform: translateX(0px);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(300px);
  }
}

