# Hartog-Bos Duurzame Installaties — website

Website voor [www.hartog-bosinstallaties.nl](https://www.hartog-bosinstallaties.nl). React + Vite, gehost op Netlify.

## Lokaal werken (Command Prompt, niet PowerShell)

```
npm install
npm run dev      # http://localhost:5173
npm run lint     # code-controle
npm run build    # productie-build in dist/
```

## Waar staat wat?

| Wat wil je aanpassen? | Bestand |
|---|---|
| Telefoon, e-mail, adres, KVK/BTW, Instagram | `src/config/site.js` |
| Foto's | `src/data/images.js` (eigen foto's in `public/images/`) |
| Diensten (tekst, foto, tags) | `src/data/diensten.js` |
| "Ons werk" / projecten | `src/data/werk.js` |
| Kenmerken, waarden, over-ons-tekst | `src/data/content.js` |
| Menu, URL's, paginatitels | `src/data/routes.js` |
| Kleuren en lettertypen | `src/theme.js` |
| Pagina-opbouw | `src/pages/` |
| Herbruikbare onderdelen | `src/components/` |
| SEO, Google-gegevens, Netlify Forms | `index.html` |

Formuliervelden in `src/components/ContactForm.jsx` moeten gelijk blijven aan de verborgen formulieren in `index.html`.

## Werkwijze wijzigingen

1. Nieuwe branch: `git checkout -b feature/omschrijving`
2. Wijzigen, `npm run lint` en `npm run build` controleren
3. `git push -u origin feature/omschrijving`
4. Op GitHub een pull request maken → Netlify maakt een preview
5. Preview goed? Pull request mergen naar `main` → automatisch live

Zie `docs/` voor projectstatus en roadmap.
