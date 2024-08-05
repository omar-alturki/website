(function($) {
 
 
 
 
    /* Contact Form
       * ------------------------------------------------------ */
      var clContactForm = function() {
           
       /* local validation */
       $('#contactForm').validate({
       
           /* submit via ajax */
           submitHandler: function(form) {
   
               var sLoader = $('.submit-loader');
   
               $.ajax({
   
                   type: "POST",
                   url: "inc/sendEmail.php",
                   data: $(form).serialize(),
                   beforeSend: function() { 
   
                       sLoader.slideDown("slow");
   
                   },
                   success: function(msg) {
   
                       // Message was sent
                       if (msg == 'OK') {
                           sLoader.slideUp("slow"); 
                           $('.message-warning').fadeOut();
                           $('#contactForm').fadeOut();
                           $('.message-success').fadeIn();
                       }
                       // There was an error
                       else {
                           sLoader.slideUp("slow"); 
                           $('.message-warning').html(msg);
                           $('.message-warning').slideDown("slow");
                       }
   
                   },
                   error: function() {
   
                       sLoader.slideUp("slow"); 
                       $('.message-warning').html("Something went wrong. Please try again.");
                       $('.message-warning').slideDown("slow");
   
                   }
   
               });
           }
   
       });
   };
   
      /* AjaxChimp
       * ------------------------------------------------------ */
      var clAjaxChimp = function() {
           
       $('#mc-form').ajaxChimp({
           language: 'es',
           url: cfg.mailChimpURL
       });
   
       // Mailchimp translation
       //
       //  Defaults:
       //	 'submit': 'Submitting...',
       //  0: 'We have sent you a confirmation email',
       //  1: 'Please enter a value',
       //  2: 'An email address must contain a single @',
       //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
       //  4: 'The username portion of the email address is invalid (the portion before the @: )',
       //  5: 'This email address looks fake or invalid. Please enter a real email address'
   
       $.ajaxChimp.translations.es = {
           'submit': 'Submitting...',
           0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
           1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
           2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
           3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
           4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
           5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
       } 
   
   };
   
   
   (function ssInit() {
           
       clPreloader();
       clMenuOnScrolldown();
       clOffCanvas();
       clPhotoswipe();
       clStatCount();
       clMasonryFolio();
       clSlickSlider();
       clSmoothScroll();
       clPlaceholder();
       clAlertBoxes();
       clContactForm();
       clAOS();
       clAjaxChimp();
       clBackToTop();
   
   })();
       
       
   })(jQuery);