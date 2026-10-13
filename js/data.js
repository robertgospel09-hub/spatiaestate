/* Demo data shown across the admin pages */
window.DATA = {
  leads: [
    { name: 'Adebayo Adesina', email: 'adebayo@gmail.com', phone: '+44 7911 123456', country: 'United Kingdom', flag: '🇬🇧', property: 'Banana Island Penthouse', intent: 'Buy', status: 'Qualified', date: 'Jul 25, 2026' },
    { name: 'Chisom Nwachukwu', email: 'chisom@nwachukwu.ca', phone: '+1 416 555 0192', country: 'Canada', flag: '🇨🇦', property: 'Ikoyi Waterfront Villa', intent: 'Reserve', status: 'New', date: 'Jul 24, 2026' },
    { name: 'Kunle Babajide', email: 'kunle@babajide.ng', phone: '+234 803 111 2222', country: 'Nigeria', flag: '🇳🇬', property: 'Lekki Phase 1 Duplex', intent: 'Buy', status: 'Contacted', date: 'Jul 23, 2026' },
    { name: 'Emeka Okafor', email: 'emeka@okafor.com', phone: '+1 301 555 0143', country: 'United States', flag: '🇺🇸', property: 'Ikoyi Waterfront Villa', intent: 'Rent', status: 'Qualified', date: 'Jul 22, 2026' },
    { name: 'Yinka Oyelowo', email: 'yinka@oyelowo.co.uk', phone: '+44 20 7946 0958', country: 'United Kingdom', flag: '🇬🇧', property: 'Lekki Phase 1 Duplex', intent: 'Reserve', status: 'New', date: 'Jul 21, 2026' },
    { name: 'Ngozi Eze', email: 'ngozi@eze.ng', phone: '+234 809 333 4444', country: 'Nigeria', flag: '🇳🇬', property: 'Banana Island Penthouse', intent: 'Schedule', status: 'Contacted', date: 'Jul 20, 2026' },
    { name: 'Tunde Adeyemi', email: 'tunde@adeyemi.us', phone: '+1 212 555 0188', country: 'United States', flag: '🇺🇸', property: 'Victoria Island Flat', intent: 'Buy', status: 'Qualified', date: 'Jul 19, 2026' },
    { name: 'Fatima Bello', email: 'fatima@bello.ng', phone: '+234 805 444 5555', country: 'Nigeria', flag: '🇳🇬', property: 'Lekki Phase 1 Duplex', intent: 'Rent', status: 'New', date: 'Jul 18, 2026' },
  ],
  payments: [
    { ref: 'PAY-2026-0091', buyer: 'Adebayo Adesina', property: 'Banana Island Penthouse', amount: '₦2,500,000', cur: 'NGN', provider: 'Stripe', status: 'Paid', date: 'Jul 25, 2026' },
    { ref: 'PAY-2026-0090', buyer: 'Chisom Nwachukwu', property: 'Ikoyi Waterfront Villa', amount: '₦1,800,000', cur: 'NGN', provider: 'Paystack', status: 'Pending', date: 'Jul 24, 2026' },
    { ref: 'PAY-2026-0089', buyer: 'Kunle Babajide', property: 'Lekki Phase 1 Duplex', amount: '$4,500', cur: 'USD', provider: 'Stripe', status: 'Paid', date: 'Jul 23, 2026' },
    { ref: 'PAY-2026-0088', buyer: 'Emeka Okafor', property: 'Ikoyi Waterfront Villa', amount: '₦3,200,000', cur: 'NGN', provider: 'Paystack', status: 'Failed', date: 'Jul 22, 2026' },
    { ref: 'PAY-2026-0087', buyer: 'Yinka Oyelowo', property: 'Lekki Phase 1 Duplex', amount: '₦1,500,000', cur: 'NGN', provider: 'Stripe', status: 'Paid', date: 'Jul 21, 2026' },
    { ref: 'PAY-2026-0086', buyer: 'Ngozi Eze', property: 'Banana Island Penthouse', amount: '₦500,000', cur: 'NGN', provider: 'Paystack', status: 'Refunded', date: 'Jul 20, 2026' },
    { ref: 'PAY-2026-0085', buyer: 'Fatima Bello', property: 'Lekki Phase 1 Duplex', amount: '₦2,000,000', cur: 'NGN', provider: 'Stripe', status: 'Review', date: 'Jul 18, 2026' },
  ],
  users: [
    { name: 'Chidi Okafor', email: 'chidi.okafor@spatiaestate.com', role: 'Super Admin', org: 'SpatiaEstate HQ', status: 'Active', login: 'Today, 10:42 AM', added: 'Oct 02, 2025', by: 'System' },
    { name: 'Amaka Obi', email: 'amaka.obi@spatiaestate.com', role: 'Agent', org: 'SpatiaEstate Lagos', status: 'Active', login: 'Yesterday, 04:15 PM', added: 'Jan 15, 2026', by: 'Chidi Okafor' },
    { name: 'Tunde Adeyemi', email: 'tunde@adeyemi.us', role: 'Org Admin', org: 'SpatiaEstate USA', status: 'Active', login: '2 days ago', added: 'Feb 03, 2026', by: 'Chidi Okafor' },
    { name: 'Fatima Bello', email: 'fatima@bello.ng', role: 'Agent', org: 'SpatiaEstate Abuja', status: 'Pending', login: 'Never', added: 'Jul 18, 2026', by: 'Chidi Okafor' },
    { name: 'Ngozi Eze', email: 'ngozi@eze.ng', role: 'Support', org: 'SpatiaEstate Support', status: 'Active', login: '3 days ago', added: 'Mar 11, 2026', by: 'Chidi Okafor' },
    { name: 'David Chen', email: 'david.chen@spatiaestate.com', role: 'Viewer', org: 'SpatiaEstate Investments', status: 'Inactive', login: '2 weeks ago', added: 'Apr 22, 2026', by: 'Tunde Adeyemi' },
  ],
};

window.TONES = {
  intent: { Buy: 'blue', Reserve: 'amber', Rent: 'green', Schedule: 'purple' },
  status: { Qualified: 'green', New: 'blue', Contacted: 'amber' },
  pay: { Paid: 'green', Pending: 'amber', Failed: 'red', Refunded: 'gray', Review: 'amber' },
  provider: { Stripe: 'blue', Paystack: 'purple' },
  role: { 'Super Admin': 'gray', 'Org Admin': 'blue', Agent: 'green', Support: 'amber', Viewer: 'gray' },
  userStatus: { Active: '#15803d', Pending: '#d97706', Inactive: '#991b1b' },
};
