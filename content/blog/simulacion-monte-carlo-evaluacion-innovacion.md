---
title: "Simulación Monte Carlo en proyectos de innovación"
category: "Evaluación Financiera"
excerpt: "Por qué el VPN y la TIR de un solo valor engañan en innovación y cómo la simulación Monte Carlo los reemplaza por una distribución de resultados para decidir mejor."
metaDescription: "Simulación Monte Carlo en proyectos de innovación: por qué el VPN y la TIR puntuales fallan y cómo calibrar, interpretar y decidir con una distribución."
date: "2026-10-10"
readTime: "15 min"
featured: false
image: "/blog/simulacion-monte-carlo-evaluacion-innovacion.jpg"
imageAlt: "Mano con un bolígrafo que marca un punto en el extremo izquierdo de un histograma impreso, junto a una calculadora y una ventana con vista a la ciudad."
---

La simulación Monte Carlo aplicada a un proyecto de innovación es una técnica cuantitativa que reemplaza el cálculo de un único Valor Presente Neto (VPN) por una distribución completa de probabilidad del valor del proyecto. En lugar de asumir un futuro fijo con valores puntuales para ventas, costos o tiempos, el método modela miles de escenarios posibles combinando aleatoriamente los rangos probables de cada variable incierta, y entrega no un número sino un espectro de valores posibles con sus probabilidades.

Esto permite responder preguntas que el VPN tradicional no puede contestar: ¿qué probabilidad hay de que el proyecto destruya valor?, ¿cuál es el VPN más pesimista que podría ocurrir con 90 % de confianza?, ¿qué variables mueven realmente el riesgo? Si busca la explicación general de la técnica, aplicada a cualquier decisión de inversión, la encuentra en simulación Monte Carlo: qué es y cuándo usarla; este artículo se concentra en el caso de la innovación.

## Por qué el VPN y la TIR puntuales engañan en innovación

El método tradicional de evaluación de proyectos calcula el VPN descontando una única trayectoria de flujos de caja construida con valores "base" o "esperados" para cada variable: precio de venta, volumen de demanda, costos operativos, inversión inicial, tiempo de desarrollo, entre otros. El resultado es un número único que se interpreta como "el valor del proyecto". La TIR hereda el mismo problema: se calcula sobre esa misma trayectoria única, de modo que un solo valor de TIR tampoco informa cuánto puede variar el resultado ni qué variables lo mueven.

**En proyectos de innovación, esta práctica es particularmente engañosa por tres razones:**

- **Incertidumbre estructural.** Los proyectos de I+D+i operan en territorios donde no hay datos históricos confiables: nuevos productos, nuevos mercados, nuevas tecnologías. Asumir un único valor "esperado" para variables críticas como la adopción del mercado o el tiempo de desarrollo es una ficción que ignora la volatilidad real del entorno.
- **Asimetría de resultados.** En innovación, los resultados no se distribuyen simétricamente alrededor de un promedio: un proyecto puede fallar por completo (VPN negativo grande) o convertirse en un éxito exponencial (VPN positivo muy grande). El VPN puntual colapsa esa asimetría en un solo número y oculta tanto el riesgo de pérdida total como el potencial de upside.
- **Flexibilidad ignorada.** El VPN tradicional asume una decisión binaria hoy (go/no-go) y una ejecución rígida del plan. En la práctica, los gerentes de innovación ajustan el proyecto a medida que llega información: escalan si hay señales tempranas de adopción, pivotan si el mercado responde distinto, o abandonan si los indicadores se deterioran. Esa flexibilidad tiene valor, pero el VPN puntual no lo captura.

