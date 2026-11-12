/**
 * Adsterra Native Banner slot after Quick Answer.
 *
 * Left empty on purpose. analytics.gaId in site.config.ts is an empty string.
 * Do not paste a measurement id, zone id, or script host from another site.
 * Adult and sensitive categories stay off. The 404 page does not render a slot.
 */
export type AdSlotConfig = {
  id: string;
  format: string;
  /** Full script URL. When set, used instead of `${invokeBase}/${id}/invoke.js`. */
  scriptSrc?: string;
  invokeBase?: string;
  containerPrefix?: string;
};

const slots = {
  afterQuickAnswer: {
    id: '',
    format: 'native-banner',
    scriptSrc: '',
  },
} as const satisfies Record<string, AdSlotConfig>;

export const adsConfig = {
  network: 'adsterra' as const,
  enabled: false,
  invokeBase: '',
  /** Site-wide full script URL. A slot `scriptSrc` overrides this. */
  scriptSrc: '',
  containerPrefix: 'container-',
  slots,
};

export type AdSlotName = keyof typeof slots;

export function resolveAdPlacement(name: AdSlotName) {
  const slot: AdSlotConfig = slots[name];
  const invokeBase = (slot.invokeBase ?? adsConfig.invokeBase).replace(/\/$/, '');
  const containerPrefix = slot.containerPrefix ?? adsConfig.containerPrefix;
  const id = slot.id.trim();
  const explicitSrc = (slot.scriptSrc ?? adsConfig.scriptSrc).trim();
  const scriptSrc = explicitSrc || (id && invokeBase ? `${invokeBase}/${id}/invoke.js` : '');
  return {
    id,
    format: slot.format,
    invokeBase,
    containerId: `${containerPrefix}${id}`,
    scriptSrc,
    active:
      adsConfig.enabled &&
      id.length > 0 &&
      !id.startsWith('ADSTERRA_') &&
      scriptSrc.length > 0,
  };
}
