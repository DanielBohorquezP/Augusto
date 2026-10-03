---
name: imagenes-blog-augusto
description: Crea el prompt para generar la imagen de portada de un post del blog de augustoruiz.org, a partir del propio artículo (archivo en content/blog/ o texto pegado). Entrega el prompt en inglés para un generador de imágenes, el imageAlt en español y las instrucciones para guardarla. Úsala cuando pidan "el prompt de la imagen del blog", "imagen para este post", "portada del artículo", o cuando se publique o redacte un post nuevo que no tenga foto.
---

# Imágenes del blog de Augusto

Convierte un post del blog en un **prompt de imagen** listo para pegar en un generador
(ChatGPT/DALL·E, Midjourney, Ideogram, Firefly, etc.), más el `imageAlt` y los pasos para
publicarla. No genera la imagen: genera el prompt.

## 1. Leer el post

Fuentes, en este orden:
1. Un slug o ruta: leer `content/blog/<slug>.md`.
2. "Todos los posts sin imagen": listar `content/blog/*.md` y tomar los que no tengan
   `image:` en el frontmatter.
3. Texto pegado en el chat.

Extraer del post, y nada más:
- `title`, `category`, `excerpt`.
- La **idea central** en una frase (de la apertura y del cierre, no del título).
- 2 o 3 **objetos físicos** que ese tema evoca en la vida real (documentos, mapa, gráfico
  impreso, mesa de junta, notas adhesivas, calculadora).
- El **tono**: rigor técnico, cercanía, decisión bajo incertidumbre, etc.

## 2. Reglas de contenido (no negociables)

- **Sin texto en la imagen**: ni letras, ni números, ni logos, ni marcas de agua. El título
  ya va grabado en la imagen Open Graph del post; duplicarlo en la foto se ve mal.
- **Sin rostros reconocibles**: manos y objetos, planos de espaldas o desenfocados. Nunca
  pedir que se parezca a Augusto ni a otra persona real. Si el post es una experiencia
  personal de Augusto (curso, charla, ponencia), recomendar una **foto real** suya en
  lugar de una imagen generada.
- **Sin cifras ni datos inventados** en gráficos: pedir gráficos "abstractos y
  desenfocados"; los números generados por IA se ven falsos.
- **Coherencia con el sitio**: ambiente corporativo colombiano, sobrio, confiable.
- No representar resultados, premios ni clientes concretos.

## 3. Estilo común (va al inicio de todo prompt)

```text
Editorial photography style, 4:3 aspect ratio, soft natural light, shallow depth of field, clean modern corporate setting in Colombia, deep navy blue (#0E1C3D) tones with a single small red (#CE2222) accent, no text, no letters, no numbers, no logos, no watermarks, no recognizable faces, hands and objects only, high resolution, photorealistic
```

Los colores salen del sistema de diseño del sitio: azul marino `#0E1C3D` como dominante y
rojo `#CE2222` solo como un detalle pequeño (un clip, un marcador, una chincheta).

## 4. Construir el prompt

Estructura fija:

```text
[ESTILO COMÚN] + escena concreta (plano, objetos, qué hacen las manos) + elemento rojo de acento + una frase de ambiente que exprese la idea central.
```

Reglas de la escena:
- **Un solo plano** claro (vista cenital, primer plano de manos, mesa de reunión).
- **Máximo 3-4 objetos** protagonistas, todos físicos y reconocibles.
- La escena debe **contar el tema del post**, no ilustrar la categoría genérica
  ("consultoría", "finanzas"). Ejemplos de traducción:
  - Beneficios tributarios → carpeta, calculadora, portátil con hoja de cálculo borrosa.
  - Comparativo regional → mapa impreso con chinchetas, cuaderno, tableta.
  - Trazabilidad de un proyecto → línea de tiempo impresa y notas conectadas con hilos.
  - Crédito fiscal / amortización → manos sobre documentos con líneas resaltadas.
  - Decisión bajo incertidumbre / Monte Carlo → mesa de junta, histograma abstracto
    desenfocado, bolígrafo marcando un punto en el borde de la curva.
  - IA generativa → manos verificando una salida impresa contra otra fuente.
  - Financiación → carpeta de propuesta y presupuesto sobre una mesa de reunión.
  - Metodologías de innovación → tablero con notas adhesivas en columnas, prototipos
    de papel.
  - Transferencia tecnológica → un prototipo o pieza técnica entregada de una mano a otra
    sobre una mesa, sin rostros.

## 5. Entregable

Para cada post, entregar este bloque exacto:

````markdown
## <Título del post>
`<slug>`

```text
<prompt completo en inglés>
```
**imageAlt:** <descripción real de lo que se ve, en español, sin repetir el título>
````

El `imageAlt` describe la foto (objetos y acción), no el título ni la keyword.

## 6. Cómo publicarla

Incluir siempre esta nota al final:

1. Guardar la imagen en `public/blog/<slug>.jpg` (o `.webp`), **1200×900 px, menos de
   300 KB**.
2. Declararla en el frontmatter del post:

```yaml
image: "/blog/<slug>.jpg"
imageAlt: "<el imageAlt entregado>"
```

3. Revisar antes de usarla: si el generador metió texto, números, logos o rostros, volver
   a generarla.
4. Si se pide, hacerlo directamente: copiar el archivo a `public/blog/`, editar el
   frontmatter y verificar con `npm run build` que la tarjeta del listado y el hero del
   artículo la muestran.

## 7. Qué NO hacer

- No reutilizar la imagen Open Graph como miniatura (regla del blog: ya lleva el título).
- No pedir "estilo ilustración 3D", "isométrico" ni "futurista": el sitio es sobrio.
- No usar más de un acento rojo.
- No generar prompts para posts cuyo texto no se ha leído completo.
