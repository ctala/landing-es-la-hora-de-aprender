// Única fuente del enlace y del llamado a la comunidad de Cristian (Cágala, Aprende, Repite) en este sitio.
//
// CAR está cerrada a nuevos miembros desde el 27-oct-2026: todo enlace público va por el acortador
// go.aprenderepite.com a la lista de espera, y el gancho es el Kit «tu mano derecha con IA».
// Nunca se enlaza directo a skool.com/cagala-aprende-repite ni se dice «gratis»
// (lo bloquea scripts/check-contenido.mjs).
//
// El destino del enlace se cambia en el Worker (Estrategias/operacion/go-links/links.json), no acá.
// El texto sí vive acá: cuando CAR reabra, se reescribe este archivo y las notas de los episodios.
// Norma del texto: Estrategias/.claude/skills/_shared/CTA_COMUNIDAD_STANDARD.md.

const GO_BASE = 'https://go.aprenderepite.com';

/** Slug de links.json que usa este sitio. La pieza va en `utm_content`; el resto lo pone el Worker. */
const SLUG = 'podcast';

/**
 * Enlace a la lista de espera. `pieza` identifica la página de origen:
 * `guia-<slug>`, `home` o `ep<NN>` (minúsculas, números y guiones, hasta 60 caracteres).
 */
export function enlaceListaDeEspera(pieza: string): string {
  if (!/^[a-z0-9-]{1,60}$/.test(pieza)) {
    throw new Error(`comunidad.ts: pieza inválida para utm_content: «${pieza}»`);
  }
  return `${GO_BASE}/${SLUG}?utm_content=${pieza}`;
}

const KIT =
  'Dirigir tu negocio te come el día. Recibe el Kit «tu mano derecha con IA»: un video de 11 minutos, ' +
  'una ficha para completar y un tutorial para dejar a tu primer agente trabajando.';

/** Bloque de cierre de cada guía. */
export const CTA_KIT = {
  titulo: 'Tu mano derecha con IA',
  texto: `${KIT} Cágala, Aprende, Repite, la comunidad de Cristian Tala, está cerrada por ahora; al anotarte, te avisamos cuando abra.`,
  boton: 'Quiero el Kit →',
};

/** Tarjeta de la comunidad de Cristian en la portada (el nombre de la comunidad va en el título de la tarjeta). */
export const CTA_KIT_PORTADA = {
  texto: `${KIT} La comunidad está cerrada por ahora; al anotarte, te avisamos cuando abra.`,
  boton: 'Quiero el Kit →',
};
