# SARP — Portafolio

Sitio de una página construido con **Next.js 14** (App Router) y **Tailwind CSS**, listo para editar y desplegar en Vercel.

## Cómo correrlo en tu computador

1. Instala [Node.js](https://nodejs.org/) (versión 18 o superior).
2. Abre una terminal en esta carpeta y ejecuta:
   ```bash
   npm install
   npm run dev
   ```
3. Abre `http://localhost:3000` en tu navegador.

## Cómo publicarlo (Vercel)

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a [vercel.com](https://vercel.com), conecta el repositorio y haz clic en "Deploy". No necesitas configurar nada más, Vercel detecta Next.js automáticamente.
3. También puedes usar la CLI: `npx vercel` desde esta carpeta.

## Qué editar

- **`app/page.tsx`** — todo el contenido del sitio está aquí:
  - `delivered`: arreglo con tus proyectos entregados (título, categoría, descripción, link).
  - `inProgress`: arreglo con los proyectos en desarrollo.
  - Textos del hero, "Sobre SARP" y contacto están directo en el JSX.
- **Contacto**: reemplaza `hola@sarp.cl` y el número de WhatsApp (`56900000000`) por tus datos reales en la sección de contacto.
- **Thumbnails de proyectos**: hoy son ilustraciones abstractas tipo "lámina técnica" generadas con SVG (componente `Thumb`). Si más adelante quieres usar capturas reales de cada sitio, reemplaza el componente `<Thumb />` por una etiqueta `<img src="/proyectos/nombre.png" />` con la imagen guardada en la carpeta `public/`.
- **Colores y tipografía**: definidos en `tailwind.config.ts` (colores: `paper`, `ink`, `rust`, `sage`) y `app/layout.tsx` (tipografías Fraunces y Space Grotesk, cargadas desde Google Fonts — requieren conexión a internet al compilar).

## Notas

- El proyecto "Finanzas Personales" se describe intencionalmente solo como "con inteligencia artificial", sin mencionar Next.js ni Vercel, tal como pediste.
- El proyecto de Hospital de Villarrica y el de Finanzas/Riego no tienen link porque son herramientas internas o aún no están publicadas — puedes agregarles `url` en `page.tsx` cuando estén disponibles.
