export type NavItem = { label: string; href: string }

export interface HeroContent {
  badge: string
  title: { text: string; gradient?: string[] }
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  stats: { value: string; label: string }[]
}

export interface LogoCloudContent {
  title: string
  brands: string[]
  extra: string
}

export interface ProblemContent {
  eyebrow: string
  headline: string
  headlineHighlight: string
  paragraphs: string[]
}

export interface MethodPillar {
  number: string
  title: string
  highlight?: boolean
  description: string
  result: string
  icon: string
  metrics?: { value: string; label: string }[]
}

export interface MethodContent {
  eyebrow: string
  title: string
  subtitle: string
  pillars: MethodPillar[]
  cta: { label: string; href: string }
}

export interface SuccessCase {
  number: string
  name: string
  sector: string
  headline: string
  description: string
  highlighted?: boolean
  icon?: string
}

export interface CasesContent {
  eyebrow: string
  title: string
  subtitle: string
  cases: SuccessCase[]
}

export interface VideoTestimonial {
  name: string
  role: string
  video: string
}

export interface VideoTestimonialsContent {
  eyebrow: string
  title: string
  subtitle: string
  items: VideoTestimonial[]
}

export interface TeamMember {
  name: string
  role: string
  avatar: string
  badge?: string
  description?: string
  tags?: string[]
  handle?: string
}

export interface TeamContent {
  eyebrow: string
  title: string
  subtitle: string
  founder: TeamMember
  members: TeamMember[]
}

export interface Appearance {
  type: string
  title: string
  description: string
  cta?: { label: string; href: string }
}

export interface AppearancesContent {
  eyebrow: string
  title: string
  subtitle: string
  items: Appearance[]
}

export interface SuitabilityItem {
  icon: string
  title: string
  description: string
  metric?: { value: string; label: string }
}

export interface SuitabilityContent {
  eyebrow: string
  title: string
  subtitle: string
  criteria: SuitabilityItem[]
}

