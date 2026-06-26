const stores = [
  {
    id: "abelson-devoto",
    rank: 1,
    priority: 1,
    tier: "top retail",
    store: "Abelson - Devoto",
    model: "Fluvial Nero 1/2 HP",
    address: "Av. Francisco Beiro 4265, Villa Devoto, CABA",
    area: "Villa Devoto",
    lat: -34.605425,
    lng: -58.5113334,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$48.428 web ref.",
    priceNote:
      "Precio web visto el 26/06/2026 en Abelson; confirmar stock y retiro por sucursal antes de salir.",
    recommendation:
      "Misma bomba recomendada y punto muy util para Devoto / General Paz si hay stock de retiro.",
    source: "Abelson producto Fluvial Nero 115110 y punto de venta Devoto",
    sourceUrl: "https://abelson.com.ar/172210-fluvial-bomba-nero-periferica-12hp-115110.html",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.%20Francisco%20Beiro%204265%20Villa%20Devoto%20CABA",
    status: "Exacta",
  },
  {
    id: "resta-goya",
    rank: 2,
    priority: 1,
    tier: "top retail",
    store: "Resta Sanitarios - Goya",
    model: "Fluvial Nero 1/2 HP",
    address: "Goya 621, Velez Sarsfield, CABA",
    area: "Velez Sarsfield / Floresta",
    lat: -34.6296378,
    lng: -58.4894651,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$46.005 web ref.",
    priceNote:
      "Precio web visto el 26/06/2026 en Tienda Resta; confirmar retiro por sede y stock antes de salir.",
    recommendation:
      "Misma bomba exacta en CABA oeste; suma una alternativa razonable si Devoto o Floresta quedan comodos.",
    source: "Tienda Resta producto Fluvial Nero 115110 y contacto Goya",
    sourceUrl:
      "https://tiendaresta.com.ar/ficha-1542-bomba-periferica-monofasica-0-5hp-fluvial-nero-cod-115110",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Goya%20621%20Velez%20Sarsfield%20CABA",
    status: "Exacta",
  },
  {
    id: "sanitarios-chialvo-agronomia",
    rank: 3,
    priority: 1,
    tier: "top",
    store: "Sanitarios Chialvo - Agronomia",
    model: "Fluvial Nero 1/2 HP",
    address: "Av. de los Constituyentes 4090, Agronomia, CABA",
    area: "Agronomia",
    lat: -34.5850527,
    lng: -58.4887344,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$ consultar",
    priceNote:
      "Publicacion del modelo Fluvial Nero asociada al local; confirmar precio y stock por WhatsApp antes de ir.",
    recommendation:
      "Queda sobre un corredor muy util desde Devoto y cerca de General Paz / Constituyentes.",
    source: "Publicaciones de Sanitarios Chialvo / Fluvial Nero y direccion Constituyentes 4090",
    sourceUrl: "https://www.instagram.com/p/DWZoAEIFP5P/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.%20de%20los%20Constituyentes%204090%20CABA",
    status: "Exacta",
  },
  {
    id: "easy-constituyentes",
    rank: 4,
    priority: 2,
    tier: "retail",
    store: "Easy - Constituyentes",
    model: "Fluvial Nero 1/2 HP",
    address: "Av. de los Constituyentes 6020, Villa Pueyrredon, CABA",
    area: "Villa Pueyrredon",
    lat: -34.5720048,
    lng: -58.5058576,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$ consultar Easy",
    priceNote:
      "Easy publica la Fluvial Nero; disponibilidad por retiro en esta sucursal no confirmada.",
    recommendation:
      "Cadena cercana a Devoto por Constituyentes; sirve si el sitio permite retiro o reserva.",
    source: "Easy producto Fluvial Nero y sucursal Constituyentes",
    sourceUrl: "https://www.easy.com.ar/bomba-periferica-nero-1-2-hp/p",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Easy%20Constituyentes%20Av.%20de%20los%20Constituyentes%206020",
    status: "Cadena",
  },
  {
    id: "sanitarios-martelli",
    rank: 5,
    priority: 1,
    tier: "top",
    store: "CER / Sanitarios Martelli",
    model: "Fluvial Nero 1/2 HP",
    address: "Venezuela 3773, Villa Martelli, Buenos Aires",
    area: "Villa Martelli",
    lat: -34.5486512,
    lng: -58.5036757,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$59.899 web ref.",
    priceNote:
      "Presostato/CER muestra el producto exacto; la venta online puede figurar no disponible, llamar antes de ir.",
    recommendation:
      "Queda apenas del otro lado de General Paz; buen backup para Devoto si confirman stock.",
    source: "Presostato/CER producto Fluvial Nero 115110 y contacto Villa Martelli",
    sourceUrl:
      "https://www.presostato.com.ar/shop/115110-bomba-periferica-fluvial-modelo-nero-05-hp-eleva-33-mts-220v-15676",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Venezuela%203773%20Villa%20Martelli",
    status: "Exacta",
  },
  {
    id: "casa-fernandez-lanus",
    rank: 14,
    priority: 2,
    tier: "top",
    store: "Casa Fernandez - Lanus",
    model: "Fluvial Nero 1/2 HP",
    address: "Hipolito Yrigoyen 2868, Lanus, Buenos Aires",
    area: "Lanus",
    lat: -34.6897726,
    lng: -58.3883148,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$55.500 / $59.200 ref.",
    priceNote: "Referencia del informe y recomendacion; confirmar precio y stock por telefono o web.",
    recommendation:
      "Misma potencia, mismo caudal y mas altura que la Forest Garden; sigue siendo buena si queda comoda.",
    source: "Informe ChatGPT: Busqueda de motor AMBA",
    sourceUrl: "https://www.casafernandez.com.ar/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hipolito%20Yrigoyen%202868%20Lanus",
    status: "Exacta",
  },
  {
    id: "hierros-torrent",
    rank: 6,
    priority: 1,
    tier: "top",
    store: "Hierros Torrent - Villa Ortuzar",
    model: "Dogo IDB-35 1/2 HP",
    address: "Av. Triunvirato 3015/19, CABA",
    area: "Villa Ortuzar / Villa Urquiza",
    lat: -34.5849922,
    lng: -58.4650262,
    approximate: true,
    specs: { flow: "33 L/min", head: "33 m", suction: "8 m" },
    price: "$86.950 consultado",
    priceNote: "Precio visto el 25/06/2026 en Hierros Torrent; el informe tenia una referencia menor.",
    recommendation:
      "Equivalente tecnicamente fuerte; queda bastante razonable desde Devoto o CABA norte.",
    source: "Hierros Torrent producto Dogo IDB-35",
    sourceUrl:
      "https://www.hierrostorrent.com.ar/productos/bomba-de-agua-periferica-375w-1-2-hp-elevadora-para-tanques/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.%20Triunvirato%203015%20CABA",
    status: "Recomendada",
  },
  {
    id: "abelson-floresta",
    rank: 7,
    priority: 1,
    tier: "top retail",
    store: "Abelson - Floresta",
    model: "Fluvial Nero 1/2 HP",
    address: "Av. Juan B. Alberdi 3554, Floresta, CABA",
    area: "Floresta",
    lat: -34.6359846,
    lng: -58.4758785,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$48.428 web ref.",
    priceNote:
      "Precio web visto el 26/06/2026 en Abelson; confirmar stock y retiro por sucursal antes de salir.",
    recommendation:
      "Misma bomba exacta; alternativa oeste/sur de CABA si queda mejor por recorrido del dia.",
    source: "Abelson producto Fluvial Nero 115110 y punto de venta Floresta",
    sourceUrl: "https://abelson.com.ar/172210-fluvial-bomba-nero-periferica-12hp-115110.html",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.%20Juan%20B.%20Alberdi%203554%20Floresta%20CABA",
    status: "Exacta",
  },
  {
    id: "easy-almagro",
    rank: 9,
    priority: 2,
    tier: "retail",
    store: "Easy - Almagro",
    model: "Fluvial Nero 1/2 HP",
    address: "Av. Rivadavia 3666, Almagro, CABA",
    area: "Almagro",
    lat: -34.6110963,
    lng: -58.418001,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$ consultar Easy",
    priceNote:
      "Easy publica la Fluvial Nero; disponibilidad por retiro en esta sucursal no confirmada.",
    recommendation:
      "Suma cobertura para cuando ella esta por Corrientes, Almagro, Balvanera o zona centro ampliada.",
    source: "Easy producto Fluvial Nero y sucursal Almagro",
    sourceUrl: "https://www.easy.com.ar/bomba-periferica-nero-1-2-hp/p",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Easy%20Av.%20Rivadavia%203666%20Almagro",
    status: "Cadena",
  },
  {
    id: "easy-caballito-floresta",
    rank: 10,
    priority: 2,
    tier: "retail",
    store: "Easy - Rivadavia",
    model: "Fluvial Nero 1/2 HP",
    address: "Av. Rivadavia 5751, Floresta, CABA",
    area: "Caballito / Floresta",
    lat: -34.6333136,
    lng: -58.4796313,
    approximate: true,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$ consultar Easy",
    priceNote:
      "Easy publica la Fluvial Nero; disponibilidad por retiro en esta sucursal no confirmada.",
    recommendation:
      "Alternativa de cadena en CABA oeste, util si el recorrido pasa por Rivadavia.",
    source: "Easy producto Fluvial Nero y sucursal Av. Rivadavia 5751",
    sourceUrl: "https://www.easy.com.ar/bomba-periferica-nero-1-2-hp/p",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Easy%20Av.%20Rivadavia%205751%20CABA",
    status: "Cadena",
  },
  {
    id: "easy-palermo",
    rank: 11,
    priority: 2,
    tier: "retail",
    store: "Easy - Portal Palermo",
    model: "Fluvial Nero 1/2 HP",
    address: "Av. Bullrich 345, Palermo, CABA",
    area: "Palermo",
    lat: -34.5742267,
    lng: -58.4269943,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$ consultar Easy",
    priceNote:
      "Easy publica la Fluvial Nero; disponibilidad por retiro en esta sucursal no confirmada.",
    recommendation:
      "Suma un punto claro para CABA norte si ella esta trabajando por Palermo o alrededores.",
    source: "Easy producto Fluvial Nero y sucursal Portal Palermo",
    sourceUrl: "https://www.easy.com.ar/bomba-periferica-nero-1-2-hp/p",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Easy%20Portal%20Palermo%20Av.%20Bullrich%20345",
    status: "Cadena",
  },
  {
    id: "fravega-lanus",
    rank: 15,
    priority: 2,
    tier: "retail",
    store: "Fravega - Lanus",
    model: "Fluvial Nero 1/2 HP",
    address: "9 de Julio 1185, Lanus, Buenos Aires",
    area: "Lanus",
    lat: -34.7084082,
    lng: -58.3896337,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$54.805 online ref.",
    priceNote: "Precio online visto el 25/06/2026 en Fravega; stock por sucursal no confirmado.",
    recommendation:
      "Misma bomba recomendada; util si la sucursal permite retiro o si ofrece mejor financiacion.",
    source: "Fravega producto 115110",
    sourceUrl:
      "https://www.fravega.com/p/bomba-periferica-monofasica-fluvial-nero-0-5hp-115110-21214410/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Fravega%209%20de%20Julio%201185%20Lanus",
    status: "Cadena",
  },
  {
    id: "fravega-villa-del-parque",
    rank: 8,
    priority: 2,
    tier: "retail",
    store: "Fravega - Villa del Parque",
    model: "Fluvial Nero 1/2 HP",
    address: "Cuenca 3030, Villa del Parque, CABA",
    area: "Villa del Parque",
    lat: -34.6020748,
    lng: -58.4948694,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$54.805 online ref.",
    priceNote: "Precio online visto el 25/06/2026; disponibilidad por sucursal no confirmada.",
    recommendation:
      "Misma bomba en una zona muy cercana a Devoto; vale llamar o revisar retiro antes de ir.",
    source: "Fravega producto 115110 y sucursal Villa del Parque",
    sourceUrl:
      "https://www.fravega.com/p/bomba-periferica-monofasica-fluvial-nero-0-5hp-115110-21214410/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Fravega%20Cuenca%203030%20Villa%20del%20Parque%20CABA",
    status: "Cadena",
  },
  {
    id: "fravega-palermo",
    rank: 12,
    priority: 2,
    tier: "retail",
    store: "Fravega - Palermo",
    model: "Fluvial Nero 1/2 HP",
    address: "Av. Santa Fe 3181, Palermo, CABA",
    area: "Palermo",
    lat: -34.5779609,
    lng: -58.4264542,
    approximate: true,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$54.805 online ref.",
    priceNote: "Precio online visto el 25/06/2026; disponibilidad por sucursal no confirmada.",
    recommendation:
      "Misma bomba de cadena; suma cobertura para CABA norte y recorridos por trabajo.",
    source: "Fravega producto 115110 y sucursal Palermo",
    sourceUrl:
      "https://www.fravega.com/p/bomba-periferica-monofasica-fluvial-nero-0-5hp-115110-21214410/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Fravega%20Av.%20Santa%20Fe%203181%20Palermo%20CABA",
    status: "Cadena",
  },
  {
    id: "fravega-abasto",
    rank: 13,
    priority: 2,
    tier: "retail",
    store: "Fravega - Abasto",
    model: "Fluvial Nero 1/2 HP",
    address: "Av. Corrientes 3217, Abasto, CABA",
    area: "Abasto / Balvanera",
    lat: -34.6038935,
    lng: -58.4106602,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$54.805 online ref.",
    priceNote: "Precio online visto el 25/06/2026; disponibilidad por sucursal no confirmada.",
    recommendation:
      "Misma bomba de cadena; util si ella esta por Corrientes, Once, Almagro o microcentro ampliado.",
    source: "Fravega producto 115110 y sucursal Abasto",
    sourceUrl:
      "https://www.fravega.com/p/bomba-periferica-monofasica-fluvial-nero-0-5hp-115110-21214410/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Fravega%20Av.%20Corrientes%203217%20Abasto%20CABA",
    status: "Cadena",
  },
  {
    id: "fravega-avellaneda",
    rank: 16,
    priority: 2,
    tier: "retail",
    store: "Fravega - Alto Avellaneda",
    model: "Fluvial Nero 1/2 HP",
    address: "Gral. Guemes 897, Avellaneda, Buenos Aires",
    area: "Avellaneda",
    lat: -34.6753299,
    lng: -58.3667444,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$54.805 online ref.",
    priceNote: "Precio online visto el 25/06/2026; consultar disponibilidad por sucursal.",
    recommendation:
      "Alternativa de cadena para comparar financiacion o retiro si el recorrido pasa por zona sur.",
    source: "Fravega producto 115110 y sucursal Alto Avellaneda",
    sourceUrl:
      "https://www.fravega.com/p/bomba-periferica-monofasica-fluvial-nero-0-5hp-115110-21214410/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Fravega%20Gral.%20Guemes%20897%20Avellaneda",
    status: "Cadena",
  },
  {
    id: "fravega-san-justo",
    rank: 18,
    priority: 2,
    tier: "retail",
    store: "Fravega - San Justo",
    model: "Fluvial Nero 1/2 HP",
    address: "Dr. Ignacio Arieta 3429, San Justo, Buenos Aires",
    area: "San Justo",
    lat: -34.6812285,
    lng: -58.5571487,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$54.805 online ref.",
    priceNote: "Precio online visto el 25/06/2026; consultar disponibilidad por sucursal.",
    recommendation:
      "Util si queda cerca de su recorrido por oeste o conviene por cuotas/retiro.",
    source: "Fravega producto 115110 y sucursal San Justo",
    sourceUrl:
      "https://www.fravega.com/p/bomba-periferica-monofasica-fluvial-nero-0-5hp-115110-21214410/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Fravega%20Dr.%20Ignacio%20Arieta%203429%20San%20Justo",
    status: "Cadena",
  },
  {
    id: "francofia-lomas",
    rank: 17,
    priority: 2,
    tier: "",
    store: "Franco Fia - Lomas del Mirador",
    model: "Fluvial Nero 1/2 HP",
    address: "Av. General Paz 11863, Lomas del Mirador, Buenos Aires",
    area: "Lomas del Mirador",
    lat: -34.6546654,
    lng: -58.529009,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$53.169,73 web ref.",
    priceNote:
      "Producto publicado con stock el 26/06/2026; confirmar precio, horarios y modalidad de retiro.",
    recommendation:
      "Opcion exacta sobre General Paz oeste; util si queda mas cerca desde Devoto que cruzar a zona sur.",
    source: "Franco Fia producto Fluvial Nero 115110 y direccion Av. General Paz",
    sourceUrl:
      "https://www.francofia.com/habilitados-bomba-periferica-nero-1-2hp-115110-fluvial--det--FLU.BOM.115110",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.%20General%20Paz%2011863%20Lomas%20del%20Mirador",
    status: "Exacta",
  },
  {
    id: "offer-pilar",
    rank: 19,
    priority: 3,
    tier: "",
    store: "Offer - Pilar",
    model: "Offer periferica 1/2 HP",
    address: "Av. Caamano 1103, Pilar, Buenos Aires",
    area: "Pilar",
    lat: -34.4368496,
    lng: -58.8280506,
    approximate: true,
    specs: { flow: "33 L/min", head: "30 m", suction: "Ver publicacion" },
    price: "$132.368 consultado",
    priceNote: "Precio visto el 25/06/2026 en Offer; puede cambiar y depende del stock web.",
    recommendation:
      "Cumple, pero solo conviene si queda comoda por recorrido o aparece con una ventaja clara.",
    source: "Offer producto 1/2 HP 33 L/min 370 W",
    sourceUrl: "https://offer.com.ar/producto/bomba-periferica-1-2hp-33l-min-370w/",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.%20Caamano%201103%20Pilar",
    status: "Condicional",
  },
];

