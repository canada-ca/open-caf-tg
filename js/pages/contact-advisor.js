/* Functunalities for the contact-advisor pages.
  JQuery needs to be loaded before this file. 
*/

// Change event for the searchByRegion dropdowns.
$('select[name="searchByRegion"]').on('change', function(e) {
  $('select[name="searchByUnit"]').val("0");
  var region = e.target.value;
  switch(region) {
    case "0":
      $('option[name="searchByUnitOpt1"]').show();
      $('option[name="searchByUnitOpt2"]').show();
      $('#divTC1').show();
      $('#divTC2').show();
      $('span[name="numCentresText"]').html("2");
      break;
    case "1":
      $('option[name="searchByUnitOpt1"]').show();
      $('option[name="searchByUnitOpt2"]').hide();
      $('#divTC1').show();
      $('#divTC2').hide();
      $('span[name="numCentresText"]').html("1");
      break;
    case "2":
      $('option[name="searchByUnitOpt1"]').hide();
      $('option[name="searchByUnitOpt2"]').show();
      $('#divTC1').hide();
      $('#divTC2').show();
      $('span[name="numCentresText"]').html("1");
      break;
  }
  // This call doesn't retrigger the event.
  // It is to make all searchByRegion seletion values equal.
  $('select[name="searchByRegion"]').val(region);
});

// Change event for the searchByUnit dropdowns.
$('select[name="searchByUnit"]').on('change', function(e) {
  var unit = e.target.value;
  switch(unit) {
    case "0":
      if ($('select[name="searchByRegion"]')[0].value === "0") {
        $('#divTC1').show();
        $('#divTC2').show();
        $('span[name="numCentresText"]').html("2");        
      }
      break;
    case "1":
      $('#divTC1').show();
      $('#divTC2').hide();
      $('span[name="numCentresText"]').html("1");
      break;
    case "2":
      $('#divTC1').hide();
      $('#divTC2').show();
      $('span[name="numCentresText"]').html("1");
      break;
  }
  // This call doesn't retrigger the event.
  // It is to make all searchByUnit seletion values equal.
  $('select[name="searchByUnit"]').val(unit);
});
