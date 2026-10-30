---
version: "1"
name: "Atlas Canino Obsidian & Amber"
description: "Dark-mode-dominant ethological system built on deep obsidian neutrals (#0A0A0A / #141414), high-contrast amber (#F59E0B) navigational and action accents, fine white hairline borders (rgba(255,255,255,0.05-0.10)), and functional polychrome badge accents (emerald, blue, purple, rose) for canine psychometric metrics."
colors:
  background: "#0A0A0A"
  surface-card: "#141414"
  surface-card-hover: "#1C1C1C"
  surface-hero: "#121212"
  surface-matrix: "#1C1B1B"
  surface-nav: "rgba(10, 10, 10, 0.90)"
  surface-pill: "#171717"
  text-primary: "#EDEDED"
  text-secondary: "#A3A3A3"
  text-muted: "#737373"
  text-inverse: "#000000"
  accent-amber: "#F59E0B"
  accent-amber-light: "#FBBF24"
  accent-amber-hover: "#D97706"
  accent-amber-glow: "rgba(245, 158, 11, 0.35)"
  metric-resilience: "#10B981"
  metric-sociability: "#3B82F6"
  metric-independence: "#A855F7"
  metric-stimulation: "#F59E0B"
  action-favorite: "#F43F5E"
  border-hairline: "rgba(255, 255, 255, 0.05)"
  border-subtle: "rgba(255, 255, 255, 0.10)"
  border-interactive: "rgba(245, 158, 11, 0.40)"
typography:
  display-lg:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "44px"
    fontWeight: 900
    lineHeight: "1.08"
    letterSpacing: "-0.02em"
  headline-md:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: "1.2"
  headline-sm:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "1.25"
  body-md:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.56"
  body-sm:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "14px"
    fontWeight: 300
    lineHeight: "1.5"
  label-caps:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0.2em"
  metric-value:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: "1.3"
  trait-tag:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: "1.4"
spacing:
  base: "4px"
  gap-sm: "8px"
  gap-md: "16px"
  gap-lg: "24px"
  section-padding: "30px"
  container-max: "1280px"
rounded:
  control: "9999px"
  card-sm: "12px"
  card-md: "16px"
  card-lg: "24px"
  card-breed: "32px"
  hairline: "1px"
components:
  button-primary-amber:
    background: "#F59E0B"
    text-color: "#000000"
    radius: "9999px"
    height: "34px"
    padding: "6px 14px"
    hover-background: "#FBBF24"
    hover-text-color: "#000000"
  button-nav-pill:
    background: "transparent"
    text-color: "#E2E8F0"
    radius: "9999px"
    height: "36px"
    padding: "6px 12px"
    active-background: "#F59E0B"
    active-text-color: "#000000"
  button-icon-action:
    background: "rgba(38, 38, 38, 0.90)"
    text-color: "#D4D4D4"
    radius: "9999px"
    height: "34px"
    width: "34px"
    border: "1px solid rgba(255, 255, 255, 0.10)"
    active-compare-background: "#F59E0B"
    active-compare-text-color: "#000000"
    active-favorite-background: "#F43F5E"
    active-favorite-text-color: "#FFFFFF"
  card-breed-article:
    background: "#141414"
    radius: "32px"
    padding: "0px"
    border: "1px solid rgba(255, 255, 255, 0.05)"
    hover-border: "1px solid rgba(245, 158, 11, 0.40)"
    shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)"
  card-action-matrix:
    background: "#1C1B1B"
    radius: "16px"
    padding: "16px 20px"
    border: "1px solid rgba(255, 255, 255, 0.10)"
    hover-border: "1px solid rgba(245, 158, 11, 0.50)"
  card-hero-panel:
    background: "#121212"
    radius: "24px"
    padding: "30px"
    border: "1px solid rgba(255, 255, 255, 0.05)"
  pill-trait-tag:
    background: "#171717"
    text-color: "#CBD5E1"
    radius: "9999px"
    padding: "2px 8px"
    border: "1px solid rgba(255, 255, 255, 0.05)"
  panel-metrics-grid:
    background: "rgba(23, 23, 23, 0.80)"
    radius: "12px"
    padding: "10px"
    border: "1px solid rgba(255, 255, 255, 0.05)"
---
# Atlas Canino Obsidian & Amber
Source: https://atlascanino.cl/

