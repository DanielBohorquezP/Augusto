---
title: "Simulación Monte Carlo: qué es, cómo funciona y cuándo usarla en decisiones de inversión"
category: "Evaluación Financiera"
excerpt: "Qué es la simulación Monte Carlo, cómo funciona paso a paso, qué resultados entrega, con qué herramientas se hace y cuándo conviene usarla en un proyecto de inversión."
metaDescription: "Simulación Monte Carlo: qué es, cómo funciona paso a paso, qué resultados entrega y cuándo usarla en decisiones de inversión e innovación. Con ejemplo."
date: "2026-11-16"
readTime: "9 min"
featured: false
---

La simulación Monte Carlo es una técnica que evalúa una decisión incierta ejecutando su modelo miles de veces, cada una con valores aleatorios tomados de las distribuciones de probabilidad de las variables inciertas. En lugar de un único resultado, entrega una **distribución de resultados posibles** con su probabilidad: cuál es el valor esperado, qué tan dispersos son los resultados y qué probabilidad hay de perder dinero. Es especialmente útil para decisiones de inversión e innovación, donde ventas, costos y plazos no se conocen con certeza.

## Cómo funciona, paso a paso

1. **Construir el modelo.** Un modelo financiero (por ejemplo, un flujo de caja que termina en el VPN) con sus variables de entrada.
2. **Identificar las variables inciertas.** Las que más mueven el resultado, normalmente descubiertas con un [análisis de sensibilidad](/blog/analisis-de-sensibilidad-que-es-y-como-hacerlo).
3. **Asignar una distribución a cada variable.** En lugar de un valor único, un rango y una forma: qué valores puede tomar y con qué probabilidad.
4. **Sortear valores y calcular.** El programa elige un valor al azar de cada distribución, calcula el resultado del modelo y guarda el número.
5. **Repetir miles de veces.** Típicamente entre 5.000 y 10.000 iteraciones, hasta que los resultados se estabilizan.
6. **Analizar la distribución obtenida.** Se miran el promedio, los percentiles y la probabilidad de resultados negativos.

## Las distribuciones más usadas

| Distribución | Cuándo se usa | Qué necesita |
|---|---|---|
| Triangular | Cuando se conocen un mínimo, un valor más probable y un máximo | Tres números |
| Normal | Variables que fluctúan de forma simétrica alrededor de un promedio | Promedio y desviación estándar |
| Lognormal | Variables que no pueden ser negativas y tienen cola larga (precios, ventas) | Promedio y desviación estándar |
| Uniforme | Cuando solo se sabe el rango y todos los valores son igual de probables | Mínimo y máximo |

La clave no es la distribución elegida, sino que cada rango esté **justificado con evidencia**: datos históricos, referencias del sector u opinión experta documentada.

## Qué resultados entrega

- **Valor esperado.** El promedio de todos los resultados simulados.
- **Percentiles.** Por ejemplo, el percentil 5 (un escenario malo) y el 95 (uno bueno), que delimitan el rango plausible.
- **Probabilidad de pérdida.** El porcentaje de iteraciones en que el VPN es negativo.
- **Histograma.** La forma de la distribución completa.
- **Análisis de contribución.** Qué variables explican la mayor parte de la incertidumbre.

## Un ejemplo ilustrativo

Considere el proyecto del [artículo sobre análisis de sensibilidad](/blog/analisis-de-sensibilidad-que-es-y-como-hacerlo): inversión de $1.000 millones, ingresos de $800 millones, costos de $450 millones y cinco años a una tasa del 15 %. Su VPN determinístico es de **+$173 millones**.

Ahora asignamos rangos más realistas a las tres variables críticas, con distribuciones triangulares y sesgadas hacia el lado desfavorable, como suele ocurrir en proyectos de innovación:

- Ingresos anuales: mínimo $560 millones, más probable $800 millones, máximo $880 millones.
- Costos anuales: mínimo $400 millones, más probable $450 millones, máximo $560 millones.
- Inversión: mínimo $950 millones, más probable $1.000 millones, máximo $1.300 millones.

Con 10.000 iteraciones, el resultado de este ejemplo es:

:::destacado Resultado de la simulación (ilustrativo)
VPN esperado: aproximadamente −$158 millones · Percentil 5: −$625 millones · Percentil 95: +$244 millones · **Probabilidad de VPN negativo: cerca del 70 %.**
:::

El plan presentado, con un VPN de +173, era uno de los mejores futuros posibles, no el esperado. Ese es el hallazgo central de este tipo de simulación y se repite en la práctica; se discute con casos reales en las [lecciones de 11 proyectos de innovación evaluados con Monte Carlo e IA generativa](/blog/monte-carlo-ia-generativa-lecciones-proyectos-innovacion). Los números de este ejemplo son ilustrativos y dependen por completo de los rangos que se asignen.

