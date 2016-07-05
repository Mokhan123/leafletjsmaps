function myFunction() {
  var map = L.map('map').setView([51.101516, 10.313446], 6);
  // improve experience on mobile
  if (map.tap) map.tap.disable();
  L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);
  map._layersMinZoom=5;


    // create custom marker
    var srf = L.icon({
        iconUrl: 'icons/SRF.png',
        iconSize:     [60, 52], // size of the icon
        iconAnchor:   [0, 26], // point of the icon which will correspond to marker's location
        popupAnchor: [35, -26]
    });

    var rp = L.icon({
        iconUrl: 'icons/RPData.png',
        iconSize:     [52, 60], // size of the icon
        iconAnchor:   [26, 60], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -60]
    });

    var p1 = L.marker([47.417563, 8.560453], {icon: srf}).addTo(map);
    var p2 = L.marker([51.233059, 6.698716], {icon: rp}).addTo(map);

    p1.bindPopup("<strong style='color: #84b819'>SRF Data</strong><br>Schweizer Rundfunk und Fernsehen | Zürich<br>Verantwortlich: Sandra Manca");
    p2.bindPopup("<strong style='color: #84b819'>RP Data</strong><br>Rheinsiche Post | Düsseldorf<br>Verantwortlich: Phil Ninh").openPopup();

    var popup = L.popup();


}