## Overview
Este es un sistema visual y psicométrico en modo oscuro dominante (*Obsidian Dark*), concebido para la consulta etológica y comparativa de razas caninas. En lugar del fondo blanco clínico o los degradados púrpuras saturados típicos del software genérico, el lienzo se sostiene sobre un negro carbón mate profundo (`#0A0A0A`) emparejado con tarjetas de superficie obsidiana (`#141414` y `#1C1B1B`). La energía visual y jerarquía operativa recae exclusivamente en un ámbar de alto contraste (`#F59E0B` / `#FBBF24`), empleado como señal luminosa de activación en botones principales, estados activos y halos de enfoque. El rigor científico de los datos etológicos se estructura mediante microbordes finos de 1px (`rgba(255, 255, 255, 0.05)` a `0.10`) y un código policromático funcional estricto (esmeralda, azul, púrpura, ámbar y rosa) reservado sin excepción a las métricas temperamentales y acciones de marcado.

## Composition
La pantalla principal se estructura en capas de navegación flotante y bloques temáticos modulares contenidos en un ancho máximo de 1280px (`max-w-7xl`):
1. **Header unificado sticky** (con desenfoque `backdrop-blur-xl` y fondo translúcido `#0A0A0A/90`): ancla el isotipo de AtlasCanino a la izquierda, una cápsula de navegación centrada de pastillas redondeadas (`rounded-full`) para las vistas (Explorar, Arquetipos, Marcos, Orígenes, Quiz, Comparar, Favoritos) y la barra de búsqueda rápida a la derecha.
2. **Hero Introductivo de Doble Columna**: un contenedor perimetral redondeado a 24px/32px (`bg-[#121212]`) coronado por el master logotipo central con halo cálido (`drop-shadow-[0_0_25px_rgba(245,158,11,0.35)]`). La columna izquierda expone el display tipográfico a dos tonos (*"Explora la personalidad / de cada raza"*), dos párrafos descriptivos balanceados y el contador animado de razas con etiqueta en tracking ancho (`0.2em`). La columna derecha despliega una matriz de 3 tarjetas de acción conectadas por una guía vertical gradiente (ámbar a esmeralda a púrpura), señalizando las rutas clave: Conocer una raza, Explorar y descubrir, y Comparar razas.
3. **Barra de Herramientas y Filtros Multifacéticos**: panel plegable con selectores en píldora para grupos FCI, grupos AKC, arquetipos de apego/guardia, resiliencia emocional, sociabilidad e independencia cognitiva.
4. **Malla de Exploración de Razas (Grid/Table)**: cuadrícula reactiva de 1 a 3 columnas con tarjetas de raza (`rounded-[2rem]`), fotografías con gradiente inferior continuo hacia `#141414`, etiquetas `#hashtag`, barra densa de 4 métricas en microcuadrícula y barra inferior de acciones rápidas (Comparar, Favorito y Ver Detalles).

## Colors
- `#0A0A0A` (Obsidian Base): fondo maestro del viewport, barra de navegación y carriles estructurales.
- `#121212` / `#141414` (Surface Cards): superficie principal de las fichas de razas y contenedores modulares, evitando el negro absoluto (`#000000`) para garantizar separación visual y profundidad sin fatiga.
- `#1C1B1B` / `#1C1C1C` (Elevated Surface): superficie de microtarjetas de la matriz, paneles secundarios e interacción en reposo.
- `#F59E0B` (Amber 500): acento maestro del sistema. Color primario para el botón de conversión "Ver Detalles", pastilla activa de navegación, contador interactivo y resplandor de selección.
- `#FBBF24` (Amber 400): tono hover y foco para controles interactivos y titulares en estado hover.
- `#10B981` (Emerald 500): token funcional estricto para *Resiliencia Emocional*, indicadores de recuperación y módulo de descubrimiento.
- `#3B82F6` (Blue 500): token funcional para *Sociabilidad*, afinidad gregaria e interacciones familiares.
- `#A855F7` (Purple 500): token funcional para *Independencia Cognitiva*, arquetipos primitivos y herramientas de comparación.
- `#F43F5E` (Rose 500): token funcional reservado exclusivamente para la acción de *Guardar en Favoritos* (`Bookmark` activo).
- `rgba(255, 255, 255, 0.05)` y `rgba(255, 255, 255, 0.10)`: límites ópticos ultrafinos que definen el perímetro de tarjetas sin necesidad de sombras opacas.

