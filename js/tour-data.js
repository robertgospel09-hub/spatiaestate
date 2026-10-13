/* Rooms for the Lekki Phase 1 Duplex tour. Hotspot x/y are % of the image. */
window.DEFAULT_ROOMS = [
  { id: 'living', name: 'Living Room', img: 'assets/living.jpg', ratio: 882 / 535, stage: '#ffffff', yaw: 0, pitch: 0, start: true,
    hotspots: [
      { type: 'nav', label: 'Go to Kitchen', target: 'kitchen', x: 25.4, y: 33.6 },
      { type: 'nav', label: 'Go to Balcony', target: 'balcony', x: 76.4, y: 15.9, right: true },
      { type: 'info', label: 'Italian Marble Flooring', note: 'Polished Calacatta marble imported from Carrara, laid across the full ground floor.', x: 50.6, y: 69.5 },
    ] },
  { id: 'kitchen', name: 'Kitchen', img: 'assets/kitchen.jpg', ratio: 1, stage: '#e9eaec', yaw: 142, pitch: -4,
    hotspots: [
      { type: 'nav', label: 'Go to Living Room', target: 'living', x: 21.9, y: 43.6 },
      { type: 'info', label: 'Italian Calacatta Marble', note: 'Waterfall island in Calacatta marble with integrated induction hob.', x: 72.3, y: 32.7, right: true },
    ] },
  { id: 'bedroom', name: 'Master Bedroom', img: 'assets/bedroom.jpg', ratio: 882 / 431, stage: '#a0938a', yaw: 90, pitch: -5,
    hotspots: [
      { type: 'nav', label: 'Go to Bathroom', target: 'bathroom', x: 32.7, y: 37.6 },
      { type: 'info', label: 'Walk-in Closet', note: 'Lit walnut walk-in wardrobe with a dedicated dressing island.', x: 69.6, y: 18.6 },
      { type: 'info', label: 'Smart Home Controls', note: 'Lighting, blinds and climate run from one wall panel or your phone.', x: 90.7, y: 63.3, right: true },
    ] },
  { id: 'bathroom', name: 'Bathroom', img: 'assets/bathroom.jpg', ratio: 1, stage: '#efebe6', yaw: 180, pitch: 0,
    hotspots: [
      { type: 'nav', label: 'Go to Master Bedroom', target: 'bedroom', x: 27.2, y: 36.3 },
      { type: 'info', label: 'Rainfall Shower System', note: 'Brushed brass rainfall head with thermostatic mixer.', x: 79.3, y: 47.3, right: true },
    ] },
  { id: 'balcony', name: 'Balcony View', img: 'assets/balcony.jpg', ratio: 882 / 532, stage: '#000000', yaw: 270, pitch: 10,
    hotspots: [
      { type: 'nav', label: 'Go to Living Room', target: 'living', x: 36.6, y: 41.3 },
      { type: 'info', label: 'Lagos Lagoon View', note: 'Unobstructed sunset view across the Lagos Lagoon.', x: 74.5, y: 17.7, right: true },
    ] },
];

window.loadRooms = function () {
  try {
    const saved = JSON.parse(localStorage.getItem('spatia-tour'));
    if (Array.isArray(saved) && saved.length) return saved;
  } catch (e) { /* storage unavailable */ }
  return JSON.parse(JSON.stringify(window.DEFAULT_ROOMS));
};
window.saveRooms = function (rooms) {
  try { localStorage.setItem('spatia-tour', JSON.stringify(rooms.filter((r) => !r.img.startsWith('blob:')))); return true; } catch (e) { return false; }
};
