---
title: "Análisis de sensibilidad: qué es y cómo hacerlo en un proyecto de inversión"
category: "Evaluación Financiera"
excerpt: "Qué es el análisis de sensibilidad, cómo hacerlo paso a paso con un ejemplo numérico, cómo leer un diagrama de tornado y cuándo pasar a una simulación Monte Carlo."
metaDescription: "Análisis de sensibilidad: qué es, cómo hacerlo paso a paso con un ejemplo, cómo leer el tornado y el punto de equilibrio, y cuándo pasar a Monte Carlo."
date: "2026-11-16"
readTime: "8 min"
featured: false
---

El análisis de sensibilidad mide cuánto cambia el resultado de un proyecto (por ejemplo, su valor presente neto) cuando se modifica una variable incierta, dejando las demás constantes. Responde a una pregunta práctica: ¿qué supuesto, si me equivoco, me hace perder más? Es el paso que separa un modelo financiero que solo entrega un número de uno que muestra dónde está el riesgo, y es el puente natural hacia la simulación Monte Carlo.

## Para qué sirve

- **Encontrar las variables críticas.** De diez supuestos, dos o tres suelen explicar casi todo el riesgo. El análisis de sensibilidad las identifica.
- **Dirigir el esfuerzo de investigación.** Conviene validar con datos reales las variables que más mueven el resultado, no las que son fáciles de medir.
- **Calcular puntos de equilibrio.** Cuánto puede caer la demanda o subir el costo antes de que el proyecto deje de crear valor.
- **Comunicar riesgo a una junta** de forma visual y comprensible.

## Cómo hacerlo paso a paso

1. **Construya el modelo base** con su resultado, por ejemplo, el VPN.
2. **Liste las variables inciertas** que entran en el modelo: ingresos, costos, inversión, tasa de descuento, tiempos, entre otras.
3. **Defina un rango razonable** para cada una (por ejemplo, ±20 %).
4. **Mueva una variable a la vez**, dejando las demás en su valor base, y registre el nuevo resultado.
5. **Ordene las variables** por el tamaño del efecto sobre el resultado.
6. **Interprete**: las que más mueven el resultado son las que hay que validar antes de invertir.

## Ejemplo numérico

Un proyecto exige una inversión de $1.000 millones y genera ingresos de $800 millones al año con costos de $450 millones (flujo de $350 millones) durante cinco años. Con una tasa de descuento del 15 %, el VPN base es de aproximadamente **$173 millones**.

Al mover cada variable un 20 % hacia cada lado, el VPN cambia así (cifras en millones):

| Variable | Escenario −20 % | VPN base | Escenario +20 % |
|---|---|---|---|
| Ingresos | −363 | 173 | +710 |
| Costos | +475 | 173 | −128 |
| Inversión inicial | +373 | 173 | −27 |
| Tasa de descuento (12 % / 18 %) | +262 | 173 | +95 |

*La fila de tasa muestra el VPN con una tasa del 12 % y del 18 %, respectivamente.*

La lectura es directa. Los **ingresos** son la variable crítica: una caída del 20 % convierte un VPN de +173 en uno de −363. Los costos y la inversión pesan menos, y la tasa de descuento es la menos sensible en este rango.

:::destacado El punto de equilibrio
En este ejemplo, el VPN se hace cero cuando los ingresos anuales caen a unos $748 millones, es decir, un **6,5 %** menos que el plan. Esa es la holgura real del proyecto: una caída modesta de ingresos basta para que deje de crear valor.
:::

## Cómo leer un diagrama de tornado

El diagrama de tornado grafica esos resultados como barras horizontales, una por variable, ordenadas de la más influyente (arriba) a la menos influyente (abajo). Cada barra muestra hasta dónde llega el VPN con el valor bajo y con el valor alto de la variable. Su forma de embudo da el nombre. Sirve para decir en una sola imagen: "estas dos variables son las que importan".

## Límites del análisis de sensibilidad

El análisis de una variable a la vez es un buen primer paso, pero tiene límites que importa conocer:

- **Mueve una sola variable a la vez.** En la realidad varias cambian juntas, y sus efectos se combinan.
- **No dice cuán probable es cada valor.** Un ±20 % es arbitrario: puede ser casi imposible en una variable y muy probable en otra.
- **No entrega la probabilidad de perder dinero**, que es la medida de riesgo más útil para decidir.

