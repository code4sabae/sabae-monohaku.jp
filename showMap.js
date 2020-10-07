import L from "https://code4sabae.github.io/leaflet-mjs/leaflet.mjs";

const icons = {
  "漆器": "mapicon_1.png",
  "眼鏡": "mapicon_2.png",
  "繊維": "mapicon_3.png",
  "学校": "mapicon_4.png",
  "建設": "mapicon_5.png",
  "料飲": "mapicon_6.png",
  "交通": "mapicon_7.png",
  "システム": "mapicon_8.png",
  "サービス": "mapicon_9.png",
  "商業": "mapicon_9.png",
  "その他": "mapicon_10.png",
};
const getIcon = (cate) => {
  // const base = "img/";
  const base = "https://sabae-monohaku.jp/img/";
  for (const i in icons) {
    if (cate.indexOf(i) >= 0) {
      return base + icons[i];
    }
  }
  return base + "mapicon_10.png"; // その他
};
const showMap = (data) => {
  // map
  const map = L.map('divmap');
  // set 国土地理院地図 https://maps.gsi.go.jp/development/ichiran.html
  L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png", {
    attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>"',
    //maxZoom: 18,
    center: [35.94363, 136.188992],
    //zoom: 15,
  }).addTo(map);
  map.setView([35.961, 136.228], 12);
  
  const iconlayer = L.layerGroup();
  iconlayer.addTo(map);
  const lls = [];
  data.filter((d) => d.緯度 && d.経度).forEach((d) => {
    const ll = [ d.緯度, d.経度 ];
    //const fillColor = d.業種.indexOf("料飲") >= 0 ? "#BB4459" : (d.業種.indexOf("眼鏡") >= 0 ? "#48A0BE" : "#BBC459");
    //const fillColor = d.業種.indexOf("料飲") >= 0 ? "#BB4459" : "#48A0BE";
    //const marker = L.circleMarker(ll, { title: d.事業所名, fillColor, stroke: false, radius: 8, fillOpacity: 1 });
    const iw = 25;
    const icon = L.icon({
      iconUrl: getIcon(d.業種),
      // iconRetinaUrl: 'sample.png',
      iconSize: [iw, iw],
      iconAnchor: [iw / 2, iw / 2],
      popupAnchor: [0, -iw / 2],
    });
    const marker = L.marker(ll, { title: d.事業所名, icon });
    
    marker.bindPopup(`<a href=detail.html#${d.id}>${d.事業所名}</a><br>${d.業種}</a>`);
    iconlayer.addLayer(marker);
    lls.push(ll);
  });
  
  /*
  if (lls.length) {
    map.fitBounds(lls);
  }
  */
  return map;
};

export { showMap };
