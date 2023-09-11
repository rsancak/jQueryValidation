$(document).ready(function () {
  $.validator.setDefaults({
    highlight: function (element) {
      $(element).closest(".form-group").addClass("error-valid");
    },
    unhighlight: function (element) {
      $(element).closest(".form-group").removeClass("error-valid");
    },
    errorElement: "span",
    errorClass: "error-span",
    errorPlacement: function (error, element) {
      if (element.parent(".input-group").length ||
        element.prop("type") === "checkbox" ||
        element.prop("type") === "radio"
      ) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

  $("form").validate({
    rules: {
      mail: {
        required: true,
        maxlength: 255
      },
      confirmMail: {
        required: true,
        equalTo: "#mail",
        maxlength: 255
      },
      password: {
        required: true,
        minlength: 10
      },
      confirmPass: {
        required: true,
        minlength: 10,
        equalTo: "#password"
      },
      agree: "required"
    },
    messages: {
      email: {
        required: "Please enter your email address.",
      },
      confirmMail: {
        required: "Confirm your email address.",
        equalTo: "Emails do not match."
      },
      password: {
        required: "Please choose a password."
      },
      confirmPass: {
        required: "Confirm your password.",
        equalTo: "Passwords do not match."
      },
      agree: {
        required: "You must agree to terms of service."
      }
    }
  });
});