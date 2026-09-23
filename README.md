# Da Vinci IA — sitio web

Sitio de **Da Vinci IA** (inteligencia operativa para empresas) construido con **Next.js 16 (App Router) + React 19 + TypeScript**.
Todo el contenido proviene de `da-vinci-ai-sitio-completo.md`, la extracción del sitio original.

Páginas generadas como HTML estático + dos rutas de servidor (`/api/contacto` y `/api/whatsapp-demo`) · se publica en Vercel · sin librerías de UI ni de animación.

---

## Arrancar

```bash
npm install     # solo la primera vez
cp .env.example .env   # y llena las variables (ver abajo)
npm run dev     # desarrollo con hot reload → http://localhost:4321
npm run build   # compila para producción
npm run preview # compila y sirve como en producción → http://localhost:4322
```

## Publicar (Vercel)

Conecta el repo en Vercel: detecta Next.js solo. Luego, en **Project → Settings → Environment
Variables**, carga las mismas variables del `.env` y vuelve a desplegar.

| Variable | De dónde sale | Para qué |
|---|---|---|
| `GREEN_API_URL` | console.green-api.com → instancia → `apiUrl` | demo «Recíbelo en TU WhatsApp» |
| `GREEN_API_ID_INSTANCE` | `idInstance` | 〃 |
| `GREEN_API_TOKEN_INSTANCE` | `apiTokenInstance` | 〃 |
| `RESEND_API_KEY` | resend.com → API Keys (permiso «Sending access») | formulario de contacto |
| `CONTACTO_DE` | un remitente del dominio verificado en Resend: `Da Vinci IA <sitio@da-vinci.ai>` | 〃 |
| `CONTACTO_PARA` | a quién llegan: `yo@robertomejiab.com` (varios con comas) | 〃 |

Son secretas: van sin `NEXT_PUBLIC_` y solo las leen las rutas de `app/api/`. Si faltan, el sitio
funciona igual; el formulario o la demo responden con un aviso y sugieren escribir por WhatsApp
(nunca dicen «recibido» si el mensaje no salió).

El correo del formulario llega con «Responder» apuntando al visitante: contestas y le llega a él.

La demo manda un mensaje **fijo** (no lo escribe el visitante), acepta un envío por número y tres
por IP cada 10 minutos, y tiene un campo trampa para bots. Aun así es una ruta pública: vigila el
consumo en Green API.

Ya no es exportación estática (`output: "export"`): las rutas de servidor no caben en un sitio
100 % estático, así que el sitio ya no se puede subir por FTP.

---

## Estructura

```
app/                      rutas (App Router) — cada carpeta es una URL
  layout.tsx              fuentes, header, footer, metadata y JSON-LD
  globals.css             el sistema de diseño completo
  page.tsx                portada
  modulos/[slug]/         los 6 módulos (una plantilla, seis páginas)
  industrias/[slug]/      las 9 industrias
  blog/[slug]/            los 6 artículos
  demos/…                 sala de demos + 4 áreas
  planta-da-vinci/        la app insignia (SCADA con cerebro)
  sitemap.ts · robots.ts  generados en el build
components/
  ui/index.tsx            piezas de página (botones, paneles, métricas, CTA…)
  ui/interactivos.tsx     FAQ, riel, calculadora, formularios (cliente)
  ui/arte.tsx             ilustraciones SVG del taller
  site/Header.tsx         menú, mega-menús y drawer móvil
  site/Footer.tsx         footer + bloque «Hablemos» + WhatsApp
  site/Efectos.tsx        animaciones globales, canvas del hero, barra sticky, popup
  site/bloques.tsx        bloques compartidos entre páginas
  demos/chats.tsx         Da Vinci Central, WhatsApp y LISA en el celular
  demos/apps.tsx          torre de control, ERPs, Planta Da Vinci, mostrador
lib/
  contenido.ts            TODO el contenido del sitio, tipado
  nav.ts                  menús, footer y rutas del sitemap
legacy/                   la primera versión (generador estático propio). Se puede borrar.
```