const map = L.map("map", {
  zoomControl: true,
  scrollWheelZoom: true,
}).setView([-34.62, -58.48], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const markers = new Map();
let userMarker = null;
let userAccuracyCircle = null;
let activeFilter = "all";
let userLocation = null;
let selectedId = new URLSearchParams(window.location.search).get("store") || stores[0].id;

function markerClass(store) {
  if (store.priority === 1) return "rank-1";
  if (store.priority === 2) return "rank-2";
  if (store.priority === 3) return "rank-3";
  return "rank-4";
}

function makeIcon(store) {
  return L.divIcon({
    className: "",
    html: `<div class="custom-marker ${markerClass(store)}"><span>${store.rank}</span></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 31],
    popupAnchor: [0, -28],
  });
}

function makeUserIcon() {
  return L.divIcon({
    className: "",
    html: '<div class="user-location-marker"><span></span></div>',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

function distanceMeters(from, to) {
  const earthRadius = 6371000;
  const lat1 = (from.lat * Math.PI) / 180;
  const lat2 = (to.lat * Math.PI) / 180;
  const deltaLat = ((to.lat - from.lat) * Math.PI) / 180;
  const deltaLng = ((to.lng - from.lng) * Math.PI) / 180;
  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function distanceFromUser(store) {
  if (!userLocation) return null;
  return distanceMeters(userLocation, store);
}

function formatDistance(meters) {
  if (meters === null || Number.isNaN(meters)) return "";
  if (meters < 950) return `${Math.round(meters / 50) * 50} m`;
  const kilometers = meters / 1000;
  const precision = kilometers < 10 ? 1 : 0;
  return `${kilometers.toFixed(precision).replace(".", ",")} km`;
}

function storeDistanceLabel(store) {
  const meters = distanceFromUser(store);
  return meters === null ? "" : formatDistance(meters);
}

function storeMatchesFilter(store, options = {}) {
  if (activeFilter === "top") return store.priority === 1;
  if (activeFilter === "retail") return store.tier.includes("retail");
  if (activeFilter === "nearby") {
    if (!userLocation) return false;
    if (options.ignoreBounds) return true;
    return map.getBounds().pad(0.02).contains([store.lat, store.lng]);
  }
  return true;
}

function sortStores(items) {
  return [...items].sort((a, b) => {
    if (userLocation) {
      const distanceDiff = distanceFromUser(a) - distanceFromUser(b);
      if (Math.abs(distanceDiff) > 25) return distanceDiff;
    }
    if (a.priority !== b.priority) return a.priority - b.priority;
    return a.rank - b.rank;
  });
}

function getVisibleStores(options = {}) {
  return sortStores(stores.filter((store) => storeMatchesFilter(store, options)));
}

function updateFilterChips() {
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === activeFilter);
  });
}

function formatApprox(store) {
  return store.approximate ? "Coordenada aproximada" : "Direccion geocodificada";
}

function renderTags(store) {
  const tags = [
    `<span class="tag ${store.priority === 1 ? "strong" : ""}">${store.status}</span>`,
    `<span class="tag">${store.specs.flow}</span>`,
    `<span class="tag">${store.specs.head}</span>`,
  ];

  const distance = storeDistanceLabel(store);
  if (distance) tags.push(`<span class="tag distance-tag">${distance}</span>`);
  if (store.area) tags.push(`<span class="tag">${store.area}</span>`);
  return tags.join("");
}

function resultsMetaText(visible) {
  if (activeFilter === "nearby" && userLocation) {
    if (!visible.length) return "No hay opciones en esta vista";
    return `${visible.length} opciones en esta vista`;
  }
  if (userLocation) return `${visible.length} opciones visibles, ordenadas por cercania`;
  return `${visible.length} opciones visibles`;
}

function renderList() {
  const visible = getVisibleStores();
  const list = document.getElementById("storeList");
  document.getElementById("resultsMeta").textContent = resultsMetaText(visible);

  if (!visible.length) {
    list.innerHTML = `
      <div class="empty-state">
        <strong>Sin opciones visibles</strong>
        <span>Aleja el mapa o usa Ver todo para ampliar la zona.</span>
      </div>
    `;
    return;
  }

  list.innerHTML = visible
    .map((store) => {
      const distance = storeDistanceLabel(store);
      const distanceLine = distance
        ? `<div class="distance-line">A ${distance} de tu ubicacion</div>`
        : "";
      const activeActions =
        store.id === selectedId
          ? `
            <div class="card-actions">
              <a class="action-link" href="${store.mapsUrl}" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.4 7-12a7 7 0 0 0-14 0c0 6.6 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
                Como llegar
              </a>
              <a class="action-link secondary" href="${store.sourceUrl}" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" /><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20.1l1.1-1.1" /></svg>
                Fuente
              </a>
            </div>
          `
          : "";

      return `
        <article class="store-card ${store.id === selectedId ? "active" : ""}">
          <button class="store-select" type="button" data-store-id="${store.id}">
            <div class="card-head">
              <span class="rank-badge ${markerClass(store)}">${store.rank}</span>
              <div class="card-title">
                <h2>${store.model}</h2>
                <p>${store.store}</p>
              </div>
            </div>
            <div class="tag-row">${renderTags(store)}</div>
            <div class="price-line">
              <strong>${store.price}</strong>
              <span>${store.area}</span>
            </div>
            ${distanceLine}
          </button>
          ${activeActions}
        </article>
      `;
    })
    .join("");

  list.querySelectorAll(".store-select").forEach((card) => {
    card.addEventListener("click", () => selectStore(card.dataset.storeId, true));
  });
}

function updateUrl(storeId) {
  const url = new URL(window.location.href);
  url.searchParams.set("store", storeId);
  window.history.replaceState({}, "", url);
}

function selectStore(storeId, pan = false) {
  const store = stores.find((item) => item.id === storeId) || getVisibleStores()[0] || stores[0];
  selectedId = store.id;
  renderList();
  updateUrl(store.id);

  const marker = markers.get(store.id);
  if (marker) {
    marker.openPopup();
    if (pan) {
      map.flyTo([store.lat, store.lng], Math.max(map.getZoom(), 13), { duration: 0.5 });
    }
  }
}

function refreshMarkers() {
  markers.forEach((marker) => marker.remove());
  markers.clear();

  getVisibleStores().forEach((store) => {
    const distance = storeDistanceLabel(store);
    const distanceLine = distance ? `<br>${distance} de tu ubicacion` : "";
    const popup = `
      <div class="popup-title">${store.model}</div>
      <div class="popup-meta">${store.store}<br>${store.price}<br>${store.status}${distanceLine}</div>
      <div class="popup-actions">
        <a href="${store.mapsUrl}" target="_blank" rel="noopener">Como llegar</a>
        <a href="${store.sourceUrl}" target="_blank" rel="noopener">Fuente</a>
      </div>
    `;
    const marker = L.marker([store.lat, store.lng], { icon: makeIcon(store) })
      .addTo(map)
      .bindPopup(popup);
    marker.on("click", () => selectStore(store.id));
    markers.set(store.id, marker);
  });
}

function refreshView(options = {}) {
  updateFilterChips();
  const visible = getVisibleStores();

  if (visible.length && !visible.some((store) => store.id === selectedId)) {
    selectedId = visible[0].id;
  }

  refreshMarkers();
  renderList();

  if (options.fit) fitVisible();
}

function fitVisible() {
  const visible = getVisibleStores({ ignoreBounds: activeFilter === "nearby" });
  const points = visible.map((store) => [store.lat, store.lng]);
  if (userLocation) points.push([userLocation.lat, userLocation.lng]);

  if (!points.length) return;
  const bounds = L.latLngBounds(points);
  map.fitBounds(bounds.pad(0.18), { maxZoom: 13 });
}

function setFilter(filter) {
  activeFilter = filter;
  refreshView();
  if (filter !== "nearby") fitVisible();
}

function setLocationStatus(message) {
  document.body.dataset.locationStatus = message;
}

function setLocationLoading(isLoading) {
  const button = document.querySelector('.filter-chip[data-filter="nearby"]');
  if (!button) return;
  button.disabled = isLoading;
  button.classList.toggle("loading", isLoading);
  button.textContent = isLoading ? "Buscando..." : "Cerca mio";
}

function updateUserMarker() {
  if (!userLocation) return;
  const point = [userLocation.lat, userLocation.lng];

  if (!userMarker) {
    userMarker = L.marker(point, { icon: makeUserIcon(), zIndexOffset: 1000 }).addTo(map);
  } else {
    userMarker.setLatLng(point);
  }

  if (userAccuracyCircle) {
    userAccuracyCircle.setLatLng(point);
    userAccuracyCircle.setRadius(Math.min(userLocation.accuracy || 120, 1800));
  } else {
    userAccuracyCircle = L.circle(point, {
      radius: Math.min(userLocation.accuracy || 120, 1800),
      color: "#0d5f63",
      fillColor: "#0d5f63",
      fillOpacity: 0.12,
      opacity: 0.28,
      weight: 1,
    }).addTo(map);
  }
}

function applyUserLocation(position) {
  userLocation = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
    accuracy: position.coords.accuracy,
  };

  activeFilter = "nearby";
  updateUserMarker();
  setLocationStatus("Ubicacion activa");
  map.setView([userLocation.lat, userLocation.lng], Math.max(map.getZoom(), 12), { animate: true });

  const nearest = getVisibleStores({ ignoreBounds: true })[0];
  if (nearest) selectedId = nearest.id;
  refreshView();
  showToast("Opciones ordenadas por cercania");
}

function requestUserLocation() {
  if (!navigator.geolocation) {
    setLocationStatus("Ubicacion no disponible");
    showToast("Este navegador no permite ubicacion");
    return;
  }

  setLocationLoading(true);
  setLocationStatus("Buscando ubicacion...");
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLocationLoading(false);
      applyUserLocation(position);
    },
    () => {
      setLocationLoading(false);
      setLocationStatus("Ubicacion no activada");
      showToast("No se pudo obtener la ubicacion");
      if (activeFilter === "nearby") setFilter("all");
    },
    {
      enableHighAccuracy: false,
      maximumAge: 300000,
      timeout: 12000,
    },
  );
}

async function copyCurrentLink() {
  const url = window.location.href;
  try {
    await navigator.clipboard.writeText(url);
    showToast("Link copiado");
  } catch {
    showToast(url);
  }
}

async function shareMap() {
  const store = stores.find((item) => item.id === selectedId);
  const shareData = {
    title: "Mapa de bombas AMBA",
    text: store ? `${store.model} - ${store.store}` : "Mapa de bombas AMBA",
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  await copyCurrentLink();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;
    if (filter === "nearby" && !userLocation) {
      activeFilter = "nearby";
      updateFilterChips();
      requestUserLocation();
      return;
    }
    setFilter(filter);
  });
});

document.getElementById("fitButton").addEventListener("click", fitVisible);
document.getElementById("shareButton").addEventListener("click", shareMap);

map.on("moveend zoomend", () => {
  if (activeFilter === "nearby" && userLocation) {
    refreshView();
  }
});

refreshView({ fit: true });
selectStore(selectedId);

window.addEventListener("resize", () => {
  window.setTimeout(() => map.invalidateSize(), 120);
});