Como señalan [Álvarez Echeverría, López Sarabia y Venegas-Martínez (2012)](https://doi.org/10.22201/fca.24488410e.2012.400), el VPN es un caso especial de opción real que se utiliza cuando no se considera la incertidumbre en el proceso de toma de decisiones: indica la viabilidad del proyecto en un intervalo discreto y temporal. Y según [Fernández y Contreras (2004)](https://www.dii.uchile.cl/wp-content/uploads/2011/06/Trend-Mgmt-E.-Contreras-V.-Fern%C3%A1ndez-Metodolog%C3%ADa-evaluaci%C3%B3n-proyectos.pdf), cuando las flexibilidades futuras son aprovechadas, el VPN subestima el valor del proyecto.

## Cómo funciona la simulación Monte Carlo: paso a paso

La simulación transforma la evaluación de proyectos de un ejercicio determinista a uno probabilístico mediante cinco pasos.

### Identificar las variables inciertas

Se listan todas las variables de entrada que afectan los flujos de caja y que tienen incertidumbre significativa: inversión inicial, tiempo de desarrollo, precio de venta, volumen de demanda, costos variables y fijos, tasa de descuento, vida útil del proyecto, entre otras. En innovación, las más críticas suelen ser el tiempo de desarrollo (que afecta cuándo empiezan los ingresos), el volumen de adopción temprana y los costos de iteración del producto.

### Asignar distribuciones de probabilidad

Para cada variable incierta se define una distribución que refleje el rango de valores posibles y su verosimilitud relativa. Las más usadas en evaluación de proyectos son:

- **Triangular:** requiere mínimo, máximo y valor más probable. Útil cuando hay juicio experto pero pocos datos históricos.
- **Normal:** requiere media y desviación estándar. Apropiada para variables con simetría alrededor de un valor central.
- **Uniforme:** todos los valores entre mínimo y máximo son igualmente probables. Conservadora cuando no hay información para ponderar valores centrales.
- **PERT:** similar a la triangular pero con mayor peso en el valor más probable. Común en estimación de tiempos y costos.

La elección no es trivial: debe basarse en datos históricos cuando existan, o en juicio experto documentado cuando no. Lo importante es que la distribución refleje el estado de conocimiento (o de ignorancia) sobre cada variable.

### Ejecutar miles de iteraciones

El modelo de flujos de caja se ejecuta repetidamente. En cada iteración, el software extrae aleatoriamente un valor para cada variable incierta según su distribución, calcula los flujos de caja resultantes y obtiene el VPN correspondiente. En la iteración 1, el precio puede salir en el percentil 70 de su distribución, el volumen en el percentil 30 y el costo en el percentil 50; en la iteración 2, cada variable tomará valores distintos. Repetida miles de veces, esta combinación genera miles de VPN distintos.

### Analizar la distribución resultante

El resultado no es un VPN único sino una distribución completa. De ella se extraen estadísticos clave:

- **Media o valor esperado** del VPN.
- **Percentiles:** P10 (VPN que se supera en 90 % de los escenarios), P50 (mediana) y P90 (VPN que solo se supera en 10 % de los escenarios).
- **Probabilidad de VPN negativo:** porcentaje de iteraciones donde el proyecto destruye valor.
- **Mínimo y máximo observados.**
- **Desviación estándar** como medida de dispersión del riesgo.
- **Asimetría y curtosis**, que revelan la presencia de eventos extremos.

:::destacado Idea central
Un VPN puntual responde cuánto vale el proyecto si todo sale como se espera. Una simulación Monte Carlo responde con qué probabilidad el proyecto crea o destruye valor y qué variables mueven ese resultado.
:::

## Ejemplo numérico ilustrativo: VPN puntual vs. distribución Monte Carlo

A continuación se presenta un ejemplo hipotético con fines pedagógicos. Los números son ilustrativos y no corresponden a ningún proyecto real.

Suponga un proyecto de desarrollo de una nueva plataforma SaaS para el sector financiero en Colombia. El modelo base tradicional asume:

| Variable | Valor base (escenario único) |
|---|---|
| Inversión inicial | $800 millones COP |
| Tiempo de desarrollo | 18 meses |
| Clientes año 1 | 50 empresas |
| Precio mensual por cliente | $3 millones COP |
| VPN resultante (tasa 18 %) | $420 millones COP |

Con estos valores puntuales el proyecto parece claramente viable, y la decisión sería "go" sin mayor discusión. Ahora se aplica simulación Monte Carlo reconociendo la incertidumbre en las variables críticas:

| Variable | Distribución | Parámetros |
|---|---|---|
| Inversión inicial | Triangular | Mín: $600M, más probable: $800M, máx: $1.200M |
| Tiempo de desarrollo | Triangular | Mín: 12 meses, más probable: 18, máx: 30 |
| Clientes año 1 | Normal | Media: 50, desv. estándar: 15 |
| Precio mensual | Triangular | Mín: $2M, más probable: $3M, máx: $4M |
| Costos operativos anuales | Normal | Media: $1.000M, desv. estándar: $200M |

Se ejecutan 5.000 iteraciones del modelo de flujos de caja. Los resultados:

| Estadístico | Valor |
|---|---|
| VPN medio (valor esperado) | $385 millones COP |
| Percentil 10 (P10) | −$180 millones COP |
| Percentil 50 (mediana) | $360 millones COP |
| Percentil 90 (P90) | $920 millones COP |
| **Probabilidad de VPN negativo** | **18 %** |
| **VPN mínimo observado** | **−$520 millones COP** |
| **VPN máximo observado** | **$1.650 millones COP** |

**Interpretación clave:**

- El VPN medio ($385M) es menor que el VPN puntual original ($420M): los escenarios pesimistas reducen más el valor esperado de lo que los optimistas lo aumentan.
- Hay 18 % de probabilidad de que el proyecto destruya valor, información completamente oculta en el análisis tradicional.
- El P10 es −$180M: en el 10 % de los peores escenarios el proyecto pierde al menos esa cantidad. Es crucial para evaluar si la empresa puede absorber esa pérdida.
- El P90 es $920M: si las variables se comportan favorablemente, el valor creado puede ser más del doble del VPN base.
- La dispersión (de −$520M a +$1.650M) muestra que el riesgo real es mucho mayor de lo que sugiere un único número.

La simulación no oculta la incertidumbre: la cuantifica y la pone en la mesa de decisión.

:::servicio
heading: Decidir con probabilidades, no con un solo número
text: Aplico simulación Monte Carlo y valoración de opciones reales a proyectos de innovación antes de que la empresa comprometa el capital.
image: /images/20200117_083026.jpg
imageAlt: Augusto Ruiz presentando una metodología de evaluación de proyectos ante un auditorio.
badge: EVALUACIÓN FINANCIERA
cta: /servicios/evaluacion-financiera-innovacion | Ver el servicio
- Modelo de flujo de caja con simulación Monte Carlo
- Variables de mayor incertidumbre y su efecto en la decisión
- Informe ejecutivo con la recomendación de inversión
:::

## Qué variables calibrar y cómo hacerlo con la información disponible

No todas las variables merecen el mismo esfuerzo de calibración. La práctica recomienda priorizar las de mayor impacto en el VPN y mayor incertidumbre. En innovación tecnológica suelen dominar el riesgo:

- **Tiempo de desarrollo:** determina cuándo empiezan los ingresos y cuánto se extiende la inversión sin retorno.
- **Volumen de adopción temprana:** clientes o usuarios en los primeros 12 a 24 meses. En mercados nuevos no hay historia, así que se recurre a estudios de mercado, pilotos o juicio experto documentado.
- **Precio o modelo de monetización:** en productos innovadores el precio óptimo es desconocido; pueden usarse distribuciones que reflejen estrategias distintas (penetración vs. premium).
- **Costos de iteración y pivote:** en metodologías ágiles dependen de cuántas iteraciones requiera el producto para alcanzar ajuste con el mercado.
- **Tasa de descuento:** el costo de capital puede variar según el riesgo percibido; algunos modelos usan tasas diferenciadas por fase.

### ¿Cómo calibrar con información limitada?

Cuando no hay datos históricos se recurre a juicio experto estructurado: entrevistar a expertos del dominio, revisar benchmarks de proyectos similares (aunque no idénticos) y documentar explícitamente los supuestos. La distribución triangular es útil porque solo requiere tres puntos (mínimo, más probable, máximo) que los expertos pueden estimar con más confianza que una media y una desviación estándar.

Cuando hay datos parciales, como los resultados de un piloto, se pueden ajustar las distribuciones usando esos datos como ancla. Si un piloto con 10 clientes mostró una conversión del 30 %, una distribución beta o binomial modela la incertidumbre alrededor de esa tasa.

Lo crítico es ser honesto sobre el grado de incertidumbre: si no se sabe, es mejor usar distribuciones más amplias que fingir precisión con distribuciones estrechas. La simulación Monte Carlo premia la honestidad sobre la incertidumbre, no la ilusión de certidumbre.

## Del resultado a la decisión: sensibilidad, experimentos y opciones reales

La distribución de VPN es el insumo, no el fin. El siguiente paso es usarla para decidir mejor.

### Análisis de sensibilidad tipo tornado

Un diagrama de tornado muestra qué variables contribuyen más a la variabilidad del VPN. Cada barra representa el rango de VPN que se obtiene cuando esa variable varía entre sus valores extremos, manteniendo las demás constantes, y las variables se ordenan de mayor a menor impacto. Responde a la pregunta: **¿en qué variables vale la pena invertir para reducir incertidumbre?** Si domina el tiempo de desarrollo, tiene sentido invertir en prototipado rápido o equipos más experimentados; si domina la adopción, en investigación de mercado o pilotos antes de comprometer la inversión completa. Para el paso a paso, vea análisis de sensibilidad: qué es y cómo hacerlo.

### Experimento crítico

El experimento crítico es aquel que reduce la incertidumbre de la variable más determinante al menor costo. Si la simulación muestra 40 % de probabilidad de VPN negativo, pero esa probabilidad caería a 10 % si se conociera con certeza la adopción del año 1, un piloto controlado puede ser más valioso que avanzar directamente al desarrollo completo.

### Decisión go/no-go con criterios probabilísticos

Con la distribución de VPN, la decisión deja de ser binaria ("VPN > 0, entonces go") y se vuelve una evaluación de riesgo-retorno:

- **Probabilidad de éxito:** "Aprobamos si la probabilidad de VPN positivo es mayor a 70 %".
- **Downside protegido:** "Aprobamos si el P10 es mayor a −$X millones", donde X es la pérdida máxima que la empresa puede absorber.
- **Valor esperado ajustado:** "Aprobamos si el VPN medio es mayor a $Y millones", donde Y es el umbral de creación de valor de la compañía.

Estos criterios permiten alinear la decisión con el apetito de riesgo de la organización.

### Conexión con opciones reales

Las opciones reales extienden la simulación incorporando la flexibilidad gerencial: la capacidad de expandir, contraer, posponer o abandonar a medida que se revela información. La metodología de VPN ignora esa flexibilidad y asume un compromiso inmediato; las opciones reales ofrecen alternativas que no exigen realizar o cancelar el proyecto como únicas respuestas. La simulación se integra con ellas así:

1. Se simulan las trayectorias de las variables de estado (demanda, costos, precios) a lo largo del tiempo.
2. En cada nodo se evalúa si ejercer una opción (por ejemplo, abandonar si el VPN acumulado es negativo, o expandir si la demanda supera un umbral).
3. Se calcula el valor del proyecto con la política óptima de ejercicio.
4. Se compara ese "VPN activo" (VPN pasivo más valor de las opciones) con el VPN tradicional.

Aunque el VPN tradicional sea negativo, si VPN + valor de las opciones reales > 0, es viable extender o posponer el proyecto. La literatura indica que las opciones reales adquieren mayor importancia cuando la incertidumbre es alta, la empresa tiene flexibilidad para responder y el VPN tradicional está cerca de cero o es negativo (Álvarez Echeverría et al., 2012). Cuando el VPN es claramente positivo o claramente negativo, es menos probable que el valor de la flexibilidad cambie la decisión.

:::servicio
heading: ¿Su proyecto de innovación necesita una segunda mirada financiera?
text: Un modelo probabilístico convierte la incertidumbre en información para el comité: probabilidad de pérdida, escenarios y el experimento que más reduce el riesgo.
image: /images/20200117_083026.jpg
imageAlt: Augusto Ruiz presentando una metodología de evaluación de proyectos ante un auditorio.
badge: PRIME-10™
cta: /servicios/evaluacion-financiera-innovacion | Solicitar una evaluación
- Canvas de 10 cuadrantes del proyecto
- Análisis de sensibilidad tipo tornado
- Diseño del experimento crítico go/no-go
:::

## Preguntas frecuentes

### ¿Necesito software especializado para hacer simulación Monte Carlo?

No necesariamente. La literatura sobre gestión de riesgos de proyectos describe el uso de software especializado como @RISK (Armijos De La Cruz et al., 2025). Para modelos simples también puede construirse una simulación en una hoja de cálculo. Para modelos complejos, con muchas variables correlacionadas y opciones reales, el software especializado reduce el trabajo manual y el riesgo de errores.

### ¿Cuántas iteraciones son suficientes?

Depende de la complejidad del modelo y de la precisión requerida. En evaluación de proyectos se trabaja con miles de iteraciones. Una regla práctica es aumentarlas hasta que los resultados, especialmente los percentiles extremos, dejen de cambiar de forma significativa.

### ¿Qué hago si no tengo datos para definir las distribuciones?

Se usa juicio experto estructurado. Reúna a expertos del dominio (ingenieros, comerciales, financieros) y pídales estimaciones de mínimo, más probable y máximo para cada variable. Con esos tres puntos puede construir una distribución triangular. Documente los supuestos y quién los hizo: es preferible a asumir valores puntuales sin reconocer la incertidumbre.

### ¿La simulación Monte Carlo reemplaza el análisis de opciones reales?

No, son complementarias. La simulación cuantifica la incertidumbre de las variables de entrada y entrega una distribución de VPN. Las opciones reales incorporan la flexibilidad de tomar decisiones intermedias según cómo se resuelva esa incertidumbre. Lo ideal es usar Monte Carlo para modelar la incertidumbre y luego superponer la lógica de opciones reales.

## Cierre

La simulación Monte Carlo no es una bala de plata, pero es una mejora sustancial sobre el VPN puntual cuando se evalúan proyectos de innovación. Reconoce que el futuro no es predecible, cuantifica el riesgo en lugar de ignorarlo y entrega información accionable para decidir go/no-go con los ojos abiertos. La inversión en modelamiento es marginal comparada con el costo de decidir sobre una ilusión de certidumbre.

**Lecturas relacionadas:**
- [Qué es la transferencia tecnológica en la empresa](/blog/que-es-transferencia-tecnologica-empresas)
- [Sistema de gestión de innovación en una empresa tecnológica](/blog/gestion-de-la-innovacion-sistema-empresa-tecnologica)
- [Metodologías de innovación para empresas](/blog/metodologias-de-innovacion-empresas)

:::destacado Sobre la elaboración de este contenido
Este contenido fue generado con apoyo de inteligencia artificial (Claude, modelo de Anthropic) y posteriormente revisado y ajustado por el autor, Augusto Ruiz.
:::

:::cta
heading: ¿Quiere evaluar un proyecto concreto con este enfoque?
text: Estructuramos el modelo, identificamos las variables críticas y calibramos las distribuciones con la información disponible.
primary: https://wa.me/573005348153?text=Hola%20Augusto%2C%20le%C3%AD%20tu%20art%C3%ADculo%20sobre%20simulaci%C3%B3n%20Monte%20Carlo%20en%20proyectos%20de%20innovaci%C3%B3n | Escribir por WhatsApp
secondary: /servicios/evaluacion-financiera-innovacion | Ver el servicio
:::

## Fuentes

- Venegas-Martínez, F. y Fundia Aizenstat, A. (2006). Opciones reales, valuación financiera de proyectos y estrategias de negocios. Aplicaciones al caso mexicano. *El Trimestre Económico*, 73(290), 363-405. [doi:10.20430/ete.v73i290.548](https://doi.org/10.20430/ete.v73i290.548)
- Álvarez Echeverría, F. A., López Sarabia, P. y Venegas-Martínez, F. (2012). Valuación financiera de proyectos de inversión en nuevas tecnologías con opciones reales. *Contaduría y Administración*, 57(3), 115-145. [doi:10.22201/fca.24488410e.2012.400](https://doi.org/10.22201/fca.24488410e.2012.400)
- Fernández, V. y Contreras, E. (2004). Una nueva metodología para la evaluación de proyectos de inversión. *Trend Management*, 6, Universidad de Chile. [Texto](https://www.dii.uchile.cl/wp-content/uploads/2011/06/Trend-Mgmt-E.-Contreras-V.-Fern%C3%A1ndez-Metodolog%C3%ADa-evaluaci%C3%B3n-proyectos.pdf)
- Alonso Bonís, S. (2007). Las opciones reales y la simulación de Monte Carlo. *Universia Business Review*, cuarto trimestre. [Texto](https://dialnet.unirioja.es/descarga/articulo/2480476.pdf)
- Inquilla-Mamani, J. y Rodríguez-Limachi, O. M. (2019). Análisis de riesgo mediante el método de simulación de Montecarlo aplicado a la inversión pública en el sector educativo peruano. *Praxis*, 15(2), 163-176. [doi:10.21676/23897856.2858](https://doi.org/10.21676/23897856.2858)
- Armijos De La Cruz, B. A. et al. (2025). Leveraging Monte Carlo simulation for project risk management. *Ciencia Latina Revista Científica Multidisciplinar*, 9(5), 6975-6992. [doi:10.37811/cl_rcm.v9i5.20089](https://doi.org/10.37811/cl_rcm.v9i5.20089)
- Inesdi, [El método Monte Carlo en proyectos: cómo reducir la incertidumbre](https://www.inesdi.com/blog/simulacion-de-monte-carlo-en-la-gestion-de-proyectos-como-reducir-la-incertidumbre/)
- FAO / PROSAP (2014). [Anexo: Metodología de simulación de Montecarlo](https://www.fao.org/fileadmin/user_upload/rlc/utf017arg/anexosyapendices/1.AreasExistentes/apendices/Simulaciones/1._Metodologia_Simulaci%C3%B3n_de_Montecarlo.pdf)
- Universidad de Guanajuato (2021). [Clase digital 6. Riesgos en los proyectos de inversión](https://blogs.ugto.mx/contador/clase-digital-6-riesgos-en-los-proyectos-de-inversion/)
