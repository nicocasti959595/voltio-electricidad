// =============================================================
//  CONTENIDO DE LA WEB — servicios, proceso, stats, FAQ, etc.
//  Todo editable para adaptar el sitio a cada cliente.
// =============================================================

export type IconName =
  | "wiring"
  | "panel"
  | "bolt"
  | "diagnose"
  | "bulb"
  | "ground"
  | "outlet"
  | "certificate";

export const services: {
  icon: IconName;
  title: string;
  desc: string;
  tags: string[];
}[] = [
  {
    icon: "wiring",
    title: "Instalaciones eléctricas",
    desc: "Instalación completa para casas, departamentos y obra nueva. Cañerías, cableado y bocas prolijas, dimensionadas para tu consumo real.",
    tags: ["Obra nueva", "Refacción"],
  },
  {
    icon: "panel",
    title: "Tableros y disyuntores",
    desc: "Armado y normalización de tableros. Disyuntor diferencial y térmicas que protegen tu casa ante fugas y sobrecargas.",
    tags: ["Disyuntor", "Térmicas"],
  },
  {
    icon: "bolt",
    title: "Urgencias eléctricas 24 hs",
    desc: "¿Te quedaste sin luz, saltó todo o sentís olor a quemado? Cortes, cortocircuitos y fallas. Vamos cuando lo necesites, también de noche.",
    tags: ["24 horas", "En el día"],
  },
  {
    icon: "diagnose",
    title: "Detección de fallas",
    desc: "Cortocircuitos, consumos raros, llaves que saltan o tomas que no andan. Diagnóstico preciso con instrumental y solución de raíz.",
    tags: ["Diagnóstico", "Medición"],
  },
  {
    icon: "bulb",
    title: "Iluminación y artefactos",
    desc: "LED, spots, dimmers, sensores y luces de exterior. Diseño de iluminación que rinde más y te baja la factura de luz.",
    tags: ["LED", "Bajo consumo"],
  },
  {
    icon: "ground",
    title: "Puesta a tierra",
    desc: "Colocación y medición de jabalina y puesta a tierra según norma. La protección clave para tu familia y tus equipos.",
    tags: ["Jabalina", "Medición"],
  },
  {
    icon: "outlet",
    title: "Tomas, llaves y cableado",
    desc: "Agregamos bocas, tomacorrientes y llaves donde los necesitás. Cableado nuevo, prolijo y sin paredes rotas de más.",
    tags: ["Más tomas", "Sin roturas"],
  },
  {
    icon: "certificate",
    title: "Normalización y certificado",
    desc: "Adecuamos tu instalación al reglamento AEA y dejamos todo apto y certificable para la distribuidora (Edesur / Edenor).",
    tags: ["Reglamento AEA", "Apto distribuidora"],
  },
];

export const whyUs: {
  icon:
    | "tools"
    | "bolt"
    | "wallet"
    | "badge"
    | "shield"
    | "map";
  title: string;
  desc: string;
}[] = [
  { icon: "tools", title: "Electricistas matriculados", desc: "Matrícula habilitante y trabajos según el reglamento AEA. Seguros, prolijos y certificables." },
  { icon: "bolt", title: "Urgencias 24 horas", desc: "¿Te quedaste sin luz o saltó todo? Te atendemos cuando lo necesites, también de noche y fines de semana." },
  { icon: "wallet", title: "Presupuesto sin cargo", desc: "Revisamos, te explicamos la falla y te pasamos el precio antes de empezar. Sin sorpresas." },
  { icon: "badge", title: "Trabajo garantizado", desc: "Instalaciones y reparaciones con garantía por escrito sobre la mano de obra y los materiales." },
  { icon: "shield", title: "Seguridad ante todo", desc: "Disyuntor, puesta a tierra y térmicas en norma. Protegemos tu casa, tu familia y tus equipos." },
  { icon: "map", title: "Cobertura total", desc: "CABA y Gran Buenos Aires. Decinos dónde estás y coordinamos la visita del electricista." },
];

export const steps: { n: string; title: string; desc: string }[] = [
  { n: "01", title: "Nos contás", desc: "Por WhatsApp o teléfono, contanos qué falla tenés o qué querés instalar. Te asesoramos al instante." },
  { n: "02", title: "Visita y diagnóstico", desc: "Coordinamos día y horario. El electricista revisa la instalación y detecta exactamente qué pasa." },
  { n: "03", title: "Presupuesto claro", desc: "Te explicamos la solución y te pasamos el precio final sin cargo. Vos decidís y arrancamos." },
  { n: "04", title: "Listo y seguro", desc: "Dejamos todo funcionando y en norma, con la garantía del trabajo por escrito." },
];

