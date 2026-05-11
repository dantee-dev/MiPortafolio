import Image from "next/image";
import {
  ArrowUp,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <BannerSection />
      <MetricsSection />
      <ServicesSection />
      <CertificatesSection />
      <ProjectsSection />
      <SkillsSection />
      <InterestsSection />
      <CreativeSection />
      <ContactSection />
      <BackToTopButton />
    </main>
  );
}

// BANNER
function BannerSection() {
  return (
    <section className="relative min-h-screen px-5 py-5 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[image:var(--hero)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,0,0,0.28),transparent_44%,rgba(0,0,0,0.34))]" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur">
        <a className="flex items-center gap-2 font-semibold" href="#">
          <span className="grid size-9 place-items-center rounded-full bg-[var(--accent)] text-white">
            <Layers3 size={18} aria-hidden="true" />
          </span>
          Bienvenidos
        </a>
        <div className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          <a href="#servicios">Servicios</a>
          <a href="#certificados">Certificados</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
            href="https://wa.me/56987325712"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Phone size={16} aria-hidden="true" />
            Hablemos
          </a>
        </div>
      </nav>

      <div className="mx-auto grid max-w-7xl items-center gap-12 pb-16 pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:pt-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--accent-strong)] shadow-sm backdrop-blur">
            <Sparkles size={16} aria-hidden="true" />
            Ingeniero Informático
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            DANTE PACHECO DÍAZ.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Ingeniero Informático orientado a la optimización de procesos mediante análisis estratégico de información, desarrollo web, visualización de datos y soporte TI. Me enfoco en convertir necesidades operativas en soluciones digitales claras, útiles y medibles.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-[var(--accent-strong)]"
              href="#proyectos"
            >
              Ver proyectos
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 font-semibold text-[var(--foreground)] shadow-sm backdrop-blur transition hover:border-[var(--accent)]"
              download
              href="/Dante-Pacheco-Diaz-Curriculum.pdf"
            >
              <Download size={18} aria-hidden="true" />
              Descargar CV
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-[460px] overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] shadow-2xl shadow-black/25 backdrop-blur">
            <Image
              alt="Foto de Dante Pacheco Díaz"
              className="h-auto w-full object-cover object-center"
              height={720}
              priority
              src="/Dante-Foto.png"
              width={560}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// MÉTRICAS
function MetricsSection() {
  const metrics = [
    { value: "2", label: "proyectos destacados" },
    { value: "11", label: "certificados y cursos" },
    { value: "6", label: "áreas técnicas" },
    { value: "4", label: "focos: web, datos, soporte e IA" },
  ];

  return (
    <section className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 shadow-sm backdrop-blur" key={metric.label}>
            <p className="text-4xl font-semibold text-[var(--accent-strong)]">{metric.value}</p>
            <p className="mt-2 text-sm font-medium text-[var(--muted)]">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// SERVICIOS
function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: "Desarrollo web",
      text: "Construcción de interfaces y aplicaciones con foco en claridad, rendimiento y experiencia de usuario.",
    },
    {
      icon: Database,
      title: "Datos y reportería",
      text: "Organización, análisis y visualización de datos para apoyar decisiones y seguimiento operativo.",
    },
    {
      icon: Bot,
      title: "Automatización e IA",
      text: "Uso de prompts, asistentes y flujos digitales para reducir trabajo manual y mejorar procesos.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Soporte y mejora TI",
      text: "Acompañamiento técnico, documentación y mejora continua para equipos y entornos administrativos.",
    },
  ];

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12" id="servicios">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">Lo que puedo aportar</p>
          <h2 className="max-w-3xl text-3xl font-semibold sm:text-4xl">Soluciones digitales para ordenar, automatizar y dar visibilidad al trabajo.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm backdrop-blur" key={service.title}>
                <span className="mb-5 grid size-11 place-items-center rounded-full bg-[rgba(78,161,255,0.14)] text-[var(--accent-strong)]">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CERTIFICADOS
function CertificatesSection() {
  const certificateGroups = [
    {
      type: "Títulos",
      items: [
        { name: "Título Ingeniero", file: "01-Certificado-de-Titulo-Ingeniero.pdf" },
        { name: "Título Técnico", file: "02-Certificado-De-Titulo-Tecnico.pdf" },
      ],
    },
    {
      type: "Desarrollo y sistemas",
      items: [
        { name: "Desarrollador Full Stack", file: "05-CERTIFICADO-EN-DESARROLLADOR-FULL-STACK.pdf" },
        { name: "Desarrollo de Aplicaciones", file: "06-CERTIFICADO-EN-DESARROLLO-DE-APLICACIONES.pdf" },
        { name: "Diseño Ágil de Sistemas", file: "07-CERTIFICADO-EN-DISEÑO-ÁGIL-DE-SISTEMAS.pdf" },
      ],
    },
    {
      type: "Datos, soporte y cloud",
      items: [
        { name: "Diseño y Gestión de Base de Datos", file: "08-CERTIFICADO-EN-DISEÑO-Y-GESTIÓN-DE-BASE-DE-DATOS.pdf" },
        { name: "Soporte Computacional", file: "09-CERTIFICADO-EN-SOPORTE-COMPUTACIONAL.pdf" },
        { name: "Arquitectura Cloud", file: "04-CERTIFICADO-EN-ARQUITECTURA-CLOUD.pdf" },
      ],
    },
    {
      type: "Ciberseguridad, IA y gestión",
      items: [
        { name: "Ciberseguridad y Ethical Hacking", file: "03-Certificado-Curso-Ciber-Seguridad-y-Ethical-Hacking.pdf" },
        { name: "Prompt Engineering", file: "10-CERTIFICADO-PROMPT-ENGINEERING.pdf" },
        { name: "Gestión de Proyectos Scrum", file: "11-GESTIÓN-DE-PROYECTOS-SCRUM.pdf" },
      ],
    },
  ];

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12" id="certificados">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">Mis certificados / cursos</p>
            <h2 className="max-w-3xl text-3xl font-semibold sm:text-4xl">Formación organizada por especialidad para mostrar una base técnica transversal.</h2>
          </div>
          <a className="inline-flex items-center gap-2 font-semibold text-[var(--accent-strong)]" href="#proyectos">
            Ver proyectos
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {certificateGroups.map((group) => (
            <article className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm backdrop-blur" key={group.type}>
              <h3 className="text-xl font-semibold">{group.type}</h3>
              <div className="mt-5 grid gap-3">
                {group.items.map((certificate) => (
                  <a
                    className="inline-flex min-h-14 items-center justify-between gap-4 rounded-lg border border-[var(--line)] bg-white/6 px-4 py-3 font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
                    download
                    href={`/${certificate.file}`}
                    key={certificate.file}
                  >
                    <span>{certificate.name}</span>
                    <Download className="shrink-0 text-[var(--accent-strong)]" size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// PROYECTOS
function ProjectsSection() {
  const projects = [
    {
      name: "Frogpy IA",
      type: "Producto IA",
      problem: "Necesidad de una experiencia conversacional enfocada en bienestar, con acceso privado, pagos e interacciones medibles.",
      solution: "Aplicación web con chatbot, autenticación, módulos privados, analítica, validaciones e integraciones para flujos de usuario.",
      result: "Producto desplegable con base full stack moderna y preparado para evolucionar con nuevas funciones.",
      tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion", "Recharts", "Zod", "Transbank"],
      demoHref: "https://frogpy-ai.vercel.app/menu",
    },
    {
      name: "Cliente al Día",
      type: "Gestión documental",
      problem: "Gestión interna de documentación comercial sensible, con necesidad de ordenar archivos y reducir duplicados.",
      solution: "Sistema web para cargar, consultar, visualizar y descargar documentos con control por códigos únicos.",
      result: "Proyecto de uso confidencial por contener datos sensibles de clientes y procesos internos.",
      tags: ["Python", "HTML", "CSS", "JavaScript", "MySQL"],
      confidential: true,
    },
  ];

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12" id="proyectos">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">Proyectos</p>
            <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">Casos seleccionados para mostrar problema, solución y alcance real.</h2>
          </div>
          <a className="inline-flex items-center gap-2 font-semibold text-[var(--accent-strong)]" href="https://github.com/" target="_blank">
            <Github size={18} aria-hidden="true" />
            Github
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl" key={project.name}>
              <p className="text-sm font-semibold text-[var(--accent-strong)]">{project.type}</p>
              <h3 className="mt-4 text-2xl font-semibold">{project.name}</h3>
              <div className="mt-5 grid gap-4 leading-7 text-[var(--muted)]">
                <p><span className="font-semibold text-[var(--foreground)]">Problema: </span>{project.problem}</p>
                <p><span className="font-semibold text-[var(--foreground)]">Solución: </span>{project.solution}</p>
                <p><span className="font-semibold text-[var(--foreground)]">Resultado: </span>{project.result}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span className="rounded-full bg-white/8 px-3 py-1 text-sm font-medium text-[var(--foreground)]" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-7">
                {project.demoHref ? (
                  <a
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 font-semibold transition hover:border-[var(--accent)]"
                    href={project.demoHref}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ver demo
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 font-semibold text-[var(--muted)]">
                    <ShieldCheck size={18} aria-hidden="true" />
                    Proyecto confidencial
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// HABILIDADES
function SkillsSection() {
  const skillGroups = [
    { area: "Lenguajes", items: ["TypeScript", "Python", "C#"] },
    { area: "Frontend", items: ["HTML", "CSS", "React", "Next.js", "Bootstrap", "Tailwind CSS"] },
    { area: "Base de datos", items: ["MySQL", "SSMS", "Supabase"] },
    { area: "Datos", items: ["Excel", "Análisis de datos", "Power BI"] },
    { area: "Operaciones", items: ["Soporte TI", "IA Prompt", "Automatización"] },
    { area: "Buenas prácticas", items: ["ISO 9001", "ISO 27001", "NIS2"] },
  ];

  return (
    <section className="bg-[#020617] px-5 py-16 text-white sm:px-8 lg:px-12" id="habilidades">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--amber)]">Habilidades técnicas</p>
          <h2 className="max-w-3xl text-3xl font-semibold sm:text-4xl">Base para desarrollo, datos, soporte y mejora de procesos.</h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div className="rounded-lg border border-white/10 bg-white/6 p-5" key={group.area}>
              <p className="text-lg font-semibold">{group.area}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/80" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// INTERESES
function InterestsSection() {
  const interests = [
    { icon: Bot, title: "IA aplicada", text: "Asistentes, automatizaciones y herramientas que reduzcan trabajo manual." },
    { icon: Database, title: "Datos y trazabilidad", text: "Visualización, control documental e indicadores para tomar mejores decisiones basadas en datos." },
    { icon: Code2, title: "Desarrollo", text: "Cada idea puede convertirse en una oportunidad para crear algo útil, claro y escalable." },
  ];

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12" id="intereses">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">Intereses tecnológicos</p>
          <h2 className="max-w-3xl text-3xl font-semibold sm:text-4xl">Áreas que quiero seguir profundizando y conectando con proyectos futuros.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {interests.map((interest) => {
            const Icon = interest.icon;
            return (
              <article className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur" key={interest.title}>
                <span className="mb-5 grid size-11 place-items-center rounded-full bg-[rgba(78,161,255,0.14)] text-[var(--accent-strong)]">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold">{interest.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{interest.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CREATIVO
function CreativeSection() {
  const creativeItems = [
    "Contenido científico",
    "Proyectos con identidad propia",
    "Contenido digital",
    "Contenido en redes",
  ];

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12" id="creativo">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur md:grid-cols-[0.85fr_1.15fr] md:p-8">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">Proyectos creativos</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Un espacio más personal para ideas, estética y exploración.</h2>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            Espacio reservado para mostrar una mirada más humana de mi trabajo: gustos visuales, proyectos personales y contenido. A futuro me gustaría convertirme en divulgador y estudioso de estos temas, conectando investigación, tecnología y creatividad con una comunicación más cercana.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {creativeItems.map((item) => (
            <div className="flex items-center gap-3 rounded-lg border border-[var(--line)] bg-white/6 p-4" key={item}>
              <span className="grid size-10 place-items-center rounded-full bg-[rgba(78,161,255,0.14)] text-[var(--accent-strong)]">
                <Palette size={18} aria-hidden="true" />
              </span>
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CONTACTO
function ContactSection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12" id="contacto">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm backdrop-blur md:flex-row md:items-start md:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">Contacto</p>
          <h2 className="mt-2 text-3xl font-semibold">Construyamos una solución clara, útil y medible.</h2>
          <div className="mt-6 grid gap-3 text-[var(--muted)]">
            <a className="inline-flex items-center gap-3 transition hover:text-[var(--accent-strong)]" href="mailto:dante.diaz.pacheco@gmail.com">
              <Mail size={18} aria-hidden="true" />
              dante.diaz.pacheco@gmail.com
            </a>
            <p className="inline-flex items-center gap-3">
              <MapPin size={18} aria-hidden="true" />
              Santiago, Chile.
            </p>
            <a className="inline-flex items-center gap-3 transition hover:text-[var(--accent-strong)]" href="https://wa.me/56987325712" rel="noopener noreferrer" target="_blank">
              <Phone size={18} aria-hidden="true" />
              WhatsApp: +56 9 8732 5712
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-[var(--accent-strong)]" download href="/Dante-Pacheco-Diaz-Curriculum.pdf">
            <Download size={18} aria-hidden="true" />
            Descargar CV
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 font-semibold transition hover:border-[var(--accent)]" href="https://wa.me/56987325712" rel="noopener noreferrer" target="_blank">
            <Phone size={18} aria-hidden="true" />
            Escribir
          </a>
          <a className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 font-semibold transition hover:border-[var(--accent)]" href="https://www.linkedin.com/in/dantepd" rel="noopener noreferrer" target="_blank">
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

// SUBIR
function BackToTopButton() {
  return (
    <a
      aria-label="Volver al inicio"
      className="fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--foreground)] shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
      href="#"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </a>
  );
}
