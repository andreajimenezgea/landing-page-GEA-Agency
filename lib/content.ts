export type NavItem = { label: string; href: string }

export interface HeroContent {
  badge: string
  title: { text: string; gradient?: string[] }
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  stats: { value: string; label: string }
  avatars: string[]
}

export interface Solution {
  icon: string
  title: string
  description: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface TeamMember {
  name: string
  role: string
  avatar: string
}

export interface ComparisonItem {
  other: string
  ours: string
}

export interface VideoTestimonial {
  title: string
  video: string
  name: string
  role: string
  logo: string
}

export interface PricingPlan {
  name: string
  tagline: string
  price: string
  period: string
  badge?: string
  features: string[]
  cta: { label: string; href: string }
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  logo: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface CtaContent {
  title: { text: string; gradient?: string[] }
  subtitle: string
  button: { label: string; href: string }
}

export interface FooterContent {
  newsletter: {
    title: string
    description: string
    placeholder: string
    button: string
  }
  columns: { title: string; links: NavItem[] }[]
  copyright: string
}

export interface Theme {
  background: string
  foreground: string
  muted: string
  brand: string
  accent: string
  indigo: string
  navCta: string
  link: string
  border: string
  headingGradient: string
  pricingGlow: string
}

export interface Assets {
  navLogo: string
  heroImage: string
  clientLogos: string[]
  teamAvatars: string[]
  testimonialLogos: string[]
  videoTestimonialLogo: string
}

export const theme: Theme = {
  background: '#0a0a0a',
  foreground: '#ffffff',
  muted: '#7d7979',
  brand: '#fb64b6',
  accent: '#ff220e',
  indigo: 'rgb(79, 57, 246)',
  navCta: 'rgb(255, 69, 51)',
  link: 'rgb(0, 153, 255)',
  border: 'rgba(255, 255, 255, 0.1)',
  headingGradient:
    'linear-gradient(4082deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.5) 100%)',
  pricingGlow:
    'rgba(251, 100, 182, 0.73) 0px 0.796192px 0.796192px -0.9375px, rgba(251, 100, 182, 0.69) 0px 2.41451px 2.41451px -1.875px, rgba(251, 100, 182, 0.592) 0px 6.38265px 6.38265px -2.8125px, rgba(251, 100, 182, 0.25) 0px 20px 20px -3.75px',
}

export const assets: Assets = {
  navLogo: 'https://framerusercontent.com/images/tiLEfciLoRD4P3OQr8PxSDSxvyQ.svg',
  heroImage: 'https://framerusercontent.com/images/nEMbTwxuXlvP2DUsSmpSxURO8.jpg',
  clientLogos: [
    'https://framerusercontent.com/images/RNTD0tqSOUJ4Y0PMBzdzYEMvmA.svg',
    'https://framerusercontent.com/images/YKqNCkyXVXo4sQj7o8OYUoci0vI.svg',
    'https://framerusercontent.com/images/KQec3rNXnSO2ygZlVRq11h9cofM.svg',
    'https://framerusercontent.com/images/waBr2QEMz0Cd3wbZsFGyEzzV8Q.svg',
    'https://framerusercontent.com/images/0MNUi2mTOBgb5ojhEKBf1jZ8U.svg',
    'https://framerusercontent.com/images/jTK2yHo7ykyX6caBNOtw52aI.svg',
  ],
  teamAvatars: [
    'https://framerusercontent.com/images/PHX4kY3LgW2mICJjgaNxena0iug.png',
    'https://framerusercontent.com/images/oI5GOuGDLsC8YO0vgyDdEU9AUg.png',
    'https://framerusercontent.com/images/UhECRviLDIdcdWv1hMSO0B01Q.png',
    'https://framerusercontent.com/images/zXIgztBKnCBVngiY25GTvt2tsk.png',
    'https://framerusercontent.com/images/IwQdoj7zOsBCnQjVcH293fRgno.png',
    'https://framerusercontent.com/images/sBiQgMY2met2fUJKvqAdZLaOh54.png',
  ],
  testimonialLogos: [
    'https://framerusercontent.com/images/IFx45NaQCDmVvgL26WmENfp7FWI.png',
    'https://framerusercontent.com/images/hebcIvqLLfQg37gJKYLUMSNFOGY.png',
    'https://framerusercontent.com/images/nOYS8jxI9RBrYQ0Mmcvd5SoW22c.png',
    'https://framerusercontent.com/images/kTCmMDmgzUl4YnExIfB6MOaCyJc.png',
    'https://framerusercontent.com/images/2bTr3RzUp3yozlmkF9FWK2GXm14.png',
    'https://framerusercontent.com/images/CvrRVHNU81iMOTW8ZJget426xBM.png',
  ],
  videoTestimonialLogo: 'https://framerusercontent.com/images/jTK2yHo7ykyX6caBNOtw52aI.svg',
}

export const nav = {
  logo: assets.navLogo,
  items: [
    { label: 'Soluciones', href: '#solutions' },
    { label: 'Características', href: '#features' },
    { label: 'Nosotros', href: '#team' },
    { label: 'Precio', href: '#pricing' },
    { label: 'FAQs', href: '#faq' },
  ] as NavItem[],
  cta: { label: 'Contactar', href: '/contacto' },
  hasMobileMenu: true,
}

export const hero: HeroContent = {
  // TODO: no hay badge/chip literal en el DOM del hero; el chip visible es el stat con estrellas y avatares.
  badge: '+200 marcas escaladas',
  title: {
    text: 'Impulsa el crecimiento de tu marca con email marketing.',
  },
  subtitle:
    'En solo 4 días tendrás todo funcionando y en 31 días verás cómo aumentan tus ingresos.',
  primaryCta: { label: 'Contactar', href: '/contacto' },
  secondaryCta: { label: 'Ver servicios', href: '#solutions' },
  stats: { value: '+200', label: 'marcas escaladas' },
  avatars: [
    'https://framerusercontent.com/images/MyRRldqNaAbqEiT4o9EwdVWXsY.png',
    'https://framerusercontent.com/images/Q5y9QXuJHSLLfiWL0kjAEX5uz3o.png',
    'https://framerusercontent.com/images/1IvNRKHWftJ9DzL4XCRlwAZM.png',
    'https://framerusercontent.com/images/zmR5BdcDXzrlyFHgmDBtdwcx8w.png',
    'https://framerusercontent.com/images/FWic0vs2eEgBenXXWFqdRhoMI.png',
  ],
}

export const logos = {
  title: 'Más de 100 empresas alrededor del mundo confían en nosotros.',
  items: assets.clientLogos,
}

export const solutions: Solution[] = [
  // TODO: las tarjetas de Soluciones en el DOM solo tienen ícono (estrella) y título, sin descripción.
  { icon: 'star', title: 'Diseño Web', description: 'Diseños pensados para convertir visitantes en clientes.' },
  { icon: 'star', title: 'Wep App', description: 'Aplicaciones web funcionales que potencian tu negocio.' },
  { icon: 'star', title: 'Email Marketing', description: 'Campañas de email que generan ingresos sostenidos.' },
  { icon: 'star', title: 'Landing Page', description: 'Páginas de aterrizaje optimizadas para maximizar conversiones.' },
  { icon: 'star', title: 'Dashboard', description: 'Paneles de control claros para medir tu crecimiento.' },
]

export const features: Feature[] = [
  {
    icon: 'check',
    title: 'Recolectamos la información clave',
    description: 'Te pedimos solo lo esencial para aplicar nuestra estrategia.',
  },
  {
    icon: 'bolt',
    title: 'En 24 horas estamos listos para empezar',
    description: 'Ponemos en marcha nuestra estrategia en menos de 24 horas.',
  },
  {
    icon: 'gear',
    title: 'Automatizamos cada paso del proceso',
    description: 'En solo 31 días verás resultados sin mover un dedo.',
  },
]

export const team: TeamMember[] = [
  { name: 'Pablo Iglesias', role: 'CEO en Volt Growth', avatar: assets.teamAvatars[0] },
  { name: 'Emma Torres', role: 'Co-founder & CEO', avatar: assets.teamAvatars[1] },
  { name: 'Lucas Rivera', role: 'Creative Director', avatar: assets.teamAvatars[2] },
  { name: 'Daniela Herrera', role: 'Lead UX Designer', avatar: assets.teamAvatars[3] },
  { name: 'Andrés Gómez', role: 'Head of Development', avatar: assets.teamAvatars[4] },
  { name: 'Natalia Paredes', role: 'Content Manager', avatar: assets.teamAvatars[5] },
]

export const comparison = {
  title: '¿Por qué elegirnos?',
  otherTitle: 'Otras agencias',
  ourTitle: 'Volt Growth',
  items: [
    {
      other: 'Comunicación lenta y poco efectiva',
      ours: 'Comunicación constante, clara y proactiva',
    },
    {
      other: 'Limitación a un solo canal de marketing',
      ours: 'Estrategias multicanal para mayor impacto',
    },
    {
      other: 'Estrategias anticuadas sin resultados',
      ours: 'Soluciones personalizadas para cada negocio',
    },
    {
      other: 'Poca investigación del sector',
      ours: 'Conocimiento especializado en tu industria',
    },
    {
      other: 'Subcontratación de personal sin experiencia',
      ours: 'Más de 10 años de experiencia respaldan nuestro trabajo',
    },
  ],
}

const videoTestimonialUrl = 'https://www.loom.com/embed/f87043f6b52f43dab456b8270ff844a3'

export const videoTestimonials: VideoTestimonial[] = [
  // TODO: el DOM repite el mismo video Loom (f87043f6b52f43dab456b8270ff844a3) y el mismo cliente en las 3 tarjetas.
  {
    title: 'La mejor agencia con la que hemos trabajado',
    video: videoTestimonialUrl,
    name: 'Laura Fernández',
    role: 'Directora de Marketing en TechNova',
    logo: assets.videoTestimonialLogo,
  },
  {
    title: 'La mejor agencia con la que hemos trabajado',
    video: videoTestimonialUrl,
    name: 'Laura Fernández',
    role: 'Directora de Marketing en TechNova',
    logo: assets.videoTestimonialLogo,
  },
  {
    title: 'La mejor agencia con la que hemos trabajado',
    video: videoTestimonialUrl,
    name: 'Laura Fernández',
    role: 'Directora de Marketing en TechNova',
    logo: assets.videoTestimonialLogo,
  },
]

export const pricing = {
  title: 'Planes',
  toggle: {
    monthly: 'Planes mensuales',
    annual: 'Planes anuales',
    annualBadge: '20% off',
  },
  plans: [
    {
      name: 'Básico',
      tagline: 'Comienza tu viaje',
      price: 'Gratis',
      period: '',
      features: ['Acceso a herramientas', 'Soporte limitado', '1 licencia de usuario'],
      cta: { label: 'Empezar', href: '#' },
    },
    {
      name: 'Pro',
      tagline: 'Comienza tu viaje',
      price: '$17',
      period: '/ mes',
      badge: 'POPULAR',
      features: [
        'Todo en el Plan Básico',
        'Funciones IA',
        'Asistencia prioritaria',
        '5 licencias de usuario',
        'Análisis mejorados',
      ],
      cta: { label: 'Empezar', href: '#' },
    },
    {
      name: 'Enterprise',
      tagline: 'Comienza tu viaje',
      price: '$96',
      period: '/ mes',
      features: [
        'Todo en Pro Plan',
        'Acceso completo a todas las funciones de IA',
        'Asistencia 24/7',
        'Licencias de usuario ilimitadas',
        'Gestión de listas',
      ],
      cta: { label: 'Empezar', href: '#' },
    },
  ] as PricingPlan[],
}

export const testimonials: Testimonial[] = [
  {
    quote:
      '"Ellos entendieron exactamente lo que queríamos lograr. Su enfoque profesional y comprometido nos ayudó a llevar nuestro proyecto al siguiente nivel."',
    name: 'Lucía González',
    role: 'Cofundadora de GreenWave Startups',
    logo: assets.testimonialLogos[0],
  },
  {
    quote:
      '"Su equipo fue increíblemente receptivo y profesional. No solo entendieron lo que queríamos, sino que también nos ayudaron a alcanzar nuevos objetivos."',
    name: 'Andrés López',
    role: 'CEO de Visionary Labs',
    logo: assets.testimonialLogos[1],
  },
  {
    quote:
      '"El trabajo con su equipo fue impecable. Captaron nuestras ideas desde el principio y su apoyo fue clave para nuestro desarrollo."',
    name: 'Javier Ramírez',
    role: 'Gerente de Proyectos en Nova Solutions',
    logo: assets.testimonialLogos[2],
  },
  {
    quote:
      '"Desde el primer día, demostraron entender nuestra esencia. Gracias a su apoyo, hemos visto un crecimiento significativo en nuestro proyecto."',
    name: 'Paula Martínez',
    role: 'Responsable de Marketing en Bright Ideas Co.',
    logo: assets.testimonialLogos[3],
  },
  {
    quote:
      '"La experiencia de trabajar con ellos superó nuestras expectativas. Comprendieron nuestra visión y nos impulsaron a crecer de manera sostenida."',
    name: 'Diego Herrera',
    role: 'Jefe de Operaciones en Zenith Groupr of Colter',
    logo: assets.testimonialLogos[4],
  },
  {
    quote:
      '"Colaborar con ellos ha sido una experiencia excepcional. Supieron entender nuestra visión a la perfección y nos guiaron en el camino hacia el crecimiento."',
    name: 'Mariana Torres',
    role: 'Directora de Innovación en Altura Tech',
    logo: assets.testimonialLogos[5],
  },
]

export const faqs: FaqItem[] = [
  // TODO: el DOM solo tiene las preguntas, las respuestas fueron redactadas por nosotros.
  {
    question: '¿Qué servicios ofrece Volt Growth?',
    answer:
      'Nos especializamos en email marketing, diseño web, aplicaciones web, landing pages y dashboards. Cubrimos desde la estrategia inicial hasta la automatización completa de tus campañas.',
  },
  {
    question: '¿Cómo puede Volt Growth impulsar el crecimiento de tu marca?',
    answer:
      'Diseñamos estrategias multicanal basadas en datos para que tu marca llegue a más clientes. Combinamos diseño, marketing y automatización para acelerar tus ventas de forma sostenida.',
  },
  {
    question: '¿Volt Growth trabaja con empresas de todos los tamaños?',
    answer:
      'Sí. Desde emprendimientos que recién arrancan hasta grandes empresas con presencia online. Adaptamos nuestra estrategia y nuestro plan al tamaño y a los objetivos de cada negocio.',
  },
  {
    question: '¿Qué hace diferente a Volt Growth de otras agencias de marketing?',
    answer:
      'Nuestro equipo de primer nivel entrega resultados excepcionales con comunicación constante y proactiva. No subcontratamos personal sin experiencia y conocemos a fondo tu industria.',
  },
  {
    question: '¿Cuándo veré resultados con Volt Growth?',
    answer:
      'En solo 4 días tendrás todo funcionando y en 31 días verás cómo aumentan tus ingresos. Nuestra estrategia se nota desde las primeras 2 semanas de trabajo conjunto.',
  },
  {
    question: '¿Cómo inicio mi proyecto con Volt Growth?',
    answer:
      'Contactanos y te pedimos solo lo esencial para aplicar nuestra estrategia. En menos de 24 horas ponemos en marcha nuestro plan y en 31 días verás resultados sin mover un dedo.',
  },
]

export const cta: CtaContent = {
  title: {
    text: '¿Listo para llevar tu marca al siguiente nivel?',
  },
  subtitle:
    'Si buscas un crecimiento acelerado y sostenido en ventas y rentabilidad, llegaste al lugar indicado.',
  button: { label: 'Contactar', href: '/contacto' },
}

export const footer: FooterContent = {
  newsletter: {
    title: 'Únete a nuestra newsletter',
    description:
      'Suscríbete a nuestro newsletter y mantente al tanto de todas las novedades. Tranquilo, odiamos el spam tanto como tú.',
    placeholder: 'Dirección de correo',
    button: 'Notifícame',
  },
  columns: [
    {
      title: 'Secciones',
      links: [
        { label: '¿Cómo funcionamos?', href: '#features' },
        { label: 'Servicios', href: '#solutions' },
        { label: 'Nosotros', href: '#team' },
        { label: 'Precio', href: '#pricing' },
      ],
    },
    {
      title: 'Información',
      links: [
        { label: 'FAQs', href: '#faq' },
        { label: 'Contacto', href: '/contacto' },
        { label: 'Legal', href: '/legal' },
      ],
    },
  ],
  copyright: '© 2026 Volt Growth. Todos los derechos reservados.',
}

export const site = {
  name: 'Volt Growth',
  title: 'Volt Growth — Agencia de Email Marketing',
  description:
    'Agencia de email marketing y diseño web que impulsa el crecimiento de tu marca. En solo 4 días tendrás todo funcionando y en 31 días verás cómo aumentan tus ingresos.',
  url: 'https://voltgrowth.com',
}