export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 15, suffix: "+", label: "años de oficio" },
  { value: 8000, suffix: "+", label: "trabajos realizados" },
  { value: 4.9, suffix: "★", label: "valoración de clientes" },
  { value: 24, suffix: "/7", label: "urgencias eléctricas" },
];

export const testimonials: { name: string; area: string; text: string }[] = [
  {
    name: "Romina A.",
    area: "Caballito",
    text: "Se me cortó la luz en media casa un domingo a la noche y vinieron en menos de una hora. Detectaron el cortocircuito y lo solucionaron al toque. Salvadores.",
  },
  {
    name: "Gastón P.",
    area: "Vicente López",
    text: "Me normalizaron todo el tablero, pusieron disyuntor y térmicas nuevas. Quedó prolijísimo y por fin dejó de saltar la llave. Muy profesionales.",
  },
  {
    name: "Carla M.",
    area: "Palermo",
    text: "Cablearon de cero el departamento en la refacción. Trabajo impecable, sin romper de más y explicándome todo. El presupuesto fue clarísimo desde el día uno.",
  },
  {
    name: "Diego F.",
    area: "Lomas de Zamora",
    text: "Hicieron la instalación eléctrica completa del local y me dejaron todo apto para habilitar. Puesta a tierra, medición y certificado. Recomendadísimos.",
  },
  {
    name: "Lucía R.",
    area: "Belgrano",
    text: "Les pedí más tomas y mejor iluminación LED en toda la casa. Rápidos, prolijos y me avisaban el horario de llegada por WhatsApp. Los vuelvo a llamar sin dudar.",
  },
  {
    name: "Hernán T.",
    area: "San Isidro",
    text: "Sentíamos olor a quemado en una toma y no sabíamos qué era. Vinieron el mismo día, encontraron el problema y lo dejaron seguro. Tranquilidad total.",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "¿Los electricistas están matriculados?",
    a: "Sí. Trabajamos con electricistas matriculados y realizamos las instalaciones según el reglamento de la AEA (Asociación Electrotécnica Argentina). Eso garantiza un trabajo seguro, prolijo y certificable ante la distribuidora.",
  },
  {
    q: "¿El presupuesto tiene costo?",
    a: "No. El presupuesto es sin cargo. Coordinamos la visita, el electricista revisa la instalación, te explica el problema y te pasa el precio final antes de empezar. Recién ahí decidís.",
  },
  {
    q: "¿Atienden urgencias fuera de horario?",
    a: "Sí. Tenemos atención de urgencias eléctricas las 24 horas, también de noche y los fines de semana. Si te quedaste sin luz, saltó todo o sentís olor a quemado, escribinos por WhatsApp o llamanos y coordinamos lo antes posible.",
  },
  {
    q: "¿Qué hago si me quedé sin luz o se corta la térmica?",
    a: "Si la llave térmica o el disyuntor saltan y vuelven a saltar, no insistas en subirlos: suele indicar una falla. Desconectá lo último que enchufaste y escribinos. Vamos, medimos y encontramos la causa real para que no se repita.",
  },
  {
    q: "¿Hacen puesta a tierra y la dejan certificada?",
    a: "Sí. Colocamos jabalina y puesta a tierra, medimos la resistencia y verificamos el funcionamiento del disyuntor diferencial. Es la protección más importante de la instalación y te entregamos el trabajo documentado.",
  },
  {
    q: "¿Pueden normalizar la instalación para habilitar un local?",
    a: "Sí. Adecuamos la instalación al reglamento AEA, armamos o normalizamos el tablero y dejamos todo apto y certificable para la distribuidora (Edesur o Edenor) y para la habilitación comercial.",
  },
  {
    q: "¿Los trabajos tienen garantía?",
    a: "Sí. Todas nuestras instalaciones y reparaciones cuentan con garantía por escrito sobre la mano de obra y los materiales utilizados, según el tipo de trabajo realizado.",
  },
  {
    q: "¿Qué zonas cubren?",
    a: "Toda la Ciudad Autónoma de Buenos Aires y el Gran Buenos Aires (zona norte, oeste y sur). Si tenés dudas sobre tu zona, escribinos y te confirmamos al instante.",
  },
];

export const zones = [
  "Palermo", "Belgrano", "Caballito", "Recoleta", "Villa del Parque", "Villa Crespo",
  "Flores", "Núñez", "Devoto", "Villa Urquiza", "Saavedra", "Colegiales",
  "Vicente López", "San Isidro", "Olivos", "Martínez", "Avellaneda",
  "Lanús", "Lomas de Zamora", "Quilmes", "Morón", "San Justo", "Ramos Mejía", "Tigre",
];
