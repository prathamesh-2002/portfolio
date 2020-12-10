
  		document.body.classList.add('js-loading');
  		document.querySelector(".loader-wrapper, .loader, label").classList.add('js-lloading');

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

	    

  		emailjs.init('user_joXljjqqBz2oedqlRwY9U');
  		document
				.querySelector("#form")
				.addEventListener("submit", function (event) {
					event.preventDefault();

					document.querySelector(
									"#send"
								).innerHTML = "Sending...";

					var uName = document
						.querySelector("#form")
						.getElementsByTagName("input")[0].value;
					var uEmail = document
						.querySelector("#form")
						.getElementsByTagName("input")[1].value;
					var uMessage = document
						.querySelector("#form")
						.getElementsByTagName("textarea")[0].value;

					var element = document.getElementById("#send");

					var templateParams = {
						from_name: uName ,
						email: uEmail ,
						message: uMessage ,
					};

					emailjs.send("service_z85sh8v", "template_lxn6ocl", templateParams)
							.then(
								function (response) {
									console.log(
										"SUCCESS!",
										response.status,
										response.text
									);

									document.querySelector(
										"#send"
									).innerHTML = "<img id='done' src='images/check.png'> Sent";

									document.getElementById("send").style.color = "#10100a";
									document.getElementById("send").style.backgroundColor = "#00e677";
								},
								function (error) {
									console.log("FAILED...", error);

									document.querySelector(
										"#send"
									).innerHTML = "<img id='done' src='images/cross.png'> Failed";

									document.getElementById("send").style.color = "#10100a";
									document.getElementById("send").style.backgroundColor = "red";
								}
							);
					});
		

			var $animation_elements = $('.fadeIn, .fadeInBottom, .centerLine, .arrow, .arrowup');
			var $window = $(window);

			function check_if_in_view() {
 			 var window_height = $window.height();
 			 var window_top_position = $window.scrollTop();
 			 var window_bottom_position = (window_top_position + window_height);
 
  			$.each($animation_elements, function() {
 			   var $element = $(this);
 			  var element_height = $element.outerHeight();
 			   var element_top_position = $element.offset().top;
   				 var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
   		   if ((element_bottom_position >= window_top_position) &&
  		      (element_top_position <= window_bottom_position)) {
   			 	  $element.addClass('in-view');
   				 }// else {
    		//	  $element.removeClass('in-view');
    		//	}
  				});
			}

			$window.on('scroll resize', check_if_in_view);
			$window.trigger('scroll');