## Typography
El sistema emplea la pila tipográfica nativa de alto rendimiento (`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`), optimizada para legibilidad instantánea y ausencia total de layout shifts (CLS cero):
- **display-lg** (`44px` / `fontWeight: 900` / `lineHeight: 1.08` / `tracking: -0.02em`): reservado para el titular del Hero, aplicando mayúsculas densas y salto de línea que resalta el bloque en ámbar.
- **headline-md** (`24px` / `fontWeight: 800` / `lineHeight: 1.2`): títulos de modales, nombres de arquetipos y encabezados de vistas.
- **headline-sm** (`20px` / `fontWeight: 700` / `lineHeight: 1.25`): nombre de la raza en la tarjeta (`breed.breed`) sobre la imagen, con transición a ámbar en hover.
- **body-md** (`16px` / `fontWeight: 400` / `lineHeight: 1.56`): texto explicativo en el Hero y descripciones de síntesis etológica.
- **body-sm** (`14px` / `fontWeight: 300` / `lineHeight: 1.5`): texto secundario descriptivo de tarjetas de matriz y modales.
- **label-caps** (`12px` / `fontWeight: 700` / `lineHeight: 1.2` / `tracking: 0.2em`): rótulos funcionales y metadatos en mayúsculas sostenidas (e.g., *"RAZAS PARA EXPLORAR"*).
- **metric-value** (`11px` / `fontWeight: 700` / `lineHeight: 1.3`): etiquetas y valores de la microgrilla de temperamento (Resiliencia, Sociabilidad, Independencia, Umbral).
- **trait-tag** (`10px` / `fontWeight: 500` / `lineHeight: 1.4`): microetiquetas con prefijo almohadilla (`#`) para rasgos de comportamiento.

## Layout
El diseño responde a una cuadrícula fluida *Mobile-First* encapsulada en un contenedor central de `max-w-7xl` (1280px) con márgenes laterales progresivos (`px-4 sm:px-6 lg:px-8`):
- **Hero Grid**: split asimétrico de 12 columnas en desktop (`lg:grid-cols-12`), donde 7 columnas albergan el mensaje central, párrafos y contador, y 5 columnas sostienen la matriz vertical de 3 tarjetas de acción guiadas.
- **Malla de Tarjetas de Raza**: cuadrícula adaptable mediante `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` con separación regular de 20px a 24px (`gap-5 sm:gap-6`).
- **Jerarquía de Radios de Esquina**:
  - `rounded-full` (`9999px`): botones de acción, píldoras de navegación, badges de traits y controles circulares de herramientas.
  - `rounded-[2rem]` (`32px`): tarjetas principales de razas caninas (`BreedCard`), aportando un aspecto orgánico y premium.
  - `rounded-2xl` a `rounded-3xl` (`16px - 24px`): paneles maestros del Hero, modales de detalle y contenedores de mapas etológicos.
  - `rounded-xl` (`12px`): barra interna de métricas psicométricas y cajas de iconos de la matriz.

## Components
- **Navbar Unificado Sticky**: cápsula horizontal flotante de 76px de área visual, fondo translúcido con desenfoque (`bg-neutral-950/90 backdrop-blur-xl`), con pastillas de navegación agrupadas en riel oscuro (`bg-neutral-900/90 rounded-full border border-neutral-800/80`) y búsqueda integrada con atajo visual de teclado.
- **BreedCard (Tarjeta de Raza Canina)**:
  - Contenedor: `bg-[#141414]`, radio `32px` (`rounded-[2rem]`), borde `border-white/5`, elevación `shadow-xl`, transición hover `border-amber-500/40`.
  - Banner fotográfico: relación de aspecto 16:9 (`h-48 sm:h-52`), efecto zoom sutil en hover (`group-hover:scale-105 duration-500`) y degradado inferior en fundido (`bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent`).
  - Cabecera tipográfica: nombre en blanco (`text-xl font-bold`) y epíteto etológico en cursiva ámbar (`text-xs text-amber-300/80 italic`).
  - Extracto etológico: descripción breve en 3 líneas (`line-clamp-3 text-slate-400 text-xs leading-relaxed`).
  - Tags de rasgos: colección de hasta 4 micro-píldoras (`text-[10px] bg-neutral-900 border-white/5 text-slate-300 rounded-full`).
  - Panel de métricas rápidas: microgrilla 2x2 (`bg-neutral-900/80 rounded-xl p-2.5 border-white/5`) con iconos semánticos: Shield (esmeralda), Users (azul), Brain (púrpura), Activity (ámbar).
  - Barra inferior de acciones: botón circular de comparación (34px, ámbar activo), botón circular de favoritos (34px, rosa activo) y botón maestro "Ver Detalles" (`bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full px-3.5 py-1.5`).