### Cómo editar contenido

Casi todo vive en **`lib/contenido.ts`**. Cambiar el texto de un módulo, añadir una industria o
publicar un artículo es editar un arreglo: la página, el menú, el índice, los enlaces cruzados
y el sitemap se generan solos.

Para una sección nueva de una página concreta, edita su `app/<ruta>/page.tsx` usando los
componentes de `components/ui`.

---

## Diseño

### Tipografía

| Rol | Fuente | Uso |
|---|---|---|
| Marca | **wargika** (`app/fonts/`) | el nombre «Da Vinci»: logo, títulos de marca y los wordmarks gigantes |
| Display | **Space Grotesk** 500/600/700 | títulos, botones, cifras |
| Cuerpo | **Inter** 400/500/600 | texto corrido |
| Mono | **IBM Plex Mono** | etiquetas tipo `AGENTES_AUTONOMOS` |
| Acento | **Instrument Serif** *itálica* | los guiños renacentistas (`<em>`) |

Se cargan con `next/font` (self-hosted, sin llamadas a Google en tiempo de ejecución).

**El nombre de la marca** va siempre en wargika a través del componente `<Marca>`:

```tsx
titulo={<>El Método <Marca /></>}      // «Da Vinci» en wargika
titulo={<>Planta <Marca /></>}
<Marca>Da Vinci Central</Marca>        // acepta otro texto
```

También la usan, por CSS, el logo (`.logo-txt`) y los wordmarks gigantes
(`.wordmark`, `.footer-word`). Si algún día quieres el nombre en la grotesca,
basta con cambiar `--f-marca` en `globals.css`.

### Color

| Token | Valor | Uso |
|---|---|---|
| `--naranja` | `#F58634` | acento único (el del logo) |
| `--negro` / `--negro-2` | `#0D0D0F` / `#141417` | hero, paneles en vivo, footer |
| `--papel` / `--papel-2` | `#F6F4F0` / `#EFECE6` | fondos |
| `--tinta` | `#131316` | texto |

### Imágenes

`public/helice.png` (el render del tornillo aéreo) es el máster que entregaste — se queda intacto.
Para el sitio se sirve `public/helice.webp`, una versión recortada y optimizada:

| archivo | uso | peso |
|---|---|---|
| `helice.png` | máster y respaldo del `<picture>` | 1.6 MB |
| `helice.webp` | lo que descarga el navegador | 268 KB |

Si reemplazas el máster, regenera el webp (1000 px de ancho, calidad 82) o el hero pesará 6× más.
La hélice se posiciona con `.hero-helice` en `globals.css`: en escritorio sale del panel por abajo
y por la derecha; en móvil se cruza con el borde inferior del panel, centrada.

### Logos de clientes y sus fichas

Los logos del carrusel viven en `public/clientes/` (`.png` máster + `.webp` que es el que se
sirve). La lista y los nombres están en `CLIENTES`, en `lib/contenido.ts`.

**Al hacer clic en un logo se abre un modal con su caso.** Cada ficha es una página HTML
completa, en una carpeta con el mismo nombre que el logo:

```
public/clientes/info/
  borderproduce/
    index.html   ← se muestra al hacer clic en borderproduce.webp
    img/         ← sus capturas (rutas relativas: img/…)
  titos/
    index.html
  …
```

La página se carga tal cual dentro de un `<iframe>`, así que conserva sus propios estilos,
scripts e imágenes. El modal solo pone la cabecera (logo, nombre, «Abrir en pestaña nueva» y
el botón de contacto). También se puede abrir directo en `/clientes/info/<cliente>/index.html`.

Un cliente **sin** `index.html` simplemente no es clicable — no se abre un modal vacío. El
build avisa cuáles faltan:

```
· clientes sin ficha (su logo no abrirá modal): br/index.html, ml/index.html, …
```

Para añadir o quitar un logo: pon el `.webp` en `public/clientes/` y edita `CLIENTES`.
Si cambias un logo, regenera el webp a 140 px de alto.

