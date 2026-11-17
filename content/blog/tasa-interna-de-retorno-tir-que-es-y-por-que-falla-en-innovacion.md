---
title: "Tasa interna de retorno (TIR): qué es, cómo se calcula y por qué falla en innovación"
category: "Evaluación Financiera"
excerpt: "Qué es la tasa interna de retorno, su fórmula, cómo calcularla en Excel y por qué un proyecto de innovación no debería decidirse solo con la TIR."
metaDescription: "Tasa interna de retorno (TIR): qué es, fórmula, cálculo en Excel con ejemplo y por qué falla en proyectos de innovación. Cuándo usarla junto al VPN."
date: "2026-11-16"
readTime: "9 min"
featured: false
image: "/blog/que-es-un-beneficio-tributario-colombia.jpg"
imageAlt: "Escritorio oscuro de oficina con una carpeta azul marino, una calculadora, un portátil con una hoja de cálculo y un clip rojo."
---

La tasa interna de retorno (TIR) es la tasa de descuento que hace que el valor presente neto (VPN) de un proyecto sea igual a cero. Dicho de forma sencilla, es la rentabilidad anual que rinde la inversión a lo largo de su vida. Un proyecto se considera atractivo si su TIR supera la rentabilidad mínima que exige la empresa (su costo de capital más una prima por riesgo). La TIR es popular porque entrega un solo porcentaje fácil de comparar; es también un indicador que engaña con frecuencia, y más aún en proyectos de innovación, donde los flujos son inciertos.

## Fórmula de la TIR

La TIR es la tasa *r* que cumple:

:::destacado Fórmula
0 = −Inversión inicial + Flujo₁ / (1 + r) + Flujo₂ / (1 + r)² + … + Flujoₙ / (1 + r)ⁿ
:::

No existe una fórmula cerrada para despejar *r* cuando hay más de dos o tres períodos: se resuelve por aproximaciones sucesivas, y por eso casi siempre se calcula con una hoja de cálculo o una calculadora financiera.

## Cómo calcular la TIR en Excel

1. Escriba la inversión inicial como un valor **negativo** en la primera celda (por ejemplo, −1.000).
2. Escriba los flujos de caja de cada año en las celdas siguientes.
3. Use la función `=TIR(rango; [estimación])`, seleccionando todo el rango, incluida la inversión.
4. Si los flujos no son anuales ni equidistantes, use `=TIR.NO.PER(valores; fechas)`.

Para el VPN, tenga cuidado: la función `=VNA(tasa; flujos)` de Excel **no incluye el flujo del período cero**. La inversión inicial debe restarse aparte.

## Ejemplo con números

Un proyecto exige una inversión de $1.000 millones y genera un flujo de caja de $350 millones por año durante cinco años. La TIR de ese proyecto es de aproximadamente 22 %. Si la empresa exige una rentabilidad mínima del 15 %, el proyecto la supera y, con esa regla, se aprobaría. A una tasa del 15 %, su VPN es de aproximadamente $173 millones.

## Cuándo la TIR induce a error

La TIR tiene límites conocidos que conviene tener presentes antes de usarla para decidir.

### 1. No mide cuánto valor se crea

Compare dos proyectos con una tasa de descuento del 12 %:

| | Proyecto A | Proyecto B |
|---|---|---|
| Inversión | $100 millones | $1.000 millones |
| Flujo al final del año 1 | $150 millones | $1.300 millones |
| TIR | 50 % | 30 % |
| VPN al 12 % | $34 millones | $161 millones |

El proyecto A tiene la TIR más alta, pero el B crea casi cinco veces más valor. Si el capital no es el límite, escoger por TIR deja valor sobre la mesa. Por eso el VPN es el criterio de decisión de referencia y la TIR, un indicador complementario.

### 2. Puede haber más de una TIR

Cuando los flujos cambian de signo más de una vez (por ejemplo, una inversión inicial, una utilidad y luego un costo de cierre o remediación), la ecuación puede tener varias soluciones. Un flujo de −100, +230 y −132 tiene dos TIR: 10 % y 20 %. Ninguna sirve para decidir.

### 3. Supone que los flujos se reinvierten a la misma TIR

La TIR asume implícitamente que cada flujo intermedio puede reinvertirse a esa misma tasa, lo cual rara vez es realista cuando la TIR es muy alta. Existe una versión corregida, la TIR modificada (`=TIRM` en Excel), que usa una tasa de reinversión explícita.

### 4. Ignora el tamaño y el momento de los flujos

Dos proyectos con la misma TIR pueden diferir en tamaño, en duración y en el riesgo de cada flujo. La TIR no dice nada de eso.

## Por qué falla especialmente en proyectos de innovación

Todos los límites anteriores se agravan cuando el proyecto es de innovación, por tres razones:

