import {
  Building2,
  ShoppingBag,
  HeartPulse,
  Ear,
  Activity,
  Home as HomeIcon,
  Glasses,
  Compass,
  Sparkles,
  Wallet,
  Droplet,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Menu,
} from "lucide-react";

type Accent = "rust" | "sage";

type Project = {
  sheet: string;
  title: string;
  category: string;
  description: string;
  url?: string;
  icon: React.ElementType;
  accent: Accent;
};

const delivered: Project[] = [
  {
    sheet: "LÁMINA 01",
    title: "NVM Arquitectos",
    category: "Arquitectura",
    description: "Sitio institucional para un equipo de arquitectos de Concepción.",
    url: "https://nvm-arquitectos.cl/",
    icon: Building2,
    accent: "rust",
  },
  {
    sheet: "LÁMINA 02",
    title: "Capas Chile",
    category: "E-commerce",
    description: "Tienda online de productos de belleza.",
    url: "https://www.capaschile.cl/",
    icon: ShoppingBag,
    accent: "sage",
  },
  {
    sheet: "LÁMINA 03",
    title: "CIT Salud",
    category: "Salud",
    description: "Centro de salud ubicado en Concepción.",
    url: "https://citsalud.cl/",
    icon: HeartPulse,
    accent: "rust",
  },
  {
    sheet: "LÁMINA 04",
    title: "Audio Salud Regional",
    category: "Salud",
    description:
      "Fonoaudiología integral, con venta de productos auditivos y servicios asociados.",
    url: "https://audiosaludregional.cl/",
    icon: Ear,
    accent: "sage",
  },
  {
    sheet: "LÁMINA 05",
    title: "Tratamiento del Dolor",
    category: "Salud",
    description:
      "Dr. Germán Acuña, especialista en el alivio del dolor crónico y agudo.",
    url: "https://tratamientodolor.cl/",
    icon: Activity,
    accent: "rust",
  },
  {
    sheet: "LÁMINA 06",
    title: "Sabra Inmobiliaria",
    category: "Inmobiliario",
    description: "Casas y departamentos en Concepción.",
    url: "https://www.sabrainmobiliaria.cl/",
    icon: HomeIcon,
    accent: "sage",
  },
  {
    sheet: "LÁMINA 07",
    title: "Óptica San Pedro",
    category: "Salud",
    description: "Servicios ópticos y venta de lentes con y sin marco.",
    url: "https://opticasanpedro.cl/",
    icon: Glasses,
    accent: "rust",
  },
  {
    sheet: "LÁMINA 08",
    title: "Ingeniería CSA",
    category: "Ingeniería",
    description:
      "Movimientos de tierra, topografía y construcción de caminos forestales.",
    url: "https://ingenieriacsa.cl/",
    icon: Compass,
    accent: "sage",
  },
  {
    sheet: "LÁMINA 09",
    title: "Autocompletado de Exámenes",
    category: "Automatización con IA",
    description:
      "Herramienta para el Hospital de Villarrica que ayuda al equipo médico a generar solicitudes de exámenes de forma digital, sin escribir a mano. Más tiempo para los pacientes, menos tiempo en papeleo.",
    icon: Sparkles,
    accent: "rust",
  },
];

const inProgress: Project[] = [
  {
    sheet: "LÁMINA 10",
    title: "Finanzas Personales",
    category: "Inteligencia artificial",
    description:
      "Aplicación con inteligencia artificial para ordenar y llevar el control de tus cuentas personales, sin planillas ni complicaciones.",
    icon: Wallet,
    accent: "sage",
  },
  {
    sheet: "LÁMINA 11",
    title: "Recordatorio de Riego",
    category: "Proyecto personal",
    description:
      "App móvil que recuerda cuándo regar cada planta según su especie, e indica cuánta luz y humedad necesita. Nace de la falta de tiempo (y de riego) en departamentos de solteros.",
    icon: Droplet,
    accent: "rust",
  },
];

function Thumb({ icon: Icon, accent }: { icon: React.ElementType; accent: Accent }) {
  const tone = accent === "rust" ? "text-rust" : "text-sage";
  const line = accent === "rust" ? "#C1552C" : "#6E7F5C";
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-line bg-card">
      <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
        <defs>
          <pattern id={`hatch-${accent}`} width="10" height="10" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="10" stroke={line} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#hatch-${accent})`} />
      </svg>
      <div className="absolute left-3 top-3 h-3 w-3 border-l border-t border-ink/40" />
      <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-ink/40" />
      <div className="flex h-full w-full items-center justify-center">
        <Icon className={`h-9 w-9 ${tone}`} strokeWidth={1.5} />
      </div>
    </div>
  );
}

