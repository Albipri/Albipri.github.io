// Inizializzazione della mappa
const map = L.map('map').setView([41.8902, 12.4922], 5);

// Aggiunta della mappa di base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Aggiunta dei marker per ogni luogo
places.forEach(place => {
    L.marker([place.lat, place.lng])
        .addTo(map)
        .bindPopup(`<b>${place.name}</b>`);
});
