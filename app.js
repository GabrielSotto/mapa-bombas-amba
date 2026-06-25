const stores = [
  {
    id: "casa-fernandez-lanus",
    rank: 1,
    tier: "top near",
    store: "Casa Fernandez - Lanus",
    model: "Fluvial Nero 1/2 HP",
    address: "Hipolito Yrigoyen 2868, Lanus, Buenos Aires",
    area: "Lanus",
    lat: -34.6897726,
    lng: -58.3883148,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$55.500 / $59.200 ref.",
    priceNote: "Referencia del informe y recomendacion; confirmar precio y stock por telefono o web.",
    recommendation: "Primera opcion: misma potencia, mismo caudal, mas altura que la Forest Garden y retiro cercano.",
    source: "Informe ChatGPT: Busqueda de motor AMBA",
    sourceUrl: "https://www.casafernandez.com.ar/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hipolito%20Yrigoyen%202868%20Lanus",
    status: "Recomendada",
  },
  {
    id: "fravega-lanus",
    rank: 1,
    tier: "top near retail",
    store: "Fravega - Lanus",
    model: "Fluvial Nero 1/2 HP",
    address: "9 de Julio 1185, Lanus, Buenos Aires",
    area: "Lanus",
    lat: -34.7084082,
    lng: -58.3896337,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$54.805 online",
    priceNote: "Precio online visto el 25/06/2026 en Fravega; stock por sucursal no confirmado.",
    recommendation: "Misma bomba recomendada, util si la sucursal cercana permite retiro o si ofrece mejor financiacion.",
    source: "Fravega producto 115110",
    sourceUrl: "https://www.fravega.com/p/bomba-periferica-monofasica-fluvial-nero-0-5hp-115110-21214410/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fravega%209%20de%20Julio%201185%20Lanus",
    status: "Cadena",
  },
  {
    id: "hierros-torrent",
    rank: 2,
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
    recommendation: "Segunda opcion: tecnicamente cumple perfecto, pero queda menos comoda que Lanus.",
    source: "Hierros Torrent producto Dogo IDB-35",
    sourceUrl: "https://www.hierrostorrent.com.ar/productos/bomba-de-agua-periferica-375w-1-2-hp-elevadora-para-tanques/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.%20Triunvirato%203015%20CABA",
    status: "Recomendada",
  },
  {
    id: "offer-pilar",
    rank: 3,
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
    recommendation: "Tercera opcion: cumple, pero solo conviene si queda comoda o aparece muy barata.",
    source: "Offer producto 1/2 HP 33 L/min 370 W",
    sourceUrl: "https://offer.com.ar/producto/bomba-periferica-1-2hp-33l-min-370w/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.%20Caamano%201103%20Pilar",
    status: "Condicional",
  },
  {
    id: "fravega-avellaneda",
    rank: 4,
    tier: "retail",
    store: "Fravega - Alto Avellaneda",
    model: "Fluvial Nero 1/2 HP",
    address: "Gral. Guemes 897, Avellaneda, Buenos Aires",
    area: "Avellaneda",
    lat: -34.6753299,
    lng: -58.3667444,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$54.805 online",
    priceNote: "Precio online visto el 25/06/2026; consultar disponibilidad por sucursal.",
    recommendation: "Alternativa de cadena para comparar financiacion o retiro, no supera a Casa Fernandez por cercania a Lanus.",
    source: "Fravega producto 115110 y sucursal Alto Avellaneda",
    sourceUrl: "https://www.fravega.com/p/bomba-periferica-monofasica-fluvial-nero-0-5hp-115110-21214410/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fravega%20Gral.%20Guemes%20897%20Avellaneda",
    status: "Cadena",
  },
  {
    id: "fravega-san-justo",
    rank: 5,
    tier: "retail",
    store: "Fravega - San Justo",
    model: "Fluvial Nero 1/2 HP",
    address: "Dr. Ignacio Arieta 3429, San Justo, Buenos Aires",
    area: "San Justo",
    lat: -34.6812285,
    lng: -58.5571487,
    specs: { flow: "33 L/min", head: "33 m", suction: "9 m" },
    price: "$54.805 online",
    priceNote: "Precio online visto el 25/06/2026; consultar disponibilidad por sucursal.",
    recommendation: "Util solo si conviene por ruta, cuotas o retiro; para Lanus no es la opcion mas directa.",
    source: "Fravega producto 115110 y sucursal San Justo",
    sourceUrl: "https://www.fravega.com/p/bomba-periferica-monofasica-fluvial-nero-0-5hp-115110-21214410/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fravega%20Dr.%20Ignacio%20Arieta%203429%20San%20Justo",
    status: "Cadena",
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
let activeFilter = "all";
let selectedId = new URLSearchParams(window.location.search).get("store") || stores[0].id;

function markerClass(rank) {
  if (rank === 1) return "rank-1";
  if (rank === 2) return "rank-2";
  if (rank === 3) return "rank-3";
  return `rank-${rank}`;
}

function makeIcon(store) {
  return L.divIcon({
    className: "",
    html: `<div class="custom-marker ${markerClass(store.rank)}"><span>${store.rank}</span></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 31],
    popupAnchor: [0, -28],
  });
}

function storeMatchesFilter(store) {
  if (activeFilter === "all") return true;
  if (activeFilter === "top") return store.rank <= 3;
  if (activeFilter === "near") return store.tier.includes("near");
  if (activeFilter === "retail") return store.tier.includes("retail");
  return true;
}

function formatApprox(store) {
  return store.approximate ? "Coordenada aproximada" : "Direccion geocodificada";
}

function renderTags(store) {
  const tags = [
    `<span class="tag strong">${store.status}</span>`,
    `<span class="tag">${store.specs.flow}</span>`,
    `<span class="tag">${store.specs.head}</span>`,
  ];

  if (store.area) tags.push(`<span class="tag">${store.area}</span>`);
  return tags.join("");
}

function renderList() {
  const visible = stores.filter(storeMatchesFilter);
  const list = document.getElementById("storeList");
  document.getElementById("resultsMeta").textContent = `${visible.length} opciones visibles`;

  list.innerHTML = visible
    .map(
      (store) => `
        <button class="store-card ${store.id === selectedId ? "active" : ""}" type="button" data-store-id="${store.id}">
          <div class="card-head">
            <span class="rank-badge ${markerClass(store.rank)}">${store.rank}</span>
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
        </button>
      `,
    )
    .join("");

  list.querySelectorAll(".store-card").forEach((card) => {
    card.addEventListener("click", () => selectStore(card.dataset.storeId, true));
  });
}

function renderDetail(store) {
  const panel = document.getElementById("detailPanel");

  if (!store) {
    panel.innerHTML = `<div class="detail-empty">Selecciona una tarjeta o un marcador para ver el detalle.</div>`;
    return;
  }

  panel.innerHTML = `
    <div class="detail-content">
      <div class="detail-top">
        <span class="rank-badge ${markerClass(store.rank)}">${store.rank}</span>
        <div>
          <h2>${store.model}</h2>
          <p>${store.store}<br>${store.address}</p>
        </div>
      </div>

      <div class="detail-grid">
        <div><span>Caudal</span><strong>${store.specs.flow}</strong></div>
        <div><span>Altura</span><strong>${store.specs.head}</strong></div>
        <div><span>Succion</span><strong>${store.specs.suction}</strong></div>
      </div>

      <p class="detail-note">${store.recommendation}</p>
      <p class="detail-note">${store.priceNote}</p>

      <div class="detail-actions">
        <a class="action-link" href="${store.mapsUrl}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.4 7-12a7 7 0 0 0-14 0c0 6.6 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
          Como llegar
        </a>
        <a class="action-link secondary" href="${store.sourceUrl}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" /><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20.1l1.1-1.1" /></svg>
          Ver fuente
        </a>
      </div>

      <p class="source-line">${formatApprox(store)}. Fuente: ${store.source}.</p>
    </div>
  `;
}

function updateUrl(storeId) {
  const url = new URL(window.location.href);
  url.searchParams.set("store", storeId);
  window.history.replaceState({}, "", url);
}

function selectStore(storeId, pan = false) {
  const store = stores.find((item) => item.id === storeId) || stores[0];
  selectedId = store.id;
  renderList();
  renderDetail(store);
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

  const visibleStores = stores.filter(storeMatchesFilter);
  visibleStores.forEach((store) => {
    const popup = `
      <div class="popup-title">${store.model}</div>
      <div class="popup-meta">${store.store}<br>${store.price}<br>${store.status}</div>
    `;
    const marker = L.marker([store.lat, store.lng], { icon: makeIcon(store) })
      .addTo(map)
      .bindPopup(popup);
    marker.on("click", () => selectStore(store.id));
    markers.set(store.id, marker);
  });
}

function fitVisible() {
  const visible = stores.filter(storeMatchesFilter);
  const bounds = L.latLngBounds(visible.map((store) => [store.lat, store.lng]));
  map.fitBounds(bounds.pad(0.18), { maxZoom: 13 });
}

function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === filter);
  });
  refreshMarkers();
  renderList();

  const visible = stores.filter(storeMatchesFilter);
  if (!visible.some((store) => store.id === selectedId)) {
    selectedId = visible[0]?.id || stores[0].id;
  }
  renderDetail(stores.find((store) => store.id === selectedId));
  fitVisible();
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
  chip.addEventListener("click", () => setFilter(chip.dataset.filter));
});

document.getElementById("fitButton").addEventListener("click", fitVisible);
document.getElementById("copyButton").addEventListener("click", copyCurrentLink);
document.getElementById("shareButton").addEventListener("click", shareMap);

refreshMarkers();
renderList();
renderDetail(stores.find((store) => store.id === selectedId) || stores[0]);
fitVisible();
selectStore(selectedId);

window.addEventListener("resize", () => {
  window.setTimeout(() => map.invalidateSize(), 120);
});