export interface DiagnosisForm {
  eyebrow: string
  title: string
  subtitle: string
  fields: { name: string; placeholder: string; type?: string; options?: string[] }[]
  cta: string
  disclaimer: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqContent {
  eyebrow: string
  title: string
  faqs: FaqItem[]
}

export interface CtaContent {
  title: { text: string; gradient?: string[] }
  subtitle: string
  button: { label: string; href: string }
}

export interface FooterColumn {
  title: string
  links: NavItem[]
}

export interface FooterContent {
  tagline: string
  columns: FooterColumn[]
  copyright: string
  email: string
}

export interface SiteContent {
  name: string
  title: string
  description: string
  url: string
}

export interface Theme {
  indigo: string
  brand: string
  accent: string
}

// ─── THEME ───────────────────────────────────────────────
export const theme: Theme = {
  indigo: '#3b82f6',
  brand: '#3b82f6',
  accent: '#2563eb',
}

// ─── SITE ────────────────────────────────────────────────
export const site: SiteContent = {
  name: 'GEA',
  title: 'GEA Agency — Sistemas que cierran ventas',
  description:
    'Construimos sistemas que cierran ventas para empresas consolidadas. Equipo con experiencia real en SEAT, Bayer, LIDL, Carolina Herrera y +53 empresas más.',
  url: 'https://gea-agency.com',
}

// ─── NAV ─────────────────────────────────────────────────
export const nav = {
  items: [
    { label: 'El sistema', href: '#method' },
    { label: 'Problema', href: '#problema' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Casos de éxito', href: '#cases' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Equipo', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ] as NavItem[],
  cta: { label: 'Solicita diagnóstico', href: '#diagnosis' },
}

// ─── HERO ────────────────────────────────────────────────
export const hero: HeroContent = {
  badge: 'Para empresas con facturación consolidada',
  title: { text: 'Multiplica x2 las ventas de tu negocio.' },
  subtitle:
    'Con el sistema de marca, percepción y captación que emplean SEAT, Bayer y Carolina Herrera. Aplicado a empresas consolidadas que aún no han explotado el canal digital.',
  primaryCta: { label: 'Solicita tu diagnóstico →', href: '#diagnosis' },
  secondaryCta: { label: 'Cómo funciona', href: '#method' },
  stats: [
    { value: '+130M€', label: 'gestionados en campañas para SEAT, Bayer, LIDL y Carolina Herrera entre otros' },
    { value: '+50', label: 'negocios duplicaron sus ventas con nuestro sistema' },
    { value: '+3M', label: 'generados para nuestros clientes' },
  ],
}

// ─── LOGO CLOUD ──────────────────────────────────────────
export const logoCloud: LogoCloudContent = {
  title: 'Nuestro equipo ha trabajado con marcas como',
  brands: ['SEAT', 'BAYER', 'LIDL', 'CAROLINA HERRERA', 'PACO RABANNE', 'NINA RICCI', 'JEAN PAUL GAULTIER', 'UNIVERSIDAD DE BARCELONA'],
  extra: '+ 42 marcas más',
}

// ─── PROBLEM ─────────────────────────────────────────────
export const problem: ProblemContent = {
  eyebrow: 'El problema',
  headline: 'Tu empresa factura.',
  headlineHighlight: 'Pero no escala.',
  paragraphs: [
    'Has llegado hasta aquí por boca a boca, comerciales o referidos. Te ha funcionado durante años. Sin embargo, sabes que si explotases el canal digital, podrías estar facturando mucho más.',
    'Y sí, has probado el digital. Con becarios. Con agencias baratas. Con campañas sueltas. Y solo te ha traído leads fríos, curiosos y personas que tan siquiera saben (o ni se acuerdan) que te han dejado los datos.',
    'Tienes producto. Tienes capacidad de venta. Tienes potencial. Lo que te falta no es el digital — es el sistema.',
  ],
}

// ─── METHOD ──────────────────────────────────────────────
export const method: MethodContent = {
  eyebrow: 'La solución',
  title: 'Un solo sistema. Tres piezas. Resultados medibles.',
  subtitle:
    'No vendemos servicios sueltos. Construimos el sistema completo que convierte tu canal digital en tu principal motor de ventas — el mismo que emplean SEAT, Bayer y Carolina Herrera.',
  pillars: [
    {
      number: '01',
      title: 'Construcción de marca',
      description:
        'Tu negocio deja de ser una opción más. Definimos un posicionamiento, una propuesta y un mensaje que hacen que el cliente entienda por qué elegirte a ti y no a otra empresa.',
      result: 'Dejas de competir únicamente por precio y empiezas a vender desde el valor y la diferenciación.',
      icon: 'star',
    },
    {
      number: '02',
      title: 'Percepción',
      description:
        'No basta con decir que eres la mejor opción: tu mercado tiene que percibirlo. Construimos una presencia constante a través de contenido, creatividades, autoridad y prueba social para que, cuando llegue el momento de comprar, ya te conozcan y confíen en ti.',
      result: 'Llegas a la decisión de compra con ventaja, porque no partes de cero frente a otras propuestas.',
      icon: 'eye',
    },
    {
      number: '03',
      title: 'Captación',
      highlight: true,
      description:
        'Convertimos esa marca y esa percepción en oportunidades comerciales. Activamos Meta Ads, Google Ads, landings y retargeting para generar demanda y captar personas con intención real. Y no nos quedamos en generar el lead: analizamos qué pasa después, revisamos su calidad, seguimiento, citas y ventas junto al equipo comercial para optimizar las campañas en función de negocio real, no solo del CPL.',
      result: 'Más oportunidades con potencial de venta y un sistema de captación que podemos medir, optimizar y escalar',
      icon: 'bolt',
      metrics: [
        { value: '+500', label: 'leads/mes media' },
        { value: '4–6€', label: 'CPL en clientes activos' },
      ],
    },
  ],
  cta: { label: 'Aplica el sistema a tu negocio →', href: '#diagnosis' },
}

// ─── PROCESS ─────────────────────────────────────────────
export const process = {
  eyebrow: "Cómo trabajamos",
  title: "Cuatro pasos y tu canal digital funcionando.",
  subtitle: "Sin plantillas ni normas rígidas. Diseñamos el Método GEA a la medida de tu negocio, tu sector y tu punto de partida real.",
  steps: [
    { number: "01", title: "Diagnóstico estratégico", description: "Auditamos tu situación digital, tu producto, tu proceso comercial. Radiografía real, no llamada de venta." },
    { number: "02", title: "Diseñamos el Método", description: "Adaptamos las 3 piezas (marca + percepción + captación) a tu punto de partida con KPIs claros a 90 días." },
    { number: "03", title: "Ejecutamos y medimos", description: "Las 3 piezas a la vez. Reportes claros cada semana. Ajustes continuos según lo que funciona." },
    { number: "04", title: "Escalamos lo que funciona", description: "Doblamos apuesta en lo que demostró funcionar. Retargeting, audiencias custom, escalado controlado." },
  ] as { number: string; title: string; description: string }[],
};

// ─── CASES ───────────────────────────────────────────────
export const cases: CasesContent = {
  eyebrow: 'Casos de éxito',
  title: 'Resultados reales en negocios reales.',
  subtitle: 'No te contamos lo que podríamos hacer. Te enseñamos lo que ya hemos hecho.',
  cases: [
    {
      number: '01',
      name: 'Dani Martínez',
      sector: 'B2C · Real Estate',
      headline: '+2M€',
      description: '3 meses · 3K€ de inversión publicitaria · +105K€ en comisiones generadas',
      highlighted: true,
      icon: 'building',
    },
    {
      number: '02',
      name: 'GCM LLC',
      sector: 'Gestoría fiscal · B2B',
      headline: '+20K€',
      description: '1 mes · CPL 4-6€ · Tickets de 997€ y 1.397€ · +500 leads generados',
      icon: 'briefcase',
    },
    {
      number: '03',
      name: 'Endika Drame',
      sector: 'Educación premium · cienciaConciencia®',
      headline: '55-60K€',
      description: 'generados en digital · ROAS sostenido durante 16 meses · 7K€ de inversión',
      icon: 'graduation',
    },
    {
      number: '04',
      name: 'Raquel Peregrín',
      sector: 'B2B',
      headline: 'Top 1',
      description: 'Posicionamiento de marca · Visibilidad internacional · Interés institucional desde Perú · +1.000 seguidores orgánicos',
      icon: 'rocket',
    },
  ],
}

// ─── VIDEO TESTIMONIALS ──────────────────────────────────
export interface TestimonialItem {
  quote: string
  name: string
  role: string
  logo: string
}

export interface TestimonialsContent {
  eyebrow: string
  title: string
  subtitle: string
  items: TestimonialItem[]
}

export const videoTestimonials: VideoTestimonialsContent = {
  eyebrow: 'Testimonios',
  title: 'Lo dicen ellos, no nosotros.',
  subtitle: 'Clientes reales contando en cámara qué consiguieron trabajando con GEA.',
  items: [
    { name: 'Carmen', role: '', video: '/testimonios/carmen.mp4' },
    { name: 'Daniel', role: 'Inversión inmobiliaria', video: '/testimonios/daniel.mp4' },
    { name: 'Endika', role: 'cienciaConciencia®', video: '/testimonios/endika.mp4' },
    { name: 'Hugo', role: '', video: '/testimonios/hugo.mp4' },
    { name: 'Lorena', role: '', video: '/testimonios/lorena.mp4' },
    { name: 'Miguel', role: '', video: '/testimonios/miguel.mp4' },
    { name: 'Nicolas', role: '', video: '/testimonios/nicolas.mp4' },
    { name: 'Noe', role: '', video: '/testimonios/noe.mp4' },
    { name: 'Nuria', role: '', video: '/testimonios/nuria.mp4' },
    { name: 'Raquel', role: 'RITEC · Agricultura', video: '/testimonios/raquel.mp4' },
  ],
}

// ─── TESTIMONIALS (quotes) ──────────────────────────────
export const testimonials: TestimonialsContent = {
  eyebrow: 'Opiniones',
  title: 'Lo que dicen de nosotros.',
  subtitle: 'Resultados reales, palabras reales.',
  items: [
    {
      quote: 'En tres meses triplicamos las consultas qualificadas. El equipo de GEA no solo ejecuta, piensa estratégicamente con vos.',
      name: 'Laura Fernández',
      role: 'CMO, NovaTech',
      logo: 'https://framerusercontent.com/images/IFx45NaQCDmVvgL26WmENfp7FWI.png',
    },
    {
      quote: 'Pasamos de no aparecer en Google a estar en el top 3 de notre sector. La inversión se pagó sola en el primer trimestre.',
      name: 'Marcos Rivera',
      role: 'CEO, Constructura',
      logo: 'https://framerusercontent.com/images/hebcIvqLLfQg37gJKYLUMSNFOGY.png',
    },
    {
      quote: 'Lo que más me sorprendió fue la transparencia. Cada semana sabíamos exactamente qué funcionaba y qué no. Cero humo.',
      name: 'Camila Ortiz',
      role: 'Fundadora, Essentia',
      logo: 'https://framerusercontent.com/images/nOYS8jxI9RBrYQ0Mmcvd5SoW22c.png',
    },
    {
      quote: 'Llevábamos dos agencias antes. GEA fue la primera que realmente entendió nuestro negocio y no vendió una fórmula genérica.',
      name: 'Andrés Molina',
      role: 'Director Comercial, RITEC',
      logo: 'https://framerusercontent.com/images/kTCmMDmgzUl4YnExIfB6MOaCyJc.png',
    },
    {
      quote: 'El contenido que producen no es bonito, es efectivo. Cada pieza tiene un objetivo y se mide. Así de simple.',
      name: 'Sofía Pérez',
      role: 'Head de Marketing, Lumina',
      logo: 'https://framerusercontent.com/images/2bTr3RzUp3yozlmkF9FWK2GXm14.png',
    },
    {
      quote: 'Contraté GEA para redes y terminé contratando todo su ecosistema. El ROI habla por sí solo.',
      name: 'Diego Castro',
      role: 'Fundador, Urban Fit',
      logo: 'https://framerusercontent.com/images/CvrRVHNU81iMOTW8ZJget426xBM.png',
    },
    {
      quote: 'Su enfoque data-driven nos cambió la perspectiva. Dejamos de adivinar y empezamos a decidir con números.',
      name: 'Valentina Reyes',
      role: 'Directora Digital, MedTech',
      logo: 'https://framerusercontent.com/images/IFx45NaQCDmVvgL26WmENfp7FWI.png',
    },
    {
      quote: 'El equipo es ágil, humano y profesional. Se siente como tener un departamento de marketing propio sin el overhead.',
      name: 'Javier Luna',
      role: 'COO, GreenEnergy',
      logo: 'https://framerusercontent.com/images/hebcIvqLLfQg37gJKYLUMSNFOGY.png',
    },
    {
      quote: 'En 6 meses pasamos de 200 a 4.000 seguidores qualificados. No es magia, es estrategia ejecutada bien.',
      name: 'Lucía Campos',
      role: 'Fundadora, Bloom Studio',
      logo: 'https://framerusercontent.com/images/nOYS8jxI9RBrYQ0Mmcvd5SoW22c.png',
    },
  ],
}

// ─── TEAM ────────────────────────────────────────────────
export const team: TeamContent = {
  eyebrow: 'Detrás de GEA',
  title: 'El equipo de gea',
  subtitle:
    'GEA es un equipo estratégico con experiencia real en las marcas más grandes del país.',
  founder: {
    name: 'Andrea Jiménez',
    role: 'Founder & CEO',
    avatar: '/Equipo/andrea-ceo-founder.jpeg',
    badge: 'A',
    handle: '@andreajimenez.yt',
    description:
      '+10 años como estratega de campañas de cientos de miles de euros para SEAT, Bayer, LIDL, Carolina Herrera y PUIG en agencias como Omnicom, PHD Media, Starcom y WINK. Profesora en la Universitat de Barcelona en Planificación de Medios Publicitarios y Formación de Portavoces.',
    tags: ['EX-SEAT', 'EX-BAYER', 'EX-LIDL', 'EX-C. HERRERA', 'EX-PUIG', 'PROFESORA UB'],
  },
  members: [
    {
      name: 'Juan Nieto',
      role: 'CTO',
      avatar: '/Equipo/juan-nieto-cto.webp',
      badge: 'J',
      handle: '@juanieto',
    },
    {
      name: 'Pablo',
      role: 'Director Comercial',
      avatar: '/Equipo/pablo-director-comercial.webp',
      badge: 'P',
      handle: '@pablo',
    },
    {
      name: 'Marjorie',
      role: 'Project Manager',
      avatar: '/Equipo/marjorie-project-manager.png',
      badge: 'M',
      handle: '@marjorie',
    },
    {
      name: 'Nayeli',
      role: 'Project Manager',
      avatar: '/Equipo/nayeli-project-manager.jpg',
      badge: 'N',
      handle: '@nayeli',
    },
    {
      name: 'Samantha',
      role: 'Media Buyer',
      avatar: '/Equipo/samantha-media-buyer.png',
      badge: 'S',
      handle: '@samantha',
    },
    {
      name: 'Amparo',
      role: 'Content Strategy',
      avatar: '/Equipo/amparo-content-strategy.jpg',
      badge: 'A',
      handle: '@amparo',
    },
    {
      name: 'Aluhé',
      role: 'Content Creator',
      avatar: '/Equipo/aluhe-content-creator.png',
      badge: 'A',
      handle: '@aluhe',
    },
    {
      name: 'Paula',
      role: 'Content Creator',
      avatar: '/Equipo/paula-content-creator.png',
      badge: 'P',
      handle: '@paula',
    },
    {
      name: 'Teresa',
      role: 'Content Creator',
      avatar: '/Equipo/teresa-content-creator.png',
      badge: 'T',
      handle: '@teresa',
    },
    {
      name: 'Celia',
      role: 'Copywriter',
      avatar: '/Equipo/celia-copywriter.png',
      badge: 'C',
      handle: '@celia',
    },
    {
      name: 'Jara',
      role: 'Copywriter',
      avatar: '/Equipo/jara-copywriter.png',
      badge: 'J',
      handle: '@jara',
    },
    {
      name: 'Facu',
      role: 'Editor',
      avatar: '/Equipo/facu-editor.png',
      badge: 'F',
      handle: '@facu',
    },
    {
      name: 'Julio',
      role: 'Editor',
      avatar: '/Equipo/julio-editor.png',
      badge: 'J',
      handle: '@julio',
    },
    {
      name: 'David',
      role: 'Equipo Comercial',
      avatar: '/Equipo/david-equipo-comercial.webp',
      badge: 'D',
      handle: '@david',
    },
    {
      name: 'Marta',
      role: 'Equipo Comercial',
      avatar: '/Equipo/marta-equipo-comercial.png',
      badge: 'M',
      handle: '@marta',
    },
    {
      name: 'Sullin',
      role: 'Virtual Assistant',
      avatar: '/Equipo/sullin-virtual-assistant.png',
      badge: 'S',
      handle: '@sullin',
    },
  ],
}

// ─── APPEARANCES ─────────────────────────────────────────
export const appearances: AppearancesContent = {
  eyebrow: 'Apariciones y ponencias',
  title: 'Más que una agencia. Referentes.',
  subtitle: 'Compartimos lo que sabemos en aulas, ponencias y medios. Porque cuando enseñas algo, lo dominas mejor.',
  items: [
    {
      type: 'Docencia',
      title: 'Universitat de Barcelona',
      description:
        'Planificación de Medios Publicitarios · Formación de Portavoces · Content Creator · Branded Content. Andrea imparte clases desde 2023.',
    },
    {
      type: 'Mastermind',
      title: 'Diciembre 2025',
      description:
        'Encuentro presencial con referentes del sector que aplicaron el sistema en sus negocios. Testimonios y casos reales en directo.',
    },
    {
      type: 'Contenido',
      title: 'Redes sociales',
      description:
        'En GEA aplicamos lo que predicamos. Contamos con más de 20.000 suscriptores y seguidores entre todas nuestras redes sociales. Casos reales, decisiones estratégicas y aprendizajes detrás de la agencia.',
    },
  ],
}

// ─── SUITABILITY ─────────────────────────────────────────
export const suitability: SuitabilityContent = {
  eyebrow: '¿Es para ti?',
  title: 'No trabajamos con todo el mundo.',
  subtitle: 'Tenemos criterios claros. Trabajamos contigo si tu negocio encaja con estos puntos.',
  criteria: [
    {
      icon: "bolt",
      title: "Facturación consolidada",
      description: "Tienes una empresa con facturación consolidada y un producto o servicio ya validado.",
    },
    {
      icon: "star",
      title: "Capacidad de crecimiento",
      description: "Tienes capacidad para asumir más clientes, ventas u oportunidades sin que la operación se convierta en un cuello de botella.",
    },
    {
      icon: "eye",
      title: "Inversión estratégica",
      description: "Entiendes que invertir en captación es una decisión estratégica, no un gasto.",
    },
    {
      icon: "gear",
      title: "Equipo comercial",
      description: "Tienes un equipo o proceso comercial capaz de hacer seguimiento a los leads y convertir oportunidades en ventas.",
    },
    {
      icon: "check",
      title: "Mentalidad de largo plazo",
      description: "Tienes mentalidad de largo plazo y buscas construir un sistema de crecimiento, no hacer una campaña puntual.",
    },
  ],
}

// ─── DIAGNOSIS ───────────────────────────────────────────
export const diagnosis: DiagnosisForm = {
  eyebrow: 'Solicita tu diagnóstico',
  title: 'Solo trabajamos con negocios que encajan con nuestro sistema.',
  subtitle:
    'Si encajamos, te lo decimos. Si no, también — y te orientamos hacia lo que sí te puede ayudar. Sin compromiso.',
  fields: [
    { name: 'name', placeholder: 'Ej: María García — InverPro SL' },
    { name: 'email', placeholder: 'Email' },
    { name: 'phone', placeholder: 'Teléfono' },
    { name: 'product', placeholder: 'Ej: Propiedades, ticket medio 150K€' },
  ],
  cta: 'Solicitar diagnóstico →',
  disclaimer: '100% confidencial · Te contactamos en menos de 24h',
}

// ─── FAQ ─────────────────────────────────────────────────
export const faq: FaqContent = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Lo que siempre nos preguntan.',
  faqs: [
    {
      question: '"Ya lo probé y no funcionó"',
      answer:
        'Probablemente lo que probaste fue una parte del sistema, no el sistema completo. Las agencias normales solo te entregan campañas. Sin marca construida, los anuncios traen leads fríos. Sin proceso de cierre, los leads no se convierten. GEA trabaja las 3 piezas a la vez — por eso lo que no funcionaba antes, ahora sí.',
    },
    {
      question: '¿Cuánto cuesta?',
      answer:
        'Depende del estado actual de tu negocio. Trabajamos a partir de 1.500€/mes y los proyectos completos están entre 3.000 y 5.000€/mes. La inversión publicitaria es aparte y la decides tú. En la llamada de diagnóstico te diremos exactamente qué necesitas y cuánto cuesta — sin compromiso.',
    },
    {
      question: 'No tengo tiempo, ¿cuánto necesitáis de mí?',
      answer:
        'Lo justo. Una sesión inicial de diagnóstico (90 min), una grabación de contenido cada 1–2 meses según el plan, y reuniones quincenales de seguimiento (45 min). Todo lo demás lo gestionamos nosotros. Tú te centras en lo que sabes hacer: vender.',
    },
    {
      question: '¿Por qué vosotros y no otra agencia?',
      answer:
        'Porque ninguna otra agencia de paid tiene la visión estratégica que da haber planificado campañas de cientos de miles de euros para Carolina Herrera, SEAT o Bayer. Y ninguna otra agencia de paid te acompaña también en el cierre de los leads que te trae. Vendemos un sistema, no un servicio aislado.',
    },
    {
      question: '¿Hay permanencia?',
      answer:
        'Sí, mínimo 3 meses. Es el tiempo necesario para construir marca, activar campañas y empezar a ver resultados medibles. Después, trabajamos mes a mes. Si en cualquier momento no estás satisfecho, lo conversamos.',
    },
    {
      question: '¿Trabajáis con cualquier sector?',
      answer:
        'Trabajamos con empresas consolidadas con producto de ticket medio-alto. Hemos llevado inversión inmobiliaria, formación premium, agricultura, B2B fiscal, infoproducto y más. Si tienes un producto serio y mentalidad empresarial, encajas.',
    },
  ],
}

// ─── CTA ─────────────────────────────────────────────────
export const cta: CtaContent = {
  title: { text: 'Aplica el Método GEA a tu negocio' },
  subtitle:
    'Reserva tu diagnóstico gratuito. Uno de nuestros estrategas te contactará en menos de 24h.',
  button: { label: 'Solicitar diagnóstico →', href: '#diagnosis' },
}

// ─── FOOTER ──────────────────────────────────────────────
export const footer: FooterContent = {
  tagline:
    'Construimos sistemas que cierran ventas para empresas consolidadas. Equipo con experiencia real en SEAT, Bayer, LIDL, Carolina Herrera y +53 empresas más.',
  columns: [
    {
      title: 'Web',
      links: [
        { label: 'Método GEA', href: '#method' },
        { label: 'Casos', href: '#cases' },
        { label: 'Equipo', href: '#team' },
        { label: 'Contacto', href: '#diagnosis' },
      ],
    },
    {
      title: 'Redes',
      links: [
        { label: 'Instagram @gea.marketing', href: '#' },
        { label: 'Instagram personal @andreajimenez.yt', href: '#' },
        { label: 'Email contacto@gea-agency.com', href: 'mailto:contacto@gea-agency.com' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrea-jim%C3%A9nez-fructuoso-864862b2/' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Aviso legal', href: '#' },
        { label: 'Política de privacidad', href: '#' },
        { label: 'Política de cookies', href: '#' },
      ],
    },
  ],
  copyright: '© 2026 GEA Agency. Todos los derechos reservados. · Construimos sistemas que cierran ventas.',
  email: 'andrea.jimenez@gea-agency.com',
}
