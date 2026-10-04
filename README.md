# Supreme Nails

First version of the Supreme Nails website, built in `frontend/` with Vite, React, and TypeScript. Includes responsive nail and waxing menus, phone-only booking, business hours, and Google Maps directions. No booking form, login, fabricated reviews, statistics, or salon photography.

## Development

From `frontend/`:

- `npm install` installs existing dependencies.
- `npm run dev` starts Vite (reuse the running server when available).
- `npm run build` runs TypeScript checks and creates the production build in `dist/`.
- `npm run lint` runs ESLint.
- `npm run preview` previews the production build locally.

## Editing content

- `frontend/src/data/services.ts`: all nail and waxing names and prices.
- `frontend/src/data/salon.ts`: address, phone links, directions URL, and hours.
- `frontend/src/App.tsx`: page sections and copy.
- `frontend/src/components/`: shared call links and service menu.
- `frontend/src/index.css` and `frontend/src/App.css`: theme and responsive layout.
- `frontend/index.html`: page title and meta description.

**Before launch:** The service prices are draft transcriptions from photos and require owner confirmation. Confirm all service names and prices, especially ranges and starting prices. No additional prices have been inferred. Supply approved salon photos if photography is desired; the current artwork is decorative CSS and does not depict the salon.

## Booking and location

Supreme Nails, 274 N Wellwood Ave, Lindenhurst, NY 11757. Phone: (631) 225-1937. All call links use `tel:+16312251937`. Customers book by phone only.

Hours: Tuesday–Saturday 10:00 AM–7:30 PM; Sunday 10:00 AM–6:00 PM; Monday closed.

## Analytics: not active

No analytics package, collection script, cookies, or tracking requests have been added. Data attributes are hooks only:

| Action | Attribute | Placement values |
| --- | --- | --- |
| Call | `data-track-event="call_click"` | `header`, `hero`, `visit`, `contact`, `mobile` |
| Directions | `data-track-event="directions_click"` | `visit` |

The placement is stored in `data-track-placement`. Future integration can use these attributes for delegated click handling. Visitor and page-view collection must also be implemented later. Click events measure intent; they do not prove that a call connected or an appointment was booked. Use only real collected metrics in future reports or resume claims.

## Accessibility and review

The page includes semantic navigation and headings, a skip link, visible keyboard focus, readable price lists, reduced-motion support, and a mobile call bar with reserved bottom space and safe-area padding. All service prices remain visible without opening tabs or accordions. Fonts are local system fonts; no external font requests are required.

Before publishing, review the site in target browsers at phone, tablet, and desktop sizes, confirm prices with the owner, and test phone and Google Maps handoff on a real device. Deployment is not configured or performed as part of this version.
