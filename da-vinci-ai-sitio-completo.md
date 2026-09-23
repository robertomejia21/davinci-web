---
fuente: https://da-vinci.ai/
capturado: 2026-09-22
tipo: extracción completa de sitio web (45 páginas + contenido dinámico de JS)
propósito: base de contenido para rediseño completo
---

# Da Vinci IA (da-vinci.ai): extracción completa del sitio

> Todo el texto del sitio, página por página, en el orden en que aparece. Incluye respuestas ocultas (FAQ colapsados), textos de demos interactivas generados por JavaScript, formularios, microcopys, estados de error, popups y el sistema de diseño original.
> Las marcas `*[sección: …]*` son comentarios HTML del código original que nombran cada bloque (sirven para entender la estructura y las animaciones).

## 0. Identidad de marca

- **Nombre:** Da Vinci IA · **Dominio:** da-vinci.ai · **País:** México (CDMX) · `og:locale es_MX`
- **Slogan (schema.org):** Inteligencia operativa para tu empresa
- **Descripción (schema.org):** Software a la medida con IA: automatizaciones, agentes y LISA, tu agente empresarial.
- **Meta descripción home:** Inteligencia operativa: mapeamos tu empresa y le construimos software a la medida con IA — automatizaciones, agentes inteligentes y Da Vinci Central, el centro donde preguntas y ves todo tu negocio. Avances cada semana, módulo por módulo.
- **Lema del método:** Observar, entender, construir, perfeccionar.
- **Firma del footer:** © 2026 Da Vinci IA · da-vinci.ai · Tú tienes las llaves.
- **Conceptos propios:** *Inteligencia operativa* · *Da Vinci Central* (panel/centro de mando) · *LISA* (agente maestro, guiño a la Mona Lisa, 🔑 "tú tienes las llaves") · *El Método Da Vinci* (boceto → prueba → ajuste → obra) · *saper vedere* («saber ver») · *Del códice al código* · *el taller* · *Programa Fundador* · *Garantía del taller*
- **Agentes con nombre en las demos:** LISA (maestro), Valentina (llamadas de cobranza/entregas), Atlas ↔ Livia (agentes coordinándose), Marco (nota de voz), Faro (torre de control logística), MECÁNICO (agente de planta)
- **Clientes ficticios de demo:** Comercial Robledo, Grupo Anzures, Farmacias Lira; productos "Válvula 3/4", "Bomba periférica 1 HP"

## 1. Sistema de diseño original (referencia; el rediseño puede cambiarlo)

**Colores (CSS `:root`)**

| Token | Valor | Uso |
|---|---|---|
| --naranja | #F58634 | acento principal / CTA |
| --naranja-oscuro | #D96F1F | hover |
| --carbon | #3E3E40 | |
| --carbon-hondo | #2E2E30 | fondos oscuros |
| --tinta | #2B2B2D | texto |
| --tinta-tech | #232326 | bloques "tech" |
| --papel | #FAF6EF | fondo tono pergamino · theme-color |
| --papel-hondo | #F3EDE2 | fondo alterno |
| --blanco-calido | #FFFDF8 | tarjetas |
| --linea | rgba(62,62,64,.16) | bordes |
| --gris-medio | #6E6A63 | texto secundario |
| --verde-wa | #22A85B | WhatsApp |
| --glow | 0 0 16px rgba(245,134,52,.4) | brillo naranja |

- **Tipografías:** Marcellus (display/títulos) · Cormorant Garamond 500/600 (acentos, citas) · Archivo 400–700 (cuerpo) · IBM Plex Mono 400/600 (etiquetas tech tipo `AGENTES_AUTONOMOS`)
- **Espaciado:** 0.5 / 1 / 1.5 / 2.5 / 4 / 7 rem · **Easing:** cubic-bezier(0.16,1,0.3,1) · **Sombra:** 0 24px 55px -30px rgba(62,62,64,.35)
- **Stack front:** HTML estático + GSAP + ScrollTrigger (secciones pinned, scroll horizontal de módulos, typewriter, marquee), transiciones de página, Vercel Insights. Hosting en Vercel. Demos de WhatsApp vía Green API.
- **Estética:** renacentista/códice (bocetos sepia de Leonardo convertidos en interfaces) + UI tech en vivo (contadores, streams, chat).

## 2. Assets del sitio (URLs)

- **Logos:** https://da-vinci.ai/assets/logo-horizontal-positivo.png · https://da-vinci.ai/assets/logo-horizontal-negativo.png · https://da-vinci.ai/assets/logo-positivo.png · https://da-vinci.ai/assets/isotipo-positivo.png · https://da-vinci.ai/assets/isotipo-negativo.png
- **Imágenes:** https://da-vinci.ai/assets/img/hero-poster.jpg · https://da-vinci.ai/assets/img/film-poster.jpg (og:image) · https://da-vinci.ai/assets/img/lisa-retrato2.jpg · https://da-vinci.ai/assets/img/sketch-dashboard.jpg ("Boceto renacentista de una interfaz de software") · https://da-vinci.ai/assets/img/sketch-aerial-screw.jpg · https://da-vinci.ai/assets/img/sketch-studies.jpg
- **Video:** https://da-vinci.ai/assets/video/hero-bg.mp4 (fondo del hero, "video del taller") · https://da-vinci.ai/assets/video/lisa-film-v6.mp4 (film de LISA, 40 s narrado) · https://da-vinci.ai/assets/video/ads/film-industrial.mp4 · https://da-vinci.ai/assets/video/presentador.mp4
- **Audio (demos con voz real):** https://da-vinci.ai/assets/audio/llamada-valentina.m4a · https://da-vinci.ai/assets/audio/agentes-atlas-livia.m4a · https://da-vinci.ai/assets/audio/voznota-marco.m4a

## 3. Navegación global

**Header:** Logo · Da Vinci Central · Demos · Módulos · Método · Nosotros · Blog · [CTA] Agenda tu diagnóstico

**Footer:**
- Logo (negativo) · "Observar, entender, construir, perfeccionar." · INTELIGENCIA OPERATIVA · MX · [CTA] Agenda tu diagnóstico
- **Explora:** LISA 🔑 · Da Vinci Central · Sala de demos · Método · Tecnología · Inversión · Nosotros · Blog
- **Soluciones:** Los 6 módulos · 9 industrias · Planta y transformación · Contabilidad · Finanzas · Fiscal · Planta Da Vinci (app) · Diagnóstico gratuito
- **Confianza:** Seguridad y datos · Preguntas frecuentes · Casos · Aviso de privacidad · Contacto
- Línea final: "Taller abierto · CDMX [hora en vivo] · © 2026 Da Vinci IA · da-vinci.ai · Tú tienes las llaves."

**Elementos globales (sprint.js / main.js):**
- Saludo dinámico según la hora: "Buenos días — el taller está abierto" / "Buenas tardes — el taller está abierto" / "Buenas noches — los agentes siguen trabajando"; a visitantes recurrentes: "Qué bueno verte de nuevo ·"
- Barra sticky: "🔑 **Diagnóstico gratuito:** mapeamos tu operación y te decimos dónde hay retorno." [Agendar ahora] [✕]
- Popup de salida: "Antes de irte… La Mona Lisa guarda su secreto hace 500 años. **LISA te cuenta el de tu empresa en un diagnóstico gratis.**" [Agendar mi diagnóstico] [Hoy no, gracias]
- Botón compartir: "📲 Mándasela a tu socio" (abre WhatsApp con "Mira esto para la empresa: <url>") + 🔗 Copiar link
- Formulario: confirmación "Recibido — te contactamos pronto ✓" · error "Revisa los campos marcados: falta información para poder escribirte."
- Botón de WhatsApp (el número está vacío en el código): mensaje prellenado "Hola, quiero agendar un diagnóstico gratuito con Da Vinci IA"

## 4. Mapa del sitio (45 páginas)

**Páginas principales**

- Da Vinci IA — Inteligencia operativa para tu empresa — https://da-vinci.ai/index.html
- Da Vinci Central — Da Vinci IA — https://da-vinci.ai/central.html
- Sala de demos — Da Vinci IA — https://da-vinci.ai/demos.html
- Módulos — Da Vinci IA — https://da-vinci.ai/modulos.html
- El Método Da Vinci — Da Vinci IA — https://da-vinci.ai/metodo.html
- Nosotros — Da Vinci IA — https://da-vinci.ai/nosotros.html
- Blog — Da Vinci IA — https://da-vinci.ai/blog.html
- LISA — tu agente empresarial | Da Vinci IA — https://da-vinci.ai/lisa.html
- Tecnología — Da Vinci IA — https://da-vinci.ai/tecnologia.html
- La inversión — Da Vinci IA — https://da-vinci.ai/precios.html
- Industrias — Da Vinci IA — https://da-vinci.ai/industrias.html
- Planta y transformación — Da Vinci IA — https://da-vinci.ai/planta.html
- Contabilidad, finanzas y fiscal — Da Vinci IA — https://da-vinci.ai/finanzas.html
- Planta Da Vinci — SCADA con cerebro — https://da-vinci.ai/app-planta.html
- Diagnóstico gratuito — Da Vinci IA — https://da-vinci.ai/diagnostico.html
- Seguridad y datos — Da Vinci IA — https://da-vinci.ai/seguridad.html
- Preguntas frecuentes — Da Vinci IA — https://da-vinci.ai/faq.html
- Casos y resultados — Da Vinci IA — https://da-vinci.ai/casos.html
- Aviso de privacidad — Da Vinci IA — https://da-vinci.ai/privacidad.html
- Contacto — Da Vinci IA — https://da-vinci.ai/contacto.html

**Demos por área**

- Área Industrial — Demos Da Vinci IA — https://da-vinci.ai/demo-industrial.html
- Área Comercio y servicios — Demos Da Vinci IA — https://da-vinci.ai/demo-comercio.html
- Área Financiera y fiscal — Demos Da Vinci IA — https://da-vinci.ai/demo-financiera.html
- Área Emprendimiento — Demos Da Vinci IA — https://da-vinci.ai/demo-emprendimiento.html

**Módulos (detalle)**

- Automatización de procesos — Da Vinci IA — https://da-vinci.ai/modulo-automatizacion.html
- Agentes de IA — chat y voz — Da Vinci IA — https://da-vinci.ai/modulo-agentes-ia.html
- Copilots por rol — Da Vinci IA — https://da-vinci.ai/modulo-copilots.html
- Documentos inteligentes — Da Vinci IA — https://da-vinci.ai/modulo-documentos.html
- Análisis predictivo — Da Vinci IA — https://da-vinci.ai/modulo-prediccion.html
- Integraciones con lo tuyo — Da Vinci IA — https://da-vinci.ai/modulo-integraciones.html

**Blog**

- Qué es un agente de IA (explicado sin humo) — Da Vinci IA — https://da-vinci.ai/blog-que-es-un-agente-ia.html
- Del códice al código: cómo pensamos el software — Da Vinci IA — https://da-vinci.ai/blog-del-codice-al-codigo.html
- Cuánto cuesta la IA en una pyme (respuesta honesta) — Da Vinci IA — https://da-vinci.ai/blog-cuanto-cuesta-ia.html
- IA para pymes: por dónde empezar sin quemarse — Da Vinci IA — https://da-vinci.ai/blog-ia-para-pymes.html
- El agente de WhatsApp que vende mientras duermes — Da Vinci IA — https://da-vinci.ai/blog-agente-whatsapp-ventas.html
- Cómo automatizar un proceso sin romper tu operación — Da Vinci IA — https://da-vinci.ai/blog-como-automatizar-procesos.html

**Industrias (detalle)**

- IA para comercio y distribución — Da Vinci IA — https://da-vinci.ai/industria-comercio.html
- IA para restaurantes y alimentos — Da Vinci IA — https://da-vinci.ai/industria-restaurantes.html
- IA para clínicas y salud — Da Vinci IA — https://da-vinci.ai/industria-salud.html
- IA para manufactura — Da Vinci IA — https://da-vinci.ai/industria-manufactura.html
- IA para servicios profesionales — Da Vinci IA — https://da-vinci.ai/industria-servicios.html
- IA para construcción e inmobiliaria — Da Vinci IA — https://da-vinci.ai/industria-construccion.html
- IA para logística y transporte — Da Vinci IA — https://da-vinci.ai/industria-logistica.html
- IA para supermercados y autoservicio — Da Vinci IA — https://da-vinci.ai/industria-supermercados.html
- IA para comercializadoras — Da Vinci IA — https://da-vinci.ai/industria-comercializadora.html


# ═══ PARTE: PÁGINAS PRINCIPALES ═══

## Da Vinci IA — Inteligencia operativa para tu empresa

**URL:** https://da-vinci.ai/index.html

**Meta descripción:** Inteligencia operativa: mapeamos tu empresa y le construimos software a la medida con IA — automatizaciones, agentes inteligentes y Da Vinci Central, el centro donde preguntas y ves todo tu negocio. Avances cada semana, módulo por módulo.

*[sección: 1 · HERO (video del taller de fondo)]*

Saper vedere — «saber ver»

### Inteligencia operativa para tu empresa. Módulo por módulo, contigo.

Mapeamos tus procesos con tu propia gente, los automatizamos con agentes de IA y concentramos todo tu negocio en un solo lugar: Da Vinci Central. Cada semana ves un avance funcionando.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/#contacto) [Ver las demos](https://da-vinci.ai/demos.html)

Ventas de hoy $187,420 ▲ 12.4%

3 agentes trabajando

«¿Cuánto vendimos hoy?»

Inteligencia operativa En vivo

*[sección: MARQUEE]*

Inteligencia operativa ✳ AGENTES_AUTONOMOS ✳ Automatización ✳ LLM · RAG · API ✳ Da Vinci Central ✳ DATOS_EN_VIVO ✳ Copilots por rol ✳ VISION + VOZ ✳ Análisis predictivo ✳ Inteligencia operativa ✳ AGENTES_AUTONOMOS ✳ Automatización ✳ LLM · RAG · API ✳ Da Vinci Central ✳ DATOS_EN_VIVO ✳ Copilots por rol ✳ VISION + VOZ ✳ Análisis predictivo ✳

*[sección: 2 · EL PROBLEMA]*

#### Nadie opera bien lo que no puede ver.

- La información vive dispersa. Ventas en un Excel, cobranza en WhatsApp, inventario en la cabeza de alguien.

- Los procesos dependen de memoria. Facturas, seguimientos y reportes que se hacen a mano — cuando alguien se acuerda.

- Las decisiones se toman a ciegas. Para saber cómo va el negocio hay que pedir tres reportes y esperar dos días.

- El software genérico no se adapta. Tu empresa termina trabajando para el sistema, en vez de al revés.

*[sección: 3 · DEL CÓDICE AL CÓDIGO (pinned)]*

#### Del códice al código.

Leonardo bocetó máquinas que se adelantaron 400 años a su época.

Nosotros construimos la tuya — y la entregamos funcionando en semanas.

Sigue bajando ↓

