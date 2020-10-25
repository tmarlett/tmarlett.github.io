accessToken = API_KEY;
var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

  var myMap = L.map("map", {
    center: [36.7783, -119.4179],
    zoom: 5
  });
  
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  d3.json(url, function(response) {
  
    console.log(response);
  
    var heatArray = [];
  
    for (var i = 0; i < response.features.length; i++) {
      var location = response.features[i].geometry
      console.log(location);
  
      if (location) {
        heatArray.push([location.coordinates[1], location.coordinates[0]]);
      }
    }
  
    var heat = L.heatLayer(heatArray, {
      radius: 40,
      blur: 1,
      gradient: {
        0.2: '#ffffb2',
        0.4: '#fd8d3c',
        0.6: '#fd8d3c',
        0.8: '#f03b20',
        1: '#bd0026'
      }
    }).addTo(myMap);
  
  });
  