### Íconos (sin emojis)

El sitio no usa emojis (salvo dentro de los chats simulados de WhatsApp, donde son parte del
mensaje). Hay dos estilos:

- **`<IconoMano n="camion" />`**: dibujado a mano (Streamline Freehand) para íconos grandes
  (tarjetas, plataformas). Si Freehand no tiene el concepto, usa el de boceto. Solo en
  componentes de servidor: sus datos pesan ~70 KB y así no llegan al JavaScript del navegador.
- **`<Icono n="alerta" />`**: trazo de boceto (Phosphor + un filtro SVG que tiembla la línea)
  para etiquetas, botones y texto. Sirve en cualquier componente.

En los textos de `lib/contenido.ts` se escribe `:nombre:` y el panel lo convierte en ícono:
`[":alerta: SKU 114 se agota en 6 días", "pedido sugerido"]`.

La lista de íconos disponibles y de qué set sale cada uno está en `scripts/iconos.mjs`. Para
agregar uno: añádelo ahí y corre `npm run iconos` (regenera `components/ui/iconos-*.ts`).
Freehand es CC BY 4.0: el crédito está en el pie de página, no lo quites.

### Lenguaje visual

Tomado de las tres referencias que diste y adaptado a la marca:

- Hero oscuro con esquinas muy redondeadas sobre fondo claro, riel social vertical y tarjetas de
  cristal unidas por líneas conectoras.
- Tira de integraciones bajo el hero (qué conecta el sistema, no logos de clientes).
- Bloques naranjas a sangre con el wordmark gigante detrás.
- Métricas en escalones y en rejilla con líneas.
- Pasos numerados con insignias circulares naranjas.
- FAQ a dos columnas con tarjetas.
- Footer negro con bloque «Hablemos» esquinado y wordmark gigante.

## Animaciones e interacción

Sin librerías: CSS + `IntersectionObserver` + React.

- Aparición escalonada al hacer scroll, contadores animados, barra de progreso, parallax suave.
- Canvas del hero: red de puntos conectados.
- Header que se oculta al bajar, mega-menús y drawer móvil.
- Marquee, carrusel arrastrable, acordeones y pestañas.
- **Demos interactivas**: chat de Da Vinci Central, WhatsApp que se escribe solo, torre de control
  logística en cascada, LISA en el celular (4 industrias), calculadora «¿cuánto te cuesta NO
  automatizar?», simulación de paro de línea en Planta Da Vinci.
- Barra sticky del diagnóstico, popup de salida, reloj de CDMX y saludo según la hora.

Respeta `prefers-reduced-motion` y, si el JavaScript no corre, todo el contenido sigue visible.

### Peso

Cada página es HTML pre-renderizado (~10–24 KB con gzip). El bundle de React/Next son ~200 KB
con gzip en la primera visita y queda cacheado para todo el sitio; a partir de ahí la navegación
es instantánea. Si el peso inicial llega a importar (campañas a datos móviles, por ejemplo),
`legacy/` conserva la versión sin framework, de ~10 KB de JS.

---

## Pendientes de contenido

Requieren material o decisiones del negocio:

1. **El formulario no envía.** Valida y confirma en pantalla, pero falta el backend. Conecta el
   `onSubmit` de `FormContacto` (en `components/ui/interactivos.tsx`) a Formspree, Resend o un
   endpoint propio.
2. **El botón de WhatsApp no tiene número** (el sitio original tampoco). Se define en
   `SITIO.whatsapp`, en `lib/contenido.ts`.
3. **Plataformas sin contenido propio.** Súper, Cocina, Tesorería, Proveedor y Mi Negocio Da Vinci
   se mencionan en el material pero no incluyen sus pantallas. Aparecen como tarjetas
   «bajo llave · demo guiada» que llevan a contacto.
4. **Audio y video.** Las demos de voz (Valentina, Atlas ↔ Livia, Marco) y el film de LISA están
   representados como interfaz, no con los archivos originales.
5. **Casos de éxito.** La página está lista con la plantilla; falta la primera historia real.