:::servicio
heading: ¿Sabe qué variable decide si su proyecto vale la pena?
text: Identificamos las variables críticas con análisis de sensibilidad y las llevamos a una evaluación PRIME-10™ que mide la probabilidad de pérdida, no solo un número.
image: /images/20200117_083026.jpg
imageAlt: Augusto Ruiz presentando una metodología de evaluación de proyectos ante un auditorio.
badge: EVALUACIÓN FINANCIERA
cta: /servicios/evaluacion-financiera-innovacion | Ver el servicio
- Variables críticas identificadas y priorizadas
- Puntos de equilibrio del proyecto
- Probabilidad de pérdida y recomendación para la junta
:::

## Del análisis de sensibilidad a la simulación Monte Carlo

Ahí es donde entra la [simulación Monte Carlo](/blog/simulacion-monte-carlo-que-es-y-cuando-usarla). En lugar de mover una variable a la vez entre dos valores, se asigna a cada variable crítica una **distribución** (qué valores puede tomar y con qué probabilidad) y se simulan miles de combinaciones. El resultado ya no es una tabla de ±20 %, sino una distribución completa del VPN, con su valor esperado y la probabilidad de que sea negativo.

La secuencia práctica es:

1. Análisis de sensibilidad para identificar las dos o tres variables críticas.
2. Investigación para justificar los rangos de esas variables.
3. Simulación Monte Carlo sobre ellas.
4. Diseño de un experimento que valide la variable más crítica antes de comprometer el capital.

El análisis de sensibilidad complementa los indicadores clásicos como el VPN y la [tasa interna de retorno](/blog/tasa-interna-de-retorno-tir-que-es-y-por-que-falla-en-innovacion); vea también la guía de [indicadores financieros para evaluar un proyecto de innovación](/blog/indicadores-financieros-evaluar-proyecto-innovacion-colombia).

:::servicio
heading: Del análisis de sensibilidad a una decisión de inversión
text: Llevamos las variables críticas de su proyecto a una evaluación PRIME-10™ con rangos justificados, para que la junta decida con la probabilidad de pérdida a la vista.
image: /images/20200117_083026.jpg
imageAlt: Augusto Ruiz presentando una metodología de evaluación de proyectos ante un auditorio.
cta: /servicios/evaluacion-financiera-innovacion | Solicitar una evaluación
- Diagrama de tornado con las variables que más mueven el VPN
- Rangos justificados con evidencia, no con intuición
- Probabilidad de pérdida y recomendación
:::

## Preguntas frecuentes

### ¿Cuál es la diferencia entre análisis de sensibilidad y análisis de escenarios?

El de sensibilidad mueve una variable a la vez; el de escenarios cambia varias a la vez para construir situaciones coherentes (optimista, base, pesimista). Ambos se complementan.

### ¿Qué rango usar para cada variable?

Uno que refleje la incertidumbre real, justificado con datos históricos, referencias del sector u opinión experta. Un ±20 % es solo un punto de partida.

### ¿Se puede hacer en Excel?

Sí. Se puede hacer con una tabla de datos (Análisis de hipótesis) o moviendo manualmente cada variable y registrando el resultado.

### ¿Cuántas variables conviene analizar?

Todas las que tengan incertidumbre relevante. Después del análisis, se concentra la atención en las dos o tres que más pesan.

:::destacado Sobre la elaboración de este contenido
Este contenido fue generado con apoyo de inteligencia artificial (Claude, modelo de Anthropic) y posteriormente revisado y ajustado por el autor, Augusto Ruiz.
:::

:::destacado Nota de alcance
Este artículo es información general sobre evaluación financiera de proyectos y no constituye asesoría financiera ni de inversión. Las cifras del ejemplo son ilustrativas.
:::

:::cta
heading: ¿Quiere saber dónde está el riesgo de su proyecto?
text: Revisemos su modelo, identifiquemos las variables críticas y midamos la probabilidad de pérdida antes de comprometer el capital.
primary: https://wa.me/573005348153?text=Hola%20Augusto%2C%20le%C3%AD%20tu%20art%C3%ADculo%20sobre%20an%C3%A1lisis%20de%20sensibilidad | Escribir por WhatsApp
secondary: /servicios/evaluacion-financiera-innovacion | Ver el servicio
:::
