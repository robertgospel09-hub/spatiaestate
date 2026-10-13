# SpatiaEstate

Static site (HTML, CSS, vanilla JS). No build step.

## Pages
| Page | File |
|---|---|
| Admin login | `index.html` |
| Dashboard | `dashboard.html` |
| Create property | `properties.html` |
| 360° tour builder | `tour-builder.html` |
| Leads | `leads.html` |
| Payments | `payments.html` |
| Users (+ edit modal) | `users.html` |
| Settings (+ toast, confirm dialog) | `settings.html` |
| Public 360° tour + AI assistant + inquiry modal | `tour.html` (open the inquiry with the bookmark icon, or `tour.html#inquiry`) |
| Reservation / checkout | `reserve.html` |
| Confirmation | `confirmed.html` |
| Deposit receipt (prints to PDF) | `receipt.html` |

## Run locally
```
npx serve .
```
or `python3 -m http.server`, then open http://localhost:3000 (or :8000).

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. On vercel.com: **Add New → Project**, import the repo.
3. Framework preset: **Other**. Leave build command and output directory empty. Deploy.

Or from a terminal: `npm i -g vercel` then run `vercel` inside this folder.

`vercel.json` turns on clean URLs, so `/dashboard` works as well as `/dashboard.html`.

## Swapping images
All photos live in `assets/`. Replace a file with one of the same name (e.g. `assets/kitchen.jpg`) to update it everywhere.
Hotspot positions for the tour builder are in `js/tour-data.js` as percentages of each image.

## Notes
- All data is demo data in `js/data.js`. Login accepts any email + password.
- Payments are simulated; nothing is charged. Wire Paystack/Stripe on a backend before going live.
- The tour builder saves to the browser (localStorage) when you click Save Workspace.