![Boceto renacentista de una interfaz de software](https://da-vinci.ai/assets/img/sketch-dashboard.jpg)

Da Vinci Central

Ventas de hoy $0

Pedidos activos 0

Por cobrar $0

¿Qué cliente compró más este mes?

*[sección: 4 · LA HISTORIA]*

#### Por qué Da Vinci

Antes de pintar un músculo, Leonardo diseccionaba el cuerpo. Antes de diseñar una máquina, estudiaba el agua, el viento, el vuelo de los pájaros. Llenó más de 7,000 páginas de códices con observaciones y mediciones. No empezaba por la solución: empezaba por entender.

En su taller nada se construía de golpe: cada obra avanzaba por bocetos, pruebas y correcciones, con el cliente viendo el progreso.

Quinientos años después, trabajamos igual. Primero vemos — mapeamos tu empresa proceso por proceso, con las personas que los viven a diario. Luego construimos por módulos , mostrándote un avance cada semana. Y todo queda en un solo lugar : un centro donde puedes preguntar lo que sea sobre tu negocio.

> «La simplicidad es la máxima sofisticación.» — atribuido al taller de Leonardo

Por eso elegimos su nombre. No por el genio — por el método: observar, entender, construir, perfeccionar.

*[sección: 5 · DA VINCI CENTRAL · BENTO]*

#### Da Vinci Central

El centro de inteligencia operativa de tu empresa.

Como los códices donde Leonardo concentraba todo su conocimiento — pero este responde. Todo tu negocio, en tiempo real, en un solo lugar. [Conócelo a fondo →](https://da-vinci.ai/central.html)

*[sección: Tile: comando / typewriter]*

Esta semana llevan $487,320 — 12.4% arriba.

##### Pregunta en tu idioma

Sin reportes, sin esperar: la respuesta llega con cifras al momento.

*[sección: Tile: en vivo]*

En vivo

- Ventas $0

- Tickets resueltos 0

- Margen 0

##### Todo en tiempo real

Cada venta y cada pago se reflejan al instante, desde cualquier dispositivo.

*[sección: Tile: prioridades auto-ordenadas]*

- Cobrar a Comercial Robledo $41,200

- Pedir válvulas al proveedor stock 14

- Cotización de Grupo Anzures vence hoy

- Reporte semanal se genera solo

##### Prioriza por ti

La IA reordena tus pendientes según lo que más impacta hoy.

*[sección: Tile: stream infinito]*

🧾 Factura A-8841 registrada 💬 Agente cerró venta · $1,890 📦 Pedido #452 enviado ⚠ Stock bajo: Válvula 3/4 💰 Pago recibido · Farmacias Lira 🧾 Factura A-8841 registrada 💬 Agente cerró venta · $1,890 📦 Pedido #452 enviado ⚠ Stock bajo: Válvula 3/4 💰 Pago recibido · Farmacias Lira

##### Cada movimiento, registrado

El pulso de tu empresa corriendo las 24 horas — nada se pierde.

*[sección: Tile: alertas]*

⚠ Inventario bajo

Válvula 3/4 — se agota el martes

##### Te avisa antes del problema

Inventario, cobranza, procesos detenidos: la alerta llega antes de que duela.

*[sección: 6 · DEMOS (teaser → sala de demos)]*

#### La sala de demos

Agentes que llaman por teléfono , que cotizan por nota de voz , que se coordinan entre sí — y un WhatsApp que te escribe de verdad. Todo en vivo, con voz real.

[📞 Valentina te llama cobranza y entregas con voz](https://da-vinci.ai/demos.html) [🤝 Atlas ↔ Livia dos agentes coordinándose solos](https://da-vinci.ai/demos.html) [📲 Tu WhatsApp vibra recibe el mensaje del agente](https://da-vinci.ai/demos.html) [🏭 Tu ERP de muestra súper, logística, restaurante, comercializadora](https://da-vinci.ai/demos.html#erp)

[Entrar a la sala de demos →](https://da-vinci.ai/demos.html)

*[sección: 7 · MÓDULOS (scroll horizontal)]*

#### Los módulos

Cada invento de Leonardo resolvía un problema concreto. Cada módulo nuestro, también. Los integramos todos — o empezamos por el único que necesitas. [Ver todos a detalle →](https://da-vinci.ai/modulos.html)

Sigue bajando →

##### Automatización de procesos

Facturas, reportes, seguimientos y tareas repetitivas que se ejecutan solas, todos los días, sin olvidos.

##### Agentes de IA — chat y voz

Atienden WhatsApp, web y teléfono las 24 horas: responden, cotizan, agendan y venden con el tono de tu marca.

##### Copilots por rol

Un asistente de IA para cada puesto: el vendedor, el contador y el gerente tienen cada quien el suyo.

##### Documentos inteligentes

Facturas, contratos y correos que se leen, se capturan y se archivan solos. Adiós a la captura manual.

##### Análisis predictivo

Pronóstico de ventas, inventario y flujo de caja: decide con evidencia lo que viene, no con intuición.

##### Integraciones con lo tuyo

No reemplazamos lo que funciona: conectamos tu ERP, CRM, Excel y WhatsApp para que todo hable entre sí.

#### Genérico vs. a tu medida.

|  | SOFTWARE GENÉRICO | DA VINCI IA |
|---|---|---|
| Se adapta a… | su plantilla (tú te adaptas) | tu operación exacta |
| Lo ves funcionando… | al final (sorpresa) | cada semana, contigo |
| La IA… | un chatbot pegado con cinta | agentes que actúan + LISA que ve todo |
| Tus datos… | viven en su nube, a su modo | son tuyos — tú tienes las llaves |
| El precio… | renta eterna por módulos que no usas | cerrado, por módulo que sí necesitas |

*[sección: 8 · MÉTODO (scroll story)]*

#### El Método Da Vinci

Boceto → prueba → ajuste → obra. Así trabajaba el taller de Leonardo; así construimos tu software. Nunca caminas a ciegas.

- 1 Mapeamos tu empresa Vamos contigo y con tu gente, proceso por proceso. Entendemos cómo trabaja tu empresa de verdad — no en el organigrama.

- 2 Priorizamos módulos Te decimos dónde la IA genera retorno más rápido y por dónde conviene empezar. Diagnóstico claro, sin tecnicismos.

- 3 Diseñamos el primer módulo Prototipo con tus datos reales, en días. Lo ves funcionando antes de invertir en el desarrollo completo.

- 4 Avance semanal contigo Cada semana, una reunión: ves el progreso, pides cambios y decides. El software se ajusta a ti — no al revés.

- 5 Implementamos y capacitamos Lo dejamos funcionando en tu operación y entrenamos a tu equipo con las personas involucradas desde el día uno.

- 6 Siguiente módulo Repetimos con el siguiente proceso, hasta integrar toda tu empresa en Da Vinci Central. ¿Solo necesitas uno? Nos ajustamos.

*[sección: 9 · CASOS (oculta)]*

PROGRAMA FUNDADOR · AGOSTO

3 proyectos fundadores con condiciones especiales — a cambio de documentar tu caso de éxito.

[Quiero mi lugar →](https://da-vinci.ai/contacto.html)

*[sección: 10 · FAQ]*

#### Preguntas frecuentes

**¿Cuánto tarda un proyecto?**

El primer módulo funcionando suele tomar semanas, no meses — esa es nuestra propuesta de valor. Desde la primera semana ves avances reales en la reunión semanal, y el sistema crece módulo por módulo a tu ritmo.

**¿Cuánto cuesta?**

Depende de los módulos que tu empresa necesite. Por eso el primer paso es el diagnóstico gratuito: mapeamos tu operación y te entregamos una propuesta con alcance y precio concretos, sin compromiso.

**Ya tengo un sistema, ¿lo tengo que tirar?**

No. Nos integramos con lo que ya usas — tu ERP, CRM, Excel o WhatsApp. Construimos encima de lo que funciona y reemplazamos solo lo que te estorba.

**¿Necesito un equipo técnico en mi empresa?**

No. Nosotros construimos, implementamos y damos mantenimiento. Tu equipo solo necesita usarlo — y lo capacitamos para eso.

**¿Qué pasa con mis datos?**

Tus datos son tuyos y se quedan en tu empresa. Trabajamos con acuerdos de confidencialidad y accesos controlados desde el primer día del mapeo.

**¿Trabajan a distancia?**

Sí. El mapeo inicial puede ser presencial o por videollamada, y las reuniones semanales de avance se hacen como te acomode.

*[sección: 11 · CONTACTO]*

#### Toda obra empieza con una conversación.

Cuéntanos qué quieres lograr y agendamos tu diagnóstico gratuito : mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

Nombre

`[campo input text name=nombre placeholder="¿Cómo te llamas?"]`

Empresa

`[campo input text name=empresa placeholder="Nombre de tu empresa"]`

Correo

`[campo input email name=email placeholder="tu@empresa.com"]`

¿Qué te gustaría automatizar o ver mejor?

`[campo textarea  name=mensaje placeholder="Ej.: pierdo mucho tiempo en cobranza y no sé cuánto vendo al día…"]`

Revisa los campos marcados: falta información para poder escribirte.

Agendar mi diagnóstico

---

## Da Vinci Central — Da Vinci IA

**URL:** https://da-vinci.ai/central.html

**Meta descripción:** Da Vinci Central: el centro de inteligencia operativa de tu empresa. Pregunta lo que sea y ve cada movimiento en tiempo real.

[Inicio](https://da-vinci.ai/index.html) / Da Vinci Central

### El centro de inteligencia operativa de tu empresa

Pregunta lo que sea. Ve cada movimiento de tu negocio. Como los códices donde Leonardo concentraba todo su conocimiento — pero este responde.

Da Vinci Central · LISA

VENTAS HOY $0

PEDIDOS ACTIVOS 0

POR COBRAR $0

🔎

#### Un solo lugar para todo tu negocio

Ventas, cobranza, inventario, operación: cada módulo que construimos alimenta a Central. El resultado es un panel vivo donde los números siempre coinciden — y un chat donde le preguntas a tu empresa en tu idioma.

- Pregunta en lenguaje natural. «¿Cuánto vendimos esta semana?», «¿quién no ha pagado?», «¿qué se está agotando?» — respuesta al momento, con cifras y gráficas.

- Todo en tiempo real. Cada venta, pago y movimiento se refleja al instante, desde tu teléfono o tu computadora.

- Alertas de lo importante. Inventario bajo, cliente que no paga, proceso detenido: te avisa antes de que sea problema.

- Memoria de tu empresa. Historial, documentos y decisiones quedan consultables — el conocimiento deja de vivir solo en cabezas.

#### Míralo en acción

En la página principal tenemos una demo interactiva: haz clic en las preguntas y ve cómo responde Central con datos de ejemplo. [Probar la demo →](https://da-vinci.ai/index.html#demos)

#### Crece contigo

Central no se compra "completo": se construye módulo por módulo con el [Método Da Vinci](https://da-vinci.ai/metodo.html) . Empiezas con lo que más retorno te da, y cada módulo nuevo enriquece lo que Central puede ver y responder.

#### ¿Quieres ver tu empresa completa en una pantalla?

Agenda un diagnóstico gratuito y te mostramos cómo se vería Da Vinci Central con tus procesos reales.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Sala de demos — Da Vinci IA

**URL:** https://da-vinci.ai/demos.html

**Meta descripción:** Escucha a nuestros agentes llamar por teléfono, mandar notas de voz, coordinarse entre sí y responder por WhatsApp. La inteligencia operativa de Da Vinci IA, en vivo.

[Inicio](https://da-vinci.ai/index.html) / Sala de demos

### La sala de demos.

No te contamos lo que hace la inteligencia operativa: escúchala llamar, léela vender y mírala coordinarse sola.

voz_real agentes_autonomos whatsapp erp/crm_demo

*[sección: FILM · LISA, tu agente empresarial]*

▶ Dale play con sonido: 40 segundos, las 4 áreas en la vida real, narrado — "Tu empresa habla todo el día. ¿Quién la escucha?"

*[sección: LISA · show de 4 industrias en el celular]*

INDUSTRIAL

#### La planta te responde.

LISA ve tus líneas, tu calidad y tus paros — y te lo cuenta por WhatsApp.

LISA es el agente maestro: las llaves de tu empresa en tu bolsillo. [Conoce su historia →](https://da-vinci.ai/lisa.html)

🔑

LISA tu agente maestro · en línea

▮▮▮▯ 5G

Escribe a LISA… 🎤

*[sección: VESTÍBULO · 4 áreas]*

#### Elige tu mundo

Cuatro puertas. Detrás de cada una: la introducción a tu industria y plataformas completas diseñadas solo para ella.

[01 Industrial Maquila, transformación, líneas, calidad — la planta que se ve a sí misma. →](https://da-vinci.ai/demo-industrial.html) [02 Comercio y servicios Súper, comercializadoras, restaurantes, logística — el mostrador visible. →](https://da-vinci.ai/demo-comercio.html) [03 Financiera y fiscal La puerta que todos cruzan: números que se cuidan solos. →](https://da-vinci.ai/demo-financiera.html) [04 Emprendimiento Tu primer sistema — simple, poderoso y a precio de arranque. →](https://da-vinci.ai/demo-emprendimiento.html)

#### ¿Te imaginaste tu empresa aquí?

En el diagnóstico gratuito dibujamos estas mismas pantallas — pero con tus procesos, tus productos y tu gente.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Módulos — Da Vinci IA

**URL:** https://da-vinci.ai/modulos.html

**Meta descripción:** Los seis módulos de Da Vinci IA: automatización, agentes de IA, copilots, documentos inteligentes, análisis predictivo e integraciones.

[Inicio](https://da-vinci.ai/index.html) / Módulos

### Los módulos

Cada invento de Leonardo resolvía un problema concreto. Cada módulo nuestro, también. Los integramos todos — o empezamos por el único que necesitas.

[01 Automatización de procesos Lo repetitivo, en piloto automático. →](https://da-vinci.ai/modulo-automatizacion.html) [02 Agentes de IA — chat y voz Tu mejor vendedor no duerme. →](https://da-vinci.ai/modulo-agentes-ia.html) [03 Copilots por rol Un experto de IA al lado de cada puesto. →](https://da-vinci.ai/modulo-copilots.html) [04 Documentos inteligentes Papeles que se leen solos. →](https://da-vinci.ai/modulo-documentos.html) [05 Análisis predictivo Decide con lo que viene, no con lo que pasó. →](https://da-vinci.ai/modulo-prediccion.html) [06 Integraciones con lo tuyo No tires nada: conéctalo. →](https://da-vinci.ai/modulo-integraciones.html)

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## El Método Da Vinci — Da Vinci IA

**URL:** https://da-vinci.ai/metodo.html

**Meta descripción:** El Método Da Vinci: mapeo de procesos, módulos priorizados y avances semanales. Software a la medida sin caminar a ciegas.

[Inicio](https://da-vinci.ai/index.html) / Método

### El Método Da Vinci

Boceto → prueba → ajuste → obra. Así trabajaba el taller de Leonardo; así construimos tu software. Nunca caminas a ciegas.

SEMANA 0 · EL MAPEO

Recorrido con tu gente, proceso por proceso ✓ día 1-3

Mapa de dolores con costo estimado ✓ priorizado

Propuesta: primer módulo + precio cerrado ✓ sin letra chica

SEMANA 1-2 · EL PROTOTIPO

Módulo corriendo con TUS datos ✓ no maquetas

Junta semanal: viste, pediste, decidiste ✓ viernes 9:00

Cambios de la junta ✓ aplicados antes del lunes

SEMANA 3+ · EN PRODUCCIÓN

Módulo funcionando en tu operación real ✓ con tu equipo entrenado

LISA ya responde con estos datos ✓ conectada

Siguiente módulo tú decides el ritmo

SEMANA 0

##### Primero vemos.

MAPEO CON TU GENTE

Como Leonardo llenaba códices antes de trazar: entendemos tu operación real antes de escribir una línea de código.

SEMANAS 1-2

##### Luego lo ves funcionar.

PROTOTIPO + JUNTA SEMANAL

Cada viernes ves el avance con tus datos reales. Pides cambios. El lunes ya están.

SEMANA 3+

##### Y nunca paras de mejorar.

PRODUCCIÓN + SIGUIENTE MÓDULO

La entrega no es el final: es el inicio. Módulo sobre módulo — sfumato, capa sobre capa.

- 1 Mapeamos tu empresa Vamos contigo y con tu gente, proceso por proceso. Entendemos cómo trabaja tu empresa de verdad — no en el organigrama. De aquí sale un mapa claro de dónde se pierde tiempo y dinero.

- 2 Priorizamos módulos Te decimos dónde la IA genera retorno más rápido y por dónde conviene empezar. Diagnóstico claro, sin tecnicismos, con alcance y precio concretos.

- 3 Diseñamos el primer módulo Prototipo con tus datos reales, en días. Lo ves funcionando antes de invertir en el desarrollo completo — sin actos de fe.

- 4 Avance semanal contigo Cada semana, una reunión: ves el progreso, pides cambios y decides. Las personas involucradas en el proceso participan desde el día uno.

- 5 Implementamos y capacitamos Lo dejamos funcionando en tu operación real y entrenamos a tu equipo. La entrega no es el final: es el inicio de la mejora continua.

- 6 Siguiente módulo Repetimos con el siguiente proceso, hasta integrar toda tu empresa en Da Vinci Central. ¿Solo necesitas un módulo? Nos ajustamos a eso.

#### Por qué funciona

- Velocidad real. El primer módulo funcionando toma semanas, no meses. Ves valor antes de comprometer el proyecto completo.

- Cero cajas negras. Cada semana ves, opinas y decides. El software se ajusta a tu empresa — no al revés.

- Tu gente a bordo. Quienes viven el proceso participan desde el mapeo; cuando el módulo llega, ya es suyo.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Nosotros — Da Vinci IA

**URL:** https://da-vinci.ai/nosotros.html

**Meta descripción:** Por qué Da Vinci IA: el método de Leonardo — observar, entender, construir, perfeccionar — aplicado al software con inteligencia artificial.

[Inicio](https://da-vinci.ai/index.html) / Nosotros

### Por qué Da Vinci

Saper vedere — «saber ver». El lema de Leonardo es nuestra forma de trabajar.

![](https://da-vinci.ai/assets/img/sketch-aerial-screw.jpg)

![](https://da-vinci.ai/assets/img/sketch-studies.jpg)

Antes de pintar un músculo, Leonardo diseccionaba el cuerpo. Antes de diseñar una máquina, estudiaba el agua, el viento, el vuelo de los pájaros. Llenó más de 7,000 páginas de códices con observaciones, diagramas y mediciones. No empezaba por la solución: empezaba por entender.

En su taller de Florencia nada se construía de golpe: cada obra avanzaba por bocetos, pruebas y correcciones, con el cliente viendo el progreso. Y nunca separó el arte de la ingeniería — para él eran la misma cosa: resolver problemas reales con precisión y belleza.

Quinientos años después, nosotros trabajamos igual.

Primero vemos. Mapeamos tu empresa proceso por proceso, con las personas que los viven todos los días — como Leonardo llenaba sus cuadernos antes de trazar la primera línea.

Luego construimos por módulos. Cada semana te mostramos un avance, lo ajustamos contigo y lo implementamos. Sin cajas negras, sin esperar meses para ver resultados.

Y todo queda en un solo lugar. Como los códices donde Leonardo concentraba todo su conocimiento, tu empresa tiene un centro donde puedes preguntar lo que sea: [Da Vinci Central](https://da-vinci.ai/central.html) .

> «La simplicidad es la máxima sofisticación.» — atribuido al taller de Leonardo

Por eso elegimos su nombre. No por el genio — por el método: observar, entender, construir, perfeccionar. Hasta nuestro logotipo lo cuenta: el isotipo es el tornillo aéreo de Leonardo, un invento que se adelantó 400 años a su época. Ideas adelantadas, hechas realidad.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Blog — Da Vinci IA

**URL:** https://da-vinci.ai/blog.html

**Meta descripción:** Ideas claras sobre IA aplicada a empresas: agentes, automatización, costos y método. Sin humo.

[Inicio](https://da-vinci.ai/index.html) / Blog

### El cuaderno

Ideas claras sobre IA aplicada a empresas reales. Sin humo, sin tecnicismos innecesarios.

[Qué es un agente de IA (explicado sin humo) No es un chatbot con otro nombre. Un agente percibe, decide y actúa — y esa diferencia es la que genera retorno en una empresa. Leer artículo →](https://da-vinci.ai/blog-que-es-un-agente-ia.html) [Del códice al código: cómo pensamos el software Leonardo llenó 7,000 páginas antes de construir. Nosotros mapeamos antes de programar. La historia de nuestra forma de trabajar. Leer artículo →](https://da-vinci.ai/blog-del-codice-al-codigo.html) [Cuánto cuesta la IA en una pyme (respuesta honesta) Menos que un empleado administrativo, más que una suscripción de software. Lo que de verdad determina el precio — y las señales de alerta. Leer artículo →](https://da-vinci.ai/blog-cuanto-cuesta-ia.html) [IA para pymes: por dónde empezar sin quemarse No necesitas un departamento de datos para usar IA. Necesitas un proceso que duela y un mapa claro. Aquí te decimos cómo elegirlo. Leer artículo →](https://da-vinci.ai/blog-ia-para-pymes.html) [El agente de WhatsApp que vende mientras duermes La mitad de los mensajes a un negocio llegan fuera de horario. Un agente de IA bien conectado responde, cotiza y aparta — a las 11 de la noche también. Leer artículo →](https://da-vinci.ai/blog-agente-whatsapp-ventas.html) [Cómo automatizar un proceso sin romper tu operación La automatización mal hecha rompe más de lo que arregla. La bien hecha es invisible: un día el reporte simplemente ya estaba listo. Leer artículo →](https://da-vinci.ai/blog-como-automatizar-procesos.html)

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## LISA — tu agente empresarial | Da Vinci IA

**URL:** https://da-vinci.ai/lisa.html

**Meta descripción:** LISA: el agente maestro de Da Vinci IA. Ve toda tu empresa, actúa con tus reglas y te responde en una conversación. Tú tienes las llaves.

[Inicio](https://da-vinci.ai/index.html) / LISA

### LISA , tu agente empresarial.

Leonardo tardó 16 años en su obra maestra. La nuestra se llama igual — y trabaja para ti.

agente_maestro base_de_conocimiento whatsapp+voz accesos_por_rol

LISA es la inteligencia que ve toda tu empresa — ventas, planta, caja, gente — y te la entrega en una conversación. Aprende de tus datos y documentos, actúa con tus reglas, y responde a las personas que tú decidas, con lo que cada quien puede ver.

[Quiero a LISA en mi empresa](https://da-vinci.ai/contacto.html) [Verla en acción](https://da-vinci.ai/demos.html)

![Retrato de LISA — la Mona Lisa reinterpretada en sfumato ámbar con la Espiral](https://da-vinci.ai/assets/img/lisa-retrato2.jpg)

#### Por qué se llama LISA

Por Lisa Gherardini — la Mona Lisa . Y no es solo un homenaje: todo lo que hace especial al cuadro, lo hace especial a nuestro agente.

##### La sonrisa que sabe

La Gioconda sonríe como quien sabe algo que tú no. LISA también lo sabe — ya vio tus ventas, tu caja y tu planta. La diferencia: ella sí te lo dice.

##### Los ojos que te siguen

Desde cualquier ángulo del Louvre, te mira. LISA ve tu empresa desde todos los ángulos a la vez — y nunca parpadea.

##### El sfumato

Leonardo pintó sin bordes duros, capa sobre capa. LISA se construye igual — módulo sobre módulo — y difumina la frontera entre tú y tus sistemas: hablas, y sucede.

##### Discreción de museo

500 años guardando su secreto tras un cristal. LISA guarda los tuyos: tus datos no entrenan modelos ajenos y solo abre las puertas que autorices.

#### Cómo trabaja

- Ve todo. Cada módulo que construimos — ventas, planta, cobranza, documentos — alimenta su conocimiento. Es la memoria viva de tu empresa.

- Habla en pasado de acción. No dice "deberías cobrar": dice "ya envié el recordatorio con la liga de pago" . Reporta lo que ya resolvió.

- Responde a cada quien lo suyo. El vendedor le pregunta por sus clientes; dirección le pregunta por todo. Accesos por rol, como debe ser.

- Vive donde tú vives. WhatsApp, voz o el panel de Da Vinci Central — tú eliges el canal.

> «La Mona Lisa guarda su secreto hace 500 años. LISA te lo cuenta en segundos.»

#### Tú tienes las llaves.

En el diagnóstico gratuito descubrimos qué debería estar viendo LISA en tu empresa — y por dónde empezar.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Tecnología — Da Vinci IA

**URL:** https://da-vinci.ai/tecnologia.html

**Meta descripción:** La tecnología detrás de Da Vinci IA: agentes autónomos, modelos de lenguaje, RAG, visión, voz e integraciones — explicada sin humo.

[Inicio](https://da-vinci.ai/index.html) / Tecnología

### El taller por dentro

La tecnología cambia cada mes; el método permanece. Esto es lo que usamos hoy — explicado sin humo.

agentes llm rag vision voz api

![](https://da-vinci.ai/assets/isotipo-positivo.png)

agentes llm rag api visión voz

#### Las piezas del taller

- Agentes autónomos. Programas que perciben (leen un mensaje, un documento, un dato), deciden con contexto y actúan (responden, registran, avisan). Son los aprendices incansables del taller.

- Modelos de lenguaje (LLMs). Usamos los mejores modelos disponibles de cada generación — y los cambiamos cuando aparece uno mejor. Tu sistema no se casa con un proveedor.

- RAG — tu conocimiento, no el de internet. Los agentes responden consultando TUS datos: precios, inventario, políticas, historial. Por eso no inventan.

- Visión y voz. Leen facturas escaneadas, fotos de anaqueles y notas de remisión; hablan por teléfono con voz natural.

- Integraciones API. Nos conectamos a tu ERP, CRM, WhatsApp Business, bancos y hasta a tus Excel — sin pedirte que tires nada.

- Infraestructura en la nube. Respaldos automáticos, cifrado en tránsito y en reposo, y accesos por rol. Ver más en seguridad .

#### Nuestra regla de oro

La herramienta se elige al final, no al principio. Primero el mapeo de tu proceso (el códice), luego la pieza de tecnología que lo resuelve (el código). Cuando alguien te venda la herramienta antes de entender tu proceso — sospecha.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## La inversión — Da Vinci IA

**URL:** https://da-vinci.ai/precios.html

**Meta descripción:** Cómo se cotiza un proyecto con Da Vinci IA: diagnóstico gratuito, precio cerrado por módulo y mejora continua opcional.

[Inicio](https://da-vinci.ai/index.html) / Inversión

### Cuánto cuesta (y cómo se decide)

Sin menús de precios inflados ni cotizaciones a ciegas: el precio sale del mapa de tu empresa.

diagnostico_gratis precio_cerrado sin_sorpresas

##### 🧮 ¿Cuánto te cuesta NO automatizar?

Mueve los controles con los números de tu empresa.

PERSONAS HACIENDO TAREAS REPETITIVAS (captura, reportes, seguimientos): 3

`[campo input range name= placeholder=""]`

HORAS AL DÍA QUE CADA UNA DEDICA A ESO: 3 h

`[campo input range name= placeholder=""]`

COSTO MENSUAL PROMEDIO POR PERSONA: $ 15,000

`[campo input range name= placeholder=""]`

$0 se te va cada mes en talacha automatizable

$0 al año — sin contar ventas perdidas por no contestar

0 h de horas humanas recuperables al mes

Un módulo Da Vinci típico cuesta una fracción de eso — y trabaja las 24 horas. [Compruébalo con tu diagnóstico gratis →](https://da-vinci.ai/contacto.html)

#### Así funciona la inversión

- 1 Diagnóstico — gratis Mapeamos una parte de tu operación y te decimos dónde hay retorno. Si no lo hay, también. Sin compromiso.

- 2 Primer módulo — precio cerrado Recibes una propuesta con alcance, tiempo y precio fijo del módulo priorizado. Sin sorpresas ni horas extra facturadas.

- 3 Mejora continua — mensualidad opcional Si quieres que el sistema siga creciendo y mantenido, hay una mensualidad clara. Si prefieres solo el módulo, es tuyo y funciona.

#### Lo que siempre incluye

- Avance semanal contigo. Reunión cada semana: ves, ajustas, decides.

- Capacitación de tu equipo. El módulo se entrega funcionando y con tu gente sabiendo usarlo.

- Propiedad del cliente. El software y los datos son tuyos. Siempre.

PROGRAMA FUNDADOR · AGOSTO

3 proyectos fundadores con condiciones especiales — a cambio de documentar tu caso de éxito.

[Quiero mi lugar →](https://da-vinci.ai/contacto.html)

#### ¿Por qué no publicamos una lista de precios?

Porque sería mentirte. Un agente de WhatsApp para una tienda y uno para una cadena con 40 sucursales no cuestan lo mismo — y cobrarte "el paquete" promedio significaría cobrarte de más o quedarte corto. El diagnóstico existe justo para darte un número real, tuyo, con alcance claro.

🛡 GARANTÍA DEL TALLER

Si el diagnóstico no te da claridad sobre dónde está tu retorno, te quedas con el mapa de tu operación — gratis — y no te volvemos a buscar.

Así de seguros estamos de lo que vas a ver.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Industrias — Da Vinci IA

**URL:** https://da-vinci.ai/industrias.html

**Meta descripción:** Inteligencia operativa por industria: comercio, restaurantes, salud, manufactura, servicios, construcción y logística.

[Inicio](https://da-vinci.ai/index.html) / Industrias

### Tu industria, en nuestro mapa

Cada sector tiene sus propios dolores. Estos son los que ya sabemos resolver — y tu empresa siempre se mapea individualmente.

[Comercio y distribución Del pedido a la entrega, sin puntos ciegos. Ver soluciones →](https://da-vinci.ai/industria-comercio.html) [Restaurantes y alimentos Más mesas atendidas, menos mermas. Ver soluciones →](https://da-vinci.ai/industria-restaurantes.html) [Clínicas y salud Agenda llena, pacientes atendidos, expediente al día. Ver soluciones →](https://da-vinci.ai/industria-salud.html) [Manufactura La planta visible, la merma medida. Ver soluciones →](https://da-vinci.ai/industria-manufactura.html) [Servicios profesionales Menos administración, más horas facturables. Ver soluciones →](https://da-vinci.ai/industria-servicios.html) [Construcción e inmobiliaria Obras a tiempo, números a la vista. Ver soluciones →](https://da-vinci.ai/industria-construccion.html) [Logística y transporte Cada unidad, cada ruta, cada peso — visible. Ver soluciones →](https://da-vinci.ai/industria-logistica.html) [Supermercados y autoservicio Cada anaquel, cada caja, cada merma — bajo control. Ver soluciones →](https://da-vinci.ai/industria-supermercados.html) [Comercializadoras Compra bien, vende mejor, cobra a tiempo. Ver soluciones →](https://da-vinci.ai/industria-comercializadora.html)

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Planta y transformación — Da Vinci IA

**URL:** https://da-vinci.ai/planta.html

**Meta descripción:** IA para plantas de producción: visión artificial de líneas, monitoreo en tiempo real, calidad, mantenimiento predictivo y OEE.

[Inicio](https://da-vinci.ai/index.html) / Planta y transformación

### La planta que se ve a sí misma

Leonardo estudiaba las máquinas por dentro. Nosotros ponemos ojos, memoria y voz a tu línea de producción.

vision_artificial oee calidad mantenimiento_predictivo trazabilidad

LÍNEA 2 · VISIÓN EN VIVO

📷 CAM-02: tapa floja detectada pieza 8,412

Desviada a retrabajo ✓ automática

El cliente la hubiera encontrado en nunca

Defectos que salieron de planta hoy 0

OEE · TURNO A · SIN CAPTURAS

Disponibilidad · Rendimiento · Calidad en vivo

La junta de producción empieza con números, no opiniones

MANTENIMIENTO · ANTES DEL PARO

Etiquetadora L2: vibración +18% patrón de mordaza

Falla probable en 6-9 días

OT-441 programada ✓ domingo sin producción

Costo de paro evitado $84,000

EL DOLOR

##### La calidad se descubre cuando ya es reclamo.

LA CURA · VISIÓN ARTIFICIAL

Cámaras + IA inspeccionan cada pieza EN la línea: el defecto se detiene adentro, no en el cliente.

EL DOLOR

##### Nadie sabe el OEE real hasta el viernes.

LA CURA · MONITOREO EN VIVO

Cada línea reporta sola: producción, ritmo, paros con causa. El tablero vive en Da Vinci Central.

EL DOLOR

##### El mantenimiento llega después de la falla.

LA CURA · PREDICTIVO

Horas, vibración y temperatura anticipan la avería: el taller se programa antes del paro, no después.

#### Lo que llevamos a tu piso de producción

- Visión artificial de líneas. Cámaras + IA que ven tu línea: cuentan piezas, detectan defectos, verifican empaque y etiquetado — sin detener nada y sin ojos cansados.

- Monitoreo en tiempo real. Cada línea, turno y máquina reportando sola: producción, ritmo, paros y causas. El tablero vive en Da Vinci Central — pregúntale «¿cómo va el turno?».

- Control de calidad con IA. Inspección visual automática y registro de cada lote: qué salió, con qué parámetros, quién lo liberó. Trazabilidad completa sin papeles.

- OEE sin capturas. Disponibilidad, rendimiento y calidad calculados solos. La junta de producción empieza con números, no con opiniones.

- Mantenimiento predictivo. Horas de uso, vibración y temperatura anticipan la falla: el mantenimiento se programa antes del paro, no después.

- Captura de piso sin papel. Reportes de operadores por voz o tablet que se registran solos — adiós a la hoja que alguien captura al día siguiente.

- Planeación de producción. Programa de producción sugerido según pedidos reales, inventarios y capacidad — recalculado cuando algo cambia.

- Seguridad industrial con visión. Detección de EPP faltante y zonas de riesgo invadidas, con alertas al supervisor en el momento.

#### Cómo se ve en la práctica

- Una envasadora detecta botellas mal tapadas EN la línea — no en el reclamo del cliente.

- Un taller metalmecánico sabe el avance real de cada orden sin caminar la planta.

- Una planta de alimentos arma su HACCP y trazabilidad de lote en minutos, no en días.

#### Empezamos por una línea

No hace falta digitalizar toda la planta de golpe: el [Método Da Vinci](https://da-vinci.ai/metodo.html) aplica igual aquí — mapeamos una línea, montamos el primer módulo (visión, monitoreo o calidad) y crecemos línea por línea con resultados medibles.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Contabilidad, finanzas y fiscal — Da Vinci IA

**URL:** https://da-vinci.ai/finanzas.html

**Meta descripción:** IA para el área financiera: contabilidad automatizada, conciliaciones, flujo de caja proyectado, cumplimiento fiscal y facturación.

[Inicio](https://da-vinci.ai/index.html) / Contabilidad · Finanzas · Fiscal

### Números que se cuidan solos

El área que más papeles procesa es la que más gana con IA. Cerrar el mes deja de ser una batalla.

conciliacion_ia flujo_de_caja cfdi cierre_rapido

CONCILIACIÓN · SOLA

184 movimientos del banco ✓ 181 conciliados solos

Excepciones para revisar 3

Tiempo del contador 20 min, no 2 días

FLUJO · 30/60/90 DÍAS

⚠ Semana 6: se anticipa apretón detectado con 42 días

Cobranza priorizada + pago diferido ✓ plan sugerido

FISCAL · SIN SUSTOS

Complementos de pago pendientes 0

Declaración mensual papeles listos · 5 días antes

XML + acuses del ejercicio localizables en segundos

Revisión del SAT de pánico → trámite

EL DOLOR

##### El cierre del mes es una batalla de dos semanas.

LA CURA · CONCILIACIÓN CON IA

Los movimientos se cruzan solos contra facturas y pagos; tu contador revisa 3 excepciones, no 184 renglones.

EL DOLOR

##### La caja se descubre cuando ya aprieta.

LA CURA · FLUJO PROYECTADO

Tu caja a 30, 60 y 90 días con cobranza real y pagos programados — el bache se ve venir con semanas.

EL DOLOR

##### Las obligaciones fiscales llegan de sorpresa.

LA CURA · VIGILANCIA FISCAL

Calendario vivo, complementos al día y expediente siempre listo. La revisión deja de ser pánico.

#### Contabilidad

- Registro automático. Facturas emitidas y recibidas se contabilizan solas, con póliza sugerida y documentos ligados.

- Conciliación bancaria con IA. Los movimientos del banco se cruzan solos contra facturas y pagos; solo revisas las excepciones.

- Cierre mensual acelerado. Checklist de cierre vivo: qué falta, de quién, y borradores de asientos recurrentes listos.

#### Finanzas

- Flujo de caja proyectado. Tu caja a 30, 60 y 90 días con cobranza real y pagos programados — y alertas cuando viene un bache.

- Cobranza y pagos inteligentes. Recordatorios automáticos a clientes, programación de pagos a proveedores y priorización cuando la caja aprieta.

- Copilot financiero. Pregunta «¿cuánto gastamos en fletes este trimestre vs. el anterior?» y decide con la cifra enfrente.

#### Fiscal

- Facturación y complementos al día. Emisión, complementos de pago y cancelaciones controladas desde el flujo — sin pendientes olvidados.

- Vigilancia de obligaciones. Calendario fiscal vivo con alertas: declaraciones, retenciones y fechas límite nunca más de sorpresa.

- Expediente siempre listo. XML, acuses y papeles de trabajo organizados y localizables — una revisión deja de ser una semana de pánico.

Trabajamos junto a tu contador o despacho — les quitamos la talacha, no el criterio.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Planta Da Vinci — SCADA con cerebro

**URL:** https://da-vinci.ai/app-planta.html

*[sección: TABLERO]*

OEE GLOBAL 84.2%

PIEZAS DEL TURNO 12,408

RECHAZO 0.9%

PAROS HOY 2 · 14 min

#### LÍNEAS EN VIVO

L1 · ENVASADO

RUN 78% 412 pph

L2 · ETIQUETADO

RUN 91% 388 pph

L3 · EMPAQUE

RUN 64% 301 pph

⚠ SIMULAR PARO EN L2

#### FEED DE AGENTES

- VIGÍA turno A iniciado · 3 líneas corriendo · OEE 84.2%

*[sección: LÍNEAS]*

#### DETALLE POR LÍNEA · CLIC EN EL TABLERO PARA SIMULAR EVENTOS

| LÍNEA | PRODUCTO | META TURNO | AVANCE | VELOCIDAD | MICROPAROS |
|---|---|---|---|---|---|
| L1 ENVASADO | Agua 1L PET | 18,000 | 14,120 · 78% | 412 pph | 3 · 4 min |
| L2 ETIQUETADO | Refresco 600ml | 16,500 | 15,010 · 91% | 388 pph | 1 · 2 min |
| L3 EMPAQUE | Caja 12 pzas | 9,000 | 5,760 · 64% | 301 pph | 6 · 11 min |

#### ANÁLISIS DE LISA

L3 pierde ritmo por microparos del formador de cajas (6 hoy). Patrón: cartón del proveedor B con 2.1% más humedad. Sugerencia: lote del proveedor A para el turno B + reclamo automático al proveedor B.

*[sección: VISIÓN]*

#### CÁMARAS DE LÍNEA · YOLO + OPENCV EN LA VERSIÓN REAL

CAM-01 · conteo L1 pieza ✓

CAM-02 · defectos L2 tapa floja ✗

CAM-03 · EPP zona A casco ✓ chaleco ✓

CAM-04 · anden tarima 14/40

#### DETECCIONES DEL TURNO

| HORA | CÁMARA | EVENTO | ACCIÓN DEL AGENTE |
|---|---|---|---|
| 13:42 | CAM-02 | tapa floja | pieza desviada a retrabajo |
| 12:18 | CAM-03 | chaleco ausente 9 seg | alerta al supervisor de zona |
| 11:03 | CAM-01 | conteo validado vs PLC | diferencia 0.2% · ok |

*[sección: CALIDAD]*

#### LOTES DEL DÍA · TRAZABILIDAD COMPLETA

| LOTE | PRODUCTO | MUESTREO | RESULTADO | LIBERÓ |
|---|---|---|---|---|
| A-2408-113 | Agua 1L | 32/32 ✓ | LIBERADO | M. Salas 12:40 |
| A-2408-114 | Refresco 600 | 28/32 | EN ANÁLISIS | — |
| A-2408-112 | Caja 12 | 30/30 ✓ | LIBERADO | M. Salas 09:15 |

ESCRIBA — certificado de calidad del lote A-2408-113 generado y enviado al cliente por correo. Expediente HACCP actualizado.

*[sección: MANTENIMIENTO]*

#### SALUD DE EQUIPOS · PREDICTIVO

| EQUIPO | HORAS | VIBRACIÓN | PRONÓSTICO LISA | OT |
|---|---|---|---|---|
| Llenadora L1 | 1,240 | normal | sin riesgo 30 días | — |
| Etiquetadora L2 | 2,980 | +18% patrón mordaza | falla probable en 6-9 días | OT-441 programada DOM |
| Formadora L3 | 3,410 | normal | cuchilla al 71% de vida | OT-438 pendiente |

MECÁNICO — refacción de mordaza pedida al proveedor (llega jueves). El paro se hará en domingo sin producción: costo de paro evitado ≈ $84,000 .

*[sección: REPORTES]*

#### REPORTES QUE SE ARMAN SOLOS

CIERRE DE TURNO

OEE, paros con causa, piezas y rechazo. Listo 5 min después del turno.

📲 ENVIARME POR WHATSAPP

SEMANAL DIRECCIÓN

Tendencias, costo de paros, calidad y compras sugeridas.

📲 ENVIARME POR WHATSAPP

RECLAMO A PROVEEDOR

Evidencia de visión + lotes afectados, redactado y listo para enviar.

📄 VER EJEMPLO

Demo con datos simulados · La versión real se construye sobre visión YOLO/OpenCV, señales de piso (Modbus/OPC-UA) y agentes Da Vinci · [quiero esto en mi planta →](https://da-vinci.ai/contacto.html)

---

## Diagnóstico gratuito — Da Vinci IA

**URL:** https://da-vinci.ai/diagnostico.html

**Meta descripción:** Diagnóstico gratuito de Da Vinci IA: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Inicio](https://da-vinci.ai/index.html) / Diagnóstico

### Tu diagnóstico gratuito

45 minutos. Tu operación sobre la mesa. Un mapa claro de dónde la IA te genera retorno — sin compromiso y sin tecnicismos.

#### Qué incluye

- Mapeo express. Revisamos contigo uno o dos procesos clave de tu operación.

- Detección de retorno. Te decimos dónde la IA ahorra tiempo o genera ingresos — y dónde no vale la pena.

- Propuesta concreta. Si hay proyecto, recibes alcance, tiempos y precio del primer módulo. Si no lo hay, también te lo decimos.

#### Sin letra chica

El diagnóstico es gratuito de verdad: no hay compromiso de compra y el mapa que salga de la sesión es tuyo. Nos conviene: cuando el diagnóstico es honesto, los proyectos que sí arrancan llegan a buen puerto.

#### Agenda tu diagnóstico

Llena el formulario de contacto y te escribimos para coordinar fecha.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Seguridad y datos — Da Vinci IA

**URL:** https://da-vinci.ai/seguridad.html

**Meta descripción:** Cómo protege Da Vinci IA los datos de tu empresa: confidencialidad, accesos, cifrado y propiedad de la información.

[Inicio](https://da-vinci.ai/index.html) / Seguridad

### Tus datos son tuyos. Punto.

La confianza no se pide: se construye con reglas claras desde el primer día del mapeo.

nda cifrado accesos_por_rol propiedad_del_cliente

#### Las reglas del taller

- Confidencialidad firmada. Antes de ver un solo dato tuyo, firmamos un acuerdo de confidencialidad. El mapeo de tu empresa es información privilegiada y así se trata.

- Tus datos no entrenan modelos de terceros. Usamos los modelos en modalidad empresarial: tu información no se usa para entrenar la IA de nadie.

- Accesos por rol. Cada persona de tu equipo ve lo que le corresponde. El vendedor no ve la nómina; dirección lo ve todo.

- Cifrado siempre. Datos cifrados en tránsito y en reposo, con respaldos automáticos.

- Propiedad clara. El software que construimos para ti y los datos que genera son de tu empresa. Si algún día nos vamos, todo se queda contigo.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Preguntas frecuentes — Da Vinci IA

**URL:** https://da-vinci.ai/faq.html

**Meta descripción:** Respuestas claras sobre proyectos de IA a la medida: tiempos, costos, datos, integración y soporte.

[Inicio](https://da-vinci.ai/index.html) / Preguntas frecuentes

### Preguntas frecuentes

Las dudas que escuchamos todas las semanas — respondidas sin rodeos.

`[campo input search name= placeholder="🔎 Busca tu duda… (ej. datos, costo, tiempo)"]`

**¿Cuánto tarda un proyecto?**

El primer módulo funcionando suele tomar semanas, no meses. Desde la primera semana ves avances reales en la reunión semanal, y el sistema crece módulo por módulo a tu ritmo.

**¿Cuánto cuesta?**

Depende de los módulos que tu empresa necesite. El diagnóstico gratuito produce una propuesta con alcance y precio cerrados. Más detalle en la página de [inversión](https://da-vinci.ai/precios.html) .

**Ya tengo un sistema, ¿lo tengo que tirar?**

No. Nos integramos con lo que ya usas — tu ERP, CRM, Excel o WhatsApp. Construimos encima de lo que funciona y reemplazamos solo lo que te estorba.

**¿Necesito un equipo técnico en mi empresa?**

No. Nosotros construimos, implementamos y damos mantenimiento. Tu equipo solo necesita usarlo — y lo capacitamos para eso.

**¿Qué pasa con mis datos?**

Son tuyos y se quedan contigo. Confidencialidad firmada, cifrado, accesos por rol y cero uso de tus datos para entrenar modelos de terceros. Detalle completo en [seguridad](https://da-vinci.ai/seguridad.html) .

**¿Trabajan a distancia?**

Sí. El mapeo inicial puede ser presencial o por videollamada, y las reuniones semanales de avance se hacen como te acomode.

**¿La IA va a reemplazar a mi equipo?**

Nuestra experiencia: reemplaza tareas, no personas. El equipo deja de capturar y perseguir pendientes, y se dedica a vender, decidir y atender mejor. Las personas involucradas participan desde el mapeo — el sistema se construye con ellas, no contra ellas.

**¿Qué pasa si la IA se equivoca?**

Los agentes trabajan con TUS datos (no inventan) y los flujos críticos siempre tienen aprobación humana donde tú lo decidas. Además todo queda registrado: puedes auditar cada acción.

**¿Puedo empezar con algo pequeño?**

Es exactamente como nos gusta empezar: un módulo, un proceso, resultado medible. Después decides si crecer.

**¿Dan soporte después de entregar?**

Sí — la mejora continua es una mensualidad opcional. Y si eliges no tomarla, el módulo entregado es tuyo y sigue funcionando.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Casos y resultados — Da Vinci IA

**URL:** https://da-vinci.ai/casos.html

**Meta descripción:** Resultados de Da Vinci IA: proyectos de automatización, agentes de IA y software a la medida con impacto medible.

[Inicio](https://da-vinci.ai/index.html) / Casos

### Casos y resultados

Preferimos que los números hablen. Esta sección crece con cada proyecto entregado.

Estamos documentando nuestros primeros casos con resultados medibles — con permiso de cada cliente y con cifras reales, no promesas. Mientras tanto, la mejor forma de evaluar cómo trabajamos es [jugar con las demos](https://da-vinci.ai/index.html#demos) y conocer el [Método Da Vinci](https://da-vinci.ai/metodo.html) .

¿Quieres ser uno de los primeros casos? Los proyectos fundadores reciben condiciones especiales a cambio de documentar el resultado.

#### Así se verá cada caso (plantilla lista)

「 Empresa del sector 」 CASO FUNDADOR · PRÓXIMAMENTE

EL DOLOR

— qué le costaba tiempo y dinero cada semana —

EL MÓDULO

— qué construimos y en cuántas semanas —

EL NÚMERO

— el resultado medible, con la cifra enfrente —

Tu empresa puede ser la primera de esta galería — con las condiciones del Programa Fundador .

#### Sé un caso de éxito

Agenda tu diagnóstico gratuito y construyamos un resultado que valga la pena contar.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Aviso de privacidad — Da Vinci IA

**URL:** https://da-vinci.ai/privacidad.html

[← Volver al inicio](https://da-vinci.ai/index.html)

### Aviso de privacidad

Da Vinci IA (en adelante, «nosotros») es responsable del tratamiento de los datos personales que nos proporcionas a través del formulario de contacto de este sitio.

#### Datos que recabamos

- Nombre

- Nombre de tu empresa

- Correo electrónico

- La descripción que nos compartas sobre tu necesidad

#### Para qué los usamos

Exclusivamente para responder a tu solicitud, agendar el diagnóstico que nos pides y darle seguimiento a la conversación. No vendemos ni compartimos tus datos con terceros.

#### Conservación y seguridad

Tus datos se almacenan con accesos controlados y solo el tiempo necesario para atender tu solicitud o la relación comercial que derive de ella.

#### Tus derechos

Puedes solicitar en cualquier momento el acceso, la corrección o la eliminación de tus datos escribiéndonos al correo de contacto publicado en este sitio.

Última actualización: agosto de 2026.

---

## Contacto — Da Vinci IA

**URL:** https://da-vinci.ai/contacto.html

**Meta descripción:** Agenda tu diagnóstico gratuito con Da Vinci IA: mapeamos una parte de tu operación y te decimos dónde la IA te genera retorno.

[Inicio](https://da-vinci.ai/index.html) / Contacto

### Toda obra empieza con una conversación.

Cuéntanos qué quieres lograr y agendamos tu diagnóstico gratuito.

Nombre

`[campo input text name=nombre placeholder="¿Cómo te llamas?"]`

Empresa

`[campo input text name=empresa placeholder="Nombre de tu empresa"]`

Correo

`[campo input email name=email placeholder="tu@empresa.com"]`

¿Qué te gustaría automatizar o ver mejor?

`[campo textarea  name=mensaje placeholder="Ej.: pierdo mucho tiempo en cobranza y no sé cuánto vendo al día…"]`

Revisa los campos marcados: falta información para poder escribirte.

Agendar mi diagnóstico

🛡 GARANTÍA DEL TALLER

Si el diagnóstico no te da claridad sobre dónde está tu retorno, te quedas con el mapa de tu operación — gratis — y no te volvemos a buscar.

Así de seguros estamos de lo que vas a ver.

#### ¿Prefieres WhatsApp?

Muy pronto también podrás escribirnos directo por WhatsApp desde el botón verde del sitio.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)


# ═══ PARTE: DEMOS POR ÁREA ═══

## Área Industrial — Demos Da Vinci IA

**URL:** https://da-vinci.ai/demo-industrial.html

**Meta descripción:** El mundo industrial con inteligencia operativa: maquila, transformación, líneas de producción, calidad y proveedores. Entra a Planta Da Vinci.

[Sala de demos](https://da-vinci.ai/demos.html) / Industrial

### El mundo industrial.

Donde cada minuto de línea detenida cuesta, y donde nadie debería enterarse de los problemas al final del turno.

maquila transformacion lineas calidad proveedores

▶ Industrial en 16 segundos — con sonido. (Este mismo film está listo para tus anuncios en redes.)

#### Este mundo, en corto

- Maquiladoras. Producen contra programa del cliente: la puntualidad y el reporte de avance lo son todo. La IA captura el piso sin papel y reporta sola.

- Transformación. Materia prima entra, producto sale — y en medio: mermas, paros y calidad. Visión artificial y OEE en vivo convierten ese "en medio" en números.

- Proveedores industriales. Cotizan, fabrican, entregan y cobran. Agentes que cotizan con planos recibidos por correo y persiguen órdenes de compra.

- Los dolores comunes: producción reportada en papel, paros sin causa registrada, calidad detectada tarde, mantenimiento reactivo, compras a ciegas.

#### Las plataformas de esta área

[⚙ Planta Da Vinci La app insignia: líneas en vivo, OEE, visión artificial, calidad y mantenimiento — un SCADA con cerebro. Ábrela en pantalla completa. Abrir la plataforma →](https://da-vinci.ai/app-planta.html) [📦 Proveedor Da Vinci Llega el plano por correo → LISA lo lee y cotiza en 90 segundos → OC en seguimiento → factura al firmar. Ya disponible. Abrir la plataforma →](https://da-vinci.ai/app-proveedor.html)

¿Quieres el detalle técnico? Lee la página de [planta y transformación](https://da-vinci.ai/planta.html) o agenda tu [diagnóstico](https://da-vinci.ai/diagnostico.html) .

#### ¿Tu planta merece verse así?

En el diagnóstico gratuito mapeamos una línea y te mostramos esta plataforma con tus procesos.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Área Comercio y servicios — Demos Da Vinci IA

**URL:** https://da-vinci.ai/demo-comercio.html

**Meta descripción:** El mundo industrial con inteligencia operativa: maquila, transformación, líneas de producción, calidad y proveedores. Entra a Planta Da Vinci.

[Sala de demos](https://da-vinci.ai/demos.html) / Comercio y servicios

### Comercio y servicios.

Vender, surtir, entregar y cobrar — todos los días, sin puntos ciegos.

super comercializadora restaurante logistica

#### Este mundo, en corto

- Supermercados. Anaqueles llenos, mermas mínimas, cajas conciliadas.

- Comercializadoras. Cotizar rápido, cuidar margen, cobrar a tiempo.

- Restaurantes. Reservas, comandas y compras según demanda prevista.

- Logística. Cada unidad, ruta y entrega — visible y avisando sola.

#### Las plataformas de esta área

[🚛 Torre de Control Logística en vivo: unidades en mapa, cascada de agentes ante retrasos, evidencia→factura. Ya disponible. Abrir la demo →](https://da-vinci.ai/demos.html#torre) [🛒 Súper Da Vinci 4 tiendas en vivo, visión de anaquel que detecta huecos y caducidades, pedido a CEDIS por pronóstico. Ya disponible. Abrir la plataforma →](https://da-vinci.ai/app-super.html) [🍽 Cocina Da Vinci El riel de comandas en hora pico, reservas confirmadas por LISA, insumos que se piden solos. Ya disponible. Abrir la plataforma →](https://da-vinci.ai/app-cocina.html)

*[sección: Estación A1 · Torre de control logística]*

🚛 Estación A1 · logística y transporte

#### Torre de control

Cinco unidades en ruta, cuatro agentes vigilando. Pregunta por un pedido, provoca un retraso y mira a los agentes resolverlo en cascada — solos.

FEED DE AGENTES

📍 ¿Dónde va mi pedido #7712?

⚠ Simular retraso en U-14

📸 Chofer envía evidencia

Esto que viste en 90 segundos, hoy en tu empresa son 6 llamadas y 2 horas .

Agentes en escena: Faro (rastreo) · Portero (citas de rampa) · Escriba (documentos) · Cobrador (fletes). Detalle completo del diseño en nuestro diagnóstico.

*[sección: Estación 6 · Mini-ERPs por industria]*

🏭 Estación 06 · tu industria

#### Así se ve TU sistema

Paneles de muestra del ERP/CRM que construimos por industria. En tu diagnóstico, esto mismo se dibuja con tus procesos.

Supermercado

Logística

Restaurante

Comercializadora

VENTA DEL DÍA · 4 TIENDAS $0

TICKET PROMEDIO $0

MERMA DETECTADA 7 caducidades próximas · pasillo 4

🥫 Anaquel de abarrotes: hueco detectado (visión) → surtido asignado 🧾 Corte de caja T2 conciliado automático 📦 Pedido a CEDIS generado: 214 SKUs según pronóstico

UNIDADES EN RUTA 0

ENTREGAS A TIEMPO 0

ALERTA DE FLOTA Unidad 14: mantenimiento en 800 km

🛰 Cliente preguntó por pedido #7712 → agente respondió con ubicación 🗺 Ruta 6 reoptimizada: −42 min por cierre vial ⛽ Rendimiento de combustible fuera de patrón en unidad 09

COMANDAS ACTIVAS 0

VENTA HOY $0

INSUMO CRÍTICO Queso: alcanza para 22 platillos

📱 Reserva para 6 personas tomada por el agente (WhatsApp) 🍳 Pronóstico de mañana: 214 comensales → compra sugerida lista 💰 Margen del platillo estrella: 61.2% esta semana

PIPELINE ACTIVO $0

MARGEN PROMEDIO 0

RIESGO DE MORA Grupo Anzures: patrón de atraso detectado

📄 Cotización #3311 generada y enviada en 90 segundos 🔁 Seguimiento automático: 12 prospectos tocados hoy 💵 Margen bajo detectado en cotización de válvulas → alerta al gerente

¿Tu industria no está aquí? Mira [todas las industrias](https://da-vinci.ai/industrias.html) o la sección de [planta y transformación](https://da-vinci.ai/planta.html) — y en el diagnóstico lo aterrizamos a tu operación exacta.

*[sección: Estación 3 · Atlas ↔ Livia]*

🤝 Estación 03 · agente ↔ agente

#### Dos agentes resuelven un pedido urgente

Atlas (logística) y Livia (almacén) se coordinan solos. Tiempo humano invertido: cero. Escúchalos.

ATLAS logística

LIVIA almacén

- Livia, pedido urgente de Farmacias Lira: 40 cajas, entrega mañana antes de las 9:00.

- Lo veo. 32 cajas en almacén central y 8 en sucursal norte. Consolido esta noche.

- La ruta 3 sale a las 6:00 y tiene espacio. La reservo.

- Hecho. Etiquetas listas y el chofer ya tiene la orden en su app.

- Aviso al cliente por WhatsApp con hora estimada… Enviado. Pedido resuelto en 40 segundos.

▶ Escuchar la coordinación

#### ¿Tu operación merece verse así?

En el diagnóstico gratuito mapeamos una línea y te mostramos esta plataforma con tus procesos.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Área Financiera y fiscal — Demos Da Vinci IA

**URL:** https://da-vinci.ai/demo-financiera.html

**Meta descripción:** El mundo industrial con inteligencia operativa: maquila, transformación, líneas de producción, calidad y proveedores. Entra a Planta Da Vinci.

[Sala de demos](https://da-vinci.ai/demos.html) / Financiera y fiscal

### Financiera y fiscal.

El área que todos cruzan: números que se cuidan solos y cierres sin batalla.

contabilidad tesoreria cfdi

#### Este mundo, en corto

- Contabilidad. Pólizas y conciliaciones que se arman solas; tú revisas excepciones.

- Tesorería. Flujo a 30/60/90 días con alertas antes del bache.

- Fiscal. CFDI, complementos y calendario de obligaciones sin sustos.

#### Las plataformas de esta área

[🏦 Tesorería Da Vinci El libro mayor con cerebro: conciliación sola, flujo 30·60·90 con alertas y cobranza elegante. Ya disponible. Abrir la plataforma →](https://da-vinci.ai/app-tesoreria.html)

Mientras tanto: la página de [contabilidad, finanzas y fiscal](https://da-vinci.ai/finanzas.html) detalla todo lo que construimos aquí.

*[sección: Estación 4 · Central]*

🧠 Estación 04 · Da Vinci Central

#### Pregúntale a la empresa

El centro de inteligencia operativa: elige una pregunta y mira la respuesta armarse con datos.

¿Cuánto vendimos esta semana?

¿Qué clientes no han pagado?

¿Cómo va el inventario?

#### ¿Tus números merecen cuidarse solos?

En el diagnóstico gratuito mapeamos una línea y te mostramos esta plataforma con tus procesos.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Área Emprendimiento — Demos Da Vinci IA

**URL:** https://da-vinci.ai/demo-emprendimiento.html

**Meta descripción:** El mundo industrial con inteligencia operativa: maquila, transformación, líneas de producción, calidad y proveedores. Entra a Planta Da Vinci.

[Sala de demos](https://da-vinci.ai/demos.html) / Emprendimiento

### Emprendimiento .

Tu primer sistema: el WhatsApp que vende, la caja clara y el negocio en tu bolsillo.

primer_sistema whatsapp ventas caja

#### Este mundo, en corto

- Empezar bien. Sin ERP monstruoso: un agente que atiende tu WhatsApp, una caja que cuadra y un panel que cabe en tu teléfono.

- Crecer sin romperse. Cuando el negocio crezca, los módulos crecen contigo — mismo sistema, más músculo.

- Precio de arranque. Proyectos fundadores con condiciones especiales por documentar el caso.

#### Las plataformas de esta área

[💬 Marco, tu vendedor 24/7 Escucha la nota de voz y la conversación que cierra ventas de madrugada — en la sala principal. Ir a la estación →](https://da-vinci.ai/demos.html) [🚀 Mi Negocio Da Vinci Tu changarro en tu bolsillo: ventas en vivo, fiado con recordatorios de LISA y el pedido de mañana listo. Ya disponible. Abrir la app →](https://da-vinci.ai/app-minegocio.html)

*[sección: Estación 2 · Marco: nota de voz]*

💬 Estación 02 · WhatsApp

#### Marco te cotiza por nota de voz

Ágil, cercano y con tus precios reales. Así suena tu negocio atendiendo a las 11 de la noche.

M

Ferretería El Compás Marco · Agente Da Vinci · en línea

Hola, ¿tienen bomba de 1½"? ¿precio? 10:41 pm

▶

0:20 10:42 pm

Te dejo el resumen por escrito 👇

Bomba 1½": $2,300 · con manguera reforzada: $2,600 10:42 pm

El paquete. ¿Lo recojo mañana? 10:44 pm

¡Hecho! Queda apartado a tu nombre . Te espero desde las 9:00 ✅ 10:44 pm

*[sección: Estación 1 · Valentina: la llamada]*

📞 Estación 01 · voz

#### Valentina llama a tu cliente

Confirma la entrega, recuerda la factura y ofrece la liga de pago — con calidez de persona y memoria de máquina.

V

Valentina Agente de entregas y cobranza · Comercial El Compás

00:00

- Buenas tardes, le llamo de parte de Comercial El Compás. Soy Valentina, su asistente digital.

- Le confirmo que su pedido #452 sale mañana a primera hora y llega antes del mediodía.

- Le recuerdo con cariño que tiene una factura por vencer este viernes, por $12,400.

- ¿Gusta que le envíe la liga de pago por WhatsApp?

- Perfecto, se la mando en este momento. ¡Que tenga excelente día!

📞 Contestar la llamada

*[sección: Estación 5 · WhatsApp real]*

📲 Estación 05 · en tu teléfono

#### Recíbelo en TU WhatsApp

Escribe tu número y un agente Da Vinci te escribe de verdad, ahora mismo. La demo más corta del mundo: tu teléfono vibrando.

Tu número con lada (ej. 52 1 33 1234 5678)

`[campo input tel name=tel placeholder="52 33 1234 5678"]`

Enviarme el WhatsApp

Solo usamos tu número para esta demo. Nada de listas ni spam — palabra de taller.

#### ¿Arrancamos tu primer sistema?

En el diagnóstico gratuito mapeamos una línea y te mostramos esta plataforma con tus procesos.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)


# ═══ PARTE: MÓDULOS (DETALLE) ═══

## Automatización de procesos — Da Vinci IA

**URL:** https://da-vinci.ai/modulo-automatizacion.html

**Meta descripción:** Automatiza facturas, reportes, seguimientos y tareas repetitivas con IA. Tu equipo se dedica a lo que necesita criterio humano.

[Inicio](https://da-vinci.ai/index.html) / [Módulos](https://da-vinci.ai/modulos.html) / Automatización de procesos

### Automatización de procesos

Lo repetitivo, en piloto automático.

workflows rpa+ia cero_captura

AUTOMATIZACIÓN · HOY 6:00 AM · EN VIVO

Reporte de ventas de ayer ✓ enviado solo 6:00

14 facturas de proveedores ✓ capturadas sin manos

Seguimientos de cobranza ✓ 9 recordatorios salieron

Horas humanas invertidas 0.0

#### Qué hace por tu empresa

- Captura sin manos Facturas, pedidos y correos se leen y registran solos en tu sistema, sin que nadie los teclee.

- Reportes que se generan solos El reporte de ventas del lunes se arma y se envía solo — con los datos ya validados.

- Seguimientos que no se olvidan Cobranza, pedidos pendientes y recordatorios se disparan a tiempo, todos los días.

- Flujos entre sistemas Cuando pasa algo en un sistema (una venta), pasa lo correcto en los demás (factura, inventario, aviso).

#### Cómo se ve en la práctica

- Una distribuidora elimina 3 horas diarias de captura de facturas de proveedores.

- Un despacho envía estados de cuenta y recordatorios de pago sin intervención humana.

- Una comercializadora genera sus reportes de dirección cada lunes a las 7:00 am, solos.

#### Cómo lo implementamos

Como todo en Da Vinci IA, este módulo sigue el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos el proceso con tu gente, prototipamos con tus datos reales y cada semana ves el avance funcionando. Puede vivir solo o integrarse con los demás módulos en [Da Vinci Central](https://da-vinci.ai/central.html) .

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Agentes de IA — chat y voz — Da Vinci IA

**URL:** https://da-vinci.ai/modulo-agentes-ia.html

**Meta descripción:** Agentes de IA que atienden WhatsApp, web y teléfono 24/7: responden, cotizan, agendan y venden con el tono de tu marca.

[Inicio](https://da-vinci.ai/index.html) / [Módulos](https://da-vinci.ai/modulos.html) / Agentes de IA — chat y voz

### Agentes de IA — chat y voz

Tu mejor vendedor no duerme.

agentes_autonomos whatsapp_api voz_natural

AGENTE · 11:03 PM · EN VIVO

«¿Tienen en color blanco?» ✓ respondido en 4s

Cotización con precios reales ✓ enviada

Cita agendada para mañana ✓ 10:30 am

Ventas cerradas fuera de horario 3 esta semana

#### Qué hace por tu empresa

- Atención en WhatsApp 24/7 Responde preguntas, cotiza y aparta productos a cualquier hora — con el tono de tu marca.

- Voz natural por teléfono Contesta llamadas, agenda citas y hace encuestas con una voz que suena humana.

- Escala a tu equipo cuando toca Detecta cuándo la conversación necesita a una persona y la transfiere con todo el contexto.

- Conectado a tu inventario Cotiza con precios y existencias reales, no con respuestas genéricas.

#### Cómo se ve en la práctica

- Una ferretería cierra ventas a las 11 de la noche mientras el dueño duerme.

- Una clínica llena su agenda con un agente que confirma y reagenda citas por WhatsApp.

- Un restaurante toma pedidos por teléfono con voz de IA en horas pico.

#### Cómo lo implementamos

Como todo en Da Vinci IA, este módulo sigue el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos el proceso con tu gente, prototipamos con tus datos reales y cada semana ves el avance funcionando. Puede vivir solo o integrarse con los demás módulos en [Da Vinci Central](https://da-vinci.ai/central.html) .

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Copilots por rol — Da Vinci IA

**URL:** https://da-vinci.ai/modulo-copilots.html

**Meta descripción:** Asistentes de IA especializados por puesto: ventas, finanzas, operaciones. Cada quien con su copiloto entrenado en su trabajo.

[Inicio](https://da-vinci.ai/index.html) / [Módulos](https://da-vinci.ai/modulos.html) / Copilots por rol

### Copilots por rol

Un experto de IA al lado de cada puesto.

llm rag por_rol

COPILOT DE VENTAS · LUNES 7:55 AM · EN VIVO

Resumen de tus 6 citas de hoy ✓ listo

Historial + pendientes por cliente ✓ en tu WhatsApp

Propuesta borrador para Grupo Mira ✓ esperando tu ok

Tiempo preparando la semana 8 min, no 2 horas

#### Qué hace por tu empresa

- Copilot de ventas Prepara la información del cliente antes de cada visita y sugiere el siguiente paso de cada oportunidad.

- Copilot de finanzas Concilia movimientos, detecta gastos fuera de patrón y arma el borrador del cierre mensual.

- Copilot de operaciones Vigila pedidos, tiempos y pendientes; avisa qué se está atorando y por qué.

- Entrenado en TU empresa Cada copilot conoce tus productos, tus precios, tus políticas — no respuestas de internet.

#### Cómo se ve en la práctica

- Un equipo de ventas dedica sus mañanas a vender, no a armar reportes de visitas.

- Una contadora cierra el mes en dos días en lugar de una semana.

- Un gerente de operaciones detecta cuellos de botella antes de que detengan la entrega.

#### Cómo lo implementamos

Como todo en Da Vinci IA, este módulo sigue el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos el proceso con tu gente, prototipamos con tus datos reales y cada semana ves el avance funcionando. Puede vivir solo o integrarse con los demás módulos en [Da Vinci Central](https://da-vinci.ai/central.html) .

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Documentos inteligentes — Da Vinci IA

**URL:** https://da-vinci.ai/modulo-documentos.html

**Meta descripción:** Facturas, contratos y correos que se leen, se capturan y se archivan solos con IA. Adiós a la captura manual.

[Inicio](https://da-vinci.ai/index.html) / [Módulos](https://da-vinci.ai/modulos.html) / Documentos inteligentes

### Documentos inteligentes

Papeles que se leen solos.

ocr+ia extraccion archivo_vivo

DOCUMENTOS · BANDEJA DE HOY · EN VIVO

23 facturas recibidas por correo ✓ leídas y registradas

Contrato nuevo: cláusulas clave ✓ resumidas

⚠ Fianza vence en 12 días alerta enviada

Captura manual eliminada

#### Qué hace por tu empresa

- Facturas y recibos La IA extrae proveedor, montos, fechas e impuestos y los registra en tu sistema.

- Contratos Resume cláusulas clave, fechas de vencimiento y obligaciones — y te avisa antes de que venzan.

- Correos con adjuntos Detecta qué llegó, qué es y a dónde va: el pedido al sistema, la factura a cuentas por pagar.

- Archivo que se organiza solo Cada documento queda clasificado y localizable con una búsqueda en lenguaje natural.

#### Cómo se ve en la práctica

- Una constructora procesa 400 facturas al mes sin capturar una sola a mano.

- Un despacho legal encuentra cualquier cláusula de sus contratos en segundos.

- Una importadora ya no pierde pedimentos: todo entra, se clasifica y se archiva solo.

#### Cómo lo implementamos

Como todo en Da Vinci IA, este módulo sigue el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos el proceso con tu gente, prototipamos con tus datos reales y cada semana ves el avance funcionando. Puede vivir solo o integrarse con los demás módulos en [Da Vinci Central](https://da-vinci.ai/central.html) .

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Análisis predictivo — Da Vinci IA

**URL:** https://da-vinci.ai/modulo-prediccion.html

**Meta descripción:** Pronóstico de ventas, inventario y flujo de caja con IA. Decisiones con evidencia, no con intuición.

[Inicio](https://da-vinci.ai/index.html) / [Módulos](https://da-vinci.ai/modulos.html) / Análisis predictivo

### Análisis predictivo

Decide con lo que viene, no con lo que pasó.

forecasting series_de_tiempo alertas

PRONÓSTICO · PRÓXIMOS 30 DÍAS · EN VIVO

Ventas previstas $1.42M · 89% confianza

⚠ SKU 114 se agota en 6 días · pedido sugerido

Flujo de caja semana 6 apretón detectado a tiempo

Decisiones a ciegas 0

#### Qué hace por tu empresa

- Pronóstico de ventas Cuánto vas a vender el próximo mes, por producto y por zona, con base en tu historial real.

- Inventario óptimo Qué pedir, cuánto y cuándo — antes de que se agote o se te pudra en bodega.

- Flujo de caja proyectado Cómo se ve tu caja a 30, 60 y 90 días considerando cobranza real y pagos programados.

- Alertas de desviación Si algo se sale del pronóstico — para bien o para mal — lo sabes ese día, no en el cierre.

#### Cómo se ve en la práctica

- Una distribuidora reduce 30% su inventario muerto pidiendo justo lo que va a rotar.

- Un restaurante ajusta compras y personal según la demanda prevista por día.

- Una comercializadora anticipa un bache de caja con 6 semanas de ventaja y lo cubre a tiempo.

#### Cómo lo implementamos

Como todo en Da Vinci IA, este módulo sigue el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos el proceso con tu gente, prototipamos con tus datos reales y cada semana ves el avance funcionando. Puede vivir solo o integrarse con los demás módulos en [Da Vinci Central](https://da-vinci.ai/central.html) .

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Integraciones con lo tuyo — Da Vinci IA

**URL:** https://da-vinci.ai/modulo-integraciones.html

**Meta descripción:** Conectamos tu ERP, CRM, Excel y WhatsApp para que todos tus sistemas hablen entre sí. No reemplazamos lo que funciona.

[Inicio](https://da-vinci.ai/index.html) / [Módulos](https://da-vinci.ai/modulos.html) / Integraciones con lo tuyo

### Integraciones con lo tuyo

No tires nada: conéctalo.

api erp/crm una_sola_verdad

INTEGRACIONES · TODO CONECTADO · EN VIVO

Venta en WhatsApp → factura en ERP ✓ automático

Excel de precios → cotizador ✓ sincronizado

Banco → conciliación ✓ diaria

Sistemas que tiraste 0 — todo se aprovechó

#### Qué hace por tu empresa

- Tu ERP y tu contabilidad Lo que pasa en la operación se refleja en tus sistemas de registro sin doble captura.

- Tus Excel de siempre Si un Excel funciona, lo respetamos — y lo conectamos para que se alimente solo.

- WhatsApp y correo Los canales donde ya hablas con clientes se vuelven parte del sistema, no islas.

- Una sola verdad Todos los sistemas conectados a Da Vinci Central: un solo lugar donde los números coinciden.

#### Cómo se ve en la práctica

- Una empresa une su ERP, su Excel de precios y su WhatsApp de ventas en un flujo único.

- Un equipo deja de capturar dos veces lo mismo en dos sistemas distintos.

- Dirección ve por fin el mismo número en ventas, contabilidad y operación.

#### Cómo lo implementamos

Como todo en Da Vinci IA, este módulo sigue el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos el proceso con tu gente, prototipamos con tus datos reales y cada semana ves el avance funcionando. Puede vivir solo o integrarse con los demás módulos en [Da Vinci Central](https://da-vinci.ai/central.html) .

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)


# ═══ PARTE: BLOG ═══

## Qué es un agente de IA (explicado sin humo) — Da Vinci IA

**URL:** https://da-vinci.ai/blog-que-es-un-agente-ia.html

**Meta descripción:** No es un chatbot con otro nombre. Un agente percibe, decide y actúa — y esa diferencia es la que genera retorno en una empresa.

[Inicio](https://da-vinci.ai/index.html) / [Blog](https://da-vinci.ai/blog.html) / Artículo

### Qué es un agente de IA (explicado sin humo)

No es un chatbot con otro nombre. Un agente percibe, decide y actúa — y esa diferencia es la que genera retorno en una empresa.

#### Chatbot vs. agente

Un chatbot responde texto con texto. Un agente hace cosas: consulta tu inventario, registra el pedido, agenda la cita, envía la factura. La conversación es solo su interfaz; su valor está en las acciones.

#### Percibir, decidir, actuar

Un agente percibe (llega un mensaje, un correo, una factura), decide con contexto (¿qué es?, ¿qué corresponde hacer?, ¿tengo la información?) y actúa (responde, registra, avisa, escala a un humano). Ese ciclo corre las 24 horas.

#### Por qué ahora sí funcionan

Los modelos de lenguaje actuales entienden matices («me urge para el viernes», «¿no tienes algo más barato?») que los sistemas de reglas jamás entendieron. Conectados a tus datos, responden con tu realidad — no con generalidades.

#### La pregunta correcta

No es «¿debería tener un agente?» sino «¿qué conversación repetitiva me está costando ventas o tiempo?». Ahí va el primer agente.

#### ¿Quieres esto en tu empresa?

Agenda un diagnóstico gratuito y te decimos por dónde empezar — con claridad y sin compromiso.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Del códice al código: cómo pensamos el software — Da Vinci IA

**URL:** https://da-vinci.ai/blog-del-codice-al-codigo.html

**Meta descripción:** Leonardo llenó 7,000 páginas antes de construir. Nosotros mapeamos antes de programar. La historia de nuestra forma de trabajar.

[Inicio](https://da-vinci.ai/index.html) / [Blog](https://da-vinci.ai/blog.html) / Artículo

### Del códice al código: cómo pensamos el software

Leonardo llenó 7,000 páginas antes de construir. Nosotros mapeamos antes de programar. La historia de nuestra forma de trabajar.

#### El taller renacentista

En el taller de Leonardo nada se construía de golpe: bocetos, pruebas, correcciones, y el cliente viendo el progreso. El software de calidad se hace igual — por eso nuestras entregas son semanales y siempre frente a ti.

#### Saper vedere

«Saber ver» era el lema de Leonardo. En una empresa significa: entender cómo fluye de verdad el trabajo — no cómo dice el manual que fluye. De ese mapa salen las automatizaciones que sí se usan.

#### El códice de tu empresa

Leonardo concentraba todo su conocimiento en códices. Tu empresa merece lo mismo: un lugar donde vive todo lo que sabe — ventas, clientes, procesos, documentos — y al que puedes preguntarle. Así nació Da Vinci Central.

#### La simplicidad es la máxima sofisticación

La IA más avanzada es la que no se nota: el reporte que ya estaba listo, la factura que se registró sola, el cliente que fue atendido a medianoche. Tecnología de punta, experiencia de simplicidad.

#### ¿Quieres esto en tu empresa?

Agenda un diagnóstico gratuito y te decimos por dónde empezar — con claridad y sin compromiso.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Cuánto cuesta la IA en una pyme (respuesta honesta) — Da Vinci IA

**URL:** https://da-vinci.ai/blog-cuanto-cuesta-ia.html

**Meta descripción:** Menos que un empleado administrativo, más que una suscripción de software. Lo que de verdad determina el precio — y las señales de alerta.

[Inicio](https://da-vinci.ai/index.html) / [Blog](https://da-vinci.ai/blog.html) / Artículo

### Cuánto cuesta la IA en una pyme (respuesta honesta)

Menos que un empleado administrativo, más que una suscripción de software. Lo que de verdad determina el precio — y las señales de alerta.

#### El rango honesto

Un módulo bien delimitado (un agente de WhatsApp, una automatización de documentos) se ubica típicamente en el orden de lo que cuesta un empleado administrativo durante unos meses — y trabaja años, las 24 horas. Los proyectos crecen desde ahí según alcance e integraciones.

#### Lo que encarece (con razón)

Integraciones con sistemas viejos, volúmenes altos, flujos críticos que exigen aprobaciones y auditoría. Lo que NO debería encarecer: logos de consultora, juntas eternas, licencias infladas.

#### Señales de alerta al cotizar

Precio sin haber visto tu operación. Promesas de «transformación total». Contratos que te amarran años. Cotizaciones por hora sin tope. Un proveedor serio te da precio cerrado por alcance claro.

#### Cómo lo hacemos nosotros

Diagnóstico gratuito → mapa de retorno → precio cerrado del primer módulo. Si el número no te hace sentido, te quedas con el mapa. Así de simple.

#### ¿Quieres esto en tu empresa?

Agenda un diagnóstico gratuito y te decimos por dónde empezar — con claridad y sin compromiso.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## IA para pymes: por dónde empezar sin quemarse — Da Vinci IA

**URL:** https://da-vinci.ai/blog-ia-para-pymes.html

**Meta descripción:** No necesitas un departamento de datos para usar IA. Necesitas un proceso que duela y un mapa claro. Aquí te decimos cómo elegirlo.

[Inicio](https://da-vinci.ai/index.html) / [Blog](https://da-vinci.ai/blog.html) / Artículo

### IA para pymes: por dónde empezar sin quemarse

No necesitas un departamento de datos para usar IA. Necesitas un proceso que duela y un mapa claro. Aquí te decimos cómo elegirlo.

#### El error más común

Empezar por la herramienta y no por el problema. La pregunta correcta no es «¿qué IA compro?» sino «¿qué proceso me está costando más tiempo o dinero?». La IA es el cómo, nunca el qué.

#### Los tres primeros candidatos

En casi toda pyme, los primeros procesos con retorno claro son: (1) la atención a clientes por WhatsApp — se pierde venta por no contestar a tiempo; (2) la captura manual de documentos — facturas, pedidos, recibos; (3) los reportes — horas armando lo que un sistema puede generar solo.

#### Empieza por un módulo, no por una transformación

Los proyectos de «transformación digital» de un año mueren de agotamiento. Un módulo que funciona en semanas construye confianza, ahorra dinero desde el primer mes y financia el siguiente paso.

#### La señal de que estás listo

Si esta semana alguien de tu equipo copió datos de un lado a otro a mano, o un cliente esperó horas por una respuesta simple — ya tienes tu primer módulo. Lo demás es método.

#### ¿Quieres esto en tu empresa?

Agenda un diagnóstico gratuito y te decimos por dónde empezar — con claridad y sin compromiso.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## El agente de WhatsApp que vende mientras duermes — Da Vinci IA

**URL:** https://da-vinci.ai/blog-agente-whatsapp-ventas.html

**Meta descripción:** La mitad de los mensajes a un negocio llegan fuera de horario. Un agente de IA bien conectado responde, cotiza y aparta — a las 11 de la noche también.

[Inicio](https://da-vinci.ai/index.html) / [Blog](https://da-vinci.ai/blog.html) / Artículo

### El agente de WhatsApp que vende mientras duermes

La mitad de los mensajes a un negocio llegan fuera de horario. Un agente de IA bien conectado responde, cotiza y aparta — a las 11 de la noche también.

#### El costo invisible del «te contesto mañana»

Cada mensaje sin respuesta es una venta que se enfría. El cliente que escribe a las 9 de la noche compara con tres competidores antes de dormirse; le compra al que contestó.

#### Qué hace un buen agente (y qué no)

Un buen agente responde con tus precios y existencias reales, aparta productos, agenda citas y escala a un humano cuando la conversación lo pide. Uno malo recita respuestas genéricas — y espanta. La diferencia está en conectarlo a tus sistemas, no en el chatbot.

#### El tono importa tanto como la respuesta

El agente habla con el tono de tu marca: si tu negocio es cercano y directo, el agente también. Nada de «Estimado usuario, su solicitud ha sido procesada».

#### Resultado típico

Negocios que atienden por WhatsApp con IA reportan respuesta inmediata 24/7, más citas agendadas y ventas cerradas fuera de horario — sin contratar un turno nocturno.

#### ¿Quieres esto en tu empresa?

Agenda un diagnóstico gratuito y te decimos por dónde empezar — con claridad y sin compromiso.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## Cómo automatizar un proceso sin romper tu operación — Da Vinci IA

**URL:** https://da-vinci.ai/blog-como-automatizar-procesos.html

**Meta descripción:** La automatización mal hecha rompe más de lo que arregla. La bien hecha es invisible: un día el reporte simplemente ya estaba listo.

[Inicio](https://da-vinci.ai/index.html) / [Blog](https://da-vinci.ai/blog.html) / Artículo

### Cómo automatizar un proceso sin romper tu operación

La automatización mal hecha rompe más de lo que arregla. La bien hecha es invisible: un día el reporte simplemente ya estaba listo.

#### Primero mapea, luego automatiza

Automatizar un proceso desordenado solo produce desorden más rápido. Antes de tocar tecnología hay que ver el proceso como es: quién hace qué, cuándo, con qué excepciones. Ese mapa vale oro incluso antes de automatizar.

#### Automatiza el 80%, respeta el 20%

Casi ningún proceso se automatiza al 100% — y está bien. Las excepciones raras las decide una persona; el volumen repetitivo lo hace la máquina. Ese reparto es el que ahorra horas sin generar errores.

#### Deja que conviva con lo que ya usas

La automatización correcta se integra con tu ERP, tu Excel y tu correo actuales. Si te piden tirar todo y empezar de cero, sospecha.

#### Mide antes y después

Horas invertidas, errores por mes, tiempo de respuesta. Sin la foto del antes, nadie te podrá demostrar el después. Nosotros la tomamos en el mapeo inicial.

#### ¿Quieres esto en tu empresa?

Agenda un diagnóstico gratuito y te decimos por dónde empezar — con claridad y sin compromiso.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)


# ═══ PARTE: INDUSTRIAS (DETALLE) ═══

## IA para comercio y distribución — Da Vinci IA

**URL:** https://da-vinci.ai/industria-comercio.html

**Meta descripción:** Inteligencia operativa para comercio y distribución: Del pedido a la entrega, sin puntos ciegos.

[Inicio](https://da-vinci.ai/index.html) / [Industrias](https://da-vinci.ai/industrias.html) / Comercio y distribución

### Comercio y distribución

Del pedido a la entrega, sin puntos ciegos.

inteligencia_operativa modulos_a_medida avance_semanal

*[sección: EL MOSTRADOR VIVO · simulador interactivo]*

##### 🛒 El mostrador vivo — simula un pedido

Así se ve tu operación cuando LISA la escucha. Presiona el botón — o toca cada estación.

01 · WHATSAPP «¿Tienen 40 cajas? Urgen»

02 · INVENTARIO LISA revisa stock real

03 · RUTA Entrega asignada

04 · COBRO Factura + liga de pago

▶ SIMULAR PEDIDO COMPLETO

0 −30% inventario muerto con pronóstico IA

0 −50% error de pronóstico (McKinsey)

0 −65% ventas perdidas por faltantes

*[sección: SCROLLY · el dolor se transforma en solución mientras bajas]*

ANAQUEL · SIN LISA → CON LISA

Faltantes hoy 7 SKUs

Caducidades $18,400

WHATSAPP · 22:41 PM

«¿Tienen 40 cajas? Urgen» ✓ leído

Agente: «Sí — 32 CEDIS + 8 norte» ✓ 4s

Pedido #7712 confirmado ✓ apartado

Chats sin responder 0

COBRANZA · AUTOMÁTICA

Comercial Robledo pagó ✓ hoy

Grupo Anzures recordatorio enviado

Farmacias Lira liga de pago abierta

Cartera vencida −41% este mes

EL DOLOR

##### El inventario se agota — o se pudre.

Nadie lo vio venir: el producto estrella sin stock el viernes, y $18,400 caducando en bodega.

LA CURA · PREDICCIÓN DE INVENTARIO

LISA pronostica por producto y sucursal: qué pedir, cuánto y cuándo. Mira el anaquel sanar a la derecha →

EL DOLOR

##### Los pedidos se pierden entre cientos de chats.

El cliente escribió a las 10 de la noche. Nadie contestó. Compró con tu competencia antes de dormirse.

LA CURA · AGENTE DE PEDIDOS

Responde en segundos con tu inventario real: cotiza, aparta y confirma — a cualquier hora.

EL DOLOR

##### La cobranza depende de la memoria del dueño.

Facturas vencidas que nadie persigue porque perseguirlas incomoda — y el flujo se seca.

LA CURA · COBRANZA AUTOMÁTICA

Recordatorios elegantes, ligas de pago y estados de cuenta que salen solos. Tú solo ves quién ya pagó.

#### Hecho a tu medida, no a la del sector

Estos son los patrones que más se repiten — pero tu empresa no es el promedio de su industria. Por eso todo empieza con el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos TU operación y construimos sobre lo que encontramos.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## IA para restaurantes y alimentos — Da Vinci IA

**URL:** https://da-vinci.ai/industria-restaurantes.html

**Meta descripción:** Inteligencia operativa para restaurantes y alimentos: Más mesas atendidas, menos mermas.

[Inicio](https://da-vinci.ai/index.html) / [Industrias](https://da-vinci.ai/industrias.html) / Restaurantes y alimentos

### Restaurantes y alimentos

Más mesas atendidas, menos mermas.

inteligencia_operativa modulos_a_medida avance_semanal

SERVICIO · VIERNES 8:47 PM · HORA PICO

📱 «Mesa para 6 hoy?» (WhatsApp) ✓ reservada 9:15

📞 Llamada: pedido para llevar ✓ voz IA · $482

🔔 Recordatorio a reserva de 9:30 confirmó ✓

Mensajes sin responder 0

COMPRAS · PRONÓSTICO DE MAÑANA

Comensales previstos 214 · 89% confianza

Pollo 14 kg → pedido ✓

Queso alcanza 22 platillos

Merma de la semana −38% vs mes pasado

MÁRGENES · POR PLATILLO

⭐ Arrachera 61.2% margen

⚠ Pasta del día 18.4% — LISA sugiere +$14

EL DOLOR

##### Llamadas y WhatsApp sin contestar en hora pico = clientes perdidos.

LA CURA · AGENTE DE RESERVAS Y PEDIDOS

Toma reservas y pedidos por WhatsApp y teléfono, incluso en hora pico.

EL DOLOR

##### Compras a ojo: mermas cuando sobra, ventas perdidas cuando falta.

LA CURA · PREDICCIÓN DE DEMANDA

Cuánto comprar y cuánto personal programar según el día previsto.

EL DOLOR

##### Cero visibilidad de qué platillo deja margen y cuál solo da trabajo.

LA CURA · CENTRAL DE MÁRGENES

Pregunta «¿qué platillo me deja más?» y decide el menú con números.

LO QUE REPORTA LA INDUSTRIA

−40% no-shows con recordatorios IA

−50% merma el primer año (Winnow >40%)

92% precisión de pronóstico IA (vs 65% humana)

#### Hecho a tu medida, no a la del sector

Estos son los patrones que más se repiten — pero tu empresa no es el promedio de su industria. Por eso todo empieza con el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos TU operación y construimos sobre lo que encontramos.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## IA para clínicas y salud — Da Vinci IA

**URL:** https://da-vinci.ai/industria-salud.html

**Meta descripción:** Inteligencia operativa para clínicas y salud: Agenda llena, pacientes atendidos, expediente al día.

[Inicio](https://da-vinci.ai/index.html) / [Industrias](https://da-vinci.ai/industrias.html) / Clínicas y salud

### Clínicas y salud

Agenda llena, pacientes atendidos, expediente al día.

inteligencia_operativa modulos_a_medida avance_semanal

AGENDA · MARTES · SE LLENA SOLA

📱 «¿Tienen cita mañana?» ✓ 10:30 agendada

🔔 Recordatorio a las 12 citas de hoy 11 confirmadas

⚠ Paciente 4:00 canceló hueco reocupado en 9 min

Ocupación del día 96%

RECEPCIÓN · SIN SATURAR

«¿Aceptan mi seguro?» ✓ respondido · 6s

«¿Cuánto cuesta la limpieza?» ✓ respondido · 4s

«¿Dónde estacionarme?» ✓ mapa enviado

Llamadas que llegaron al mostrador solo las que importan

EXPEDIENTE · SIEMPRE LISTO

Estudio de laboratorio recibido ✓ archivado en expediente

Nota de evolución dictada por voz ✓ transcrita

«LISA: historial de Sra. Márquez» ✓ resumen en 3s

Papeles perdidos este mes 0

EL DOLOR

##### Citas perdidas porque nadie confirmó ni reagendó.

LA CURA · AGENTE DE CITAS

Confirma, reagenda y resuelve dudas frecuentes por WhatsApp, 24/7.

EL DOLOR

##### Recepción saturada contestando las mismas 10 preguntas.

LA CURA · DOCUMENTOS CLÍNICOS INTELIGENTES

Estudios y notas que se organizan y se encuentran al instante.

EL DOLOR

##### Expedientes e historiales dispersos entre papel y sistemas.

LA CURA · CENTRAL DE LA CLÍNICA

Ocupación, ingresos y pacientes frecuentes en una sola pantalla.

LO QUE REPORTA LA INDUSTRIA

−40% citas perdidas con recordatorios por WhatsApp

−60% llamadas manuales de seguimiento

15-30% del ingreso se pierde hoy por no-shows

#### Hecho a tu medida, no a la del sector

Estos son los patrones que más se repiten — pero tu empresa no es el promedio de su industria. Por eso todo empieza con el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos TU operación y construimos sobre lo que encontramos.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## IA para manufactura — Da Vinci IA

**URL:** https://da-vinci.ai/industria-manufactura.html

**Meta descripción:** Inteligencia operativa para manufactura: La planta visible, la merma medida.

[Inicio](https://da-vinci.ai/index.html) / [Industrias](https://da-vinci.ai/industrias.html) / Manufactura

### Manufactura

La planta visible, la merma medida.

inteligencia_operativa modulos_a_medida avance_semanal

PISO · TURNO A · SIN PAPEL

Operador reporta por voz: «lote 113 listo» ✓ registrado

Producción del turno 12,542 pzas · en vivo

Captura al día siguiente eliminada

OEE visible 84.2% ahora — no el viernes

PAROS · CON CAUSA Y CURA

⚠ L2: torque fuera de rango detectado 14:02

VIGÍA: patrón de mordaza conocido ✓ diagnóstico 14:03

MECÁNICO: OT-441 programada domingo ✓ sin parar producción

Costo de paro evitado $84,000

COMPRAS · SEGÚN EL PLAN REAL

Acero calibre 14 pedido según pronóstico ✓

Inventario inmóvil −28% este trimestre

EL DOLOR

##### Producción reportada en papel que se captura (tarde y con errores).

LA CURA · CAPTURA AUTOMÁTICA DE PRODUCCIÓN

Reportes de piso que suben solos, sin papel ni recaptura.

EL DOLOR

##### Paros y mermas que nadie explica hasta el corte del mes.

LA CURA · PREDICCIÓN DE MATERIALES

Compra según el plan de producción y el pronóstico real de pedidos.

EL DOLOR

##### Compras de materia prima reaccionando en lugar de anticipando.

LA CURA · CENTRAL DE PLANTA

Pregunta «¿cómo va la orden 4512?» y ten la respuesta sin caminar a la planta.

LO QUE REPORTA LA INDUSTRIA

−30-50% paros no planeados con mantenimiento predictivo (McKinsey)

−10-40% costo de mantenimiento al anticipar fallas

$84k un solo paro evitado paga el módulo

#### Hecho a tu medida, no a la del sector

Estos son los patrones que más se repiten — pero tu empresa no es el promedio de su industria. Por eso todo empieza con el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos TU operación y construimos sobre lo que encontramos.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## IA para servicios profesionales — Da Vinci IA

**URL:** https://da-vinci.ai/industria-servicios.html

**Meta descripción:** Inteligencia operativa para servicios profesionales: Menos administración, más horas facturables.

[Inicio](https://da-vinci.ai/index.html) / [Industrias](https://da-vinci.ai/industrias.html) / Servicios profesionales

### Servicios profesionales

Menos administración, más horas facturables.

inteligencia_operativa modulos_a_medida avance_semanal

LUNES 8:00 AM · TODO LISTO

Minutas de la semana pasada ✓ resumidas

Borrador de propuesta (cliente nuevo) ✓ esperando revisión

Reporte de avance por cliente ✓ enviado solo

Horas admin de tu equipo hoy −70%

CONOCIMIENTO · DE LA FIRMA, NO DEL CORREO

«¿Qué acordamos con Grupo Mira en marzo?» ✓ respuesta en 4s

Contrato similar de referencia ✓ encontrado

Se fue un colaborador su conocimiento se quedó

COBRANZA · ELEGANTE

Iguala de marzo · recordatorio ✓ enviado con tacto

Cliente abrió la liga de pago ✓ pagó hoy

Conversaciones incómodas del socio 0

Horas facturables recuperadas +9 h/semana por persona

EL DOLOR

##### Horas del equipo perdidas en reportes, propuestas y seguimiento.

LA CURA · COPILOTS POR ROL

Borradores de propuestas, resúmenes de reuniones y seguimientos listos en minutos.

EL DOLOR

##### Conocimiento clave que vive en el correo de cada quien.

LA CURA · BASE DE CONOCIMIENTO VIVA

Todo lo que la firma sabe, consultable en lenguaje natural.

EL DOLOR

##### Cobranza incómoda que siempre se posterga.

LA CURA · COBRANZA SIN FRICCIÓN

Recordatorios elegantes y automáticos; tu equipo solo cobra los casos difíciles.

LO QUE REPORTA LA INDUSTRIA

+9 h facturables recuperadas por persona a la semana

−70% tiempo en reportes, minutas y propuestas

4 seg para encontrar lo que la firma sabe

#### Hecho a tu medida, no a la del sector

Estos son los patrones que más se repiten — pero tu empresa no es el promedio de su industria. Por eso todo empieza con el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos TU operación y construimos sobre lo que encontramos.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## IA para construcción e inmobiliaria — Da Vinci IA

**URL:** https://da-vinci.ai/industria-construccion.html

**Meta descripción:** Inteligencia operativa para construcción e inmobiliaria: Obras a tiempo, números a la vista.

[Inicio](https://da-vinci.ai/index.html) / [Industrias](https://da-vinci.ai/industrias.html) / Construcción e inmobiliaria

### Construcción e inmobiliaria

Obras a tiempo, números a la vista.

inteligencia_operativa modulos_a_medida avance_semanal

OBRA TORRE NORTE · EN VIVO

📸 Residente envía avance por WhatsApp ✓ consolidado

Avance físico vs programa 67% · 2 días adelante

Avance financiero 71% — alerta de desfase

Junta de obra con números, no con memoria

DESTAJOS Y FACTURAS · SIN CAPTURA

Factura de Aceros Vinci ✓ leída y asignada a partida

Estimación #14 del contratista ✓ validada vs avance real

Presupuesto vs real al día, no al cierre

VENTAS · EL DESARROLLO SE VENDE SOLO

📱 «¿Precio del depa 302?» 11:48 pm ✓ cotizado + brochure

Visita agendada sábado 12:00 ✓ confirmada

Seguimiento a 34 interesados automático

Leads que se enfriaron 0

EL DOLOR

##### Avances de obra reportados por WhatsApp que nadie consolida.

LA CURA · DOCUMENTOS DE OBRA INTELIGENTES

Facturas, estimaciones y destajos que se capturan y clasifican solos.

EL DOLOR

##### Facturas de proveedores y destajos capturados a mano.

LA CURA · CENTRAL DE OBRA

Avance físico vs. financiero por proyecto, en tiempo real.

EL DOLOR

##### Presupuesto vs. real conocido demasiado tarde.

LA CURA · AGENTE COMERCIAL

Atiende interesados en tus desarrollos, agenda visitas y da seguimiento.

LO QUE REPORTA LA INDUSTRIA

0 días de retraso en conocer el avance real de obra

100% de facturas y destajos ligados a su partida

24/7 el desarrollo atendiendo interesados

#### Hecho a tu medida, no a la del sector

Estos son los patrones que más se repiten — pero tu empresa no es el promedio de su industria. Por eso todo empieza con el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos TU operación y construimos sobre lo que encontramos.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## IA para logística y transporte — Da Vinci IA

**URL:** https://da-vinci.ai/industria-logistica.html

**Meta descripción:** Inteligencia operativa para logística y transporte: Cada unidad, cada ruta, cada peso — visible.

[Inicio](https://da-vinci.ai/index.html) / [Industrias](https://da-vinci.ai/industrias.html) / Logística y transporte

### Logística y transporte

Cada unidad, cada ruta, cada peso — visible.

inteligencia_operativa modulos_a_medida avance_semanal

RASTREO · FARO RESPONDE

📱 «¿Dónde va mi pedido #7712?» ✓ leído

FARO: «a 42 km · llega 11:20» ✓ respondido en 5s

Llamadas al despachador hoy −80%

Humanos involucrados 0

RUTAS · CON DATOS, NO COSTUMBRE

Ruta 6 reoptimizada por cierre vial −42 min ✓

Km muertos del mes bajando semana a semana

VIAJE CERRADO · SIN PAPELEO

📸 Chofer envía remisión firmada ✓ OCR + archivo

ESCRIBA: factura del flete generada ✓ 4 segundos

COBRADOR: enviada · vence 15 días ✓ agendada

Días para facturar el viaje de 6 → 0

EL DOLOR

##### «¿Dónde va mi pedido?» contestado a mano cien veces al día.

LA CURA · AGENTE DE RASTREO

Tus clientes preguntan por su pedido y el agente responde solo, con datos reales.

EL DOLOR

##### Rutas y cargas decididas por costumbre, no por datos.

LA CURA · OPTIMIZACIÓN CON DATOS

Rutas, cargas y costos por viaje analizados para decidir mejor.

EL DOLOR

##### Mantenimientos que se vuelven descomposturas.

LA CURA · ALERTAS DE FLOTA

Mantenimientos programados antes de que la unidad se detenga.

LO QUE REPORTA LA INDUSTRIA

10-25% de km de más se ruedan hoy por rutas a costumbre

2-4 h/día de una persona contestando «¿dónde va mi pedido?»

6→0 días para facturar el flete con evidencia automática

#### Hecho a tu medida, no a la del sector

Estos son los patrones que más se repiten — pero tu empresa no es el promedio de su industria. Por eso todo empieza con el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos TU operación y construimos sobre lo que encontramos.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## IA para supermercados y autoservicio — Da Vinci IA

**URL:** https://da-vinci.ai/industria-supermercados.html

**Meta descripción:** Inteligencia operativa para supermercados y autoservicio: Cada anaquel, cada caja, cada merma — bajo control.

[Inicio](https://da-vinci.ai/index.html) / [Industrias](https://da-vinci.ai/industrias.html) / Supermercados y autoservicio

### Supermercados y autoservicio

Cada anaquel, cada caja, cada merma — bajo control.

inteligencia_operativa modulos_a_medida avance_semanal

ANAQUEL · VISIÓN · PASILLO 4

📷 Hueco detectado: bebidas 600ml ✓ surtido asignado

⚠ 7 caducidades próximas → oferta 2x1 sugerida

Precio mal etiquetado detectado ✓ corregido

Merma del mes −31%

PEDIDO A CEDIS · POR PRONÓSTICO

214 SKUs pedidos según demanda real ✓ automático

Quiebres de stock esta semana −65%

CIERRE · 4 TIENDAS · 10:04 PM

Corte de caja T1-T4 ✓ conciliado solo

Diferencias detectadas T3: −$482 → alerta

«LISA: ¿qué tienda va abajo?» Oriente −12% · causa lista

Hora de salida del gerente 10:15 pm, no 1 am

EL DOLOR

##### Mermas y caducidades detectadas cuando ya son pérdida.

LA CURA · PREDICCIÓN POR TIENDA Y POR SKU

Cuánto pedir de cada producto, en cada sucursal, según demanda real y temporada.

EL DOLOR

##### Anaqueles vacíos mientras la bodega está llena (o al revés).

LA CURA · VISIÓN DE ANAQUEL

Fotos o cámaras que detectan huecos, precios mal puestos y caducidades próximas.

EL DOLOR

##### Cortes de caja y conciliaciones que consumen horas cada noche.

LA CURA · CENTRAL MULTI-SUCURSAL

Ventas, mermas y caja de todas las tiendas en una sola pantalla — pregunta «¿qué sucursal va abajo hoy?».

LO QUE REPORTA LA INDUSTRIA

−65% ventas perdidas por faltantes con pronóstico IA

−20-30% inventario inmóvil (promedio retail con IA)

−50% error de pronóstico de demanda (McKinsey)

#### Hecho a tu medida, no a la del sector

Estos son los patrones que más se repiten — pero tu empresa no es el promedio de su industria. Por eso todo empieza con el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos TU operación y construimos sobre lo que encontramos.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

---

## IA para comercializadoras — Da Vinci IA

**URL:** https://da-vinci.ai/industria-comercializadora.html

**Meta descripción:** Inteligencia operativa para comercializadoras: Compra bien, vende mejor, cobra a tiempo.

[Inicio](https://da-vinci.ai/index.html) / [Industrias](https://da-vinci.ai/industrias.html) / Comercializadoras

### Comercializadoras

Compra bien, vende mejor, cobra a tiempo.

inteligencia_operativa modulos_a_medida avance_semanal

COTIZACIÓN · 90 SEGUNDOS

📧 Solicitud recibida 9:12 am ✓ leída por LISA

Cotización #3311 con lista real ✓ enviada 9:13

Competencia promedio responde en 2 días

Seguimiento programado · día 2 y 5

MARGEN · VISIBLE AL COTIZAR

⚠ Válvulas: margen 9.8% alerta al gerente

Margen promedio del mes 24.8% · en vivo

CARTERA · SIN SORPRESAS

Grupo Anzures: patrón de atraso detectado a tiempo

Recordatorio + liga de pago ✓ enviados

12 prospectos tocados hoy ✓ automático

Cartera vencida −41% este trimestre

EL DOLOR

##### Cotizaciones que tardan horas y se pierden entre correos.

LA CURA · CRM CON AGENTE COMERCIAL

Cada prospecto atendido, cotizado y perseguido — automáticamente y con tu lista de precios real.

EL DOLOR

##### Márgenes que nadie ve hasta que el contador cierra el mes.

LA CURA · MÁRGENES EN VIVO

Cada operación muestra su margen al momento de cotizar, no al cierre del mes.

EL DOLOR

##### Vendedores con cartera vencida que nadie persigue a tiempo.

LA CURA · COBRANZA INTELIGENTE

Recordatorios automáticos y alerta temprana de clientes que van a caer en mora.

LO QUE REPORTA LA INDUSTRIA

90 seg para cotizar — mientras la competencia tarda días

24.8% margen visible en cada operación, no al cierre

−41% cartera vencida con cobranza inteligente

#### Hecho a tu medida, no a la del sector

Estos son los patrones que más se repiten — pero tu empresa no es el promedio de su industria. Por eso todo empieza con el [Método Da Vinci](https://da-vinci.ai/metodo.html) : mapeamos TU operación y construimos sobre lo que encontramos.

#### ¿Lo quieres en tu empresa?

El primer paso es un diagnóstico gratuito: mapeamos una parte de tu operación y te decimos, con claridad, dónde la IA te genera retorno.

[Agenda tu diagnóstico gratuito](https://da-vinci.ai/contacto.html)

# ═══ PARTE: CONTENIDO DINÁMICO (JavaScript) ═══

Textos que no están en el HTML: se generan al interactuar (chats de demo, simulaciones, mensajes de estado).

## Calculadora "¿Cuánto te cuesta NO automatizar?" (precios.html)

- Sliders: Personas (1–20, default 3) · Horas al día (1–8, default 3) · Costo mensual por persona ($8,000–$60,000, paso $1,000, default $15,000)
- Fórmula: `mensual = personas × costo × (horas / 8)` · `anual = mensual × 12` · `horas recuperables al mes = personas × horas × 22`

## Demo Da Vinci Central: chat (home y demos)

Saludo: "Hola, soy **Da Vinci Central**. Pregúntame lo que quieras sobre tu empresa — elige una pregunta para probar:"

| Pregunta | Respuesta |
|---|---|
| ¿Cuánto vendimos esta semana? | Esta semana llevan **$487,320** — un **12.4% más** que la semana pasada. El mejor día fue el jueves: [gráfica de barras de 6 días: 46 / 58 / 41 / 92 / 63 / 71 %] |
| ¿Qué clientes no han pagado? | Tienes **3 facturas vencidas** por un total de **$96,150**: Comercial Robledo $41,200 · 18 días / Grupo Anzures $32,750 · 9 días / Farmacias Lira $22,200 · 4 días. ¿Quieres que el agente les envíe un recordatorio de pago? |
| ¿Cómo va el inventario? | Todo en orden, excepto una cosa: ⚠ Quedan 14 unidades de "Válvula 3/4" — a tu ritmo de venta se agotan el **martes**. Tu proveedor tarda 5 días. **Te sugiero pedir hoy.** |

Typewriter del bento (rotativo):
- ¿Cuánto vendimos esta semana? → Esta semana llevan **$487,320** — 12.4% arriba.
- ¿Quién es mi mejor cliente este mes? → **Comercial Robledo**: $118,540 en 9 pedidos.
- ¿Cómo va el flujo de caja? → Positivo: **$203,910** disponibles tras pagos programados.

Central (central.html): "¿Cuánto vendimos esta semana?" → "$487,320 · +12.4% vs semana pasada ✓" · "¿Quién no ha pagado?" · "¿Cómo va el inventario?" → "alerta: Válvula 3/4 se agota el martes · pedido sugerido ✓"

## Demo de agente de WhatsApp: venta (home)

1. Cliente: Hola, ¿tienen bomba de agua de 1 HP? ¿A cómo?
2. Agente: Hola 👋 Sí tenemos: **Bomba periférica 1 HP** a **$1,890** con garantía de 1 año. ¿Es para casa o para riego?
3. Cliente: Para la casa, se me quemó la que tenía
4. Agente: Perfecto, esa te funciona muy bien para casa. Si gustas te la aparto y mañana mismo la recoges o te la enviamos. ¿Cuál prefieres?
5. Cliente: La paso a recoger como a las 10
6. Agente: Listo ✅ Queda **apartada a tu nombre** para mañana 10:00 am. Te mando la ubicación. Cualquier cosa aquí estoy — a la hora que sea.

## Sala de demos: botones y estados

- Botones de audio: "📞 Contestar la llamada" · "▶ Escuchar la coordinación" · "▶ Escuchar de nuevo"
- Demo "Tu WhatsApp vibra": validación "Ese número se ve corto — incluye la lada del país (ej. 52…)." · éxito "✅ ¡Enviado! Revisa tu WhatsApp — el agente ya te escribió." · "La línea demo se está conectando (Green API). Mientras tanto, escríbenos tú: contacto." · "No se pudo enviar. Verifica el número e intenta de nuevo." · "Sin conexión con el servidor de demos. Intenta más tarde."

## Simulación logística: torre de control (agente Faro)

1. Torre de control en línea · 3 unidades en ruta
2. «¿Dónde va mi pedido #7712?»
3. leyendo GPS de U-14… posición y tráfico OK
4. **Faro · Da Vinci:** Tu pedido #7712 va en carretera, a 42 km. Llega ~11:20 am. Te aviso al llegar 🚛
5. ⚠ U-14 detenida 12 min · tráfico detectado
6. rampa 3 reagendada con Farmacias Lira: 12:00 → 12:30
7. **Faro · Da Vinci:** Tu entrega #7712 se recorre a ~12:05 por tráfico. Tu rampa quedó reagendada — sin filas al llegar 🙌
8. incidente resuelto por 3 agentes en 5 segundos
9. 📸 foto de remisión firmada recibida
10. OCR: entrega #7714 · 40 cajas · firma de recibido ✓
11. factura enviada al cliente · vence en 15 días
12. viaje cerrado: de la firma a la factura en 4 segundos

## LISA en el celular: show de 4 industrias (demos.html)

| Área | Titular | Bajada | Pregunta | Respuesta de LISA |
|---|---|---|---|---|
| Industrial | La planta te responde. | LISA ve tus líneas, tu calidad y tus paros — y te lo cuenta por WhatsApp. | LISA, ¿cómo va la línea 2? | L2 al **91%** ✓. Detecté desgaste de mordaza: OT programada el domingo. **Costo de paro evitado: $84,000**. ¿Te mando el detalle? |
| Comercio | Cada sucursal, en tu bolsillo. | Ventas, anaqueles, rutas y entregas — LISA vigila todo el mostrador. | ¿Qué sucursal va abajo hoy? | **Suc. Oriente −12%** vs martes típico. Causa: anaquel de bebidas vacío 2 h — **ya pedí el resurtido** y llega 4:30 pm. |
| Financiera | Tus números, sin sustos. | Caja proyectada, cobranza y CFDI — LISA cuida el dinero mientras duermes. | ¿Cómo viene la caja este mes? | Positiva: **$203,910** a 30 días. Ojo: Grupo Anzures trae patrón de atraso — **ya le envié recordatorio** con liga de pago. |
| Emprendimiento | (sin titular en JS) | Ventas, caja y clientes de tu negocio — desde el primer día, sin sistemas monstruosos. | ¿Cuánto vendimos hoy en la tienda? | **$8,240** 🎉 — tu mejor martes. El agente cerró **3 ventas por WhatsApp** mientras comías. Mañana te sugiero resurtir refrescos. |

## Planta Da Vinci (app-planta.html): simulación y chat

Stream de incidente: L2 detenida · torque fuera de rango en cabezal 3 → causa probable: desgaste de mordaza (patrón conocido) → OT creada · técnico asignado: R. Ortiz → producción rebalanceada: L1 +9% · cliente sin riesgo → WhatsApp al jefe de turno enviado · paro documentado

Respuestas del chat:
- Turno A al **84%**: L1 y L2 en meta; L3 al 64% por microparos del formador (cartón húmedo del proveedor B). Ya sugerí cambio de lote y redacté el reclamo. ¿Lo envío?
- L2 paró 6 min por torque fuera de rango — mordaza desgastada. **MECÁNICO** ya programó la OT-441 para el domingo (sin producción). Refacción llega el jueves. Costo de paro evitado: **$84,000**.
- Este mes: **$31,200** en paros (2.1% del tiempo). El 71% viene de UNA causa: mordazas L2. Con la OT del domingo, proyecto bajar a **$9,000/mes**.
- Soy la base de conocimiento de TODA tu empresa: aprendo de tus datos, documentos y decisiones (RAG + modelos que pronostican). Puedo ver ventas, planta y caja; responder a tus socios; aprobar con tus reglas; y avisarte antes de los problemas. **Tú tienes las llaves: yo solo abro las puertas que me autorices.**
- Formulario: "Tu WhatsApp con lada (ej. 5213312345678):" · "✅ Enviado — revisa tu WhatsApp." · "La línea demo se está conectando (Green API). Déjanos tu número en contacto y te lo mandamos." · "Sin conexión con el servidor de demos."

## Industria comercio: microestados animados

32 en CEDIS + 8 suc. norte ✓ · ruta 3 · mañana 8:40 ✓ · pagado en línea ✓

## FAQ completo (schema.org de faq.html, 10 preguntas)

1. **¿Cuánto tarda un proyecto?** El primer módulo funcionando suele tomar semanas, no meses. Desde la primera semana ves avances reales en la reunión semanal, y el sistema crece módulo por módulo a tu ritmo.
2. **¿Cuánto cuesta?** Depende de los módulos que tu empresa necesite. El diagnóstico gratuito produce una propuesta con alcance y precio cerrados. Más detalle en la página de inversión.
3. **Ya tengo un sistema, ¿lo tengo que tirar?** No. Nos integramos con lo que ya usas — tu ERP, CRM, Excel o WhatsApp. Construimos encima de lo que funciona y reemplazamos solo lo que te estorba.
4. **¿Necesito un equipo técnico en mi empresa?** No. Nosotros construimos, implementamos y damos mantenimiento. Tu equipo solo necesita usarlo — y lo capacitamos para eso.
5. **¿Qué pasa con mis datos?** Son tuyos y se quedan contigo. Confidencialidad firmada, cifrado, accesos por rol y cero uso de tus datos para entrenar modelos de terceros. Detalle completo en seguridad.
6. **¿Trabajan a distancia?** Sí. El mapeo inicial puede ser presencial o por videollamada, y las reuniones semanales de avance se hacen como te acomode.
7. **¿La IA va a reemplazar a mi equipo?** Nuestra experiencia: reemplaza tareas, no personas. El equipo deja de capturar y perseguir pendientes, y se dedica a vender, decidir y atender mejor. Las personas involucradas participan desde el mapeo — el sistema se construye con ellas, no contra ellas.
8. **¿Qué pasa si la IA se equivoca?** Los agentes trabajan con TUS datos (no inventan) y los flujos críticos siempre tienen aprobación humana donde tú lo decidas. Además todo queda registrado: puedes auditar cada acción.
9. **¿Puedo empezar con algo pequeño?** Es exactamente como nos gusta empezar: un módulo, un proceso, resultado medible. Después decides si crecer.
10. **¿Dan soporte después de entregar?** Sí — la mejora continua es una mensualidad opcional. Y si eliges no tomarla, el módulo entregado es tuyo y sigue funcionando.
