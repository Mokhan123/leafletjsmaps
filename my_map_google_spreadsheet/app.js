function myFunction() {
  var map = L.map('map').setView([51.101516, 10.313446], 6);
  if (map.tap) map.tap.disable();
  L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);
  map._layersMinZoom=5;


// add var "code"
var code = "1dO6tGAKOBgGQ_Xajbr0pD13dG5eKl6pUIReoI9T9s84"


// loop through spreadsheet with Tabletop
    Tabletop.init({ 
    key: code,
    callback: function(sheet, tabletop){ 
      
      for (var i in sheet){
        var data = sheet[i];

          var icon = L.icon({
              iconUrl: data.icon,
              iconSize:     [52, 60], // size of the icon
              iconAnchor:   [26, 60], // point of the icon which will correspond to marker's location
              popupAnchor: [0, -60]
          });
          if (data.iconori === "left") {
            icon = L.icon({
              iconUrl: data.icon,
              iconSize:     [60, 52], 
              iconAnchor:   [60, 26], 
              popupAnchor: [-35, -26]
              });
          };
          if (data.iconori === "right") {
            icon = L.icon({
              iconUrl: data.icon,
              iconSize:     [60, 52], 
              iconAnchor:   [0, 26], 
              popupAnchor: [35, -26]
              })
            };

          L.marker([data.longitude, data.latitude], {icon: icon})
          .addTo(map)
          .bindPopup("<strong style='color: #84b819'>" + data.newsroom + "</strong><br>" + 
                      data.company + " | " + data.city + "<br>Head: " + data.head).openPopup();
      }
    },
    simpleSheet: true 
  })
  
}