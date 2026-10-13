/* Buyer details captured from the inquiry form (falls back to the demo buyer) */
window.getBuyer = function () {
  const demo = { name: 'Amaka Obi', email: 'amaka.obi@diaspora.com', phone: '+234 803 123 4567', country: 'Nigeria' };
  try { return Object.assign(demo, JSON.parse(sessionStorage.getItem('spatia-buyer')) || {}); } catch (e) { return demo; }
};
window.getPayment = function () {
  try { return sessionStorage.getItem('spatia-provider') || 'paystack'; } catch (e) { return 'paystack'; }
};
document.addEventListener('DOMContentLoaded', () => {
  const b = window.getBuyer();
  document.querySelectorAll('[data-buyer]').forEach((el) => {
    const k = el.dataset.buyer;
    el.textContent = k === 'initials' ? initials(b.name) : b[k];
  });
});
