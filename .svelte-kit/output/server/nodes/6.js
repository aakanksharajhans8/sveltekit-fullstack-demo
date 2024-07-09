

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/raw-wallet/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DXJk8tW6.js","_app/immutable/chunks/scheduler.Bb3v1ohj.js","_app/immutable/chunks/index.PYyVCeOJ.js"];
export const stylesheets = [];
export const fonts = [];
