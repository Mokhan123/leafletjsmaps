function myFunction() {
  var map = L.map('map').setView([51.101516, 10.313446], 6);
  // improve experience on mobile
  if (map.tap) map.tap.disable();
  L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);
  map._layersMinZoom=5;


  $(document).ready(function() {
      $.ajax({
          type: "GET",
          url: "ddj.json",
          dataType: "json",
          mimeType: "application/json",
          success: function(data) {processData(data);}
       });
  });


  function processData(allText) {

    for (var i in allText){
             data = allText[i];

            var icon = L.icon({
              iconUrl: data.icon,
              iconSize:     [52, 60], // size of the icon
              iconAnchor:   [26, 60], // point of the icon which will correspond to marker's location
              popupAnchor: [0, -60]
          });
          if (data.company === "Zeit Online") {
            icon = L.icon({
              iconUrl: data.icon,
              iconSize:     [60, 52], // size of the icon
              iconAnchor:   [60, 26], // point of the icon which will correspond to marker's location
              popupAnchor: [-35, -26]
              });
          };
          if (data.company === "Schweizer Rundfunk und Fernsehen") {
            icon = L.icon({
              iconUrl: data.icon,
              iconSize:     [60, 52], // size of the icon
              iconAnchor:   [0, 26], // point of the icon which will correspond to marker's location
              popupAnchor: [35, -26]
              });
          };

            L.marker([data.long, data.lat], {icon: icon})
          .addTo(map)
          .bindPopup("<strong style='color: #84b819'>" + data.newsroom + "</strong><br>" + data.company + " | " + data.city + "<br>Head: " + data.head)

          }
  }


}
