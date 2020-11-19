var mapa;

function initMap() {

  var configuracoes = {
    center: {lat: -25.45212754, lng: -49.25276682},
    zoom: 15
  }
      
  mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: {lat: -25.45212754, lng: -49.25276682},
    title: "PUCPR",
    map: mapa
  });

  var marcador = new google.maps.Marker({
    position: {lat: -25.477403, lng: -49.291582},
    title: "Loja Palladium",
    map: mapa
  });

  var marcador = new google.maps.Marker({
    position: {lat: -25.537607, lng: -49.204021},
    title: "Loja Palladium",
    map: mapa
  });

}