- **Matriz de Acciones Guiadas (Hero Matrix)**:
  - 3 bloques horizontales con conector vertical iluminado en gradiente tri-color.
  - Iconos en contenedor cuadrado redondeado a 16px (`bg-[#1c1b1b] border border-amber-500/40`, etc.) con resplandor en caja (`shadow-[0_0_25px_rgba(245,158,11,0.15)]`).
- **Contador Animado Etológico**:
  - Dígito numérico de escala masiva en ámbar (`text-4xl sm:text-5xl font-black text-amber-500`) acompañado de etiqueta técnica en tracking espaciado (`0.2em`).
- **Píldoras de Filtros Multicriterio**:
  - Filtros en píldora con estados interactivos limpios, conteos dinámicos en badge y botón de reseteo rápido en ámbar tenue.
- **Pines del Mapa Cartográfico Etológico**:
  - Pines circulares oscuros con reborde ámbar, anillo exterior pulsante animado (`atlasPinPulse 2s infinite`) y badge numérico en alto contraste.

## Graphics & Effects
- **Atmósfera Lumínica Focal**: no se utilizan fondos degradados saturados que distraigan de la lectura. Los efectos de iluminación son estrictamente puntuales y semánticos: resplandor ámbar en el logo principal (`drop-shadow-[0_0_25px_rgba(245,158,11,0.35)]`), halos en las cajas de iconos de la matriz y borde iluminado en hover de las tarjetas (`hover:border-amber-500/40`).
- **Elevación por Contorno (Hairline Elevation)**: separación de componentes mediante líneas de 1px (`border-white/5` a `border-white/10`) y sombras profundas suaves (`shadow-2xl` sobre `#0A0A0A`), eliminando bordes toscos y sombras grisáceas lavadas.
- **Gradiente de Fundido Fotográfico**: las imágenes de razas integran una máscara inferior gradual (`from-[#141414] via-[#141414]/30 to-transparent`) que une la fotografía con el cuerpo de datos sin cortes duros.
- **Backdrop Blur**: vidrio esmerilado de alta densidad (`backdrop-blur-xl`) en cabeceras flotantes y modales superpuestos.

## Motion
- **Entrada Progresiva de Tarjetas (`cardFadeIn`)**: animación de entrada suave a 0.35s con curva de aceleración natural (`cubic-bezier(0.16, 1, 0.3, 1)`), con leve traslación vertical de 14px a 0px y escala de 0.985 a 1.
- **Transiciones de Contenido (`contentFadeIn`)**: transiciones de pestañas y modales a 0.30s con traslación vertical de 6px a 0px.
- **Zoom Fotográfico en Hover**: escalado progresivo de imagen (`scale-105`) a 500ms al interactuar con cualquier tarjeta de raza.
- **Pulso de Radar en Mapa (`atlasPinPulse`)**: bucle de 2 segundos con escalado continuo de 1 a 1.6 y desvanecimiento de opacidad para geolocalización de orígenes caninos.
- **Respeto a Preferencias del Usuario**: cláusula estricta `@media (prefers-reduced-motion: reduce)` que neutraliza instantáneamente todas las animaciones a estados estáticos para usuarios con sensibilidad vestibular.

## Guardrails
- **Nunca alterar el fondo neutro hacia tonos blancos o grises claros**: el sistema es estrictamente oscuro (`#0A0A0A` / `#141414`); los contrastes dependen de la luminosidad tipográfica y acentos ámbar.
- **Nunca utilizar el color ámbar (`#F59E0B`) como fondo de superficies grandes**: el ámbar está reservado para botones de llamada a la acción, píldoras activas, indicadores y halos de resplandor; nunca como tapiz de fondo completo.
- **Nunca mezclar la semántica de colores de las métricas**: el esmeralda (`#10B981`) es exclusivo de resiliencia; el azul (`#3B82F6`) de sociabilidad; el púrpura (`#A855F7`) de independencia cognitiva; y el rosa (`#F43F5E`) de favoritos.
- **Mantener la disciplina de radios de curvatura**: las tarjetas de raza deben conservar siempre su radio de 32px (`rounded-[2rem]`) para mantener la identidad visual del catálogo, mientras que los botones e interactivos conservan el formato píldora (`rounded-full`).
- **Prohibido el uso de sombras opacas o degradados multicolor en el cuerpo de texto**: todo texto informativo debe residir sobre superficies neutras sólidas o con fundido fotográfico limpio para salvaguardar la accesibilidad WCAG AA.
