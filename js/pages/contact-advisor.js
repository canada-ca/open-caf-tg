/* Functunalities for the contact-advisor pages.
  JQuery needs to be loaded before this file. 
*/

// Show all TCs at the filter and the list.
function showAllRegionsTCs() {
  $('[name^="centreRegion"]').show();
}

// Hide all TCs at the filter and the list.
function hideAllRegionsTCs() {
  $('[name^="centreRegion"]').hide();
}

// Show all TCs belonging to a region at the filter and the list.
function showTCsByRegion(regionID) {
  $('[name="centreRegion'+ regionID +'"]').show();
}

// Make a TC visible on the list.
function showASelectedTC(centreID) {
  $('#divTC' + centreID).show();
}

// Hide all the TCs from the list.
function hideAllTCs() {
  $('div[id^="divTC"]').hide();
}

// Get number of visible TCs at the list.
function getNumVisibleTCs() {
  return $('div[id^="divTC"]:visible').length;
}

// Show hidden fields once a region is selected.
function showRegionNotSelectedHiddenFields() {
  $('div[name="hide-if-region-not-selected"]').show();
}

// Hide fields if a region is not selected.
function hideNotSelectedHiddenFields() {
  $('div[name="hide-if-region-not-selected"]').hide();
}

// Change event for the searchByRegion dropdowns.
$('select[name="searchByRegion"]').on('change', function(e) {
  $('select[name="searchByUnit"]').val("0");
  var region = e.target.value;
  if (region === "0") {
    hideNotSelectedHiddenFields();
  } else {
    showRegionNotSelectedHiddenFields();
    hideAllRegionsTCs();
    showTCsByRegion(region);
  }
  $('span[name="numCentresText"]').html(getNumVisibleTCs());

  // This call doesn't retrigger the event.
  // It is to make all searchByRegion seletion values equal.
  $('select[name="searchByRegion"]').val(region);
});

// Change event for the searchByUnit dropdowns.
$('select[name="searchByUnit"]').on('change', function(e) {
  var unit = e.target.value;
  var region = $('select[name="searchByRegion"]')[0].value;
  if(unit === "0"){
    if (region === "0") {
      showAllRegionsTCs();
    } else {
      showTCsByRegion(region);
    }
  } else {
    hideAllTCs();
    showASelectedTC(unit);  
  }
  $('span[name="numCentresText"]').html(getNumVisibleTCs());

  // This call doesn't retrigger the event.
  // It is to make all searchByUnit seletion values equal.
  $('select[name="searchByUnit"]').val(unit);
});
