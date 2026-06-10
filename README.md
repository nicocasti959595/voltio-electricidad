# Voltio Electricidad

Landing demo para un servicio de electricidad / electricista en CABA y GBA.
Next.js 16 (App Router) + TypeScript + Tailwind v4. Sin base de datos: el
contacto abre WhatsApp con el mensaje prearmado.

## Editar el contenido

- `lib/site.ts` — marca, teléfono, email, dirección, horarios, URL.
- `lib/content.ts` — servicios, por qué elegirnos, pasos, stats, opiniones, FAQ, zonas.
- `app/globals.css` — paleta (token `ice` = amarillo voltaje, `heat` = azul energía).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

Sitio de demostración: marca, datos de contacto y reseñas son ilustrativos.
Desarrollado por [IdeaWebX](https://ideawebx.com).
