# Da Vinci IA — sitio web

Sitio estático de **Da Vinci IA** (inteligencia operativa para empresas), generado desde
el contenido de `da-vinci-ai-sitio-completo.md`.

46 páginas · sin dependencias · sin framework.
Peso real servido con gzip: **~12 KB de HTML por página**, más 12 KB de CSS y 10 KB de JS (cacheados para todo el sitio).

---

## Arrancar

```bash
npm run dev     # servidor local con recompilación automática → http://localhost:4321
npm run build   # genera /dist listo para publicar
```

No hay `npm install`: el proyecto **no tiene dependencias**. Solo necesitas Node 18+.

## Publicar

`dist/` es un sitio estático puro; funciona en cualquier hosting.

- **Vercel**: ya está configurado en `vercel.json` (build `node build.mjs`, salida `dist`, URLs limpias y cache de assets).
- **Netlify / Cloudflare Pages**: build `node build.mjs`, directorio de publicación `dist`.
- **Hosting tradicional**: sube el contenido de `dist/` por FTP.

## Estructura

```
build.mjs              generador: recorre src/pages y escribe /dist
serve.mjs              servidor de desarrollo con recompilación al guardar
src/
  lib/layout.mjs       <head>, header, footer, y componentes compartidos
  lib/arte.mjs         ilustraciones SVG (tornillo aéreo, boceto de UI, espiral)
  assets/css/site.css  sistema de diseño completo
  assets/js/site.js    comportamiento (menú, animaciones, demos interactivas)
  assets/img/          logo
  pages/
    home.mjs           portada
    core.mjs           Central, demos, método, nosotros, LISA, tecnología
    core2.mjs          inversión, planta, finanzas, diagnóstico, seguridad, FAQ, casos, privacidad, contacto
    modulos.mjs        índice + los 6 módulos
    industrias.mjs     índice + las 9 industrias
    blog.mjs           índice + los 6 artículos
    demoareas.mjs      las 4 áreas de demos
    appplanta.mjs      Planta Da Vinci (la app insignia)
    error404.mjs       página 404
dist/                  salida generada (no se versiona)
```

### Cómo se añade o edita una página

Cada archivo de `src/pages/` exporta una función `paginas()` que devuelve
`[{ ruta, html }]`. El generador los descubre solos: crea un `.mjs` nuevo ahí y listo.

El contenido repetitivo (módulos, industrias, blog) vive en **arreglos de datos** al inicio
de su archivo: para editar un texto o añadir una industria nueva, basta con tocar ese arreglo
— la página, el menú, el índice, el sitemap y los enlaces cruzados se generan solos.

Al compilar, `build.mjs` **verifica todos los enlaces internos** y avisa si alguno apunta a
una página que no existe.

---

## Sistema de diseño

Tokens en `src/assets/css/site.css` (`:root`):

| Token | Valor | Uso |
|---|---|---|
| `--naranja` | `#F58634` | acento y CTA (el naranja del logo) |
| `--tinta` / `--carbon` | `#2B2B2D` / `#3E3E40` | texto |
| `--papel` / `--papel-hondo` | `#FAF6EF` / `#F3EDE2` | fondos (tono pergamino) |
| `--oscuro-1` / `--tinta-tech` | `#17171A` / `#1B1B1E` | paneles "en vivo" y hero |
| `--verde-wa` | `#22A85B` | WhatsApp |

**Tipografías** (Google Fonts): Marcellus (títulos) · Cormorant Garamond (acentos en cursiva) ·
Archivo (cuerpo) · IBM Plex Mono (etiquetas tech).

**Estética**: superficie clara tipo pergamino + bloques oscuros tipo "taller tech", esquinas
muy redondeadas, naranja como único acento y bocetos renacentistas dibujados en SVG.

## Animaciones e interacción

Todo es CSS + JavaScript nativo, sin librerías:

- Aparición por scroll con `IntersectionObserver` (escalonada por grupo).
- Contadores animados, barra de progreso de lectura, parallax suave, brillo que sigue al cursor.
- Canvas del hero: red de puntos conectados (el "códice vivo").
- Header que se oculta al bajar, mega-menús y drawer móvil.
- Marquee, carrusel de módulos arrastrable, acordeones, pestañas.
- **Demos interactivas**: chat de Da Vinci Central, conversación de WhatsApp que se escribe sola,
  torre de control logística en cascada, LISA en el celular (4 industrias), calculadora de
  "¿cuánto te cuesta NO automatizar?", simulación de paro de línea en Planta Da Vinci.
- Barra sticky del diagnóstico, popup de salida, botón de compartir, reloj de CDMX y saludo por hora.

Respeta `prefers-reduced-motion` y, si el JavaScript falla, **todo el contenido sigue visible**
(las animaciones de entrada solo se aplican cuando hay JS).

---

## Pendientes de contenido

Estos puntos requieren material o decisiones del negocio:

1. **Teléfono y correo reales.** El botón de WhatsApp abre `wa.me` sin número (igual que el sitio
   original). Se define en `SITIO.whatsapp`, en `src/lib/layout.mjs`.
2. **El formulario no envía.** Valida y confirma en pantalla, pero no hay backend. Conecta el
   `submit` de `forms()` (en `site.js`) a Formspree, Resend, o a un endpoint propio.
3. **Plataformas sin contenido propio.** El material original menciona Súper Da Vinci, Cocina
   Da Vinci, Tesorería Da Vinci, Proveedor Da Vinci y Mi Negocio Da Vinci, pero no incluye sus
   pantallas. Aparecen como tarjetas "bajo llave · demo guiada" que llevan a contacto. Cuando
   existan, se convierten en páginas nuevas como `app-planta.html`.
4. **Audio y video.** Las demos de voz (Valentina, Atlas ↔ Livia, Marco) y el film de LISA están
   representados como interfaz, no con los archivos de audio originales. Si los tienes, colócalos
   en `src/assets/audio/` y añade el `<audio>` a esas estaciones.
5. **Casos de éxito.** La página está lista con la plantilla; falta la primera historia real.

## Créditos de contenido

Todos los textos provienen de `da-vinci-ai-sitio-completo.md` (extracción del sitio original).
Las ilustraciones son SVG dibujados para este proyecto; el logotipo es `logo-davinci.png`.
