$(window).bind("load", function() {
  // manually size the right column
  $(".rightcolumn").height($(".wrapper").outerHeight(true));

  // make pdf image same height as publication info
  $('.publication').equalHeights();

  // make book info same height as book cover image
  $('.book').equalHeights();

  // give ids to all headers
  $("h1, h2, h3, h4, h5").each(function() {
    var hyphenated = $(this).text().toLowerCase().replace(/\s/g,'-');
    $(this).attr('id',hyphenated);
  });

  // grab a map for contact section
  var map = L.map('map').setView([59.347042, 18.073327], 2);

  // add an OpenStreetMap tile layer
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(map);

  var orangeIcon = L.icon({
      iconUrl: './resources/img/address-icon.png',
      shadowUrl: './resources/img/blank.png',

      iconSize:     [24, 24], // size of the icon
      shadowSize:   [24, 24], // size of the shadow
      iconAnchor:   [12, 24], // point of the icon which will correspond to marker's location
      shadowAnchor: [0, 0],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  // add a marker in the given location, attach some popup content to it and open the popup
  L.marker([59.347042, 18.073327], {icon: orangeIcon}).addTo(map);


});

// $(document).ready(function() {
// });