function ProjectCard({ project, muted = false }: { project: Project; muted?: boolean }) {
  const Wrapper = project.url ? "a" : "div";
  const wrapperProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};
  const badgeColor = project.accent === "rust" ? "bg-rust" : "bg-sage";

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex flex-col rounded-sm border p-4 transition-all sm:p-5 ${
        muted
          ? "border-dashed border-line/80 bg-transparent"
          : "border-line bg-paper hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[4px_4px_0_0_rgba(42,36,28,0.08)]"
      }`}
    >
      <Thumb icon={project.icon} accent={project.accent} />
      <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-ink/50">
        <span>{project.sheet}</span>
        <span className="flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${badgeColor}`} />
          {project.category}
        </span>
      </div>
      <h3 className="mt-2 font-display text-xl text-ink">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
        {project.description}
      </p>
      {project.url ? (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink">
          Visitar sitio
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      ) : (
        <span className="mt-4 inline-flex w-fit items-center rounded-full border border-line px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] text-ink/60">
          {muted ? "En desarrollo" : "Herramienta interna"}
        </span>
      )}
    </Wrapper>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-2">
            <span className="crosshair block h-3 w-3 shrink-0" />
            <span className="font-display text-lg tracking-tight">SARP</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#proyectos" className="text-ink/70 transition hover:text-ink">
              Proyectos
            </a>
            <a href="#desarrollo" className="text-ink/70 transition hover:text-ink">
              En desarrollo
            </a>
            <a href="#sobre" className="text-ink/70 transition hover:text-ink">
              Sobre SARP
            </a>
            <a
              href="#contacto"
              className="rounded-full bg-ink px-4 py-2 text-paper transition hover:bg-rust"
            >
              Hablemos
            </a>
          </nav>
          <details className="md:hidden">
            <summary className="list-none rounded-full border border-line p-2">
              <Menu className="h-5 w-5" />
            </summary>
            <div className="absolute left-0 right-0 border-b border-line bg-paper px-5 py-4 text-sm shadow-lg">
              <a href="#proyectos" className="block py-2">Proyectos</a>
              <a href="#desarrollo" className="block py-2">En desarrollo</a>
              <a href="#sobre" className="block py-2">Sobre SARP</a>
              <a href="#contacto" className="block py-2 font-medium text-rust">Hablemos</a>
            </div>
          </details>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden border-b border-line">
        <div className="grid-overlay absolute inset-0 opacity-[0.35]" />
        <span className="crosshair absolute left-8 top-10 hidden sm:block" />
        <span className="crosshair absolute bottom-10 right-10 hidden sm:block" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-ink/60">
            Estudio digital · Concepción, Chile
          </p>
          <h1 className="max-w-3xl font-display text-[2.6rem] leading-[1.08] tracking-tight sm:text-6xl">
            Sitios web y herramientas con IA,{" "}
            <em className="text-rust not-italic">construidos para negocios reales.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            En SARP diseñamos y desarrollamos páginas web, y ahora también construimos
            proyectos personalizados con inteligencia artificial. Este es el registro
            de lo que hemos entregado y lo que estamos construyendo ahora.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:bg-rust"
            >
              Ver proyectos
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-ink"
            >
              Cuéntanos tu idea
            </a>
          </div>
        </div>
      </section>

      {/* PROYECTOS ENTREGADOS */}
      <section id="proyectos" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-line pb-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-rust">Índice de láminas</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Proyectos entregados</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-ink/60 sm:block">
            {delivered.length} proyectos en producción, para clientes en distintos rubros.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {delivered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* EN DESARROLLO */}
      <section id="desarrollo" className="border-y border-line bg-card/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-line pb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-sage-dark">En obra</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                Lo que estamos construyendo ahora
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm text-ink/60 sm:block">
              Proyectos en curso, con inteligencia artificial en el centro.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {inProgress.map((p) => (
              <ProjectCard key={p.title} project={p} muted />
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-rust">Sobre SARP</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Diseño con oficio, construido con herramientas nuevas.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
              SARP nació haciendo páginas web para negocios de Concepción: clínicas,
              arquitectos, inmobiliarias, ópticas y tiendas online. Hoy sumamos la
              inteligencia artificial como otra herramienta de trabajo, para construir
              productos a la medida de cada cliente, no soluciones genéricas.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Diseño y desarrollo de sitios web a medida",
                "Automatización de procesos con inteligencia artificial",
                "Aplicaciones y herramientas personalizadas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center rounded-sm border border-line bg-card p-8">
            <p className="font-display text-2xl italic leading-snug text-ink/80">
              "Cada proyecto entregado es un negocio real, en producción, usado por
              clientes reales todos los días."
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="border-t border-line bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-[11px] uppercase tracking-[0.14em] text-paper/50">Contacto</p>
          <h2 className="mt-2 max-w-xl font-display text-3xl sm:text-4xl">
            ¿Tienes un proyecto en mente? Conversemos.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:hola@sarp.cl"
              className="inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3 text-sm font-medium text-paper transition hover:bg-rust-dark"
            >
              <Mail className="h-4 w-4" />
              hola@sarp.cl
            </a>
            <a
              href="https://wa.me/56900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-medium text-paper transition hover:border-paper"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
          <p className="mt-4 text-xs text-paper/40">
            * Reemplaza el correo y el número de WhatsApp por tus datos reales.
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-8 text-xs text-ink/50 sm:px-8">
        © {new Date().getFullYear()} SARP. Todos los derechos reservados.
      </footer>
    </main>
  );
}
