/* Functunalities for the contact-advisor-warning pages.
  JQuery needs to be loaded before this file.
  /js/utils/url.js needs to be loaded before this file.
*/

var centre_name = getURLParamValue("centre");
var centre_booking_url = null;

switch(centre_name) {
  case "tc-borden":
    centre_booking_url = "https://outlook.office365.com/owa/calendar/TransitionServicesBorden@018gc.onmicrosoft.com/bookings/"
    break;
  case "ct-borden":
    centre_booking_url = "https://outlook.office365.com/owa/calendar/ServicesdetransitionBorden@018gc.onmicrosoft.com/bookings/";
    break;
}

var book_button = $("#book-button");

if (centre_booking_url !== null) {
  book_button.attr("href", centre_booking_url);
} else {
  // In case somebody trys to tempers with the URL.
  // Redirect to the error page.
  window.location.href = "../../../404.html";
}

$("#cond1").change(function() {
  if(this.checked) {
    book_button.removeClass("disabled");
  } else {
    book_button.addClass("disabled");
  }
});
