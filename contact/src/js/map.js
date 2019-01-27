const url="https://opendata.paris.fr/api/records/1.0/search/?dataset=cinemas-a-paris&facet=art_et_essai&facet=arrondissement";
var mymap = L.map('map').setView([48, 2], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGlhbWUyMDE4IiwiYSI6ImNqbnZqbGgyOTA5emQzcmtqNTViaHY5dzQifQ.KkU6fYWB4QBMNVnB899yVA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