- **Se calcula con un solo escenario.** La TIR del plan se construye fijando cada supuesto incierto (demanda, precio, costo de desarrollo, fecha de lanzamiento) en un valor "razonable". El resultado es un porcentaje exacto, construido sobre datos que no lo son.
- **El plan suele ser el escenario optimista.** Cuando se combinan varios supuestos ligeramente favorables, la TIR presentada a la junta queda cerca del borde de los futuros posibles, no en su centro. Esto se discute con casos reales en las [lecciones de 11 proyectos de innovación evaluados con simulación Monte Carlo](/blog/monte-carlo-ia-generativa-lecciones-proyectos-innovacion).
- **Los flujos pueden cambiar de signo.** Proyectos con inversiones por etapas o costos al final de vida son terreno fértil para múltiples TIR.

:::servicio
heading: ¿La TIR de su proyecto es el escenario esperado o el mejor caso?
text: Un porcentaje único no dice qué tan probable es perder ni qué supuesto sostiene el caso. Una evaluación PRIME-10™ convierte la TIR en una distribución de resultados con las variables críticas a la vista.
image: /images/20200117_083026.jpg
imageAlt: Augusto Ruiz presentando una metodología de evaluación de proyectos ante un auditorio.
badge: EVALUACIÓN FINANCIERA
cta: /servicios/evaluacion-financiera-innovacion | Ver el servicio
- TIR y VPN como distribución, no como un único número
- Variables de mayor incertidumbre identificadas
- Recomendación lista para la junta
:::

## Cómo usar la TIR bien

La TIR no debe descartarse: es útil si se usa con criterio. Una práctica razonable es:

1. **Decidir con el VPN y usar la TIR como apoyo**, para comunicar una rentabilidad fácil de entender y compararla con un umbral.
2. **Verificar que los flujos cambien de signo una sola vez**; si no, desconfiar de la TIR.
3. **Calcularla en varios escenarios**, no en uno. Un rango de TIR dice mucho más que un número.
4. **Acompañarla de la probabilidad de pérdida.** La probabilidad de que el VPN sea negativo es la medida del riesgo que la TIR no revela.

Para las otras medidas que acompañan a la TIR (VPN, payback e índice de rentabilidad), vea la guía de [indicadores financieros para evaluar un proyecto de innovación](/blog/indicadores-financieros-evaluar-proyecto-innovacion-colombia). Si quiere ver qué variables mueven realmente el resultado, lea el artículo sobre [análisis de sensibilidad](/blog/analisis-de-sensibilidad-que-es-y-como-hacerlo) y la explicación de la [simulación Monte Carlo](/blog/simulacion-monte-carlo-que-es-y-cuando-usarla).

## Preguntas frecuentes

### ¿Qué significa una TIR del 20 %?

Que, con los flujos proyectados, la inversión rinde un 20 % anual. Solo es atractiva si supera la rentabilidad mínima que exige la empresa, que debe incluir una prima por el riesgo del proyecto.

### ¿Qué es mejor, la TIR o el VPN?

El VPN, porque mide el valor creado en pesos. La TIR sirve para comparar rentabilidades, pero puede dar un ranking distinto del VPN cuando los proyectos tienen tamaños o duraciones diferentes.

### ¿Qué TIR es buena para un proyecto de innovación?

Debe superar con holgura el costo de capital, porque el riesgo de un proyecto de innovación es mayor que el del negocio actual. No hay un número universal; depende del riesgo y del sector.

### ¿Puede la TIR ser negativa?

Sí. Si el proyecto no recupera la inversión, la TIR es negativa y el proyecto destruye valor.

:::servicio
heading: ¿Qué variable decide si el proyecto vale la pena?
text: Identificamos la variable que más mueve la TIR y el VPN, y diseñamos el experimento que la valida antes de comprometer el capital.
image: /images/20200117_083026.jpg
imageAlt: Augusto Ruiz presentando una metodología de evaluación de proyectos ante un auditorio.
cta: /servicios/evaluacion-financiera-innovacion | Solicitar una evaluación
- Análisis de sensibilidad sobre las variables críticas
- Probabilidad de pérdida del proyecto
- Informe para la junta con la distribución de resultados
:::

:::destacado Sobre la elaboración de este contenido
Este contenido fue generado con apoyo de inteligencia artificial (Claude, modelo de Anthropic) y posteriormente revisado y ajustado por el autor, Augusto Ruiz.
:::

:::destacado Nota de alcance
Este artículo es información general sobre evaluación financiera de proyectos y no constituye asesoría financiera ni de inversión. Los ejemplos numéricos son ilustrativos.
:::

:::cta
heading: ¿Su proyecto de innovación se aprobó con una TIR que nadie ha cuestionado?
text: Revisemos juntos los supuestos, el rango de resultados y la probabilidad de pérdida antes de que llegue a la junta.
primary: https://wa.me/573005348153?text=Hola%20Augusto%2C%20le%C3%AD%20tu%20art%C3%ADculo%20sobre%20la%20TIR%20en%20proyectos%20de%20innovaci%C3%B3n | Escribir por WhatsApp
secondary: /servicios/evaluacion-financiera-innovacion | Ver el servicio
:::