:::servicio
heading: ¿Su VPN es el escenario esperado o uno de los mejores?
text: Una evaluación PRIME-10™ simula las variables críticas de su proyecto con rangos justificados y le entrega la probabilidad de pérdida antes de la decisión.
image: /images/20200117_083026.jpg
imageAlt: Augusto Ruiz presentando una metodología de evaluación de proyectos ante un auditorio.
badge: PRIME-10™ ASSESSMENT
cta: /servicios/evaluacion-financiera-innovacion | Ver el servicio
- Distribución de probabilidad del valor del proyecto
- Rangos de cada variable justificados con evidencia
- Recomendación para la junta, no solo un número
:::

## Con qué herramientas se hace

- **Excel.** Con la función `=ALEATORIO()` y una tabla de datos se puede simular un modelo sencillo. Es suficiente para aprender, pero poco práctico con muchas variables.
- **Complementos de Excel** como @RISK o Crystal Ball, que gestionan las distribuciones y generan los gráficos.
- **Python o R**, con bibliotecas de simulación, para modelos más complejos o automatizados.
- **IA generativa**, que puede ayudar a construir el modelo y el código, siempre que los resultados se verifiquen por otra vía.

## Cuándo usarla y cuándo no

**Conviene usarla cuando:**

- La decisión implica una inversión grande o irreversible.
- Varias variables son inciertas y pueden combinarse de forma desfavorable.
- Se necesita comunicar riesgo a una junta con una probabilidad, no con un adjetivo.
- Se quiere decidir qué variable investigar antes de invertir.

**No es necesaria cuando:**

- El proyecto es pequeño y sus variables se conocen bien.
- No hay información alguna para justificar rangos: simular con rangos inventados da una falsa sensación de rigor.

:::servicio
heading: Monte Carlo bien hecho: rangos que se pueden defender
text: El valor de la simulación está en las distribuciones que se asignan a cada variable. Las construimos con evidencia y las dejamos documentadas para que la junta las pueda cuestionar.
image: /images/20200117_083026.jpg
imageAlt: Augusto Ruiz presentando una metodología de evaluación de proyectos ante un auditorio.
cta: /servicios/evaluacion-financiera-innovacion | Solicitar una evaluación
- Distribuciones justificadas variable por variable
- Correlaciones y escenarios extremos revisados
- Modelo entregable y reutilizable
:::

## Errores frecuentes

1. **Rangos sin evidencia.** El resultado es tan bueno como los rangos de entrada.
2. **Ignorar la correlación.** Si dos variables se mueven juntas (precio y demanda, por ejemplo), simularlas como independientes subestima el riesgo.
3. **Simular demasiadas variables.** Conviene concentrarse en las dos o tres críticas.
4. **Tomar la simulación como una predicción.** Es una descripción de la incertidumbre, no una profecía.
5. **No verificar el modelo.** Antes de simular, el modelo determinístico debe estar validado.

## De la simulación a la decisión

La simulación no decide: informa la decisión. Su mayor valor aparece cuando se combina con la pregunta siguiente: ¿qué experimento barato puede validar la variable más crítica antes de comprometer el capital? Ese paso, junto con el análisis de sensibilidad y la simulación, es la lógica de la [metodología PRIME-10](/prime-10). Complementa a los indicadores clásicos: vea la [tasa interna de retorno](/blog/tasa-interna-de-retorno-tir-que-es-y-por-que-falla-en-innovacion) y la guía de [indicadores financieros para evaluar un proyecto de innovación](/blog/indicadores-financieros-evaluar-proyecto-innovacion-colombia).

## Preguntas frecuentes

### ¿Para qué sirve la simulación Monte Carlo?

Para medir el riesgo de una decisión: entrega el rango de resultados posibles y la probabilidad de cada uno, incluida la de perder dinero.

### ¿Por qué se llama Monte Carlo?

Por el casino de Mónaco, en alusión al azar. El nombre lo popularizaron los científicos que desarrollaron el método a mediados del siglo XX.

### ¿Cuántas iteraciones se necesitan?

Entre 5.000 y 10.000 suelen bastar para que los resultados se estabilicen. Se puede comprobar repitiendo la simulación y viendo que el promedio casi no cambia.

### ¿Se puede hacer en Excel?

Sí, para modelos sencillos. Con muchas variables o distribuciones, es más cómodo un complemento especializado o Python.

:::destacado Sobre la elaboración de este contenido
Este contenido fue generado con apoyo de inteligencia artificial (Claude, modelo de Anthropic) y posteriormente revisado y ajustado por el autor, Augusto Ruiz.
:::

:::destacado Nota de alcance
Este artículo es información general sobre evaluación financiera y no constituye asesoría financiera ni de inversión. Las cifras del ejemplo son ilustrativas y resultan de una simulación con rangos supuestos.
:::

:::cta
heading: ¿Quiere saber la probabilidad de que su proyecto pierda dinero?
text: Simulemos las variables críticas de su proyecto con rangos justificados y lleguemos a la junta con una distribución, no con un número.
primary: https://wa.me/573005348153?text=Hola%20Augusto%2C%20le%C3%AD%20tu%20art%C3%ADculo%20sobre%20simulaci%C3%B3n%20Monte%20Carlo | Escribir por WhatsApp
secondary: /servicios/evaluacion-financiera-innovacion | Ver el servicio
:::
