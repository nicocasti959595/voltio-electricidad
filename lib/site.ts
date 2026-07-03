// =============================================================
//  DATOS DEL NEGOCIO — editá todo acá para adaptar el sitio.
//  Marca, teléfono, dirección y reseñas son FICTICIOS (demo).
// =============================================================

export const site = {
  name: "Voltio",
  legalName: "Voltio Servicios Eléctricos",
  brandFull: "Voltio Electricidad",
  tagline: "Electricistas matriculados",
  claim: "Instalaciones, reparaciones y urgencias eléctricas. Dejamos tu casa o comercio con la energía segura y en norma, sin riesgos.",

  // Contacto (placeholders — reemplazar por los reales)
  phoneDisplay: "+54 9 11 5555-0000",
  phoneRaw: "+5491155550000",
  whatsappRaw: "5491155550000", // sin + ni espacios, para wa.me
  email: "contacto@voltioelectricidad.com.ar",

  // Ubicación / cobertura
  city: "Ciudad Autónoma de Buenos Aires",
  region: "CABA y Gran Buenos Aires",
  addressStreet: "Av. Nazca 1240",
  addressLocality: "Villa del Parque, CABA",
  addressRegion: "Buenos Aires",
  postalCode: "C1417",
  country: "AR",
  geo: { lat: -34.6037, lng: -58.4892 },

  hours: "Lun a Sáb de 8 a 20 hs · Urgencias 24 hs",
  responseTime: "el mismo día",

  // Redes (placeholders)
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",

  // SEO
  url: "https://demo-electricista-v1.ideawebx.com",
  locale: "es_AR",
};

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsappRaw}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

export const telLink = `tel:${site.phoneRaw}`;

export const WA_DEFAULT_MSG =
  "Hola Voltio 👋 Quiero una consulta sobre un trabajo eléctrico. ¿Me ayudan?";

export const WA_QUOTE_MSG =
  "Hola Voltio 👋 Quiero un presupuesto sin cargo. Les cuento qué necesito:";

export const WA_URGENT_MSG =
  "⚡ Tengo una urgencia eléctrica y necesito atención lo antes posible. Mi zona es:";
