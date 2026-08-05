import type { Metadata } from "next";
import SchemaScript from "@/components/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad y tratamiento de datos personales de augustoruiz.org: qué información se recolecta, con qué finalidad, y cómo ejercer tus derechos de habeas data.",
  alternates: { canonical: "https://www.augustoruiz.org/politica-privacidad" },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Inicio", url: "https://www.augustoruiz.org" },
          { name: "Política de privacidad", url: "https://www.augustoruiz.org/politica-privacidad" },
        ])}
      />

      <section className="bg-primary pt-32 pb-16">
        <div className="container-site">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent text-white text-xs font-heading font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Legal
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Política de privacidad
            </h1>
            <p className="mt-4 text-white/80 text-base leading-relaxed">
              Última actualización: 4 de agosto de 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto space-y-10 text-sm sm:text-base text-foreground leading-relaxed">
            <div>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">
                Responsable del tratamiento
              </h2>
              <p>
                Este sitio web (augustoruiz.org) es operado por Augusto Ruiz, a través de
                Uno+Uno SAS. Para cualquier consulta relacionada con esta política o con tus
                datos personales, puedes escribir a{" "}
                <a href="mailto:proyectos@augustoruiz.org" className="text-primary hover:underline">
                  proyectos@augustoruiz.org
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">
                Qué datos recolectamos y con qué finalidad
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="font-heading font-semibold text-base text-foreground mb-1">
                    Formulario de contacto
                  </h3>
                  <p>
                    Cuando escribes a través del{" "}
                    <a href="/contacto" className="text-primary hover:underline">
                      formulario de contacto
                    </a>
                    , recolectamos tu nombre, correo electrónico, empresa u organización
                    (opcional), el tipo de servicio de interés (opcional) y el mensaje que
                    escribes. Esta información se envía por correo electrónico a Augusto Ruiz
                    (proyectos@augustoruiz.org y oa.ruiz27@uniandes.edu.co) a través del
                    proveedor de envío transaccional Resend, únicamente para responder tu
                    solicitud. Si marcas la casilla de newsletter, tu intención de suscripción
                    también se incluye en ese correo.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base text-foreground mb-1">
                    Suscripción al newsletter
                  </h3>
                  <p>
                    Si te suscribes al newsletter desde el blog o el pie de página, tu correo
                    electrónico y la fecha de suscripción se almacenan en una hoja de cálculo
                    privada mediante un webhook de Google Apps Script, con el único fin de
                    enviarte los artículos y análisis a los que te suscribiste. Puedes
                    solicitar la baja en cualquier momento escribiendo a{" "}
                    <a href="mailto:proyectos@augustoruiz.org" className="text-primary hover:underline">
                      proyectos@augustoruiz.org
                    </a>
                    .
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base text-foreground mb-1">
                    Analítica del sitio
                  </h3>
                  <p>
                    Usamos Google Analytics 4 (GA4) para entender de forma agregada cómo se
                    usa el sitio (páginas visitadas, origen del tráfico, duración de la
                    visita). GA4 puede usar cookies y almacenamiento local del navegador para
                    este fin. No usamos esta información para identificarte individualmente.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base text-foreground mb-1">
                    WhatsApp
                  </h3>
                  <p>
                    Los enlaces de contacto por WhatsApp te redirigen fuera de este sitio, a
                    la aplicación o web de WhatsApp/Meta. El tratamiento de tus datos dentro
                    de esa conversación se rige por la política de privacidad de WhatsApp, no
                    por esta.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">
                Cookies y consentimiento
              </h2>
              <p>
                Al entrar por primera vez a este sitio verás un aviso que te permite aceptar
                o rechazar las cookies de analítica (Google Analytics). Mientras no aceptes,
                Google Analytics permanece en modo de consentimiento denegado y no se
                almacenan cookies de analítica en tu navegador. Puedes cambiar tu decisión en
                cualquier momento borrando las cookies del sitio desde la configuración de tu
                navegador, lo que hará que el aviso vuelva a aparecer. No usamos cookies de
                publicidad ni de seguimiento entre sitios.
              </p>
              <p className="mt-3">
                Este sitio también está verificado en Google Search Console, una herramienta
                que Google usa para mostrarnos cómo aparece el sitio en los resultados de
                búsqueda. La verificación no instala cookies en tu navegador ni recolecta
                datos personales tuyos: solo confirma ante Google que somos los propietarios
                del sitio.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">
                Qué no hacemos
              </h2>
              <p>
                No vendemos ni alquilamos tus datos personales a terceros. No compartimos la
                información de tu formulario de contacto ni de tu suscripción con nadie fuera
                de los proveedores de servicio mencionados arriba (Resend para el envío de
                correo, Google para la hoja de suscriptores y la analítica), estrictamente
                para prestar el servicio solicitado.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">
                Tus derechos (habeas data)
              </h2>
              <p>
                Conforme a la Ley 1581 de 2012 y sus decretos reglamentarios (régimen de
                protección de datos personales en Colombia), tienes derecho a conocer,
                actualizar, rectificar y solicitar la supresión de tus datos personales, así
                como a revocar la autorización otorgada para su tratamiento. Para ejercer
                cualquiera de estos derechos, escribe a{" "}
                <a href="mailto:proyectos@augustoruiz.org" className="text-primary hover:underline">
                  proyectos@augustoruiz.org
                </a>{" "}
                indicando tu solicitud; responderemos en un plazo máximo de 15 días hábiles.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">
                Conservación de los datos
              </h2>
              <p>
                Conservamos los datos del formulario de contacto y del newsletter mientras
                sean necesarios para la finalidad para la que fueron recolectados, o hasta
                que solicites su supresión.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl text-foreground mb-3">
                Cambios a esta política
              </h2>
              <p>
                Podemos actualizar esta política ocasionalmente para reflejar cambios en el
                sitio o en la normativa aplicable. La fecha de última actualización se indica
                al inicio de esta página.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
